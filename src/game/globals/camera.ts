import { Camera, PerspectiveCamera } from "three";
import {GlobalObject} from "../utils/interfaces/global-object.ts";

export class CamaraManager implements GlobalObject<Camera> {
    protected camera: Camera

    constructor() {
        this.camera = this.instantiate()
        this.setting()
    }

    instantiate(): Camera {
        return new PerspectiveCamera();
    }

    setting(): void {
        this.camera.position.y = 10;
        this.camera.rotation.set(-5, -5, -5);
        this.camera.position.z = 8;
    }

    getCamera() {
        return this.camera
    }
}

