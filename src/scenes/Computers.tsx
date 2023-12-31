import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '@/components/Loader';

type TComputers = {
  isMobile: boolean;
}

const Computers = ({ isMobile }: TComputers) => {

  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor="green" />
      <pointLight color="green" intensity={20} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={100} intensity={90} castShadow shadow-mapSize={1024} />
      <primitive object={computer.scene} scale={isMobile ? 1 : 0.4} position={isMobile ? [0, -3, -1] : [0, -1.75, -1.]} rotation={isMobile ? [0, 0, 0] : [-0.01, -0.2, -0.1]} />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  }, []);
  return (
    <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
