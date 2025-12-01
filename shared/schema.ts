import { pgTable, text, serial, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  coverImage: text("cover_image").notNull(),
  tags: text("tags").array().notNull(),
  content: jsonb("content").notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export const insertProjectSchema = createInsertSchema(projects);
export const insertContactSchema = createInsertSchema(contactMessages);

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactSchema>;

// Static project data
export const PROJECTS: Project[] = [
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
    title: "Sensible: A Digital Cutting Board for Collaborative Cooking",
    description: "A digital smart cutting board designed to facilitate collaborative, safe, and guided cooking experiences",
    coverImage: "/attached_assets/Sensible/Sensible_Main.png",
    tags: ["UX Design", "Product Design", "Smart Home", "Education"],
    content: {
      summary: "<a href=\"https://www.figma.com/proto/UgTykNA0Z2078FknM6S6BP/SENSIBLE-PROTOTYPE?node-id=708-2561&starting-point-node-id=708%3A2561&t=1OZHw3QaEbweFN7M-1\">Full Figma Prototype</a>\n<a href=\"https://drive.google.com/file/d/1TbJasLyTB8o_ZvqEq3TqvXOufz-xJRe9/view?usp=share_link\">Final Project Report</a>\n\nSensible is a digital smart cutting board designed to facilitate collaborative, safe, and guided cooking experiences. It provides detailed recipes, help resources, and social features to encourage users to learn and develop cooking skills together.",
      problem: "The increasing prevalence of convenience foods has led to a decline in cooking skills and knowledge among younger generations. This trend has negative implications for health and well-being, as cooking at home is associated with healthier eating habits.",
      designProcess: "The initial concept for Sensible was inspired by the Sensing Table, a digital kitchen surface with interactive features. The team envisioned a digital cutting board that would provide step-by-step guidance, social interaction, and detailed recipes to make cooking more accessible and enjoyable.\n\nThe design process involved multiple rounds of testing and user feedback. The team conducted expert-based testing with UX design students and user-based testing with everyday users.\n\nThe expert-based testing focused on identifying usability issues using heuristic evaluation. The user-based testing involved think-aloud protocols and System Usability Score (SUS) questionnaires to gather qualitative and quantitative data.\n\nBased on the feedback received, the team iterated on the design of Sensible. The key areas of improvement included:\n\n- Aesthetic Clutter: The team reduced the number of elements on display and improved the layout to make it more functional.\n- My Page Layout: The layout and hierarchy of content on the My Page were improved to make it easier to navigate.\n- Homepage: The homepage was diversified to include more personalized information and make it more engaging.\n- Consistency: The team addressed inconsistencies in the design to improve the overall user flow and cohesion.\n- Recipe Page Clarity: The contrast and layout of the recipe pages were improved to make it easier to see the difference between tabs and actions.",
      solution: "The final prototype of Sensible incorporates the following key features:\n\n- Personalized User Profiles: Users can create profiles and customize their experience based on their cooking skills and preferences.\n- Interactive Recipe Search Engine: Users can search for recipes, filter results, and view detailed information about each dish.\n- Cutting Board with Smart Guides: The cutting board provides step-by-step guidance, visual aids, and helpful tools to assist users in the cooking process.\n- Social Features: Users can connect with friends and family, share recipes, and leave reviews.\n- Recipe and Review Editor: Users can create and share their own recipes and reviews.\n\nSensible is designed to make cooking more accessible, enjoyable, and collaborative. It empowers users to learn and develop cooking skills, while also promoting healthier eating habits.",
      images: [
        "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/L31vCgnFv3k?si=KxXOEGHbv8cu64Du\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
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
    title: "JUNO: Freeze Dried Pet Snack Packaging Design",
    description: "JUNO is a Premium Freeze-Dried Pet Treats concept,",
    coverImage: "/attached_assets/JUNO/Juno_Main.png",
    tags: ["Product Design", "Branding", "Packaging Design", "Retail"],
    content: {
      summary: "<a href=\"https://www.canva.com/design/DAG6QfVBlvM/gLzCmiuZokxFAFnAittLrw/view?utm_content=DAG6QfVBlvM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd087929259\">Open Design Files</a>\n\nJuno is a premium pet snack brand specialising in single-ingredient, freeze-dried treats for both cats and dogs. The project required a packaging system that balanced the clinical credibility of high-nutrition, clean label food with the warmth and playfulness of a pet parent brand. The resulting design is a cohesive, colour-coded pouch system that communicates transparency, quality, and cross-species suitability (cats & dogs) at a glance.",
      problem: "The pet treat aisle is often polarised between two extremes: clinical, vet-focused packaging that feels sterile, or cheap, mass-market packaging that feels messy and untrustworthy.\nJuno faced a specific challenge:\n- Transparency: The product is freeze-dried and single-ingredient (e.g., just Chicken or just Salmon). The design needed to strip away the noise and focus on ingredient purity without looking boring.\n- Cross-Category Confusion: Most treats are marketed explicitly for either dogs or cats. Juno's freeze-dried raw ingredients are suitable for both. The packaging needed to signal this dual-utility instantly to avoid alienating half the customer base.\n- Variant Scalability: With multiple SKUs (Chicken, Salmon, Krill, Egg Yolks, Duck Liver), the system needed a rigid framework that allowed for easy expansion while maintaining brand recognition.",
      designProcess: "Visual Strategy & Typography\nTo counter the industrial feel of mass-market treats, I utilised a hand-drawn, organic typographic style for the JUNO logo and variant names. This imperfection in the type reflects the natural and unprocessed nature of the freeze-dried ingredients. The rounded, soft typography builds immediate trust and approachability.\nThe Colour System\nA distinct pastel-adjacent colour palette was developed to differentiate SKUs while maintaining family unity:\n- Teal: Diced Chicken\n- Salmon/Coral: Atlantic Salmon\n- White/Clean: Atlantic Krill\n- Cream/Yellow: Egg Yolks\n- Mint Green: Duck Liver\nThis solid background colour allows for strong shelf blocking when products are displayed together, creating a billboard effect in retail environments.\nIllustration & Mascots\nTo solve the Cat vs. Dog product confusion, I designed a central mascot lockup featuring both a Husky and a Cat sharing the treats. Their interaction—cheerfully toasting with the freeze-dried cubes—serves as a primary visual cue that the product is universally loved by both species. This eliminates the need for text-heavy explanations like Suitable for mixed-pet households.",
      solution: "The final solution is a user-centric packaging architecture that prioritises information hierarchy:\nThe Front Panel (The Hook)\n- Instant Recognition: The variant name (e.g., DICED CHICKEN) takes up the centre 30% of the visual real estate, ensuring the customer knows exactly what the protein is.\n- Trust Badges: Key selling points (Preservative Free, 100% Real Ingredients) are presented in capsule buttons, making them easy to scan quickly.\n- Transparency Window: (Conceptually implied or rendered) The design leaves space or utilises bright contrast to suggest lightness, mirroring the freeze-dried nature of the product.\nThe Back Panel (The Education)\n- Zip-Lock Graphic: A visual cue at the top reinforces the functional value of the packaging (resealable/freshness).\n- Clear Data Visualisation: Feeding instructions are broken down by animal size using silhouettes (Small, Medium, Large) rather than dense text tables. This respects the user's time and simplifies the dosage decision.\n- Ingredient Honesty: The Ingredients & Analysis section is kept bold and legible, leaning into the brand's confidence that they have nothing to hide.",
      images: [
        "/attached_assets/JUNO/1.png",
        "/attached_assets/JUNO/2.png",
        "/attached_assets/JUNO/3.png",
        "/attached_assets/JUNO/4.png",
        "/attached_assets/JUNO/5.png",
        "/attached_assets/JUNO/6.png"
      ]
    }
  },
  {
    id: 4,
    title: "Irba Steak Loyalty Web App",
    description: "A web-based application designed to digitize the customer reward experience. It replaces physical stamp cards with a centralized digital system, allowing the business to track engagement, manage rewards, and run promotions while giving customers a seamless way to collect points via QR technology.",
    coverImage: "/attached_assets/IrbaSteak/IrbaSteak_Main.png",
    tags: ["UX Design", "Web Development", "Business"],
    content: {
      summary: "<a href=\"https://irbasteak.netlify.app\">Open Web app</a>\n\nIrbaSteak Loyalty is a custom web-based application that digitizes the customer reward experience. It replaces physical stamp cards with a centralized digital system, allowing the business to track engagement, manage rewards, and run promotions while giving customers a seamless way to collect points via QR technology.",
      problem: "Cost: Physical cards are costly to print, manage, and are potential fraud points\nLost Data: Physical cards provided no insight into customer behavior or redemption rates.\nMissed Marketing: There was no direct channel to notify loyal customers about new menu items or active promos.",
      designProcess: "The design prioritised operational speed for cashiers and accessibility for customers. We focused on reducing the time-to-transaction by automating identification. The interface was built to be high-contrast and scannable, ensuring staff can view key metrics—like pending redemptions or daily transaction counts—at a glance without digging through menus.",
      solution: "The Product: A responsive web application divided into two portals: a Management Dashboard for staff and a Mobile Web App for customers.\nKey Features:\nQR-Based Identification: The system generates a unique QR code based on the Customer ID. Cashiers scan this to instantly locate a profile, credit stamps, or validate a reward redemption, eliminating manual data entry errors.\nAdmin Command Center: A comprehensive dashboard that allows management to:\n- Monitor real-time metrics (Total Transactions, Pending Redemptions).\n- Configure loyalty modes (currently set to Stamps).\n- View detailed Activity Logs for security and auditing.\n- Manage Customer Data\n- Configure Loyalty Rewards\nIntegrated Promotion Hub: A dedicated section where admins upload promo banners that appear directly on the customer's homepage, ensuring high visibility for new offers.",
      images: [
        "/attached_assets/IrbaSteak/1.png",
        "/attached_assets/IrbaSteak/2.png",
        "/attached_assets/IrbaSteak/3.png",
        "/attached_assets/IrbaSteak/4.png",
        "/attached_assets/IrbaSteak/5.png"
      ]
    }
  },
  {
    id: 5,
    title: "Haus Studio: A Studio Booking App",
    description: "HausStudio is a bespoke booking management web application designed for a photography studio in Jakarta.",
    coverImage: "/attached_assets/HausStudio/HausStudio_Main.png",
    tags: ["PostgreSQL", "Supabase", "Web Development", "Business"],
    content: {
      summary: "<a href=\"https://hausstudio.netlify.app\">Open Web app</a>\n\nHausStudio is a bespoke booking management web application designed for a photography studio in Jakarta. Built with a modern frontend and a Supabase backend, the application streamlines the reservation process by digitising availability checks and scheduling while preserving the personalised, conversation-based transaction model dominant in Indonesia. It serves as a high-fidelity pre-processing layer that hands off finalised booking details directly to the admin via WhatsApp.",
      problem: "- Operational Bottlenecks: Managing studio slots purely through chat leads to slow response times, double-booking errors, and administrative fatigue.\n- The Payment Dilemma: While full automation (credit card gateways) is efficient, it often creates friction in the local market where manual bank transfers (BCA/Mandiri) and direct communication are preferred.\n- Customer Friction: Clients want to see availability instantly without waiting for an admin to check a calendar manually.",
      designProcess: "- Market-Centric Approach: The core design philosophy was meet the user where they are. Since WhatsApp is the operating system of business in Indonesia, I designed a flow that integrates it rather than replacing it.\n- User Flow Mapping: I mapped the booking journey to mimic a conversation: Which room? When? Who are you?This linear wizard reduces cognitive load.\n- Database Architecture: I chose Supabase (PostgreSQL) to handle the complex logic of time-slot reservations. This ensures that once a user selects a time, it is cross-referenced against existing records in real-time to prevent conflicts.\n- Mobile-First UI: Recognising that most WhatsApp users are on mobile, the interface was built with large touch targets, clear typography, and a minimalist black-and-white aesthetic that matches the studio's brand.",
      solution: "I developed a hybrid booking engine that combines the speed of automation with the flexibility of manual service:\n- Real-Time Availability Engine: A dynamic calendar that pulls data from Supabase to show only available slots, automatically blocking off booked times.\n- Smart WhatsApp Integration: Instead of a traditional checkout, the Book button triggers a deep link (wa.me). This constructs a pre-formatted message containing the Studio Name, Date, Time, and Calculated Price. The admin receives a ready - to - confirm message, requiring only a payment check to finalise.\n- Booking Management: Included a Find Booking feature allowing users to retrieve their reservation details using their phone number, reducing When is my slot? support queries.\n- Tech Stack: React (Netlify), Supabase (Backend/DB), WhatsApp API.",
      images: [
        "/attached_assets/HausStudio/1.png",
        "/attached_assets/HausStudio/2.png",
        "/attached_assets/HausStudio/3.png",
        "/attached_assets/HausStudio/4.png",
        "/attached_assets/HausStudio/5.png"
      ]
    }
  },
  {
    id: 6,
    title: "Santa Petshop Retail Store Website Concept",
    description: "HausStudio is a bespoke booking management web application designed for a photography studio in Jakarta.",
    coverImage: "/attached_assets/SantaPetshop/SantaPetshop_Main.png",
    tags: ["Web Development", "Business", "Retail"],
    content: {
      summary: "<a href=\"https://santapetshop.vercel.app\">Open Web app</a>\n\nSanta Petshop is a retail website concept for a local pet store in Surabaya, designed to unify product browsing, grooming services, a loyalty programme, and marketplace links into one cohesive online experience.",
      problem: "Most Indonesian pet shops rely on Tokopedia/Shopee and walk-ins, leaving them with weak branding, no loyalty structure, and poor communication of their services. Customers often compare prices elsewhere, grooming booking is inconvenient, and stores lack a modern digital presence.",
      designProcess: "Research: Looked at how Indonesian pet owners shop—mobile-first, marketplace-heavy, service driven.\nStructure: Organised the site into practical touchpoints: Products → Marketplaces, Grooming → WhatsApp booking, Membership → Tiered benefits, Blog → SEO and trust, Location → Maps.\nVisual Approach: Kept the design clean, friendly, and easy to scan, with simple CTAs and clear information hierarchy.\nMobile-first: Ensured all key actions—shop, book, contact—work smoothly on phones.",
      solution: "The final concept delivers a modern yet approachable online presence:\n- A clear homepage with direct CTAs.\n- Product listings linked to Shopee and Tokopedia.\n- A 3-tier membership system based on annual spending.\n- Grooming packages and subscription options.\n- Blog and About pages to build credibility.\n- A straightforward contact and maps section for quick access.",
      images: [
        "/attached_assets/SantaPetshop/1.jpeg",
        "/attached_assets/SantaPetshop/2.jpeg",
        "/attached_assets/SantaPetshop/3.jpeg",
        "/attached_assets/SantaPetshop/4.jpeg",
        "/attached_assets/SantaPetshop/5.jpeg"
      ]
    }
  },
  {
    id: 7,
    title: "Studbud",
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
