"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js and Stripe integration.",
      image: "/placeholder.svg?height=600&width=800",
      category: "web",
      technologies: ["Next.js", "React", "Tailwind CSS", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern portfolio website with 3D elements and animations.",
      image: "/placeholder.svg?height=600&width=800",
      category: "design",
      technologies: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      image: "/placeholder.svg?height=600&width=800",
      category: "web",
      technologies: ["React", "Firebase", "Redux", "Material UI"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 4,
      title: "AI Image Generator",
      description: "An AI-powered image generation tool using machine learning models.",
      image: "/placeholder.svg?height=600&width=800",
      category: "ai",
      technologies: ["Python", "TensorFlow", "React", "Flask"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 5,
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency dashboard with price tracking and portfolio management.",
      image: "/placeholder.svg?height=600&width=800",
      category: "web",
      technologies: ["Next.js", "Chart.js", "Tailwind CSS", "CoinGecko API"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 6,
      title: "Mobile App UI Kit",
      description: "A comprehensive UI kit for mobile applications with reusable components.",
      image: "/placeholder.svg?height=600&width=800",
      category: "design",
      technologies: ["Figma", "Adobe XD", "Sketch"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">Explore my recent projects and creative work.</p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="mx-auto flex justify-center">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
              All
            </TabsTrigger>
            <TabsTrigger value="web" onClick={() => setActiveTab("web")}>
              Web
            </TabsTrigger>
            <TabsTrigger value="design" onClick={() => setActiveTab("design")}>
              Design
            </TabsTrigger>
            <TabsTrigger value="ai" onClick={() => setActiveTab("ai")}>
              AI
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full group">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="secondary">
                        <Github className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="secondary">
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg">View All Projects</Button>
        </div>
      </div>
    </section>
  )
}

