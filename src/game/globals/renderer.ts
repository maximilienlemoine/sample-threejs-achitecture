import {WebGLRenderer} from "three";
import {GlobalObject} from "../utils/interfaces/global-object.ts";

export class RendererManager implements GlobalObject<WebGLRenderer> {
    protected renderer: WebGLRenderer

    constructor() {
        this.renderer = this.instantiate()
        this.setting()
    }

    instantiate() {
        return new WebGLRenderer();
    }

    setting(): void {
        this.renderer.setSize(window.innerWidth - 0.1, window.innerHeight - 0.1)
    }

    getRenderer(): WebGLRenderer {
        return this.renderer
    }
}