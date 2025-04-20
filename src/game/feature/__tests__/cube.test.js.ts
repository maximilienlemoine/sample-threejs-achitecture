import { CubeManager } from "../cube.ts";
import { SceneManager } from "../../globals/scene.ts";
import { Counter } from "../../../interface/counter.ts";
import { Object3D, Vector3 } from "three";

describe("Test du cubeManager", () => {
    let cubeManager: CubeManager;

    beforeEach(() => {
        cubeManager = new CubeManager(new SceneManager(), new Counter("counter-cube"));
    });

    it("spawn should add one cube (Object3D)", () => {
        cubeManager.spawnCube(0, 0.3);
        expect(cubeManager.getCubes().length).toBe(1);
        expect(cubeManager.getCubes()[0]).toBeInstanceOf(Object3D);
    });

    it("should update position of cube", () => {
        cubeManager.spawnCube(0, 0.3);
        const position1 = cubeManager.getCubes()[0].position.clone();

        cubeManager.onUpdate(1, 0.1);
        const position2 = cubeManager.getCubes()[0].position.clone();

        expect(position1).toBeInstanceOf(Vector3);
        expect(position2).toBeInstanceOf(Vector3);
        expect(position1).not.toEqual(position2);
    });

    it("should despawn cube", () => {
        cubeManager.spawnCube(0, 0.3);

        expect(cubeManager.getCubes().length).toBe(1);
        const cube1 = cubeManager.getCubes()[0];
        cubeManager.onUpdate(3000, 0.1);
        const cube2 = cubeManager.getCubes()[0];
        expect(cubeManager.getCubes().length).toBe(1);
        expect(cube1).not.toBe(cube2);
    });
});
