import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

export function Room(props) {
  const { nodes, materials } = useGLTF("/models/room.glb");
  const screensRef = useRef();
  const matcapTexture = useTexture("/images/textures/mat1.png");

  const windowMaterial = new THREE.MeshPhysicalMaterial({
    color: "#222", // dark grey
    transparent: true,
    opacity: 0.8, // adjust for desired transparency
    roughness: 0.3,
    metalness: 0.7,
    transmission: 0.6, // for glass-like effect (MeshPhysicalMaterial only)
    thickness: 0.5,
  });

  return (
    <group {...props} dispose={null}>
      <EffectComposer>
        <SelectiveBloom
          selection={screensRef.current ? [screensRef.current] : []}
          intensity={1.5} // Strength of the bloom
          luminanceThreshold={0.2} // Minimum luminance needed
          luminanceSmoothing={0.9} // Smooth transition
          blendFunction={BlendFunction.ADD} // How it blends
        />
      </EffectComposer>
      <mesh
        geometry={nodes.Ground_Floor_0.geometry}
        material={materials.Floor}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Borders_Borders_0.geometry}
        material={materials.Borders}
        position={[-139.791, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Window_Window_0.geometry}
        material={windowMaterial}
        position={[-138.282, 142.671, -35.813]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Wall_Wall_0.geometry}
        material={materials.Wall}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Couch_Couch_0.geometry}
        material={materials.Couch}
        position={[13.244, 24.543, -48.017]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Carpet_Carpet_0.geometry}
        material={materials.Carpet}
        position={[29.732, 0.433, 75.915]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={49.01}
      />
      <mesh
        geometry={nodes.Curtains_Curtains_0.geometry}
        material={materials.Curtains}
        position={[-117.768, 140.193, 103.743]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Painting_Painting_0.geometry}
        material={materials.Painting}
        position={[81.597, 0.154, -115.553]}
        rotation={[-1.708, -0.001, -0.022]}
        scale={91.097}
      />
      <mesh
        geometry={nodes.Plate_Plate_0.geometry}
        material={materials.Plate}
        position={[54.203, 42.128, 71.891]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={25.284}
      />
      <mesh
        geometry={nodes.Pillow02_Pillow_0.geometry}
        material={materials.Pillow}
        position={[-55.74, 64.127, -62.773]}
        rotation={[-0.488, 0.509, 0.253]}
        scale={100}
      />
      <mesh
        geometry={nodes.Pillow01_Pillow_0.geometry}
        material={materials.Pillow}
        position={[5.4, 69.101, -67.856]}
        rotation={[-1.573, 0.004, 0.197]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cloth_Cloth_0.geometry}
        material={materials.Cloth}
        position={[77.456, 67.228, -92.501]}
        rotation={[-1.573, 0.007, -0.001]}
        scale={[100, 91.583, 100]}
      />
      <mesh
        geometry={nodes.Curtain_Holder_Curtain_Holder_0.geometry}
        material={materials.Curtain_Holder}
        position={[-138.282, 142.671, -35.813]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Coffee_Table_Coffee_Table_0.geometry}
        material={materials.Coffee_Table}
        position={[38.484, 20.127, 76.636]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={91.097}
      />
      <mesh
        geometry={nodes.Tea_Pot_Tea_Pot_0.geometry}
        material={materials.Tea_Pot}
        position={[53.92, 41.624, 65.903]}
        rotation={[0, -1.134, 0]}
      />
      <mesh
        geometry={nodes.Cup01_Cup_0.geometry}
        material={materials.material}
        position={[62.284, 41.663, 77.111]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={4.278}
      />
      <mesh
        geometry={nodes.Cup02_Cup_0.geometry}
        material={materials.material}
        position={[47.711, 41.663, 78.88]}
        rotation={[-Math.PI / 2, 0, -2.094]}
        scale={4.278}
      />
      <mesh
        geometry={nodes.Plant_Plant_0.geometry}
        material={materials.Plant}
        position={[-87.401, 12.526, 117.543]}
        rotation={[-Math.PI / 2, 0, 2.356]}
        scale={8.267}
      />
      <mesh
        geometry={nodes.Ceilling_Light001_Ceilling_Lamp_0.geometry}
        material={materials.Ceilling_Lamp}
        position={[83.616, 257.793, 79.076]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Ceilling_Light002_Ceilling_Lamp_0.geometry}
        material={materials.Ceilling_Lamp}
        position={[13.039, 239.985, 84.884]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Ceilling_Light003_Ceilling_Lamp_0.geometry}
        material={materials.Ceilling_Lamp}
        position={[-55.481, 224.37, 52.732]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Ceilling_Light004_Ceilling_Lamp_0.geometry}
        material={materials.Ceilling_Lamp}
        position={[52.58, 239.211, 30.766]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Ceilling_Light_Ceilling_Lamp_0.geometry}
        material={materials.Ceilling_Lamp}
        position={[-18.175, 228.615, 34.155]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plant_Stand_Plant_Stand_0.geometry}
        material={materials.Plant_Stand}
        position={[-87.401, 12.526, 117.543]}
        rotation={[-Math.PI / 2, 0, 2.356]}
        scale={8.267}
      />
    </group>
  );
}

useGLTF.preload("models/room.glb");
