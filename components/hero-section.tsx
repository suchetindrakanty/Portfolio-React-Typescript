"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="section-container">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
              Hi, I'm <span className="gradient-text">Your Name</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
              <span className="text-muted-foreground">Web Developer & UI/UX Designer</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              I build exceptional and accessible digital experiences for the web. Specializing in modern frontend
              technologies and creative solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="#projects">
              <Button size="lg" className="group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="group">
                Download Resume
                <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </div>
          <span className="text-xs text-muted-foreground mt-2">Scroll Down</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

