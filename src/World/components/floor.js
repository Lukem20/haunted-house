import { 
    PlaneGeometry, 
    MeshStandardMaterial, 
    Mesh,
    RepeatWrapping,
    SRGBColorSpace,
} from 'three';

function createFloor (textureLoader) {
    function createMaterial () {
        const floorAlphaTexture = textureLoader.load('./assets/textures/floor/alpha.webp');
        const floorColorTexture = textureLoader.load('./assets/textures/floor/floor-diff.webp');
        const floorARMTexture = textureLoader.load('./assets/textures/floor/floor-arm.webp');
        const floorNormalTexture = textureLoader.load('./assets/textures/floor/floor-normal.webp');
        const floorDisplacementTexture = textureLoader.load('./assets/textures/floor/floor-disp.webp');
        
        floorColorTexture.colorSpace = SRGBColorSpace;

        floorColorTexture.repeat.set(8, 8);
        floorARMTexture.repeat.set(8, 8);
        floorNormalTexture.repeat.set(8, 8);
        floorDisplacementTexture.repeat.set(8, 8);

        floorColorTexture.wrapS = RepeatWrapping;
        floorARMTexture.wrapS = RepeatWrapping;
        floorNormalTexture.wrapS = RepeatWrapping;
        floorDisplacementTexture.wrapS = RepeatWrapping;

        floorColorTexture.wrapT = RepeatWrapping;
        floorARMTexture.wrapT = RepeatWrapping;
        floorNormalTexture.wrapT = RepeatWrapping;
        floorDisplacementTexture.wrapT = RepeatWrapping;
        
        const material = new MeshStandardMaterial({ 
            alphaMap: floorAlphaTexture,
            transparent: true,
            map: floorColorTexture,
            aoMap: floorARMTexture,
            roughnessMap: floorARMTexture,
            metalnessMap: floorARMTexture,
            normalMap: floorNormalTexture,
            displacementMap: floorDisplacementTexture,
            displacementScale: 0.75,
            displacementBias: -0.25,
        });

        return material;
    }

    const material = createMaterial();
    const geometry = new PlaneGeometry(20, 20, 100, 100);
    const floor = new Mesh(geometry, material);
    floor.rotation.x = - Math.PI * 0.5;
    floor.position.y = 0;
    floor.receiveShadow = true;

    return floor;
}

export { createFloor };