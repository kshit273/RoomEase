import React, { useMemo, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

export default function Isomteric(props) {
  const { nodes, materials } = useGLTF("/models/isometric.glb");
  const screensRef = useRef();
  const matcapTexture = useTexture("/images/textures/wall.jpg");

  const matcapMaterial = useMemo(
    () => new THREE.MeshMatcapMaterial({ matcap: matcapTexture }),
    [matcapTexture]
  );

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
      <group
        position={[-1.663, 1.488, 1.627]}
        rotation={[-Math.PI / 2, -1.496, -Math.PI / 2]}
        scale={[0.404, 0.527, 0.527]}
      >
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <group position={[0, 4.125, 0]} scale={4.154}>
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials["Material.003"]}
        />
        <mesh geometry={nodes.Object_8.geometry} material={materials.floor} />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials["Material.001"]}
        />
      </group>
      <group position={[-3.309, 1.428, 1.495]}>
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <group position={[-2.994, 0.472, 3.316]} scale={1.168}>
        <mesh
          geometry={nodes.Object_24.geometry}
          material={materials["Material.006"]}
        />
        <mesh geometry={nodes.Object_25.geometry} material={materials.glass} />
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          geometry={nodes.Object_27.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <group
        position={[-3.353, 2.125, 3.185]}
        rotation={[0, 0.262, -0.079]}
        scale={[0.233, 0.281, 0.197]}
      >
        <mesh
          geometry={nodes.Object_33.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          geometry={nodes.Object_34.geometry}
          material={materials["Material.009"]}
        />
      </group>
      <group position={[-3.824, 3.961, 1.993]} scale={[0.329, 0.021, 1]}>
        <mesh
          geometry={nodes.Object_40.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Object_41.geometry}
          material={materials["Material.014"]}
        />
      </group>
      <group
        position={[-3.353, 2.125, -0.168]}
        rotation={[0, -0.262, -0.079]}
        scale={[0.233, 0.281, 0.197]}
      >
        <mesh
          geometry={nodes.Object_43.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          geometry={nodes.Object_44.geometry}
          material={materials["Material.009"]}
        />
      </group>
      <group position={[-3.824, 3.521, 0.134]} scale={[0.329, 0.021, 1]}>
        <mesh
          geometry={nodes.Object_46.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Object_47.geometry}
          material={materials["Material.014"]}
        />
      </group>
      <group position={[-3.824, 3.14, -1.335]} scale={[0.329, 0.021, 1]}>
        <mesh
          geometry={nodes.Object_49.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Object_50.geometry}
          material={materials["Material.014"]}
        />
      </group>
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials["Material.002"]}
        position={[-1.658, 0.199, -2.805]}
      />
      <mesh
        geometry={nodes.Object_13.geometry}
        material={materials.material_0}
        position={[-1.658, 0.101, -2.805]}
      />
      <mesh
        geometry={nodes.Object_15.geometry}
        material={materials["Material.001"]}
        position={[-0.245, 2.114, -2.802]}
        scale={[1.542, 1, 1.783]}
      />
      <mesh
        geometry={nodes.Object_17.geometry}
        material={materials.material_0}
        position={[-3.464, 0.898, -2.733]}
        rotation={[Math.PI / 2, 1.425, -Math.PI / 2]}
        scale={1.349}
      />
      <mesh
        geometry={nodes.Object_19.geometry}
        material={materials.material_0}
        position={[2.767, 1.665, -4.206]}
      />
      <mesh
        geometry={nodes.Object_29.geometry}
        material={materials["Material.009"]}
        position={[-3.587, 2.025, 0.873]}
        rotation={[0, -0.052, 0]}
        scale={[0.437, 0.804, 0.804]}
      />
      <mesh
        geometry={nodes.Object_31.geometry}
        material={materials["Material.009"]}
        position={[-3.593, 2.025, 2.112]}
        rotation={[0, 0.052, 0]}
        scale={[0.437, 0.804, 0.804]}
      />
      <mesh
        geometry={nodes.Object_36.geometry}
        material={materials["Material.012"]}
        position={[-3.061, 1.478, 1.508]}
      />
      <mesh
        geometry={nodes.Object_38.geometry}
        material={materials.material_0}
        position={[-3.061, 1.497, 1.78]}
        scale={[0.439, 3.318, 0.352]}
      />
    </group>
  );
}

useGLTF.preload("/isometric.glb");
