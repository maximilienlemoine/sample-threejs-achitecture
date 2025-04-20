import { AmbientLightManager } from "../ambient-light.ts";
import { AmbientLight } from "three";

describe("Test de AmbientLightManager", () => {
    let ambientLightManager: AmbientLightManager;

    beforeEach(() => {
        ambientLightManager = new AmbientLightManager();
    });

    it("should be AmbientLight Instance", () => {
        const ambientLight = ambientLightManager.getAmbientLight();

        expect(ambientLight).toBeInstanceOf(AmbientLight);
    });
});
