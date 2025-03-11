"use client"

import { motion } from "framer-motion"
import { Suspense, useEffect, useState } from "react"
import dynamic from "next/dynamic"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import ContactSection from "@/components/contact-section"
import LoadingSpinner from "@/components/loading-spinner"

// Dynamically import the 3D scene to avoid SSR issues
const RobotScene = dynamic(() => import("@/components/robot-scene"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
})

export default function Home() {
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration issues with Three.js
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <div className="canvas-container">
        <Suspense fallback={<LoadingSpinner />}>
          
        </Suspense>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <HeroSection />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <AboutSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ProjectsSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SkillsSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ExperienceSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ContactSection />
        </motion.div>
      </motion.div>
    </>
  )
}

