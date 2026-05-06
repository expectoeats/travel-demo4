"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Stars() {
  const ref = useRef<THREE.Points>(null);
  const sphere = new Float32Array(1800);
  for (let i = 0; i < 1800; i++) sphere[i] = (Math.random() - 0.5) * 16;

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta * 0.015;
    ref.current.rotation.y += delta * 0.02;
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled>
      <PointMaterial transparent color="#38BDF8" size={0.02} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.4} />
        <Stars />
      </Canvas>
    </div>
  );
}
