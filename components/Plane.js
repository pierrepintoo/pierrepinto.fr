import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import waterVertexShader from '@/shaders/water/vertex.glsl'
import waterFragmentShader from '@/shaders/water/fragment.glsl'

const Plane = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const meshRef = useRef()
  
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)

  useFrame(({ mouse }, delta) => {
    meshRef.current.material.uniforms.uTime.value += delta
    meshRef.current.material.uniforms.uBigWavesFrequency.value = new THREE.Vector2(mouse.x * 3 + 0.2, mouse.y * 3 + 0.2)
  })

  const debugObject = {
    depthColor: '#abffdf',
    surfaceColor: '#324a41'
  }

  return (
    <>
      <mesh
        {...props}
        ref={meshRef}
      >
        <planeGeometry args={[20, 10, 512, 512]} />
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
              uColorMultiplier: { value: 2 },
              uColorOffset: { value: 0.0 }
            }
          }
        />
      </mesh>
    </>
  )
}

export default Plane
