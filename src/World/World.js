// Components
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createWalls } from './components/walls.js';
import { createFloor } from './components/floor.js';
import { createRoof } from './components/roof.js';
import { createDoor } from './components/door.js';
import { createGraves } from './components/graves.js';
import { createBushes } from './components/bushes.js';
import { createGhosts } from './components/ghosts.js';
import { createParticles } from './components/particles.js';

// Systems
import { createRenderer } from './systems/renderer.js';
import { createControls } from './systems/controls.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

// Other
import { ColorManagement, Fog } from 'three';
import * as dat from 'lil-gui';


let camera;
let renderer;
let scene;
let loop;

class World {
    constructor(container) {
        /* Base scene */
        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        /* Fog */
        ColorManagement.enabled = false;
        const fog = new Fog('#262837', 1, 15);
        scene.fog = fog;

        /* Lights */
        const { 
            moonLight,
            ambientLight,
            doorLight
        } = createLights();

        /* House */
        const floor = createFloor();
        const walls = createWalls();
        const roof = createRoof();
        const door = createDoor();
        const graves = createGraves();
        const bushes = createBushes();
        const ghosts = createGhosts();
        const particles = createParticles();

        ghosts.ghosts.children.forEach((ghost) => {
            loop.updatables.push(ghost);
        });
        loop.updatables.push(particles);

        scene.add(
            moonLight,
            ambientLight,
            doorLight,
            floor,
            walls,
            roof,
            door,
            graves,
            bushes,
            ghosts.ghosts,
            particles,
        );

        /* Controls */
        const controls = createControls(camera, container)

        /* Window resize */
        const resizer = new Resizer(container, camera, renderer);
    }

    async init() {
        // const { parrot, flamingo, stork } = await loadBirds();
        // scene.add(parrot, flamingo, stork);
        // loop.updatables.push(parrot, flamingo, stork);
    }

    render() {
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }
}
    
export { World };