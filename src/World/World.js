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

// Systems
import { createRenderer } from './systems/renderer.js';
import { createControls } from './systems/controls.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

// Other
import { 
    ColorManagement,
    Fog,
    Group,
    TextureLoader,
} from 'three';

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

        const textureLoader = new TextureLoader();

        /* Fog */
        ColorManagement.enabled = false;
        const fog = new Fog('#262837', 1, 15);
        // scene.fog = fog;

        /* Lights */
        const { 
            moonLight,
            ambientLight,
            doorLight
        } = createLights();

        /* House */
        const floor = createFloor(textureLoader);
        const walls = createWalls(textureLoader);
        const roof = createRoof(textureLoader);
        const door = createDoor(textureLoader);
        const graves = createGraves(textureLoader);
        const bushes = createBushes(textureLoader);
        const ghosts = createGhosts();

        const house = new Group();
        house.add(walls, roof, door);

        ghosts.ghosts.children.forEach((ghost) => {
            loop.updatables.push(ghost);
        });

        scene.add(
            moonLight,
            ambientLight,
            doorLight,
            floor,
            house,
            graves,
            bushes,
            ghosts.ghosts,
        );

        /* Controls */
        const controls = createControls(camera, container)
        loop.updatables.push(controls);

        /* Window resize */
        const resizer = new Resizer(container, camera, renderer);
    }

    async init() {

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