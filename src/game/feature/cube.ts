import { GameObject } from "../utils/interfaces/game-object.ts";
import { BoxGeometry, Mesh, MeshBasicMaterial, Object3D, Scene, Vector3 } from "three";
import { SceneManager } from "../globals/scene.ts";
import { getRandomInt } from "../utils/maths.ts";

export class CubeManager implements GameObject {
    private scene: Scene;

    private cubes: Object3D[] = [];
    private lastSpawn: number = 0;
    private spawnInterval: number = 1000;
    private lifeTime: number = 2000;
    private cubeSpeed: number = 0.007;

    constructor(sceneManager: SceneManager) {
        this.scene = sceneManager.getScene();
    }

    private addCube(cube: Object3D) {
        this.cubes.push(cube);
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

    private spawnCube(timestamp: number, deltaTime: number) {
        const cube = this.instantiateCube();
        cube.userData.spawnTime = timestamp;
        cube.userData.vector = this.getVelocityArray(deltaTime);
        this.scene.add(cube);
        this.addCube(cube);
    }

    private instantiateCube(): Mesh {
        return new Mesh(new BoxGeometry(0.5, 1, 0.5), new MeshBasicMaterial({ color: 0x8b4513 }));
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
}
