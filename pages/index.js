import Head from 'next/head'
import { useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import Plane from '@/components/Plane'
import Box from '@/components/Box'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pierre Pinto de Oliveira Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          position: [0, 0, 5]
        }}
      >
        <pointLight position={[0, 2, -5]} intensity={10} />
        <pointLight position={[10, 10, 10]} />
        {/* <Box position={[0, 0, 0]} /> */}
        <Plane position={[0, 0, 0]}/>
      </Canvas>

      <style jsx>{`
        .container {
          height: 100vh !important;
          width: 100vw !important;
        }
      `}</style>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  )
}
