"use client";
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "three";

interface Props {
  onZoomChange: (fov: number) => void;
}

const ZoomHandler = ({ onZoomChange }: Props): null => {
  const { camera } = useThree();

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (camera instanceof PerspectiveCamera) {
        const newFov = camera.fov - event.deltaY * 0.1;
        camera.fov = Math.max(10, Math.min(80, newFov)); // Limita el rango de FOV
        camera.updateProjectionMatrix();
        onZoomChange(camera.fov);
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [camera, onZoomChange]);

  return null;
};

export default ZoomHandler;
