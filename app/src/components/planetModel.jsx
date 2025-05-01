import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';

const planetModel = ({ textureUrl }) => {
  const texture = useLoader(TextureLoader, textureUrl);
  return (
    <Canvas style={{ height: '500px', width: '100%' }} camera={{ position: [0, 0, 5] }} gl={{ clearColor: '#1a1a2e' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default planetModel;