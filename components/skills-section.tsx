"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SkillsSection() {
  const frontendSkills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 92 },
    { name: "Next.js", level: 88 },
    { name: "Tailwind CSS", level: 90 },
  ]

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 82 },
    { name: "MongoDB", level: 78 },
    { name: "PostgreSQL", level: 75 },
    { name: "GraphQL", level: 70 },
  ]

  const otherSkills = [
    { name: "UI/UX Design", level: 85 },
    { name: "Three.js", level: 75 },
    { name: "Git/GitHub", level: 88 },
    { name: "Docker", level: 65 },
    { name: "AWS", level: 60 },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are my technical skills and proficiency levels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center">Frontend Development</h3>
                <div className="space-y-6">
                  {frontendSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center">Backend Development</h3>
                <div className="space-y-6">
                  {backendSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center">Other Skills</h3>
                <div className="space-y-6">
                  {otherSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-4 text-center"
        >
          <div className="p-6 bg-primary/10 rounded-lg">
            <h4 className="text-4xl font-bold text-primary mb-2">5+</h4>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div className="p-6 bg-primary/10 rounded-lg">
            <h4 className="text-4xl font-bold text-primary mb-2">50+</h4>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div className="p-6 bg-primary/10 rounded-lg">
            <h4 className="text-4xl font-bold text-primary mb-2">20+</h4>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
          <div className="p-6 bg-primary/10 rounded-lg">
            <h4 className="text-4xl font-bold text-primary mb-2">10+</h4>
            <p className="text-muted-foreground">Awards Won</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

