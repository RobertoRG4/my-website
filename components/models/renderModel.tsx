"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { ReactNode } from "react";
const RenderModel = ({ children }: { children: ReactNode }) => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight position={[-2, -0.5, -2]} intensity={1} />
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={100} />
      {children}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default RenderModel;
