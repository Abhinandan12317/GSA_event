import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';

const AnimatedShape = ({ children, position, color, speed, factor }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed;
      meshRef.current.rotation.y += speed * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {children}
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={factor * 0.5} // Controls the level of distortion
        speed={factor * 2}   // Controls the speed of distortion
      />
    </mesh>
  );
};

export const Box = (props) => (
  <AnimatedShape {...props}>
    <boxGeometry args={[1, 1, 1]} />
  </AnimatedShape>
);

export const Sphere = (props) => (
  <AnimatedShape {...props}>
    <sphereGeometry args={[1, 32, 32]} />
  </AnimatedShape>
);

export const Torus = (props) => (
  <AnimatedShape {...props}>
    <torusGeometry args={[1, 0.4, 16, 100]} />
  </AnimatedShape>
);
