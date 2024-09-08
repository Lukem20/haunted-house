import {
    Group,
    BoxGeometry,
    Mesh,
    MeshStandardMaterial,
    RepeatWrapping,
} from 'three';

function createGraves(textureLoader) {
    function createMaterial() {
        const graveColorTexture = textureLoader.load('./assets/textures/grave/grave-diff.webp');
        const graveARMTexture = textureLoader.load('./assets/textures/grave/grave-arm.webp');
        const graveNormalTexture = textureLoader.load('./assets/textures/grave/grave-normal.webp');

        graveColorTexture.wrapS = RepeatWrapping;
        graveARMTexture.wrapS = RepeatWrapping;
        graveNormalTexture.wrapS = RepeatWrapping;

        graveColorTexture.repeat.set(0.3, 0.4);
        graveARMTexture.repeat.set(0.3, 0.4);
        graveNormalTexture.repeat.set(0.3, 0.4);

        const material = new MeshStandardMaterial({
            color: '#a3a3a3',
            map: graveColorTexture,
            aoMap: graveARMTexture,
            metalnessMap: graveARMTexture,
            normalMap: graveNormalTexture,
        });

        return material;
    }

    const graves = new Group();
    const graveGeometry = new BoxGeometry(0.6, 0.8, 0.2);
    const graveMaterial = createMaterial();

    for (let i = 0; i < 30; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 3 + Math.random() * 4.25;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;

        const grave = new Mesh(graveGeometry, graveMaterial);
        grave.position.set(x, Math.random() * 0.4, z);
        grave.rotation.x = (Math.random() - 0.5) * 0.4;
        grave.rotation.y = (Math.random() - 0.5) * 0.4;
        grave.rotation.z = (Math.random() - 0.5) / 3;
        grave.castShadow = true;
        grave.receiveShadow = true;
        graves.add(grave);
    }

    return graves;
}

export { createGraves };