import { WebGPURenderer } from "three/webgpu";
import { GlobalObject } from "../utils/interfaces/global-object.ts";

export class RendererManager implements GlobalObject<WebGPURenderer> {
    protected renderer: WebGPURenderer;

    constructor() {
        this.renderer = this.instantiate();
    }

    instantiate() {
        return new WebGPURenderer();
    }

    public async setting(): Promise<void> {
        await this.renderer.init();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    getRenderer(): WebGPURenderer {
        return this.renderer;
    }
}
