import { 
    BoxGeometry, 
    MeshStandardMaterial, 
    Mesh,
    TextureLoader,
} from 'three';

function createWalls () {
    function createMaterial () {
        // Create and texture loader and load the texture
        const textureLoader = new TextureLoader();
        const bricksColorTexture = textureLoader.load('/assets/textures/bricks/color.jpg');
        const bricksNormalTexture = textureLoader.load('/assets/textures/bricks/normal.jpg');
        const bricksRoughnessMap = textureLoader.load('/assets/textures/bricks/roughness.jpg');
        const textureAmbientOcclusionMap = textureLoader.load('/assets/textures/bricks/ao.jpg');

        // Create a material using the loaded texture as a color map.
        const material = new MeshStandardMaterial({ 
            map: bricksColorTexture,
            normalMap: bricksNormalTexture,
            roughnessMap: bricksRoughnessMap,
            aoMap: textureAmbientOcclusionMap,
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