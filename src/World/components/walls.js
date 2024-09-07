import { 
    BoxGeometry, 
    MeshStandardMaterial, 
    Mesh,
    RepeatWrapping,
} from 'three';

function createWalls (textureLoader) {
    function createMaterial () {
        const wallARMTexture = textureLoader.load('/assets/textures/walls/wall-arm.webp');
        const wallNormalTexture = textureLoader.load('/assets/textures/walls/wall-normal.webp');
        const wallColorTexture = textureLoader.load('/assets/textures/walls/wall-diff.webp');
        const wallDispalcementTexture = textureLoader.load('/assets/textures/walls/wall-disp.webp');

        wallColorTexture.repeat.set(3, 3);
        wallARMTexture.repeat.set(3, 3);
        wallNormalTexture.repeat.set(3, 3);
        wallDispalcementTexture.repeat.set(3, 3);

        wallColorTexture.wrapS = RepeatWrapping;
        wallARMTexture.wrapS = RepeatWrapping;
        wallNormalTexture.wrapS = RepeatWrapping;
        wallDispalcementTexture.wrapS = RepeatWrapping;

        wallColorTexture.wrapT = RepeatWrapping;
        wallARMTexture.wrapT = RepeatWrapping;
        wallNormalTexture.wrapT = RepeatWrapping;
        wallDispalcementTexture.wrapT = RepeatWrapping;
        
        // Create a material using the loaded texture as a color map.
        const material = new MeshStandardMaterial({ 
            map: wallColorTexture,
            aoMap: wallARMTexture,
            roughnessMap: wallARMTexture,
            metalnessMap: wallARMTexture,
            normalMap: wallNormalTexture,
            displacementMap: wallDispalcementTexture,
            displacementScale: 0.5,
            displacementBias: -0.38,
        });

        return material;
    }
    
    const material = createMaterial();
    const geometry = new BoxGeometry(4, 2.5, 4);
    const walls = new Mesh(geometry, material);
    walls.position.y = 2.5 / 2;
    walls.castShadow = true;
    
    return walls;
}

export { createWalls }