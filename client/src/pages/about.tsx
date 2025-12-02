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
// Import the image from the public assets folder
import profileImage from "/assets/profile-image.jpg";

const skills = [
  {
    category: "General",
    items: ["Sales", "Marketing", "User Research", "Wireframing", "Prototyping", "UI Design"]
  },
  {
    category: "Tools",
    items: ["VSCode", "Figma", "Adobe XD", "Miro", "Blender", "Illustrator"]
  },
  {
    category: "Methods",
    items: ["Design Thinking", "Agile UX", "User Testing", "A/B Testing"]
  }
];

const education = [
  {
    degree: "Bachelor of Design Computing (Interaction Design)",
    school: "The University of Sydney, Sydney, Australia",
    year: "2024",
    description: "WAM Distinction, 3 Year Scholarship - Sydney International Student Award"
  },
  {
    degree: "Diploma of Commerce",
    school: "Curtin University, Singapore",
    year: "2020",
    description: "WAM Distinction"
  }
];

const workHistory = [
  {
    position: "Sales and Service Consultant",
    company: "CBA Insurance",
    period: "8/2024 - 1/2025",
    description: [
      "Closed 35% of warm leads from 15–20 prospects daily, consistently exceeding sales targets for Home and Car Insurance.",
      "Built strong client relationships by clarifying policies and simplifying complex regulatory terms, improving customer trust and retention.",
      "Managed customer onboarding, policy adjustments, and compliance documentation using Genesys, CommSee, and Insure 90."
    ]
  },
  {
    position: "Digital Media Specialist ",
    company: "CV Multi Artha Abadi",
    period: "3/2025 - Now",
    description: [
      "Negotiated partnerships with Key Opinion Leaders (KOLs), increasing campaign reach by 238% and driving new customer acquisition.",
      "Developed content calendars and marketing assets for social media campaigns",
      "Created websites and product mock-ups for new business ventures."
    ]
  },
  {
    position: "Sales Representative (Team Leader)",
    company: "Uniqlo Australia",
    period: "4/2022 - 8/2024",
    description: [
      "Led a retail sales team to exceed daily sales targets of $80–120k AUD, consistently ranking in the top-performing groups.",
      "Trained and coached team members on upselling, customer service, and closing techniques, contributing to a 4.3/5 satisfaction rating.",
      "Oversaw stockroom and floor inventory, maintaining a 97% items in stock rate and supporting operational efficiency.",
      "Handled escalations and customer complaints with effective negotiation and conflict resolution."
    ]
  },
  {
    position: "UI/UX Designer",
    company: "Engine Room Global",
    period: "1/2024 - 4/2024",
    description: [
      "Contributed to client facing presentations and proposals for digital projects, supporting new business pitches.",
      "Conducted user research and design prototyping for a dashboard application, strengthening client engagement.",
      "Produced design deliverables in Figma and Illustrator, enhancing team efficiency during project negotiations."
    ]
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
        <section className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <div className="prose">
              <p className="text-lg text-muted-foreground">
                Hey! I'm Tim, a UX Designer and graduate of The University of Sydney with experience in Sales and Service. My passion lies in creating accessible, universal designs and crafting intuitive, impactful experiences. With four years of professional experience across Insurance, Sales, and Design, I am keen to bring my unique experiences to drive meaningful interactions, whether through intuitive design, customer engagement, or strategic business development.
              </p>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-48 h-48 object-cover rounded-full border-4 border-background shadow-xl"
              />
            </motion.div>
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
                  <ul className="list-disc list-inside space-y-2">
                    {work.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
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