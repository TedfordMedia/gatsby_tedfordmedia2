import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'
import * as THREE from "three";
import MyBrainScene2 from "./BrainScene2";
import BrainHtml from "@components/html/BrainHTML";
import useSceneStore from '@src/useSceneStore';
import EyeAnimation from "@components/EyeAnimation";
import "@styles/styles.css";

export default function BrainPage() {
    // const canvasClicked = useSceneStore((state) => state.canvasClicked);
    // const controls = useRef();

    // useEffect(() => {
    //     if (controls) {
    //         useSceneStore.setState({ controls: controls })
    //     }
    // }, [controls])

    return (
        <div className={'mydiv'}>
            <Canvas
                shadows
                camera={{ fov: 42, position: [21, 0, 100] }}
                // onPointerMissed={() => canvasClicked()}
                onCreated={({ gl, camera, scene }) => {
                    gl.useLegacyLights = false;
                    scene.background = new THREE.Color(0x000000);
                    gl.shadowMap.enabled = true;
                    gl.shadowMap.type = THREE.PCFSoftShadowMap;
                    gl.shadowMap.autoUpdate = true;
                    gl.toneMapping = THREE.ACESFilmicToneMapping
                }}>

                {/* <MyBrainScene2 />
                <OrbitControls ref={controls} />
                <EyeAnimation /> */}
            </Canvas>
            {/* <BrainHtml /> */}
        </div>
    );
}
