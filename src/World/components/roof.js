import { 
    Mesh,
    ConeGeometry,
    MeshStandardMaterial,
    RepeatWrapping,
    SRGBColorSpace
} from 'three';

function createRoof (textureLoader) {
    function createMaterial() {
        const roofColorTexture = textureLoader.load('./assets/textures/roof/roof-diff.webp');
        const roofARMTexture = textureLoader.load('./assets/textures/roof/roof-arm.webp');
        const roofNormalTexture = textureLoader.load('./assets/textures/roof/roof-normal.webp');
        roofColorTexture.colorSpace = SRGBColorSpace;

        roofColorTexture.repeat.set(4, 1);
        roofARMTexture.repeat.set(4, 1);
        roofNormalTexture.repeat.set(4, 1);

        roofColorTexture.wrapS = RepeatWrapping;
        roofARMTexture.wrapS = RepeatWrapping;
        roofNormalTexture.wrapS = RepeatWrapping;

        const material = new MeshStandardMaterial({
            map: roofColorTexture,
            aoMap: roofARMTexture,
            roughnessMap: roofARMTexture,
            metalnessMap: roofARMTexture,
            normalMap: roofNormalTexture,
        });

        return material;
    }

    const material = createMaterial();
    const geometry = new ConeGeometry(3.5, 1, 4);
    const roof = new Mesh(
        geometry,
        material
    );

    roof.rotation.y = Math.PI / 4;
    roof.position.y = 3;

    return roof;
}

export { createRoof };