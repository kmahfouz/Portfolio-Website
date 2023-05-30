import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import './orbitBackgroundStyles.scss';

import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';

const CustomGeometryParticles = (props) => {
    const { count } = props;
    const radius = 3;

    // This reference gives us direct access to our points
    const points = useRef();

    // Generate our positions attributes array
    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const distance = Math.sqrt((Math.random() - 0.5)) * radius;
            const theta = THREE.MathUtils.randFloatSpread(360);
            const phi = THREE.MathUtils.randFloatSpread(360);

            let x = distance * Math.sin(theta) * Math.cos(phi)
            let y = distance * Math.sin(theta) * Math.sin(phi);
            let z = distance * Math.cos(theta);

            positions.set([x, y, z], i * 3);
        }

        return positions;
    }, [count]);

    const uniforms = useMemo(() => ({
        uTime: {
            value: 0.0
        },
        uRadius: {
            value: radius
        }
    }), [])

    useFrame((state) => {
        const { clock } = state;

        points.current.material.uniforms.uTime.value = clock.elapsedTime;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.length / 3}
                    array={particlesPosition}
                    itemSize={3}
                />
            </bufferGeometry>
            <shaderMaterial
                blending={THREE.AdditiveBlending}
                depthWrite={false}
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
            />
        </points>
    );
};

const Scene = () => {
    return (
        <div className={"canvas"}>
        <Canvas camera={{ position: [0.8, 0.8, 0.8] }}>
            <ambientLight intensity={0.5} />
            <CustomGeometryParticles count={5000} />
        </Canvas>
        </div>
    );
};

export default Scene;
