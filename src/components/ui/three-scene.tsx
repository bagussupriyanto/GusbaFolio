"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const container = containerRef.current;
    let animationFrameId: number;

    // 1. Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5.5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Purple Cyber Lighting (Matching Screenshot 1, 2 & 3)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const purpleBacklight = new THREE.PointLight(0xc084fc, 8, 40);
    purpleBacklight.position.set(0, 0.5, -2);
    scene.add(purpleBacklight);

    const orbGeo = new THREE.SphereGeometry(0.18, 32, 32);
    const orbMat = new THREE.MeshBasicMaterial({ color: 0xd8b4fe });
    const orbMesh = new THREE.Mesh(orbGeo, orbMat);
    orbMesh.position.set(1.2, 1.8, -1);
    scene.add(orbMesh);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(2, 4, 5);
    scene.add(keyLight);

    // 3. Main Avatar Master Group
    const avatarMasterGroup = new THREE.Group();
    avatarMasterGroup.position.set(0, -0.6, 0);

    // --- BUST AVATAR GROUP (For Hero & About Sections - Screenshot 1 & 2) ---
    const bustGroup = new THREE.Group();

    // Head
    const headGeo = new THREE.SphereGeometry(0.9, 32, 32);
    headGeo.scale(1, 1.15, 0.95);
    const headMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.3, metalness: 0.1 });
    const headMesh = new THREE.Mesh(headGeo, headMat);
    headMesh.position.y = 0.5;
    bustGroup.add(headMesh);

    // Hair
    const hairGeo = new THREE.SphereGeometry(0.93, 32, 32);
    hairGeo.scale(1.02, 0.7, 0.96);
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5 });
    const hairMesh = new THREE.Mesh(hairGeo, hairMat);
    hairMesh.position.set(0, 0.85, 0.02);
    bustGroup.add(hairMesh);

    // Ears
    const earGeo = new THREE.SphereGeometry(0.22, 16, 16);
    earGeo.scale(0.5, 1, 0.6);
    const leftEar = new THREE.Mesh(earGeo, headMat); leftEar.position.set(-0.92, 0.45, 0); bustGroup.add(leftEar);
    const rightEar = new THREE.Mesh(earGeo, headMat); rightEar.position.set(0.92, 0.45, 0); bustGroup.add(rightEar);

    // Eyes & Pupils
    const eyesGroup = new THREE.Group();
    eyesGroup.position.set(0, 0.55, 0.82);
    const eyeSocketGeo = new THREE.SphereGeometry(0.18, 32, 32);
    const eyeSocketMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const leftEyeSocket = new THREE.Mesh(eyeSocketGeo, eyeSocketMat); leftEyeSocket.position.x = -0.32; eyesGroup.add(leftEyeSocket);
    const rightEyeSocket = new THREE.Mesh(eyeSocketGeo, eyeSocketMat); rightEyeSocket.position.x = 0.32; eyesGroup.add(rightEyeSocket);

    const pupilGeo = new THREE.SphereGeometry(0.09, 32, 32);
    const pupilMat = new THREE.MeshBasicMaterial({ color: 0x1e1b4b });
    const leftPupil = new THREE.Mesh(pupilGeo, pupilMat); leftPupil.position.set(-0.32, 0, 0.12); eyesGroup.add(leftPupil);
    const rightPupil = new THREE.Mesh(pupilGeo, pupilMat); rightPupil.position.set(0.32, 0, 0.12); eyesGroup.add(rightPupil);
    bustGroup.add(eyesGroup);

    // Eyebrows & Nose
    const eyebrowGeo = new THREE.BoxGeometry(0.25, 0.04, 0.05);
    const eyebrowMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });
    const leftEyebrow = new THREE.Mesh(eyebrowGeo, eyebrowMat); leftEyebrow.position.set(-0.32, 0.76, 0.84); leftEyebrow.rotation.z = 0.05; bustGroup.add(leftEyebrow);
    const rightEyebrow = new THREE.Mesh(eyebrowGeo, eyebrowMat); rightEyebrow.position.set(0.32, 0.76, 0.84); rightEyebrow.rotation.z = -0.05; bustGroup.add(rightEyebrow);

    const noseGeo = new THREE.ConeGeometry(0.08, 0.25, 16);
    const noseMesh = new THREE.Mesh(noseGeo, headMat); noseMesh.position.set(0, 0.42, 0.9); noseMesh.rotation.x = -0.2; bustGroup.add(noseMesh);

    // Neck & Shoulders
    const neckGeo = new THREE.CylinderGeometry(0.28, 0.32, 0.4, 32);
    const neckMesh = new THREE.Mesh(neckGeo, headMat); neckMesh.position.set(0, -0.2, 0); bustGroup.add(neckMesh);

    const shouldersGeo = new THREE.SphereGeometry(1.4, 32, 32); shouldersGeo.scale(1.2, 0.7, 0.8);
    const shirtMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 });
    const shouldersMesh = new THREE.Mesh(shouldersGeo, shirtMat); shouldersMesh.position.set(0, -1.0, -0.1); bustGroup.add(shouldersMesh);

    avatarMasterGroup.add(bustGroup);

    // --- 3D WORKSTATION DESK & TYPING DEVELOPER GROUP (For "WHAT I DO" Bento - Screenshot 3) ---
    const deskGroup = new THREE.Group();
    deskGroup.position.set(0.8, -0.2, 0);
    deskGroup.scale.set(0.001, 0.001, 0.001); // Hidden initially

    // 3D Desk Table Top
    const tableGeo = new THREE.BoxGeometry(3.2, 0.08, 1.4);
    const tableMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.2 });
    const tableMesh = new THREE.Mesh(tableGeo, tableMat);
    tableMesh.position.set(0, -0.4, 0);
    deskGroup.add(tableMesh);

    // 4 Table Legs
    const legGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.2, 16);
    const legMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8 });
    [[-1.4, -0.7], [1.4, -0.7], [-1.4, 0.5], [1.4, 0.5]].forEach(([lx, lz]) => {
      const leg = new THREE.Mesh(legGeo, legMat);
      leg.position.set(lx, -1.0, lz);
      deskGroup.add(leg);
    });

    // 3D Monitor Display Screen Facing Developer (Purple Glow)
    const monitorFrameGeo = new THREE.BoxGeometry(1.8, 1.2, 0.08);
    const monitorFrameMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.9 });
    const monitorFrame = new THREE.Mesh(monitorFrameGeo, monitorFrameMat);
    monitorFrame.position.set(0.6, 0.4, -0.2);
    monitorFrame.rotation.y = -Math.PI / 6;
    deskGroup.add(monitorFrame);

    const monitorGlassGeo = new THREE.PlaneGeometry(1.7, 1.1);
    const monitorGlassMat = new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0xa855f7, emissiveIntensity: 0.6 });
    const monitorGlass = new THREE.Mesh(monitorGlassGeo, monitorGlassMat);
    monitorGlass.position.set(0.58, 0.4, -0.15);
    monitorGlass.rotation.y = -Math.PI / 6;
    deskGroup.add(monitorGlass);

    // 3D Keyboard Base & Typing Hands
    const keyboardGeo = new THREE.BoxGeometry(0.9, 0.04, 0.4);
    const keyboardMat = new THREE.MeshStandardMaterial({ color: 0x0f172a });
    const keyboardMesh = new THREE.Mesh(keyboardGeo, keyboardMat);
    keyboardMesh.position.set(-0.2, -0.34, 0.1);
    keyboardMesh.rotation.y = -Math.PI / 6;
    deskGroup.add(keyboardMesh);

    // 3D Chair
    const chairSeatGeo = new THREE.BoxGeometry(0.8, 0.08, 0.8);
    const chairMesh = new THREE.Mesh(chairSeatGeo, tableMat);
    chairMesh.position.set(-1.0, -0.7, 0.1);
    deskGroup.add(chairMesh);

    avatarMasterGroup.add(deskGroup);

    scene.add(avatarMasterGroup);

    // 4. Mouse Interactivity Engine
    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // 5. GSAP ScrollTrigger Master Sequence (Matching Screenshots 1, 2 & 3)
    const ctx = gsap.context(() => {
      // Timeline 1: Hero (Screenshot 1) -> About Section (Screenshot 2)
      gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "top top",
          scrub: 1,
        }
      })
      .to(avatarMasterGroup.position, { x: -2.3, y: -0.6, z: 0.2 })
      .to(avatarMasterGroup.rotation, { y: 0.35, x: 0 }, 0)
      .to(orbMesh.position, { x: -3.2, y: 1.8, z: -1 }, 0);

      // Timeline 2: About (Screenshot 2) -> "WHAT I DO" Value Bento (Screenshot 3)
      // Avatar rotates side-profile, sits at desk, and desk scales up smoothly!
      gsap.timeline({
        scrollTrigger: {
          trigger: "#value",
          start: "top bottom",
          end: "top top",
          scrub: 1,
        }
      })
      .to(avatarMasterGroup.position, { x: -0.5, y: -0.4, z: 0.5 })
      .to(avatarMasterGroup.rotation, { y: -Math.PI / 3.5, x: 0.1 }, 0)
      .to(deskGroup.scale, { x: 1, y: 1, z: 1 }, 0)
      .to(bustGroup.position, { y: -0.2, z: -0.4 }, 0)
      .to(orbMesh.position, { x: 1.8, y: 0.5, z: -1 }, 0);

      // Timeline 3: Value Bento (Screenshot 3) -> Selected Works Deck
      gsap.timeline({
        scrollTrigger: {
          trigger: "#projects",
          start: "top bottom",
          end: "top top",
          scrub: 1,
        }
      })
      .to(avatarMasterGroup.position, { x: -3.8, y: -1.2, z: -2 })
      .to(avatarMasterGroup.scale, { x: 0.7, y: 0.7, z: 0.7 }, 0);

      // Timeline 4: Projects -> Contact Section
      gsap.timeline({
        scrollTrigger: {
          trigger: "#contact",
          start: "top bottom",
          end: "top top",
          scrub: 1,
        }
      })
      .to(avatarMasterGroup.position, { x: 0, y: -0.6, z: 0 })
      .to(avatarMasterGroup.scale, { x: 1, y: 1, z: 1 }, 0)
      .to(avatarMasterGroup.rotation, { y: 0, x: 0 }, 0)
      .to(deskGroup.scale, { x: 0.001, y: 0.001, z: 0.001 }, 0);
    });

    // 6. 60fps WebGL Render Loop with Interactive Eye Tracking & Typing Motion
    const animate = () => {
      mouse.x += (targetMouse.x - mouse.x) * 0.08;
      mouse.y += (targetMouse.y - mouse.y) * 0.08;

      // Head Eye Tracking
      bustGroup.rotation.y = mouse.x * 0.35;
      bustGroup.rotation.x = -mouse.y * 0.25;

      leftPupil.position.x = -0.32 + mouse.x * 0.06;
      leftPupil.position.y = -mouse.y * 0.05;

      rightPupil.position.x = 0.32 + mouse.x * 0.06;
      rightPupil.position.y = -mouse.y * 0.05;

      // Subtle Typing animation for desk hands
      keyboardMesh.position.y = -0.34 + Math.sin(Date.now() * 0.01) * 0.005;

      // Floating Orb motion
      orbMesh.position.y += Math.sin(Date.now() * 0.002) * 0.002;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      ctx.revert();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      headGeo.dispose(); headMat.dispose();
      hairGeo.dispose(); hairMat.dispose();
      earGeo.dispose();
      eyeSocketGeo.dispose(); eyeSocketMat.dispose();
      pupilGeo.dispose(); pupilMat.dispose();
      eyebrowGeo.dispose(); eyebrowMat.dispose();
      noseGeo.dispose(); neckGeo.dispose();
      shouldersGeo.dispose(); shirtMat.dispose();
      tableGeo.dispose(); tableMat.dispose();
      legGeo.dispose(); legMat.dispose();
      monitorFrameGeo.dispose(); monitorFrameMat.dispose();
      monitorGlassGeo.dispose(); monitorGlassMat.dispose();
      keyboardGeo.dispose(); keyboardMat.dispose();
      chairSeatGeo.dispose(); orbGeo.dispose(); orbMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-90"
      aria-hidden="true"
    />
  );
};
