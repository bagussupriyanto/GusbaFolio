'use client';

import React, { useRef, useMemo, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float } from '@react-three/drei';
import * as THREE from 'three';

// Frame-rate independent damping (same feel on 60fps, 120fps, 30fps)
function damp(current: number, target: number, smoothing: number, delta: number) {
  return THREE.MathUtils.lerp(current, target, 1 - Math.exp(-smoothing * delta));
}

interface Pose {
  scroll: number;
  x: number; y: number; z: number;
  rx: number; ry: number; rz: number;
  s: number;
}

// ── ASTRONAUT: 14 keyframes for ultra-smooth path ───────────
const ASTRO: Pose[] = [
  { scroll: 0.00, x: 3.2,  y: -0.6, z: 0,   rx: 0,    ry: -0.3, rz: 0,    s: 1.5 },
  { scroll: 0.06, x: 3.4,  y: -0.4, z: 0.3, rx: 0.1,  ry: -0.5, rz: -0.1, s: 1.45 },
  { scroll: 0.12, x: 3.8,  y: -0.8, z: 0.5, rx: 0.35, ry: -0.8, rz: -0.2, s: 1.3 },
  { scroll: 0.18, x: 3.6,  y: -0.2, z: 0.8, rx: 0.1,  ry: -1.0, rz: 0.1,  s: 1.35 },
  { scroll: 0.24, x: 3.5,  y: -0.3, z: 1.0, rx: -0.1, ry: -1.2, rz: 0.25, s: 1.4 },
  { scroll: 0.30, x: 3.3,  y: 0.2,  z: 1.2, rx: -0.3, ry: -1.5, rz: 0.15, s: 1.35 },
  { scroll: 0.38, x: 3.0,  y: 1.0,  z: 1.5, rx: -0.5, ry: -1.8, rz: -0.1, s: 1.15 },
  { scroll: 0.44, x: 3.2,  y: 1.8,  z: 1.3, rx: -0.7, ry: -2.0, rz: -0.15,s: 1.1 },
  { scroll: 0.52, x: 3.5,  y: 0.5,  z: 1.0, rx: 2.0,  ry: -0.8, rz: 0.2,  s: 1.2 },
  { scroll: 0.58, x: 3.6,  y: -0.2, z: 0.7, rx: 2.5,  ry: -0.5, rz: 0.15, s: 1.25 },
  { scroll: 0.65, x: 3.8,  y: -0.8, z: 0.3, rx: 0.3,  ry: -0.4, rz: -0.08,s: 1.45 },
  { scroll: 0.75, x: 3.6,  y: -1.0, z: 0,   rx: 0.15, ry: -0.35,rz: -0.05,s: 1.5 },
  { scroll: 0.85, x: 3.0,  y: -0.3, z: 1.5, rx: 0.08, ry: -0.4, rz: 0.06, s: 1.6 },
  { scroll: 1.00, x: 2.5,  y: -0.2, z: 2.5, rx: 0.03, ry: -0.3, rz: 0.04, s: 1.7 },
];

// ── ROCKET: 14 keyframes ────────────────────────────────────
const ROCKET: Pose[] = [
  { scroll: 0.00, x: -3.0, y: 2.0,  z: -2,  rx: 0.3,  ry: 0,   rz: 0.8,  s: 0.5 },
  { scroll: 0.06, x: -3.2, y: 1.5,  z: -1.5,rx: 0.2,  ry: 0.2, rz: 0.7,  s: 0.52 },
  { scroll: 0.12, x: -3.5, y: 0.5,  z: -0.5,rx: 0.05, ry: 0.4, rz: 0.5,  s: 0.55 },
  { scroll: 0.18, x: -3.3, y: -0.5, z: 0,   rx: -0.1, ry: 0.6, rz: 0.3,  s: 0.55 },
  { scroll: 0.24, x: -2.8, y: -1.5, z: 0.5, rx: -0.25,ry: 0.8, rz: 0.0,  s: 0.52 },
  { scroll: 0.30, x: -3.0, y: -0.5, z: 1.0, rx: -0.15,ry: 1.0, rz: -0.2, s: 0.55 },
  { scroll: 0.38, x: -2.5, y: 1.0,  z: 1.5, rx: -0.8, ry: 0.5, rz: -0.1, s: 0.6 },
  { scroll: 0.44, x: -3.0, y: 2.5,  z: 2.0, rx: -1.2, ry: 0.3, rz: 0,    s: 0.7 },
  { scroll: 0.52, x: -3.5, y: 1.5,  z: 1.0, rx: -0.5, ry: 0.0, rz: 0.3,  s: 0.55 },
  { scroll: 0.58, x: -4.0, y: 0.5,  z: 0.5, rx: 0.1,  ry: -0.3,rz: 0.5,  s: 0.5 },
  { scroll: 0.65, x: -3.5, y: -0.5, z: 0.8, rx: 0.15, ry: 0.8, rz: 0.3,  s: 0.55 },
  { scroll: 0.75, x: -2.5, y: -1.0, z: 1.0, rx: 0.2,  ry: 1.3, rz: -0.2, s: 0.6 },
  { scroll: 0.85, x: -3.5, y: 1.0,  z: -0.5,rx: -0.3, ry: 0.5, rz: 0.4,  s: 0.45 },
  { scroll: 1.00, x: -4.0, y: 3.0,  z: -3,  rx: -0.8, ry: 0,   rz: 0.5,  s: 0.3 },
];

// Catmull-Rom style interpolation between keyframes for smooth curves
function getPose(scroll: number, keyframes: Pose[]) {
  // Clamp
  if (scroll <= keyframes[0].scroll) return keyframes[0];
  if (scroll >= keyframes[keyframes.length - 1].scroll) return keyframes[keyframes.length - 1];

  // Find segment
  let i = 0;
  for (; i < keyframes.length - 1; i++) {
    if (scroll < keyframes[i + 1].scroll) break;
  }

  const a = keyframes[i];
  const b = keyframes[i + 1];
  const raw = (scroll - a.scroll) / (b.scroll - a.scroll);
  // Smoothstep for silky transitions
  const t = raw * raw * (3 - 2 * raw);

  return {
    scroll,
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t,
    z: a.z + (b.z - a.z) * t,
    rx: a.rx + (b.rx - a.rx) * t,
    ry: a.ry + (b.ry - a.ry) * t,
    rz: a.rz + (b.rz - a.rz) * t,
    s: a.s + (b.s - a.s) * t,
  };
}

// ── ASTRONAUT ───────────────────────────────────────────────
function Astronaut() {
  const { scene } = useGLTF('/models/astronaut.glb');
  const groupRef = useRef<THREE.Group>(null);
  const scrollRef = useRef(0);
  const cur = useRef({ x: 3.2, y: -0.6, z: 0, rx: 0, ry: -0.3, rz: 0, s: 1.5 });

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const mat = (mesh.material as THREE.MeshStandardMaterial).clone();
          mat.emissive = new THREE.Color('#F97316');
          mat.emissiveIntensity = 0.05;
          mesh.material = mat;
        }
      }
    });
    return clone;
  }, [scene]);

  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    const target = getPose(scrollRef.current, ASTRO);
    const speed = 6; // higher = snappier (frame-rate independent)
    const c = cur.current;

    // Smooth damp towards target (frame-rate independent)
    c.x = damp(c.x, target.x, speed, delta);
    c.y = damp(c.y, target.y, speed, delta);
    c.z = damp(c.z, target.z, speed, delta);
    c.rx = damp(c.rx, target.rx, speed * 0.7, delta);
    c.ry = damp(c.ry, target.ry, speed * 0.7, delta);
    c.rz = damp(c.rz, target.rz, speed * 0.7, delta);
    c.s = damp(c.s, target.s, speed, delta);

    // Layered organic idle motion
    const bob = Math.sin(t * 0.55) * 0.18 + Math.sin(t * 1.2) * 0.07;
    const sway = Math.sin(t * 0.38) * 0.12 + Math.cos(t * 0.72) * 0.05;
    const rock = Math.sin(t * 0.28) * 0.05;
    const nod = Math.cos(t * 0.42) * 0.04;
    const breathe = 1 + Math.sin(t * 0.7) * 0.025;

    groupRef.current.position.set(c.x + sway, c.y + bob, c.z + Math.sin(t * 0.22) * 0.08);
    groupRef.current.rotation.set(c.rx + rock, c.ry + nod, c.rz + Math.cos(t * 0.25) * 0.04);
    groupRef.current.scale.setScalar(c.s * breathe);
  });

  return (
    <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.3}>
      <group ref={groupRef}><primitive object={clonedScene} /></group>
    </Float>
  );
}

// ── ROCKET ──────────────────────────────────────────────────
function Rocket() {
  const groupRef = useRef<THREE.Group>(null);
  const scrollRef = useRef(0);
  const cur = useRef({ x: -3, y: 2, z: -2, rx: 0.3, ry: 0, rz: 0.8, s: 0.5 });
  const flameRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    const target = getPose(scrollRef.current, ROCKET);
    const speed = 5;
    const c = cur.current;

    c.x = damp(c.x, target.x, speed, delta);
    c.y = damp(c.y, target.y, speed, delta);
    c.z = damp(c.z, target.z, speed, delta);
    c.rx = damp(c.rx, target.rx, speed * 0.6, delta);
    c.ry = damp(c.ry, target.ry, speed * 0.6, delta);
    c.rz = damp(c.rz, target.rz, speed * 0.6, delta);
    c.s = damp(c.s, target.s, speed, delta);

    const wobble = Math.sin(t * 0.45) * 0.12 + Math.cos(t * 0.75) * 0.06;
    const drift = Math.cos(t * 0.32) * 0.1;

    groupRef.current.position.set(c.x + drift, c.y + wobble, c.z + Math.sin(t * 0.35) * 0.05);
    groupRef.current.rotation.set(c.rx + Math.sin(t * 0.25) * 0.04, c.ry + Math.sin(t * 0.18) * 0.06, c.rz + Math.cos(t * 0.22) * 0.03);
    groupRef.current.scale.setScalar(c.s);

    // Flame flicker
    if (flameRef.current) {
      const f = 0.8 + Math.sin(t * 14) * 0.12 + Math.sin(t * 22) * 0.06;
      flameRef.current.scale.set(f, 1 + Math.sin(t * 18) * 0.25, f);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh><cylinderGeometry args={[0.25, 0.35, 1.8, 16]} /><meshStandardMaterial color="#e5e7eb" metalness={0.7} roughness={0.3} /></mesh>
      <mesh position={[0, 1.2, 0]}><coneGeometry args={[0.25, 0.7, 16]} /><meshStandardMaterial color="#F97316" metalness={0.6} roughness={0.3} /></mesh>
      <mesh position={[0, 0.3, 0.26]}><sphereGeometry args={[0.12, 16, 16]} /><meshStandardMaterial color="#93c5fd" emissive="#60a5fa" emissiveIntensity={0.5} metalness={0.9} roughness={0.1} /></mesh>
      {[0, Math.PI * 0.66, Math.PI * 1.33].map((a, i) => (
        <mesh key={i} position={[Math.sin(a) * 0.35, -0.9, Math.cos(a) * 0.35]} rotation={[0, -a, 0]}>
          <boxGeometry args={[0.03, 0.5, 0.35]} /><meshStandardMaterial color="#F97316" metalness={0.5} roughness={0.4} />
        </mesh>
      ))}
      <mesh position={[0, -1.1, 0]}><cylinderGeometry args={[0.2, 0.12, 0.3, 16]} /><meshStandardMaterial color="#78716c" metalness={0.8} roughness={0.2} /></mesh>
      <mesh ref={flameRef} position={[0, -1.5, 0]}><coneGeometry args={[0.18, 0.8, 12]} /><meshBasicMaterial color="#FBBF24" transparent opacity={0.7} /></mesh>
      <mesh position={[0, -1.4, 0]}><coneGeometry args={[0.1, 0.5, 12]} /><meshBasicMaterial color="#ffffff" transparent opacity={0.5} /></mesh>
    </group>
  );
}

// ── ORBIT RING ──────────────────────────────────────────────
function OrbitRing({ radius, thickness, color, opacity, tiltX, speedMult }: {
  radius: number; thickness: number; color: string; opacity: number; tiltX: number; speedMult: number;
}) {
  const ringRef = useRef<THREE.Mesh>(null);
  const scrollRef = useRef(0);
  const posRef = useRef({ x: 3.2, y: -0.6 });

  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (!ringRef.current) return;
    const t = state.clock.getElapsedTime();
    const target = getPose(scrollRef.current, ASTRO);

    posRef.current.x = damp(posRef.current.x, target.x, 5, delta);
    posRef.current.y = damp(posRef.current.y, target.y, 5, delta);

    ringRef.current.position.set(posRef.current.x, posRef.current.y, 0);
    ringRef.current.rotation.x = tiltX + scrollRef.current * Math.PI;
    ringRef.current.rotation.z = t * 0.1 * speedMult;
    ringRef.current.scale.setScalar(target.s * 0.6);
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, thickness, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

// ── SPACE DUST ──────────────────────────────────────────────
function SpaceDust() {
  const pointsRef = useRef<THREE.Points>(null);
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const positions = useMemo(() => {
    const pos = new Float32Array(250 * 3);
    for (let i = 0; i < 250; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.01 + scrollRef.current * 0.5;
    pointsRef.current.rotation.x = scrollRef.current * 0.12;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#F97316" size={0.025} transparent opacity={0.3} sizeAttenuation />
    </points>
  );
}

// ── LIGHTS ───────────────────────────────────────────────────
function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-3, 2, 4]} intensity={1} color="#F97316" />
      <pointLight position={[4, -3, 2]} intensity={0.5} color="#FBBF24" />
      <pointLight position={[0, 5, -3]} intensity={0.3} color="#FB923C" />
    </>
  );
}

// ── MAIN ────────────────────────────────────────────────────
export const Scroll3DScene: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  if (!mounted || reducedMotion) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <SceneLights />
        <Suspense fallback={null}><Astronaut /></Suspense>
        <Rocket />
        <OrbitRing radius={3.5} thickness={0.012} color="#F97316" opacity={0.25} tiltX={Math.PI / 3} speedMult={1} />
        <OrbitRing radius={4} thickness={0.008} color="#FBBF24" opacity={0.15} tiltX={Math.PI / 2} speedMult={0.7} />
        <SpaceDust />
      </Canvas>
    </div>
  );
};

useGLTF.preload('/models/astronaut.glb');
