import {Canvas, useFrame} from "@react-three/fiber";
import {useEffect, useMemo, useRef} from "react";
import * as THREE from "three";
import './orbitBackgroundStyles.scss';

import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';

const CustomGeometryParticles = (props) => {
    const { count } = props;
    const radius = 5;
    const maxScroll = 1000;
    const scrollRef = useRef(0);
    const scaleFactor = 5

    const points = useRef();

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const distance = Math.sqrt(Math.random() - 0.5) * radius;
            const theta = THREE.MathUtils.randFloatSpread(360);
            const phi = THREE.MathUtils.randFloatSpread(360);

            let x = distance * Math.sin(theta) * Math.cos(phi);
            let y = distance * Math.sin(theta) * Math.sin(phi);
            let z = distance * Math.cos(theta);

            // adjust initial position based on scroll position
            const initialScroll = scrollRef.current;
            const scrollFactor = (initialScroll / maxScroll);
            const angle = Math.atan2(y, x);
            const distanceFromCenter = Math.sqrt(x*x + y*y + z*z);
            const distanceFromAxis = distanceFromCenter * Math.sin(angle + scrollFactor * Math.PI * 2);
            x = distanceFromAxis * Math.cos(theta) * Math.cos(phi);
            y = distanceFromAxis * Math.cos(theta) * Math.sin(phi);
            z = distanceFromAxis * Math.sin(theta);

            positions.set([x, y, z], i * 3);
        }

        return positions;
    }, [count, maxScroll, radius]);

    const uniforms = useMemo(
        () => ({
            uTime: {
                value: 0.0,
            },
            uRadius: {
                value: radius,
            },
        }),
        [radius]
    );

    useEffect( () =>{
        window.scrollTo(0,0)
    },[])
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const radius = (scrollPosition / maxScroll) * scaleFactor;
            uniforms.uRadius.value = -radius/5;
            scrollRef.current = scrollPosition;
        };

        // Initialize scrollRef to the current window scroll position
        scrollRef.current = window.scrollY;
        const radius = (scrollRef.current / maxScroll) * 3;
        uniforms.uRadius.value = radius;

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [maxScroll, uniforms]);


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
    const COUNT = 7000

    return (
        <div className={"canvas"}>
            <Canvas camera={{position: [0.8, 0.8, 0.8]}}>
                <ambientLight intensity={0.5}/>
                <CustomGeometryParticles count={COUNT}/>
                {/*<OrbitControls enablePan={true} enableRotate={false} enableZoom={false}></OrbitControls>*/}
            </Canvas>
        </div>
    );
};

export default Scene;
