"use client";
import { ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const RenderIsland = ({ children }: { children: ReactNode }) => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={3} />
      <PerspectiveCamera makeDefault position={[400, 60, 500]} fov={80} />
      <group position={[-100, -650, 0]}>{children}</group>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default RenderIsland;
