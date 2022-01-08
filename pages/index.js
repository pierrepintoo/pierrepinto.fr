import { useState } from 'react'
import Head from 'next/head'
import { Canvas } from '@react-three/fiber'
import Plane from '@/components/Plane'

export default function Home() {

  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  const onMouseMove = (e) => {
    e.persist()
    // console.log('hello', e.screenX, e.screenY)
    // setMouseX(e.screenX)
    // setMouseY(e.screenY)
  }

  return (
    <div 
      className="container"
      onMouseMove={(e) => onMouseMove(e)}
      >
      <Head>
        <title>Pierre Pinto de Oliveira Portfolio</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap" rel="stylesheet" /> 
      </Head>
      <div className="container__titles">
        <h1 className="title">Hello 🌞</h1>
        <h2 className="title title--medium">Hope you're fine :)</h2>
        <h2 className="title title--medium">Here is some of my works.</h2>
      </div>
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          position: [0, 0, 5],
        }}
      >
        <pointLight position={[0, 2, -5]} intensity={10} />
        <pointLight position={[10, 10, 10]} />
        {/* <Box position={[0, 0, 0]} /> */}
        <Plane position={[0, 0, 0]} />
      </Canvas>

      <style jsx>{`
        .container {
          height: 100vh !important;
          width: 100vw !important;
        }

        .container__titles {
          background: transparent;
          z-index: 1;
          position: absolute;
          margin-left: 10%;
          margin-top: 15%;
          font-size: 24px;
        }

        .canvas {
          position: absolute;
        }
      `}</style>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }

        .title {
          font-family: 'DM Serif Text', serif;
          color: white;
        }

        .title--medium {
          font-size: 24px;
        }
      `}</style>
    </div>
  )
}
