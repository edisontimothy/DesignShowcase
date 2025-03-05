import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, GraduationCap, Briefcase } from "lucide-react";

const skills = [
  {
    category: "Design",
    items: ["User Research", "Wireframing", "Prototyping", "UI Design"]
  },
  {
    category: "Tools",
    items: ["Figma", "Adobe XD", "Sketch", "InVision"]
  },
  {
    category: "Methods",
    items: ["Design Thinking", "Agile UX", "User Testing", "A/B Testing"]
  }
];

const education = [
  {
    degree: "Master of Human-Computer Interaction",
    school: "Carnegie Mellon University",
    year: "2020-2022",
    description: "Focused on UX Research and Interactive Design"
  },
  {
    degree: "Bachelor of Design",
    school: "Rhode Island School of Design",
    year: "2016-2020",
    description: "Major in Digital + Media Design"
  }
];

const workHistory = [
  {
    position: "Senior UX Designer",
    company: "Tech Innovation Labs",
    period: "2022-Present",
    description: "Leading design initiatives for enterprise software solutions"
  },
  {
    position: "UX Designer",
    company: "Digital Products Inc",
    period: "2020-2022",
    description: "Designed user interfaces for mobile applications"
  },
  {
    position: "UI/UX Design Intern",
    company: "Creative Agency Co",
    period: "2019-2020",
    description: "Assisted in creating wireframes and prototypes"
  },
  {
    position: "Junior Designer",
    company: "Web Solutions Studio",
    period: "2018-2019",
    description: "Collaborated on website redesign projects"
  }
];

export default function About() {
  return (
    <div className="content-container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        <section>
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <div className="prose mb-12">
            <p className="text-lg text-muted-foreground">
              I'm a UX designer passionate about creating intuitive and impactful digital
              experiences. With over 5 years of experience in the field, I've worked
              with startups and enterprise clients to solve complex design challenges.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            Education
          </h2>
          <div className="grid gap-4">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{edu.degree}</CardTitle>
                      <CardDescription>{edu.school}</CardDescription>
                    </div>
                    <Badge variant="secondary">{edu.year}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Briefcase className="h-6 w-6" />
            Work History
          </h2>
          <div className="grid gap-4">
            {workHistory.map((work, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{work.position}</CardTitle>
                      <CardDescription>{work.company}</CardDescription>
                    </div>
                    <Badge variant="secondary">{work.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{work.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Skills & Expertise</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((skillSet) => (
              <Card key={skillSet.category}>
                <CardHeader>
                  <CardTitle>{skillSet.category}</CardTitle>
                  <CardDescription>Key competencies</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {skillSet.items.map((item) => (
                      <li key={item} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
}