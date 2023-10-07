import { GLTFLoader } from 'three-stdlib'
import { useLoader } from '@react-three/fiber'

export const Model = () => {
    const gltf = useLoader(GLTFLoader, "./Poimandres.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.4} />
        </>
    );
};
