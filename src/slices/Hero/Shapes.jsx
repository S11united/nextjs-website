"use client"

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";


export default function Shapes(){
    return(
        <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
            <Canvas className="z-0" shadows gl = {{antialias: false}} 
            dpr={[1, 1.5]}
            camera={{position: [0,0,25], fov: 30, near: 1, far: 40}}
           >
            <Suspense fallback = {null}>
                <Geometries/>
                <ContactShadows
                    position={[0, -3.6, 0]}
                    opacity={6}
                    scale={48}
                    blur={0.9}
                    far={9}
               /> 

               <Environment preset="studio"/>

                
            </Suspense>

            </Canvas>
        </div>
    )
}

function Geometries(){
    const geometries = [
        {
            position: [0,0,0],
            r: 0.4,
            geometry: new THREE.IcosahedronGeometry(3) //gem

        },
        {
            position: [1,-0.75,4],
            r: 0.2,
            geometry: new THREE.CapsuleGeometry(0.5, 1.5, 5, 11) //pill

        },
        {
            position: [-1.8,2,-4],
            r: 0.2,
            geometry: new THREE.DodecahedronGeometry(1.5) //football

        },
        {
            position: [-0.8,-0.75,5],
            r: 0.4,
            geometry: new THREE.TorusGeometry(0.6,0.25,10,32) //donut

        },
        {
            position: [1.6,1.6,-4],
            r: 0.8,
            geometry: new THREE.OctahedronGeometry(1.8) //diamond

        },
    ];

    const materials = [
       
        new THREE.MeshStandardMaterial({
            roughness: 0.3,
            metalness: 2,
            color: 0x22a6b3,
        }),

        new THREE.MeshStandardMaterial({
            roughness: 0,
            metalness: 1,
            color: 0xEA2027,
        }), 
        
        new THREE.MeshStandardMaterial({
            roughness: 0,
            metalness: 1,
            color: 0xf9ca24,
        }), 
        new THREE.MeshStandardMaterial({
            roughness: 0,
            metalness: 3,
            color: 0x1e272e,
        }), 

        new THREE.MeshStandardMaterial({
            roughness: 0,
            metalness: 2,
            color: 0x2c2c54,
        }), 
        


    ];


    const soundEffects = [
        new Audio("/sounds/knock1.ogg"),
        new Audio("/sounds/knock2.ogg"),
        new Audio("/sounds/knock3.ogg"),

    ]

    return geometries.map(({position, r, geometry}) => (
        <Geometry 
        key={JSON.stringify(position)}
        position={position.map((p) => p*2)}
        geometry={geometry}
        materials={materials}
        soundEffects = {soundEffects}
        r = {r*1.4}
        />
    ) )

    //Pass to Geometry
}

function Geometry({r, position, geometry, materials, soundEffects}){
    const meshRef = useRef()
    const [visible, setVisible] = useState(false)
    const startingMaterial = getRandomMaterial()
     function getRandomMaterial(){
        return gsap.utils.random(materials)
     }

     function handleclick(e){
        const mesh = e.object;

        gsap.utils.random(soundEffects).play()

        gsap.to(mesh.rotation,{
            x: `+= ${gsap.utils.random(1,4)}`,
            y: `+= ${gsap.utils.random(2,4)}`,
            z: `+= ${gsap.utils.random(3,6)}`,
            duration: 1,
            ease: "elastic.out(4, 2.9)",
            yoyo: true

        });

        mesh.material = getRandomMaterial();


     }

     const handlePointerOver = () => {
        document.body.style.cursor = "pointer"
     }

     
     const handlePointerOut = () => {
        document.body.style.cursor = "default"
     };

    useEffect(() => {
        let ctx = gsap.context(() => {
            setVisible(true)
            gsap.from(meshRef.current.scale, {
                x: 0,
                y:0,
                z:0,
                duration: 1,
                ease: "elastic.out(1, 0.3)",
                delay: 0.3
            });
        });
        return () => ctx.revert() //cleanup
    }, [] );

   
    
 


return(
    <group position={position} ref={meshRef}>
        <Float speed = {6*r} 
        rotationIntensity={7*r}
        floatIntensity={5*r}>
            <mesh
            geometry={geometry}
            onClick={handleclick}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
            visible = {visible}
            material={startingMaterial}
            ></mesh>
        </Float>
    </group>
)


}