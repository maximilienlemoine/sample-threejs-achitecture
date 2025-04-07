import { GlobalObject } from "../../utils/interfaces/global-object.ts";
import { AmbientLight, Light } from "three";

export class AmbientLightManager implements GlobalObject<Light> {
    protected ambientLight: Light;
    public ambientLightIntensity: number = 1;

    constructor() {
        this.ambientLight = this.instantiate();
        this.setting();
    }

    instantiate(): Light {
        return new AmbientLight(0x404040, this.ambientLightIntensity);
    }

    setting(): void {}

    getAmbientLight() {
        return this.ambientLight;
    }
}
