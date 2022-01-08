import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import waterVertexShader from '@/shaders/water/vertex.glsl'
import waterFragmentShader from '@/shaders/water/fragment.glsl'
import DatGui from 'react-dat-gui'

const Plane = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const meshRef = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)

  useFrame((state, delta) => {
    meshRef.current.material.uniforms.uTime.value += delta
  })

  useEffect(() => {
    setTimeout(() => {
      console.log(meshRef.current.material.uniforms.uTime.value)
    }, 1000)
  }, [])

  return (
    <>
      <mesh
        {...props}
        ref={meshRef}
      >
        <planeGeometry args={[10, 5, 128, 128]} />
        <shaderMaterial 
          color={hovered ? 'hotpink' : 'orange'}
          side={THREE.DoubleSide}
          vertexShader={waterVertexShader}
          fragmentShader={waterFragmentShader}
          wireframe={true}
          uniforms={
            { 
              uBigWavesElevation: { value: 0.2 },
              uBigWavesFrequency: { value: new THREE.Vector2(4, 1.5) },
              uTime: { value: 0 }
            }
          }
        />
      </mesh>
    </>
  )
}

export default Plane
