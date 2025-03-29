import {SceneManager} from "./globals/scene.ts";
import {RendererManager} from "./globals/renderer.ts";
import {CamaraManager} from "./globals/camera.ts";
import {DirectionalLightManager} from "./globals/lights/directional-light.ts";
import {AmbientLightManager} from "./globals/lights/ambient-light.ts";

console.log("Game : READY")

// ---- Basics ---- //
const sceneManager = new SceneManager()
const scene = sceneManager.getScene()

const rendererManager = new RendererManager()
const renderer = rendererManager.getRenderer()

const cameraManager = new CamaraManager()
const camera = cameraManager.getCamera()


// ---- Light ---- //
const directionalLightManager = new DirectionalLightManager()
const directionalLight = directionalLightManager.getDirectionalLight()
scene.add(directionalLight)

const ambientLightManager = new AmbientLightManager()
const ambientLight = ambientLightManager.getAmbientLight()
scene.add(ambientLight)


// ---- Animation ---- //
function animate() {
    renderer.render(scene, camera);

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);


document.body.appendChild(renderer.domElement);