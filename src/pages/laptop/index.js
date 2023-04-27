
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Html, Box } from '@react-three/drei'
import Layout from "../../components/layoutwidellh"
import * as THREE from 'three'
import MyTools from '../../components/MyTools'

const MyPage = (props) => (
    <Layout >
        <div className={'mydiv'}>
            <Canvas
                onCreated={({ gl, camera, scene }) => {
                    MyTools.SetStandardCanvasOpts(gl, camera, scene);
                    MyTools.BasicFog(scene);
                }}
                style={{ height: "100%", width: "100%" }}
                camera={{ position: [0, 200, 400], fov: 40, near: 1, far: 100 }}>
                <Suspense fallback={<Html><h1 style={{ color: 'white' }}>Loading...</h1></Html>}>
                    <Environment preset="night" />
                </Suspense>
                <pointLight position={[5, 5, 10]} />
                <pointLight position={[55, 5, -50]} />
                <pointLight position={[5, 5, 4]} />
                <pointLight position={[5, -5, -4]} />
                <pointLight position={[-5, 5, -4]} />
                <pointLight position={[-8, 3, 4]} />
                <ambientLight />

                <pointLight position={[5, 45, 10]} />
                <pointLight position={[55, 45, -50]} />
                <pointLight position={[5, 5, 4]} />
                <pointLight position={[5, -5, -4]} />
                <pointLight position={[-5, 5, -4]} />
                <pointLight position={[-8, 3, 4]} />

                <Box />

                <OrbitControls maxDistance={20} maxPolarAngle={Math.PI / 2} autoRotate autoRotateSpeed={-.8} />
            </Canvas>
        </div>
    </Layout>
)

export default MyPage  