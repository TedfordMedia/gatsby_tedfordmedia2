import * as THREE from 'three';

function MyTools() {
    this.name = "xx";

    this.SetStandardCanvasOpts = function (gl, scene) {
        gl.outputEncoding = THREE.sRGBEncoding
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
        scene.background = new THREE.Color(0x000000);
    };
    this.BasicFog = function (scene) {
        const fogColor = new THREE.Color(0x000000);
        scene.fog = new THREE.Fog(fogColor, .0025, 80);

    };
}

export default new MyTools();
