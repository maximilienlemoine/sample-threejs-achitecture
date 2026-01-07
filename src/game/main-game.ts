import { SceneManager } from "./globals/scene.ts";
import { RendererManager } from "./globals/renderer.ts";
import { CamaraManager } from "./globals/camera.ts";
import { DirectionalLightManager } from "./globals/lights/directional-light.ts";
import { AmbientLightManager } from "./globals/lights/ambient-light.ts";
import { CubeManager } from "./feature/cube.ts";
import { Loader } from "./globals/loader.ts";
import { Updater } from "./globals/updater.ts";
import { Counter } from "../interface/counter.ts";
import {
    setAmbientLightManager,
    setCameraManager,
    setCubeManager,
    setDirectionalLightManager,
    setSceneManager,
} from "./game-element-manager.ts";

console.info("Game : READY");

// ---- Basics ---- //
const sceneManager = new SceneManager();
setSceneManager(sceneManager);
const scene = sceneManager.getScene();

const rendererManager = new RendererManager();
const renderer = rendererManager.getRenderer();
renderer.setAnimationLoop(animate)

const cameraManager = new CamaraManager();
setCameraManager(cameraManager);
const camera = cameraManager.getCamera();

// ---- Light ---- //
const directionalLightManager = new DirectionalLightManager();
setDirectionalLightManager(directionalLightManager);
const directionalLight = directionalLightManager.getDirectionalLight();
scene.add(directionalLight);

const ambientLightManager = new AmbientLightManager();
setAmbientLightManager(ambientLightManager);
const ambientLight = ambientLightManager.getAmbientLight();
scene.add(ambientLight);

// ---- Feature ---- //

const counterCube = new Counter("counter-cube");
const cubeManager = new CubeManager(sceneManager, counterCube);
setCubeManager(cubeManager);

// ---- Loader/Updater---- //
const loader = new Loader(cubeManager);
const updater = new Updater(cubeManager);
loader.onLoad();

// ---- Animation ---- //
let lastTime: number = 0;
function animate(timestamp: number) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    renderer.render(scene, camera);

    updater.onUpdate(timestamp, deltaTime);
}

document.body.appendChild(renderer.domElement);
