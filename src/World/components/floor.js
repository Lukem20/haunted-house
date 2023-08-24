import { 
    PlaneGeometry, 
    MeshStandardMaterial, 
    Mesh,
    TextureLoader,
    RepeatWrapping,
} from 'three';

function createFloor () {
    function createMaterial () {
        // Create and texture loader and load the texture
        const textureLoader = new TextureLoader();
        const grassColorTexture = textureLoader.load('/assets/textures/grass/color.jpg');
        const grassNormalTexture = textureLoader.load('/assets/textures/grass/normal.jpg');
        const grassRoughnessMap = textureLoader.load('/assets/textures/grass/roughness.jpg');
        const grassAmbientOcclusionMap = textureLoader.load('/assets/textures/grass/ao.jpg');

        // Texture repeat and wrapping
        grassColorTexture.repeat.set(8, 8);
        grassAmbientOcclusionMap.repeat.set(8, 8);
        grassNormalTexture.repeat.set(8, 8);
        grassRoughnessMap.repeat.set(8, 8);
        grassColorTexture.wrapS = RepeatWrapping;
        grassAmbientOcclusionMap.wrapS = RepeatWrapping;
        grassNormalTexture.wrapS = RepeatWrapping;
        grassRoughnessMap.wrapS = RepeatWrapping;
        grassColorTexture.wrapT = RepeatWrapping;
        grassAmbientOcclusionMap.wrapT = RepeatWrapping;
        grassNormalTexture.wrapT = RepeatWrapping;
        grassRoughnessMap.wrapT = RepeatWrapping;




        const material = new MeshStandardMaterial({ 
            map: grassColorTexture,
            normalMap: grassNormalTexture,
            roughnessMap: grassRoughnessMap,
            aoMap: grassAmbientOcclusionMap,
        });

        return material;
    }


    const material = createMaterial();
    const geometry = new PlaneGeometry(20, 20);
    const floor = new Mesh(geometry, material);
    floor.rotation.x = - Math.PI * 0.5;
    floor.position.y = 0;
    floor.receiveShadow = true;
    
    return floor;
}

export { createFloor };