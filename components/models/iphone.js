"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/iphone/scene-transformed.glb");

  const backgroundTexture = useTexture("/imagen.png");

  backgroundTexture.minFilter = THREE.LinearFilter;
  backgroundTexture.magFilter = THREE.LinearFilter;
  backgroundTexture.anisotropy = 10;
  backgroundTexture.wrapS = THREE.ClampToEdgeWrapping;
  backgroundTexture.wrapT = THREE.ClampToEdgeWrapping;

  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh position={[0, 0, 0.6]} rotation={[0, 0, 0]}>
        <planeGeometry args={[7.5, 16]} />
        <meshBasicMaterial map={backgroundTexture} transparent={true} />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_1.geometry}
        material={materials.Antenna}
        position={[0, 0, 0.17]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_2.geometry}
        material={materials.Glass_Camera_Logo}
        position={[0, 0, 0.17]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_3.geometry}
        material={materials.Back_Cover}
        position={[0, 0, 0.17]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_4.geometry}
        material={materials.Screen_Rim}
        position={[0, 0, 0.17]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_5.geometry}
        material={materials.Grill_USB}
        position={[0, 0, 0.17]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_6.geometry}
        material={materials.Camera_Pixel_Glass_002}
        position={[0, 0, 0.17]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_7.geometry}
        material={materials.Camera_Pixel__002}
        position={[0, 0, 0.17]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_8.geometry}
        material={materials.Plastic}
        position={[0, 0, 0.17]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_9.geometry}
        material={materials.Rim_Buttons}
        position={[0, 0, 0.17]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_10.geometry}
        material={materials.Flash_Glass_002}
        position={[0, 0, 0.17]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_11.geometry}
        material={materials.Flash_002}
        position={[0, 0, 0.17]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_13.geometry}
        material={materials.Screw}
        position={[0, 0, 0.17]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
    </group>
  );
}

useGLTF.preload("/iphone/scene-transformed.glb");
