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

    return { 
        moonLight, 
        ambientLight,
        doorLight,
    };
}

export { createLights };