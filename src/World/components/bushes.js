import { 
    SphereGeometry,
    MeshStandardMaterial,
    Group,
    Mesh,
} from 'three';

function createBushes() {
    const bushes = new Group();
    const bushGeometry = new SphereGeometry(1, 16, 16);
    const bushMaterial = new MeshStandardMaterial({ color: '#89c854' })

    const bush1 = new Mesh(bushGeometry, bushMaterial);
    bush1.position.set(1.2, 0.2, 2.2);
    bush1.scale.set(0.5, 0.5, 0.5);

    const bush2 = new Mesh(bushGeometry, bushMaterial);
    bush2.position.set(1.8, 0.1, 2.1);
    bush2.scale.set(0.25, 0.25, 0.25);

    const bush3 = new Mesh(bushGeometry, bushMaterial);
    bush3.position.set(-1, 0.1, 2.2);
    bush3.scale.set(0.4, 0.4, 0.4);

    const bush4 = new Mesh(bushGeometry, bushMaterial);
    bush4.position.set(-1.2, 0.05, 2.6);
    bush4.scale.set(0.15, 0.15, 0.15);

    bush1.castShadow = true;
    bush2.castShadow = true;
    bush3.castShadow = true;
    bush4.castShadow = true;

    bushes.add(bush1, bush2, bush3, bush4);

    return bushes;
}

export { createBushes };