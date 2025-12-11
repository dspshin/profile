
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useTexture } from "@react-three/drei";
import * as THREE from "three";

import Loader from "../Loader";

const ArrowMarker = ({ position }) => {
    const groupRef = useRef();
    const ringRef = useRef();

    // Calculate orientation: Align Y-axis to the Surface Normal
    React.useLayoutEffect(() => {
        if (groupRef.current) {
            const tempObj = new THREE.Object3D();
            const posVec = new THREE.Vector3(...position);
            const normal = posVec.clone().normalize();
            // Align +Y to Normal (Outwards)
            tempObj.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
            groupRef.current.quaternion.copy(tempObj.quaternion);
        }
    }, [position]);

    // Internal Ref for the Pin parts to bob
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (ringRef.current) {
            // Pulse cycle: 1.5 seconds
            const cycle = (t % 1.5) / 1.5;
            const scale = 1 + cycle * 2;
            ringRef.current.scale.set(scale, scale, 1);

            // Opacity: Fade out
            ringRef.current.material.opacity = 1 - cycle;

            // Color Interpolation
            // Start: White/Yellow (#ffff00 or #ffffff) -> End: Purple (#915eff)
            const startColor = new THREE.Color("#ffffff");
            const endColor = new THREE.Color("#915eff");

            // Lerp color
            ringRef.current.material.color.lerpColors(startColor, endColor, cycle);
        }
    });

    return (
        <group position={position} ref={groupRef}>
            {/* Pulsing Ring - Flat on Surface (XZ Plane) */}
            {/* Standard Ring is XY. Rotate -90 X to make it XZ. */}
            <mesh ref={ringRef} position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.03, 0.08, 32]} />
                <meshBasicMaterial color="#915eff" transparent opacity={0.5} side={2} />
            </mesh>

            {/* Pin removed as requested, leaving only the pulse */}
        </group>
    );
};

const Earth = () => {
    const [colorMap, normalMap, specularMap] = useTexture([
        '/planet/earth_daymap.jpg',
        '/planet/earth_normal.jpg',
        '/planet/earth_specular.jpg'
    ]);

    // South Korea Coordinates
    // Lat: 36.5 N, Lon: 127.5 E
    const lat = 36.5;
    const lon = 127.5;

    // Convert to Cartesian (Radius = 1)
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const r = 1.005; // Slightly above surface
    const x = -r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.cos(phi);
    const z = r * Math.sin(phi) * Math.sin(theta);

    return (
        <group scale={2.5}>
            <mesh>
                <sphereGeometry args={[1, 128, 128]} />
                <meshPhongMaterial
                    map={colorMap}
                    normalMap={normalMap}
                    specularMap={specularMap}
                    shininess={10}
                />
            </mesh>

            <ArrowMarker position={[x, y, z]} />
        </group>
    );
};

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                />
                <ambientLight intensity={2.5} />
                <directionalLight position={[5, 3, 5]} intensity={2} />
                <Earth />
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;
