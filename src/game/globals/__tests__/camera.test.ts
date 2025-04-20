import { CamaraManager } from "../camera.ts";
import { Camera, Vector3 } from "three";

describe("Test de CameraManager", () => {
    let cameraManager: CamaraManager;
    let camera: Camera;

    beforeEach(() => {
        cameraManager = new CamaraManager();
        camera = cameraManager.getCamera();
    });

    it("should be Camera Instance", () => {
        expect(camera).toBeInstanceOf(Camera);
    });

    it("should be in position", () => {
        const position = new Vector3(0, 0, 10);
        expect(camera.position).toEqual(position);
    });
});
