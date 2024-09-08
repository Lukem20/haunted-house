import { 
    DirectionalLight, 
    AmbientLight, 
    PointLight, 
} from 'three';
import { modelNormalMatrix } from 'three/webgpu';

function createLights() {
    const ambientLight = new AmbientLight('#b9d5ff', 0.25);
    const moonLight = new DirectionalLight('#86cdff', 0.75);
    const doorLight = new PointLight('#ff7d46', 2, 7)

    moonLight.position.set(3, 5, -4);
    doorLight.position.set(0, 2.2, 2.7);

    moonLight.castShadow = true;
    doorLight.castShadow = true;

    moonLight.shadow.mapSize.width = 256;
    moonLight.shadow.mapSize.height = 256;
    moonLight.shadow.camera.far = 20;
    moonLight.shadow.camera.near = 1;
    moonLight.shadow.camera.top = 8;
    moonLight.shadow.camera.right = 8;
    moonLight.shadow.camera.bottom = -8;
    moonLight.shadow.camera.left = -8;

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