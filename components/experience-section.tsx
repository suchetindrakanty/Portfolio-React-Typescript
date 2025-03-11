"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap } from "lucide-react"

export default function ExperienceSection() {
  const workExperience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description:
        "Lead frontend development for enterprise applications. Implemented modern React architecture and improved performance by 40%.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Creations",
      period: "2019 - 2021",
      description:
        "Developed responsive web applications using React.js and Next.js. Collaborated with designers to implement UI/UX improvements.",
    },
    {
      title: "Web Developer",
      company: "Creative Agency",
      period: "2017 - 2019",
      description:
        "Built and maintained websites for various clients. Implemented responsive designs and interactive features.",
    },
  ]

  const education = [
    {
      degree: "Master's in Computer Science",
      institution: "Tech University",
      period: "2015 - 2017",
      description: "Specialized in Web Technologies and Human-Computer Interaction.",
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "State University",
      period: "2011 - 2015",
      description: "Graduated with honors. Focused on software development and design.",
    },
    {
      degree: "Web Development Bootcamp",
      institution: "Code Academy",
      period: "2016",
      description: "Intensive 12-week program focused on modern web development technologies.",
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and educational background.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            <div className="relative border-l-2 border-primary/30 pl-8 ml-3 space-y-8">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary"></div>
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-sm text-primary font-medium mb-1">{job.period}</div>
                      <h4 className="text-xl font-bold mb-1">{job.title}</h4>
                      <div className="text-muted-foreground mb-4">{job.company}</div>
                      <p className="text-muted-foreground">{job.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="relative border-l-2 border-primary/30 pl-8 ml-3 space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary"></div>
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-sm text-primary font-medium mb-1">{edu.period}</div>
                      <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                      <div className="text-muted-foreground mb-4">{edu.institution}</div>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

