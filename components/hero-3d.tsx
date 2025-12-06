"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Environment, MeshTransmissionMaterial } from "@react-three/drei"
import type * as THREE from "three"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4
    }
  })

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef} scale={2.5}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshDistortMaterial
          color="#0d9488"
          roughness={0.05}
          metalness={0.95}
          distort={0.5}
          speed={2.5}
          emissive="#0d9488"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  )
}

function GlassTorus() {
  const torusRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.2
      torusRef.current.rotation.z = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.9}>
      <mesh ref={torusRef} position={[0, 0, -2]} scale={3.2}>
        <torusGeometry args={[1, 0.3, 32, 100]} />
        <MeshTransmissionMaterial
          backside
          samples={20}
          thickness={0.8}
          chromaticAberration={0.4}
          anisotropy={0.4}
          distortion={0.3}
          distortionScale={0.6}
          temporalDistortion={0.15}
          iridescence={1}
          iridescenceIOR={1.2}
          iridescenceThicknessRange={[0, 1400]}
          color="#22c55e"
        />
      </mesh>
    </Float>
  )
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(300 * 3)
    for (let i = 0; i < 300; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18
      positions[i * 3 + 2] = (Math.random() - 0.5) * 18
    }
    return positions
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.015
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={300} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#0d9488" transparent opacity={0.7} sizeAttenuation />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 8]} intensity={1.2} />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#22c55e" />
      <pointLight position={[5, 5, 10]} intensity={0.6} color="#0d9488" />
      <AnimatedSphere />
      <GlassTorus />
      <FloatingParticles />
      <Environment preset="city" />
    </>
  )
}

export default function Hero3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
