import { Color, Scene } from "three";
import { GlobalObject } from "../utils/interfaces/global-object.ts";

export class SceneManager implements GlobalObject<Scene> {
    protected scene: Scene;

    constructor() {
        this.scene = this.instantiate();
        this.setting();
    }

    instantiate() {
        return new Scene();
    }

    setting(): void {
        this.scene.background = new Color(0x87ceeb);
    }

    getScene(): Scene {
        return this.scene;
    }
}
