import { 
    SphereGeometry,
    MeshStandardMaterial,
    Group,
    Mesh,
    RepeatWrapping,
} from 'three';

function createBushes(textureLoader) {
    function createMaterial() {
        const bushColorTexture = textureLoader.load('./assets/textures/bush/bush-diff.webp');
        const bushNormalTexture = textureLoader.load('./assets/textures/bush/bush-normal.webp');
        const bushARMTexture = textureLoader.load('./assets/textures/bush/bush-arm.webp');

        bushColorTexture.repeat.set(2, 1);
        bushNormalTexture.repeat.set(2, 1);
        bushARMTexture.repeat.set(2, 1);

        bushColorTexture.wrapS = RepeatWrapping;
        bushNormalTexture.wrapS = RepeatWrapping;
        bushARMTexture.wrapS = RepeatWrapping;

        const material = new MeshStandardMaterial({
            color: '#ccffcc',
            map: bushColorTexture,
            aoMap: bushARMTexture,
            roughnessMap: bushARMTexture,
            metalnessMap: bushARMTexture,
            normalMap: bushNormalTexture
        });

        return material;
    }

    const bushes = new Group();
    const bushGeometry = new SphereGeometry(1, 16, 16);
    const bushMaterial = createMaterial();

    const bush1 = new Mesh(bushGeometry, bushMaterial);
    bush1.position.set(1.2, 0.2, 2.2);
    bush1.scale.set(0.5, 0.5, 0.5);
    bush1.rotation.x = -0.75;

    const bush2 = new Mesh(bushGeometry, bushMaterial);
    bush2.position.set(1.8, 0.1, 2.1);
    bush2.scale.set(0.25, 0.25, 0.25);
    bush2.rotation.x = -0.75;

    const bush3 = new Mesh(bushGeometry, bushMaterial);
    bush3.position.set(-1.2, 0.1, 2.25);
    bush3.scale.set(0.4, 0.4, 0.4);
    bush3.rotation.x = -0.75;

    const bush4 = new Mesh(bushGeometry, bushMaterial);
    bush4.position.set(-1.6, 0.05, 2.7);
    bush4.scale.set(0.15, 0.15, 0.15);
    bush4.rotation.x = -0.75;

    bush1.castShadow = true;
    bush2.castShadow = true;
    bush3.castShadow = true;
    bush4.castShadow = true;

    bushes.add(bush1, bush2, bush3, bush4);

    return bushes;
}

export { createBushes };