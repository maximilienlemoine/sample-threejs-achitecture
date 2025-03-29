import {CubeManager} from "../feature/cube.ts";


export class Loader {
    private cubeManager: CubeManager

    constructor(_cubeManager: CubeManager) {
        this.cubeManager = _cubeManager
    }

    onLoad() {
        console.info("Loading...");
        this.cubeManager.onLoad()
    }
}