import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Isometric from "./Isometric";
import { useMediaQuery } from "react-responsive";

const HeroRoom = () => {
  let pos = [-2, -2, -2];
  const isSmallScreen = useMediaQuery({ maxWidth: 1800 });

  if (isSmallScreen) {
    return null;
  }

  return (
    <Canvas camera={{ position: [30, 30, 30], fov: 45 }}>
      <OrbitControls
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
      />
      <ambientLight intensity={2.5} color="#fff8e1" />
      <group position={pos}>
        <Isometric />
      </group>
    </Canvas>
  );
};

export default HeroRoom;
