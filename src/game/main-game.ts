import { SceneManager } from "./globals/scene.ts";
import { RendererManager } from "./globals/renderer.ts";
import { CamaraManager } from "./globals/camera.ts";
import { DirectionalLightManager } from "./globals/lights/directional-light.ts";
import { AmbientLightManager } from "./globals/lights/ambient-light.ts";
import { CubeManager } from "./feature/cube.ts";
import { Loader } from "./globals/loader.ts";
import { Updater } from "./globals/updater.ts";
import { Counter } from "../interface/counter.ts";

console.info("Game : READY");

// ---- Basics ---- //
const sceneManager = new SceneManager();
const scene = sceneManager.getScene();

const rendererManager = new RendererManager();
const renderer = rendererManager.getRenderer();

const cameraManager = new CamaraManager();
const camera = cameraManager.getCamera();

// ---- Light ---- //
const directionalLightManager = new DirectionalLightManager();
const directionalLight = directionalLightManager.getDirectionalLight();
scene.add(directionalLight);

const ambientLightManager = new AmbientLightManager();
const ambientLight = ambientLightManager.getAmbientLight();
scene.add(ambientLight);

// ---- Feature ---- //

const counterCube = new Counter("counter-cube");
const cubeManager = new CubeManager(sceneManager, counterCube);

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

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

document.body.appendChild(renderer.domElement);
