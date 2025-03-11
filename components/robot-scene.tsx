"use client"

import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { MotionConfig } from "framer-motion"
import { motion } from "framer-motion-3d"
import { useEffect, useRef, useState } from "react"
import { Euler, MathUtils, Vector3 } from "three"

function Scene({ scrollY }: { scrollY: number }) {
  const group = useRef<THREE.Group>(null)
  const targetPosition = new Vector3(
    MathUtils.lerp(-2, 2, scrollY / 1000),
    MathUtils.lerp(0, -1, scrollY / 1000),
    MathUtils.lerp(0, -3, scrollY / 2000),
  )

  const targetRotation = new Euler(
    MathUtils.lerp(0, Math.PI / 6, scrollY / 1000),
    MathUtils.lerp(0, Math.PI * 2, scrollY / 1000),
    0,
  )

  useFrame((state, delta) => {
    if (group.current) {
      group.current.position.lerp(targetPosition, delta * 2)
      group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, targetRotation.x, delta * 2)
      group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, targetRotation.y, delta * 2)
      group.current.position.y += Math.sin(state.clock.elapsedTime) * 0.002
    }
  })

  return (
    <motion.group
      ref={group}
      initial={{ scale: 0, rotateY: 0 }}
      animate={{ scale: 1.5, rotateY: Math.PI * 2 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
    </motion.group>
  )
}

export default function RobotScene() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <Canvas className="canvas-container">
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <spotLight position={[0, 10, 0]} angle={0.15} penumbra={1} intensity={0.5} />
        <Scene scrollY={scrollY} />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </MotionConfig>
  )
}

