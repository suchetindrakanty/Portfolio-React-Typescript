"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Globe } from "lucide-react"

export default function AboutSection() {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Web Development",
      description: "Building responsive and performant web applications using modern technologies.",
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces with a focus on user experience.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Full Stack Solutions",
      description: "End-to-end development from database design to frontend implementation.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me, my background, and what I do.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Profile"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-muted-foreground mb-4">
              I'm a passionate Web Developer with over 5 years of experience in creating modern and responsive web
              applications. I specialize in React.js, Next.js, and other cutting-edge technologies.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey in web development started when I built my first website in college. Since then, I've worked
              with various clients and companies to deliver high-quality digital products that meet business goals and
              user needs.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-muted-foreground">Your Name</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-muted-foreground">your.email@example.com</p>
              </div>
              <div>
                <p className="font-medium">From:</p>
                <p className="text-muted-foreground">Your Location</p>
              </div>
              <div>
                <p className="font-medium">Freelance:</p>
                <p className="text-primary">Available</p>
              </div>
            </div>

            <Button size="lg">Download Resume</Button>
          </motion.div>
        </div>

        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-10 text-center"
          >
            What I Do
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-primary/10">{service.icon}</div>
                    <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

