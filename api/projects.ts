import type { VercelRequest, VercelResponse } from "@vercel/node";

// Static project data
const PROJECTS = [
  {
    id: 1,
    title: "Casa: A Utility Management Platform",
    description: "A home interface platform designed to encourage shared households to manage utility consumption through gamification",
    coverImage: "/attached_assets/Casa/Casa_Main.png",
    tags: ["UX Design", "Product Design", "Sustainability"],
    content: {
      summary: "<a href=\"https://drive.google.com/drive/folders/1cIc5P7C3Z3a6FSz33Eu5p3sys-PD3utk?usp=sharing\">Project Report Files</a>\n<a href=\"https://www.figma.com/proto/5xz7QBvU3Yt3YiQH4r4Npb/Casa---Household-Utility?node-id=453-14583&starting-point-node-id=450%3A13993&t=JqvX7OfD2eaJUKAj-1\">Full Figma Prototype</a>\n\nCasa is a home interface platform designed to encourage shared households to manage their utility consumption through a gamified system.\n\nThe platform offers an engaging experience with challenges, rewards, and a personalised interface. In its idle state, Casa transforms into a versatile picture frame, showcasing digital content and artworks.\n\nCasa also provides transparent utility data, making it easy for users to understand and optimise their consumption.",
      problem: "The project aimed to address the growing concern of utility management in Australia, where depleting natural resources and rising consumption costs burden households.\n\nExisting utility management solutions often lack comprehensive features and engagement, failing to address the unique demands of shared living.\n\nThis lack of access to simplified and proactive tools hinders sustainable living and contributes to unintentional wastage, interpersonal disagreements, and rising utility bills in shared homes.",
      designProcess: "The design process began with a thorough research phase, employing questionnaires, semi-structured interviews, and online ethnography. This research revealed seven key user needs: individual access to bills, usage distinction between members, proactive over-usage notifications, price hike predictions, idle appliance tracking, frequent summaries, and better incentives.\n\nThree initial concepts were generated through Crazy Eights ideation: All in One App, Sims Fridge, and Door Panels. A decision matrix was used to evaluate these concepts against the seven user needs, ultimately leading to the selection of the Sims Fridge concept, which was further developed and refined.\n\nTwo low-fidelity prototypes were created to experiment with layout, navigation, and user experience, followed by a mid-fidelity prototype for user testing. The mid-fidelity prototype was evaluated through a user testing fair with eight participants, employing think-aloud protocols, semi-structured interviews, System Usability Score surveys, and heuristic evaluations.\n\nFeedback from user testing highlighted areas for improvement, including concerns about information overload, unclear user flow, navigation, and lack of incentives. Based on this feedback, the final concept was refined to address these issues, resulting in a more user-friendly and engaging platform.",
      solution: "Casa emerged as a sophisticated home interface platform that combines gamification and utility data analysis to promote sustainable living in shared households.\n\nThe platform provides daily and weekly challenges, rewarding users with experience points for completing tasks related to responsible resource usage. Casa also features a tiered reward system, offering a variety of rewards, including Casa coins, avatar items, pets, screensavers, and vouchers.\n\nThe platform provides detailed breakdowns of past, present, and future utility usage, allowing users to make informed decisions about their consumption.\n\nCasa's unique approach not only encourages sustainable living but also fosters a sense of community and engagement among household members, making it a valuable tool for shared living environments.",
      images: [
        "/attached_assets/Casa/CasaPages.gif",
        "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/cwhViKSQV9I?si=OLw1RIDIgCMoUHCp\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
      ]
    }
  },
  {
    id: 2,
    title: "Sensible: A Digital Cutting Board",
    description: "A digital smart cutting board designed to facilitate collaborative, safe, and guided cooking experiences",
    coverImage: "/attached_assets/Sensible/Sensible_Main.png",
    tags: ["UX Design", "Product Design", "Smart Home", "Education"],
    content: {
      summary: "<a href=\"https://www.figma.com/proto/UgTykNA0Z2078FknM6S6BP/SENSIBLE-PROTOTYPE?node-id=708-2561&starting-point-node-id=708%3A2561&t=1OZHw3QaEbweFN7M-1\">Full Figma Prototype</a>\n<a href=\"https://drive.google.com/file/d/1TbJasLyTB8o_ZvqEq3TqvXOufz-xJRe9/view?usp=share_link\">Final Project Report</a>\n\nSensible is a digital smart cutting board designed to facilitate collaborative, safe, and guided cooking experiences. It provides detailed recipes, help resources, and social features to encourage users to learn and develop cooking skills together.",
      problem: "The increasing prevalence of convenience foods has led to a decline in cooking skills and knowledge among younger generations. This trend has negative implications for health and well-being, as cooking at home is associated with healthier eating habits.",
      designProcess: "The initial concept for Sensible was inspired by the Sensing Table, a digital kitchen surface with interactive features. The team envisioned a digital cutting board that would provide step-by-step guidance, social interaction, and detailed recipes to make cooking more accessible and enjoyable.\n\nThe design process involved multiple rounds of testing and user feedback. The team conducted expert-based testing with UX design students and user-based testing with everyday users.\n\nThe expert-based testing focused on identifying usability issues using heuristic evaluation. The user-based testing involved think-aloud protocols and System Usability Score (SUS) questionnaires to gather qualitative and quantitative data.\n\nBased on the feedback received, the team iterated on the design of Sensible. The key areas of improvement included:\n\n- Aesthetic Clutter: The team reduced the number of elements on display and improved the layout to make it more functional.\n- My Page Layout: The layout and hierarchy of content on the My Page were improved to make it easier to navigate.\n- Homepage: The homepage was diversified to include more personalized information and make it more engaging.\n- Consistency: The team addressed inconsistencies in the design to improve the overall user flow and cohesion.\n- Recipe Page Clarity: The contrast and layout of the recipe pages were improved to make it easier to see the difference between tabs and actions.",
      solution: "The final prototype of Sensible incorporates the following key features:\n\n- Personalized User Profiles: Users can create profiles and customize their experience based on their cooking skills and preferences.\n- Interactive Recipe Search Engine: Users can search for recipes, filter results, and view detailed information about each dish.\n- Cutting Board with Smart Guides: The cutting board provides step-by-step guidance, visual aids, and helpful tools to assist users in the cooking process.\n- Social Features: Users can connect with friends and family, share recipes, and leave reviews.\n- Recipe and Review Editor: Users can create and share their own recipes and reviews.\n\nSensible is designed to make cooking more accessible, enjoyable, and collaborative. It empowers users to learn and develop cooking skills, while also promoting healthier eating habits.",
      images: [
        "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/L31vCgnFv3k?si=JEfx-qciua30jlDl\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
        "/attached_assets/Sensible/1.png",
        "/attached_assets/Sensible/2.png",
        "/attached_assets/Sensible/3.png",
        "/attached_assets/Sensible/4.png",
        "/attached_assets/Sensible/5.png",
        "/attached_assets/Sensible/6.png",
        "/attached_assets/Sensible/7.png"
      ]
    }
  },
  {
    id: 3,
    title: "Studbud: A Comprehensive Study Web App",
    description: "A web-based application designed to enhance individual study sessions by integrating planning and content management tools",
    coverImage: "/attached_assets/Studbud/Studbud_Main.png",
    tags: ["UX Design", "Web Development", "Education"],
    content: {
      summary: "<a href=\"https://studbud-theta.vercel.app\">Open Studbud</a>\n\nStudbud is a web-based application designed to enhance individual study sessions by integrating planning and content management tools. Through preliminary research, a market gap was identified for a platform that focuses on managing individual study sessions. Studbud addresses this by combining planning and content functionality to equip students with the tools needed for productive study sessions.",
      problem: "Through preliminary research we have identified a gap in the market for a platform which focusses on managing individual study sessions. This web-based application should combine planning and content functionality, to equip students with the tools they need for a productive study session.",
      designProcess: "Studbud is designed with the help of a focus group study consisting of 5 undergraduate university students and three researchers. During the ideation process, participants were asked what helps them study better, and we did some A/B testing to find out the users priorities. From there, we noted that it should have a task, time, and content management systems. Studbud was initially designed to have the three systems, and upon further user testing it was further refined to include new features such as a music player, and a dictionary search. Studbud maintains a non intrusive and minimalist design that helps the users focus on their goals. it was built using HTML/CSS and JS, with the use of react and vite libraries.",
      solution: "Studbud is your all-in-one study companion designed to enhance your learning experience. Studbud's comprehensive suite of tools includes:\nA Kanban board for organizing and tracking your tasks\nPomodoro and stopwatch timers to manage your study sessions\nBuilt-in study music player that stays with you across tabs\nReading list manager to organize your study materials\nQuick dictionary lookup for expanding your vocabulary",
      images: [
        "/attached_assets/Studbud/1.png",
        "/attached_assets/Studbud/2.png",
        "/attached_assets/Studbud/3.png",
        "/attached_assets/Studbud/4.png",
        "/attached_assets/Studbud/5.png",
        "/attached_assets/Studbud/6.png"
      ]
    }
  }
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    const { id } = req.query;
    
    if (id) {
      const project = PROJECTS.find(p => p.id === parseInt(id as string));
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      return res.json(project);
    }
    
    return res.json(PROJECTS);
  }
  
  return res.status(405).json({ message: "Method not allowed" });
}