import { SceneManager } from "../scene.ts";
import { Color, Scene } from "three";

describe("Test de SceneManager", () => {
    let sceneManager: SceneManager;
    let scene: Scene;

    beforeEach(() => {
        sceneManager = new SceneManager();
        scene = sceneManager.getScene();
    });

    it("should be Scene Instance", () => {
        expect(scene).toBeInstanceOf(Scene);
    });

    it("should color set", () => {
        const backgroundColor = new Color(0x87ceeb);

        expect(scene.background).toBeInstanceOf(Color);
        expect(scene.background).toEqual(backgroundColor);
    });
});
