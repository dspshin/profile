import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Float, Box, Html } from "@react-three/drei";
import Loader from "../Loader";

const ComputerModel = () => {
    return (
        <group>
            {/* Monitor Screen (Frame) - Zero Bezel */}
            <Box args={[3.0, 2.05, 0.2]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#333" roughness={0.5} />
            </Box>

            {/* Monitor Display (Black Background) */}
            <Box args={[3.0, 2.05, 0.05]} position={[0, 0, 0.105]}>
                <meshStandardMaterial color="#000" />
            </Box>

            {/* HTML Screen Content */}
            <group position={[0, 0, 0.14]}>
                <Html
                    transform
                    occlude
                    position={[0, 0, 0]}
                    scale={[0.4, 0.4, 0.4]}
                    style={{
                        width: '300px',
                        height: '205px',
                        background: '#0a0a0a',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid #333',
                        borderRadius: '4px',
                        padding: '10px'
                    }}
                >
                    <div style={{ color: '#00ff00', fontFamily: 'monospace', fontSize: '10px', width: '100%', textAlign: 'left' }}>
                        <span style={{ color: '#ff00ff' }}>const</span> <span style={{ color: '#ffff00' }}>dsp_stack</span> = {'{'}
                        <br />&nbsp;&nbsp;frontend: [<span style={{ color: '#00ffff' }}>"Vue"</span>, <span style={{ color: '#00ffff' }}>"React"</span>, <span style={{ color: '#00ffff' }}>"Nuxt"</span>],
                        <br />&nbsp;&nbsp;backend: [<span style={{ color: '#00ffff' }}>"Python"</span>, <span style={{ color: '#00ffff' }}>"Node"</span>],
                        <br />&nbsp;&nbsp;platform: [<span style={{ color: '#00ffff' }}>"Tizen"</span>, <span style={{ color: '#00ffff' }}>"AI"</span>]
                        <br />{'}'};
                        <br />
                        <br />
                        <span style={{ animation: 'blink 1s step-end infinite' }}>_</span>
                        <style>{`
                    @keyframes blink { 50% { opacity: 0; } }
                `}</style>
                    </div>
                </Html>
            </group>

            {/* Monitor Stand Neck */}
            <Box args={[0.3, 1.2, 0.2]} position={[0, -1.3, -0.2]} rotation={[0.2, 0, 0]}>
                <meshStandardMaterial color="#222" />
            </Box>

            {/* Monitor Base */}
            <Box args={[1.5, 0.15, 1.0]} position={[0, -1.9, -0.2]}>
                <meshStandardMaterial color="#222" />
            </Box>

            {/* Keyboard */}
            <group position={[0, -2.0, 1.5]} rotation={[-0.2, 0, 0]}>
                <Box args={[3.2, 0.15, 1.2]}>
                    <meshStandardMaterial color="#444" />
                </Box>
                <Box args={[2.8, 0.05, 0.8]} position={[0, 0.1, 0]}>
                    <meshStandardMaterial color="#222" />
                </Box>
            </group>
        </group>
    )
}

const TechHub = ({ isMobile }) => {
    const group = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Gentle floating
        group.current.rotation.y = Math.sin(t / 8) / 8; // Reduced rotation so interaction is easier reading
        group.current.position.y = Math.sin(t / 2) / 8;
    });

    const scale = isMobile ? 0.5 : 0.8;

    return (
        <group ref={group} scale={[scale, scale, scale]} dispose={null} rotation={[0.1, 0, 0]}>
            <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
                <ComputerModel />
            </Float>

            <ambientLight intensity={1} />
            <pointLight position={[0, 1, 2]} intensity={2} color="#ffffff" distance={10} />
        </group>
    );
};

const ComputersCanvas = () => {
    return (
        <Canvas
            frameloop='always'
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 0, 10], fov: 45 }}
            gl={{ preserveDrawingBuffer: true, antialias: true }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    enableZoom={false}
                    autoRotate={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-5, 5, 5]} intensity={1} />
                <TechHub />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
