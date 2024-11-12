"use client";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Island(props) {
  const { nodes, materials } = useGLTF("/island/scene-transformed.glb");
  const islandRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (islandRef.current) {
      islandRef.current.position.y = Math.sin(elapsedTime) * 20;
    }
  });

  return (
    <group ref={islandRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial.geometry}
        material={materials.lambert6SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_1.geometry}
        material={materials.layeredShader1SG}
      />
    </group>
  );
}

useGLTF.preload("/island/scene-transformed.glb");
