import { Timer } from "three/addons/misc/Timer.js"

const timer = new Timer();

class Loop {
    constructor(camera, scene, renderer) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.updatables = [];
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            // Tell every animated object to tick forward one frame, then render
            this.tick();
            this.renderer.render(this.scene, this.camera);
        });
    }

    stop() {
        this.renderer.setAnimationLoop(null);
    }

    tick() {
        timer.update();
        const delta = timer.getElapsed();

        for (const object of this.updatables) {
            object.tick(delta);
        }
    }
}

export { Loop };