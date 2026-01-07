import GUI from "lil-gui";
import "./styles/debug.css";
import { getAmbientLightManager, getCubeManager } from "../game/game-element-manager.ts";

export function initDebug() {
    const gui = new GUI();

    gui.add(document, "title").name("Titre du document");

    const lightFolder = gui.addFolder("Lumiere");
    lightFolder
        .add(getAmbientLightManager(), "ambientLightIntensity")
        .name("Intensité de la lumière ambiante")
        .min(0)
        .max(10)
        .step(0.1);

    const cubeFolder = gui.addFolder("Cube");
    cubeFolder
        .addColor(getCubeManager(), "cubeColor")
        .name("Couleur du cube")
        .onChange((value: number) => {
            getCubeManager().setCubeColor(value);
        });
    cubeFolder.add(getCubeManager(), "cubeSpeed").name("Vitesse du cube").min(0).max(0.02).step(0.001);

    cubeFolder.add(getCubeManager(), "spawnInterval").name("Intervalle de spawn").min(0).max(1000).step(1);
}
