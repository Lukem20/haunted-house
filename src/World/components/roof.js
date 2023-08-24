import { 
    Mesh,
    ConeGeometry,
    MeshStandardMaterial,

} from 'three';

function createRoof () {
    const roof = new Mesh(
        new ConeGeometry(3.5, 1, 4),
        new MeshStandardMaterial({ color: '#b35f45'})
    );
    roof.position.y = 3;
    roof.rotation.y = Math.PI / 4;
    
    return roof;
}

export { createRoof };