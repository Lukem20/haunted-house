import {
    PointLight,
    Group,
} from 'three';

function createGhosts() {
    const ghosts = new Group();
    const ghost1 = new PointLight('#8800ff', 2, 3);
    const ghost2 = new PointLight('#ff0088', 2, 3);
    const ghost3 = new PointLight('#ffff00', 2, 3);

    ghost1.tick = (delta) => {
        const ghost1Angle = delta * 0.5;
        ghost1.position.x = Math.cos(ghost1Angle) * 4;
        ghost1.position.z = Math.sin(ghost1Angle) * 4;
        ghost1.position.y = Math.sin(ghost1Angle) * Math.sin(delta * 2.34) * Math.sin(delta * 3.45);
        ghost1.castShadow = true;
    }

    ghost2.tick = (delta) => {
        const ghost2Angle = - delta * 0.32;
        ghost2.position.x = Math.cos(ghost2Angle) * 5;
        ghost2.position.z = Math.sin(ghost2Angle) * 5;
        ghost2.position.y = Math.sin(delta * 4) * Math.sin(delta * 2.5);
        ghost2.castShadow = true;
    }

    ghost3.tick = (delta) => {
        const ghost3Angle = - delta * 0.18;
        ghost3.position.x = Math.cos(ghost3Angle) * (7 + Math.sin(delta * 0.32));
        ghost3.position.z = Math.sin(ghost3Angle) * (7 + Math.sin(delta * 0.5));
        ghost3.position.y = Math.sin(delta * 4) * Math.sin(delta * 2.5);
        ghost3.castShadow = true;
    }

    ghost1.castShadow = true;
    ghost2.castShadow = true;
    ghost3.castShadow = true;

    ghost1.shadow.mapSize.width = 256;
    ghost1.shadow.mapSize.height = 256;
    ghost1.shadow.camera.far = 10;

    ghost2.shadow.mapSize.width = 256;
    ghost2.shadow.mapSize.height = 256;
    ghost2.shadow.camera.far = 10;

    ghost3.shadow.mapSize.width = 256;
    ghost3.shadow.mapSize.height = 256;
    ghost3.shadow.camera.far = 10;

    ghosts.add(ghost1, ghost2, ghost3);

    return { ghosts };
}

export { createGhosts };