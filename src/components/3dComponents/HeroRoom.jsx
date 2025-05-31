import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Room } from "./Room";
import { useMediaQuery } from "react-responsive";

const HeroRoom = () => {
  let pos = [0, -130, 0];
  const isSmallScreen = useMediaQuery({ maxWidth: 1800 });

  if (isSmallScreen) {
    return null;
  }

  return (
    <Canvas camera={{ position: [550, 550, 550], fov: 55 }}>
      <OrbitControls
        maxDistance={550}
        minDistance={300}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
      />
      <ambientLight intensity={2.5} color="#fff8e1" />
      <group position={pos}>
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroRoom;
