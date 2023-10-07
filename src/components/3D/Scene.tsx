import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import { Model } from '@/components/3D/Model'

export const Scene = () => {
    return <div id={"canvas-wrapper"}>
        <Canvas style={{ width: '100%', height: '500px', background: 'white' }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.4} />
                <directionalLight color="white" position={[0, 0, 10]} />
                <Model />
                <OrbitControls />
            </Suspense>
        </Canvas>
    </div>
}
