import {
    Group,
    BoxGeometry,
    Mesh,
    MeshStandardMaterial,
} from 'three';

function createGraves() {
    function createMaterial() {

    }
    
    const graves = new Group();
    const graveGeometry = new BoxGeometry(0.6, 0.8, 0.2);
    const graveMaterial = new MeshStandardMaterial({ color: '#b2b6b1'})

    for (let i = 0; i < 30; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 3 + Math.random() * 4.25;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;

        const grave = new Mesh(graveGeometry, graveMaterial);
        grave.position.set(x, Math.random() * 0.4, z);
        grave.rotation.x = (Math.random() - 0.5) * 0.4;
        grave.rotation.y = (Math.random() - 0.5) * 0.4;
        grave.rotation.z = (Math.random() - 0.5) / 3;
        grave.castShadow = true;
        graves.add(grave);
    }

    return graves;
}

export { createGraves };