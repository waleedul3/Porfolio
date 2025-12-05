"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";

export const StarBackground = () => {
  const ref = useRef<THREE.Points>(null);

  const stars = useMemo(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 6;
      const y = (Math.random() - 0.5) * 6;
      const z = (Math.random() - 0.5) * 6;

      positions[i * 3] = Number.isFinite(x) ? x : 0;
      positions[i * 3 + 1] = Number.isFinite(y) ? y : 0;
      positions[i * 3 + 2] = Number.isFinite(z) ? z : 0;
    }

    return positions;
  }, []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <points ref={ref}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={stars}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.002}
          color="white"
          transparent
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
};

export const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
