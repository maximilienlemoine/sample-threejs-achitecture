import { GameObject } from "../utils/interfaces/game-object.ts";
import { BoxGeometry, Mesh, MeshBasicMaterial, Object3D, Scene, Vector3 } from "three";
import { SceneManager } from "../globals/scene.ts";
import { getRandomInt } from "../utils/maths.ts";
import { Counter } from "../../interface/counter.ts";

export class CubeManager implements GameObject {
    private scene: Scene;
    private counter: Counter;

    private cubes: Object3D[] = [];
    private lastSpawn: number = 0;
    public spawnInterval: number = 1000;
    private lifeTime: number = 2000;
    public cubeSpeed: number = 0.007;

    public cubeColor: number = 0x00ff00;

    constructor(sceneManager: SceneManager, counterCube: Counter) {
        this.scene = sceneManager.getScene();
        this.counter = counterCube;
    }

    getCubes() {
        return this.cubes;
    }

    private addCube(cube: Object3D) {
        this.cubes.push(cube);
        this.counter.increment();
    }

    public removeCube = (index: number) => {
        this.cubes.splice(index, 1);
    };

    onLoad(): void {}

    onUpdate(timestamp: number, deltaTime: number): void {
        this.checkSpawnCube(timestamp, deltaTime);
        this.cubes.forEach((cube: Object3D, cubeIndex: number) => {
            this.mooveCube(cube);
            this.checkDispawnCube(cube, cubeIndex, timestamp);
        });
    }

    private checkSpawnCube(timestamp: number, deltaTime: number) {
        if (timestamp > this.lastSpawn + this.spawnInterval) {
            this.spawnCube(timestamp, deltaTime);
            this.lastSpawn = timestamp;
        }
    }

    spawnCube(timestamp: number, deltaTime: number) {
        const cube = this.instantiateCube();
        cube.userData.spawnTime = timestamp;
        cube.userData.vector = this.getVelocityArray(deltaTime);
        this.scene.add(cube);
        this.addCube(cube);
    }

    private instantiateCube(): Mesh {
        return new Mesh(new BoxGeometry(0.5, 1, 0.5), new MeshBasicMaterial({ color: this.cubeColor }));
    }

    private checkDispawnCube(cube: Object3D, cubeIndex: number, timestamp: number) {
        if (cube.userData.spawnTime + this.lifeTime < timestamp) {
            this.dispawnCube(cube, cubeIndex);
        }
    }

    private dispawnCube(cube: Object3D, cubeIndex: number) {
        this.scene.remove(cube);
        this.removeCube(cubeIndex);
    }

    private getVelocityArray(deltaTime: number): Vector3 {
        return [
            new Vector3(this.cubeSpeed * deltaTime, 0, 0),
            new Vector3(-(this.cubeSpeed * deltaTime), 0, 0),
            new Vector3(0, this.cubeSpeed * deltaTime, 0),
            new Vector3(0, -(this.cubeSpeed * deltaTime), 0),
            new Vector3(-(this.cubeSpeed * deltaTime), -(this.cubeSpeed * deltaTime), 0),
            new Vector3(this.cubeSpeed * deltaTime, this.cubeSpeed * deltaTime, 0),
            new Vector3(-(this.cubeSpeed * deltaTime), this.cubeSpeed * deltaTime, 0),
            new Vector3(this.cubeSpeed * deltaTime, -(this.cubeSpeed * deltaTime), 0),
        ][getRandomInt(0, 8)];
    }

    private mooveCube(cube: Object3D) {
        cube.position.add(cube.userData.vector);
    }

    public setCubeColor(color: number) {
        this.cubeColor = color;
    }
}
