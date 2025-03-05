import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

export default function About() {
  return (
    <div className="content-container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <div className="prose mb-12">
          <p className="text-lg text-muted-foreground">
            I'm a UX designer passionate about creating intuitive and impactful digital
            experiences. With over 5 years of experience in the field, I've worked
            with startups and enterprise clients to solve complex design challenges.
          </p>
        </div>

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
      </motion.div>
    </div>
  );
}