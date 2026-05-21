"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Avatar() {
  const groupRef = useRef<THREE.Group>(null!);

  // Smoothly rotate the head group to track the mouse cursor
  useFrame((state) => {
    const { x, y } = state.pointer; // Normalized mouse coordinates (-1 to 1)
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.45, 0.1);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.3, 0.1);
  });

  return (
    <group ref={groupRef} position={[0, -0.65, 0]}>
      {/* Torso / Shoulders */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.7, 0.9, 0.75, 32]} />
        <meshStandardMaterial color="#1e293b" roughness={0.65} metalness={0.1} />
      </mesh>
      
      {/* Neck */}
      <mesh position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.22, 0.24, 0.35, 32]} />
        <meshStandardMaterial color="#fcd34d" roughness={0.5} />
      </mesh>

      {/* Head Group */}
      <group position={[0, 0.45, 0]}>
        {/* Main Head Structure */}
        <mesh>
          <sphereGeometry args={[0.54, 32, 32]} />
          <meshStandardMaterial color="#fcd34d" roughness={0.45} />
        </mesh>

        {/* Nose */}
        <mesh position={[0, -0.05, 0.52]}>
          <sphereGeometry args={[0.075, 16, 16]} />
          <meshStandardMaterial color="#f59e0b" roughness={0.45} />
        </mesh>

        {/* Left Ear */}
        <mesh position={[-0.56, 0, 0]} rotation={[0, 0, -0.1]}>
          <sphereGeometry args={[0.11, 16, 16]} />
          <meshStandardMaterial color="#fcd34d" roughness={0.45} />
        </mesh>

        {/* Right Ear */}
        <mesh position={[0.56, 0, 0]} rotation={[0, 0, 0.1]}>
          <sphereGeometry args={[0.11, 16, 16]} />
          <meshStandardMaterial color="#fcd34d" roughness={0.45} />
        </mesh>

        {/* Left Eye */}
        <group position={[-0.18, 0.08, 0.45]}>
          <mesh>
            <sphereGeometry args={[0.085, 16, 16]} />
            <meshStandardMaterial color="#ffffff" roughness={0.15} />
          </mesh>
          <mesh position={[0, 0, 0.05]}>
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshStandardMaterial color="#5b21b6" roughness={0.1} /> {/* Purple Iris */}
          </mesh>
          <mesh position={[0.01, 0.01, 0.08]}>
            <sphereGeometry args={[0.015, 8, 8]} />
            <meshStandardMaterial color="#ffffff" roughness={0.05} /> {/* Eye glint */}
          </mesh>
        </group>

        {/* Right Eye */}
        <group position={[0.18, 0.08, 0.45]}>
          <mesh>
            <sphereGeometry args={[0.085, 16, 16]} />
            <meshStandardMaterial color="#ffffff" roughness={0.15} />
          </mesh>
          <mesh position={[0, 0, 0.05]}>
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshStandardMaterial color="#5b21b6" roughness={0.1} />
          </mesh>
          <mesh position={[0.01, 0.01, 0.08]}>
            <sphereGeometry args={[0.015, 8, 8]} />
            <meshStandardMaterial color="#ffffff" roughness={0.05} />
          </mesh>
        </group>

        {/* Eyebrows */}
        <group position={[0, 0.22, 0.42]}>
          <mesh position={[-0.18, 0, 0]} rotation={[0, 0, 0.06]}>
            <boxGeometry args={[0.16, 0.035, 0.08]} />
            <meshStandardMaterial color="#1e1b4b" roughness={0.8} />
          </mesh>
          <mesh position={[0.18, 0, 0]} rotation={[0, 0, -0.06]}>
            <boxGeometry args={[0.16, 0.035, 0.08]} />
            <meshStandardMaterial color="#1e1b4b" roughness={0.8} />
          </mesh>
        </group>

        {/* Smiling Mouth */}
        <mesh position={[0, -0.22, 0.44]} rotation={[0.08, 0, 0]}>
          <boxGeometry args={[0.22, 0.04, 0.08]} />
          <meshStandardMaterial color="#ffffff" roughness={0.2} />
        </mesh>

        {/* Cap / Baseball Hat */}
        <group position={[0, 0.24, 0]}>
          {/* Cap Dome */}
          <mesh position={[0, 0.1, 0]} rotation={[-0.08, 0, 0]}>
            <sphereGeometry args={[0.56, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
            <meshStandardMaterial color="#cbd5e1" metalness={0.7} roughness={0.25} /> {/* Silver cap dome */}
          </mesh>

          {/* Cap Brim */}
          <mesh position={[0, 0.06, 0.28]} rotation={[0.08, 0, 0]}>
            <boxGeometry args={[0.72, 0.03, 0.42]} />
            <meshStandardMaterial color="#0f172a" roughness={0.6} /> {/* Dark Slate brim */}
          </mesh>

          {/* Cap Top Button */}
          <mesh position={[0, 0.65, 0]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#cbd5e1" metalness={0.7} roughness={0.25} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full">
      <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }}>
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
        
        {/* Glow rim backlight behind the avatar matching the screenshot halo */}
        <pointLight position={[0, 0.2, -1.5]} color="#06b6d4" intensity={8} distance={4} />
        <pointLight position={[-2, 1, 1]} color="#a78bfa" intensity={1.5} distance={5} />
        
        {/* Subtle ambient particles */}
        <Sparkles count={40} scale={6} size={2.5} speed={0.3} opacity={0.25} color="#06b6d4" />
        
        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
          <Avatar />
        </Float>
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
