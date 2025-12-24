'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Profile3D() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

        const size = window.innerWidth >= 768 ? 720 : 550;
        renderer.setSize(size, size);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        camera.position.z = 7;

        const colorPalette = [
            new THREE.Color(0x5e62ff),
            new THREE.Color(0x9966ff),
            new THREE.Color(0xff66b2),
            new THREE.Color(0x66b2ff),
        ];

        // Create small spherical particles
        const sphereParticles: THREE.Mesh[] = [];
        const particleCount = 150;

        for (let i = 0; i < particleCount; i++) {
            const angle = (i / particleCount) * Math.PI * 2;
            const radius = 2.8 + Math.random() * 0.4;
            const particleSize = 0.04 + Math.random() * 0.03;
            const particleGeo = new THREE.SphereGeometry(particleSize, 12, 12);
            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            const particleMat = new THREE.MeshBasicMaterial({
                color: color,
                transparent: true,
                opacity: 0.7,
            });
            const particle = new THREE.Mesh(particleGeo, particleMat);
            particle.position.x = Math.cos(angle) * radius;
            particle.position.y = (Math.random() - 0.5) * 0.6;
            particle.position.z = Math.sin(angle) * radius;
            (particle as any).userData = { angle, radius, speed: 0.001 + Math.random() * 0.001 };
            sphereParticles.push(particle);
            scene.add(particle);
        }

        // Create glowing ring
        const ringGeometry = new THREE.TorusGeometry(2.8, 0.03, 16, 100);
        const ringMaterial = new THREE.MeshBasicMaterial({
            color: 0x5e62ff,
            transparent: true,
            opacity: 0.6,
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / 2;
        scene.add(ring);

        // Create outer ring
        const outerRingGeometry = new THREE.TorusGeometry(3.4, 0.025, 16, 100);
        const outerRingMaterial = new THREE.MeshBasicMaterial({
            color: 0x9966ff,
            transparent: true,
            opacity: 0.4,
        });
        const outerRing = new THREE.Mesh(outerRingGeometry, outerRingMaterial);
        outerRing.rotation.x = Math.PI / 2;
        scene.add(outerRing);

        // Create orbiting spheres
        const orbitingSpheres: THREE.Mesh[] = [];
        const sphereColors = [0x5e62ff, 0x9966ff, 0xff66b2, 0x66ffff];

        for (let i = 0; i < 6; i++) {
            const sphereGeometry = new THREE.SphereGeometry(0.08 + Math.random() * 0.04, 24, 24);
            const sphereMaterial = new THREE.MeshBasicMaterial({
                color: sphereColors[i % sphereColors.length],
                transparent: true,
                opacity: 0.85,
            });
            const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
            (sphere as any).userData = {
                angle: (i / 6) * Math.PI * 2,
                radius: 3.0 + i * 0.1,
                speed: 0.002 + i * 0.0005,
                yOffset: (Math.random() - 0.5) * 0.3,
            };
            orbitingSpheres.push(sphere);
            scene.add(sphere);
        }

        let time = 0;
        let animationId: number;

        const animate = () => {
            animationId = requestAnimationFrame(animate);
            time += 0.005;

            // Animate sphere particles
            sphereParticles.forEach((particle, index) => {
                const userData = (particle as any).userData;
                userData.angle += userData.speed;
                particle.position.x = Math.cos(userData.angle) * userData.radius;
                particle.position.z = Math.sin(userData.angle) * userData.radius;
                particle.position.y = Math.sin(time * 1.5 + index * 0.15) * 0.5;
            });

            // Animate rings
            ring.rotation.z += 0.0005;
            outerRing.rotation.z -= 0.0003;

            // Animate orbiting spheres
            orbitingSpheres.forEach((sphere, index) => {
                const userData = (sphere as any).userData;
                userData.angle += userData.speed;
                sphere.position.x = Math.cos(userData.angle) * userData.radius;
                sphere.position.z = Math.sin(userData.angle) * userData.radius;
                sphere.position.y = Math.sin(time + index) * 0.2 + userData.yOffset;
                const scale = 1 + Math.sin(time * 1.5 + index) * 0.15;
                sphere.scale.set(scale, scale, scale);
            });

            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            const newSize = window.innerWidth >= 768 ? 720 : 550;
            renderer.setSize(newSize, newSize);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            renderer.dispose();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute w-[550px] h-[550px] md:w-[720px] md:h-[720px]"
            style={{ zIndex: 1 }}
        />
    );
}
