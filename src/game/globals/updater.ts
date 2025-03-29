import {CubeManager} from "../feature/cube.ts";


export class Updater {
    private cubeManager: CubeManager

    constructor(_cubeManager: CubeManager) {
        this.cubeManager = _cubeManager
    }

    onUpdate(timestamp: number, deltaTime: number) {
        this.cubeManager.onUpdate(timestamp, deltaTime)
    }
}