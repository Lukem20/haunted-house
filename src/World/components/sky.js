import { Sky } from 'three/addons/objects/Sky.js';

function createSky() {
    const sky = new Sky();

    sky.material.uniforms['turbidity'].value = 10;
    sky.material.uniforms['rayleigh'].value = 3;
    sky.material.uniforms['mieCoefficient'].value = 0.1;
    sky.material.uniforms['mieDirectionalG'].value = 0.95;
    sky.material.uniforms['sunPosition'].value.set(0.3, -0.038, -0.95);

    sky.scale.set(100, 100, 100);
    
    return sky;
}

export { createSky };