import { DirectionalLight } from "three";
import { DirectionalLightManager } from "../directional-light.ts";

describe("Test de DirectionalLightManager", () => {
    let directionalLightManager: DirectionalLightManager;

    beforeEach(() => {
        directionalLightManager = new DirectionalLightManager();
    });

    it("should be DirectionalLight Instance", () => {
        const directionalLight = directionalLightManager.getDirectionalLight();

        expect(directionalLight).toBeInstanceOf(DirectionalLight);
    });
});
