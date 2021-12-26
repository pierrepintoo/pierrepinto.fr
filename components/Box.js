import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

const Box = () => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  /* eslint arrow-body-style: ["error", "always"] */
  /* eslint-env es6 */
  useFrame(() => {
    /* eslint no-return-assign: "error" */
    return (ref.current.rotation.x += 0.01)
  })
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => {
        return click(!clicked)
      }}
      onPointerOver={() => {
        return hover(true)
      }}
      onPointerOut={() => {
        return hover(false)
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default Box
