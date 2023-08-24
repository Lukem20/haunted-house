import { PerspectiveCamera } from 'three';

function createCamera() {
    const camera = new PerspectiveCamera(
        75, 1, 0.1, 100
    );

    camera.position.x = 4;
    camera.position.y = 2;
    camera.position.z = 5;


    return camera;
}

export { createCamera }