"use client";
import { ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ZoomHandler from "../handleZoom";

interface Props {
  children: ReactNode;
  onZoomChange: (fov: number) => void;
}

const RenderIsland = ({ children, onZoomChange }: Props) => {
  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={3} />
      <PerspectiveCamera makeDefault position={[400, 60, 500]} fov={80} />
      <ZoomHandler onZoomChange={onZoomChange} />
      <group position={[-100, -650, 0]}>{children}</group>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default RenderIsland;
