import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import waterVertexShader from '@/shaders/water/vertex.glsl'
import waterFragmentShader from '@/shaders/water/fragment.glsl'

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

  const debugObject = {
    depthColor: '#05ff9b',
    surfaceColor: '#000'
  }

  return (
    <>
      <mesh
        {...props}
        ref={meshRef}
      >
        <planeGeometry args={[20, 10, 128, 128]} />
        <shaderMaterial 
          color={hovered ? 'hotpink' : 'orange'}
          side={THREE.DoubleSide}
          vertexShader={waterVertexShader}
          fragmentShader={waterFragmentShader}
          wireframe={false}
          uniforms={
            { 
              uBigWavesElevation: { value: 0.2 },
              uBigWavesFrequency: { value: new THREE.Vector2(2, 1.5) },
              uTime: { value: 0 },
              uBigWavesSpeed: { value: 2 },
              uDepthColor: { value: new THREE.Color(debugObject.depthColor) },
              uSurfaceColor: { value: new THREE.Color(debugObject.surfaceColor) },
              uColorMultiplier: { value: 0.08 },
              uColorOffset: { value: 5 }
            }
          }
        />
      </mesh>
    </>
  )
}

export default Plane
