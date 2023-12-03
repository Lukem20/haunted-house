import {
    BufferGeometry,
    BufferAttribute,
    PointsMaterial,
    Points,
    AdditiveBlending,
    TextureLoader,
} from 'three';

function createParticles() {
    const textureLoader = new TextureLoader();
    const particleTexture = textureLoader.load('/assets/textures/particles/2.png');
    const particlesGeometry = new BufferGeometry();
    const particlesMaterial = new PointsMaterial({
        size: 0.1,
        sizeAttenuation: true,
        transparent: true,
        alphaMap: particleTexture,
        depthWrite: false,
        blending: AdditiveBlending,
        vertexColors: true,
        opacity: 0.25,
    });


    const count = 500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 20;
        colors[i] = Math.random();
    }

    for (let i = 1; i < count * 3; i += 3) {
        positions[i] = Math.abs(positions[i]);
    }

    particlesGeometry.setAttribute(
        'position', new BufferAttribute(positions, 3)
    );

    particlesGeometry.setAttribute(
        'color', new BufferAttribute(colors, 3)
    );

    const particles = new Points(particlesGeometry, particlesMaterial);

    particles.tick = (delta) => {

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const x = particlesGeometry.attributes.position.array[i3];
            particlesGeometry.attributes.position.array[i3 + 1] = Math.sin(delta + x) + 1.1;
        }
        particlesGeometry.attributes.position.needsUpdate = true;
    }

    return particles;
}

export { createParticles };