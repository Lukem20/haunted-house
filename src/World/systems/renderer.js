import { 
    WebGLRenderer,
    LinearSRGBColorSpace,
    PCFSoftShadowMap,
} from 'three';

function createRenderer() {
    const renderer = new WebGLRenderer({ 
        antialias: true,  
    });
    renderer.outputColorSpace = LinearSRGBColorSpace;
    renderer.setClearColor('#262837');
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;

    return renderer;
}

export { createRenderer }