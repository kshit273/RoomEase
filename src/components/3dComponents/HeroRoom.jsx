import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Room } from "./Room";

const bulbPositions = [
  [83.616, 257.793, 79.076],
  [13.039, 239.985, 84.884],
  [-55.481, 224.37, 52.732],
  [52.58, 239.211, 30.766],
  [-18.175, 228.615, 34.155],
];

const HeroRoom = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        maxDistance={600}
        minDistance={300}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
      />
      <ambientLight intensity={2.5} color="#fff8e1" />
      {bulbPositions.map((pos, idx) => (
        <pointLight
          key={idx}
          position={pos}
          intensity={10}
          distance={500}
          color="#fff8e1"
          castShadow
        />
      ))}
      <group position={[0, -130, 0]}>
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroRoom;
