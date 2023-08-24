import { 
    DirectionalLight, 
    AmbientLight, 
    PointLight, 
} from 'three';

function createLights() {
    const ambientLight = new AmbientLight('#b9d5ff', 0.12);
    const moonLight = new DirectionalLight('#b9d5ff', 0.12);
    const doorLight = new PointLight('#ff7d46', 1, 7)

    moonLight.position.set(4, 5, - 2);
    doorLight.position.set(0, 2.2, 2.7);

    moonLight.castShadow = true;
    doorLight.castShadow = true;

    moonLight.shadow.mapSize.width = 256;
    moonLight.shadow.mapSize.height = 256;
    moonLight.shadow.camera.far = 15;

    doorLight.shadow.mapSize.width = 256;
    doorLight.shadow.mapSize.height = 256;
    doorLight.shadow.camera.far = 7;

    return { 
        moonLight, 
        ambientLight,
        doorLight,
    };
}

export { createLights };