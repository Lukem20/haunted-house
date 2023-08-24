import {
    Mesh,
    PlaneGeometry,
    MeshStandardMaterial,
    TextureLoader,
} from 'three';

function createDoor() {
    function createMaterial () {
        // Create and texture loader and load the texture
        const textureLoader = new TextureLoader();
        const textureBaseColor = textureLoader.load('/assets/textures/woodendoor/color.jpg');
        const textureNormalMap = textureLoader.load('/assets/textures/woodendoor/normal.jpg');
        const textureHeightMap = textureLoader.load('/assets/textures/woodendoor/height.jpg');
        const textureRoughessMap = textureLoader.load('/assets/textures/woodendoor/roughness.jpg');
        const textureAmbientOcclusionMap = textureLoader.load('/assets/textures/woodendoor/ambientOcclusion.jpg');
        const textureMetallic = textureLoader.load('/assets/textures/woodendoor/metalness.jpg');
        const textureAlpha = textureLoader.load('/assets/textures/woodendoor/alpha.jpg')

        // Create a material using the loaded texture as a color map.
        const material = new MeshStandardMaterial({ 
            map: textureBaseColor,
            normalMap: textureNormalMap,
            displacementMap: textureHeightMap,
            displacementScale: 0.1,
            roughnessMap: textureRoughessMap,
            aoMap: textureAmbientOcclusionMap,
            aoMapIntensity: 1,
            metalnessMap: textureMetallic,
            alphaMap: textureAlpha,
            transparent: true,
        });

        return material;
    }

    const material = createMaterial();

    const door = new Mesh(
        new PlaneGeometry(2.2, 2.2, 100, 100),
        material
    );
    door.position.z = 2 + 0.01;
    door.position.y = 1;

    return door;
}

export { createDoor };