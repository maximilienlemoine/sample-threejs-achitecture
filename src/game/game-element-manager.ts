import { SceneManager } from "./globals/scene.ts";
import { CubeManager } from "./feature/cube.ts";
import { RendererManager } from "./globals/renderer.ts";
import { DirectionalLightManager } from "./globals/lights/directional-light.ts";
import { AmbientLightManager } from "./globals/lights/ambient-light.ts";
import { CamaraManager } from "./globals/camera.ts";

let sceneManager: SceneManager;
let cameraManager: CamaraManager;
let rendererManager: RendererManager;
let directionalLightManager: DirectionalLightManager;
let ambientLightManager: AmbientLightManager;
let cubeManager: CubeManager;

// ---- Setters ---- //

const setSceneManager = (scene: SceneManager) => {
    sceneManager = scene;
};

const setCameraManager = (camera: CamaraManager) => {
    cameraManager = camera;
};

const setRendererManager = (renderer: RendererManager) => {
    rendererManager = renderer;
};

const setDirectionalLightManager = (directionalLight: DirectionalLightManager) => {
    directionalLightManager = directionalLight;
};

const setAmbientLightManager = (ambientLight: AmbientLightManager) => {
    ambientLightManager = ambientLight;
};

const setCubeManager = (cube: CubeManager) => {
    cubeManager = cube;
};

// ---- Getters ---- //

const getSceneManager = () => {
    return sceneManager;
};

const getCameraManager = () => {
    return cameraManager;
};

const getRendererManager = () => {
    return rendererManager;
};

const getDirectionalLightManager = () => {
    return directionalLightManager;
};

const getAmbientLightManager = () => {
    return ambientLightManager;
};

const getCubeManager = () => {
    return cubeManager;
};

// ---- Export ---- //
export {
    setSceneManager,
    setCameraManager,
    setRendererManager,
    setDirectionalLightManager,
    setAmbientLightManager,
    setCubeManager,
    getSceneManager,
    getCameraManager,
    getRendererManager,
    getDirectionalLightManager,
    getAmbientLightManager,
    getCubeManager,
};
