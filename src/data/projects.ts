import { ProjectCardDataProps } from "../components/molecules/ProjectCard/types";
import juniorImageHome from "../assets/img/junior/junior-image-home.png";
import juniorImageMainBanner from "../assets/img/junior/junior-image-main-banner.png";
import progressImg from "../assets/img/junior/Progress.png";
import juniorImageActivities from "../assets/img/junior/junior-image-activities.png";
import juniorAvatar from "../assets/img/junior/avatar.png";
import ellImg1 from "../assets/img/ell/1.png";
import ellImg2 from "../assets/img/ell/2.png";
import ellImg3 from "../assets/img/ell/3.png";
import ellImg4 from "../assets/img/ell/4.png";
import ellImg5 from "../assets/img/ell/5.png";
import mocklyImg1 from "../assets/img/mockly/mockly-1.avif";
import mocklyImg2 from "../assets/img/mockly/mockly-2.avif";
import mocklyImg3 from "../assets/img/mockly/mockly-3.avif";
import mocklyImg4 from "../assets/img/mockly/mockly-4.avif";
import mocklyImg5 from "../assets/img/mockly/mockly-5.avif";
import ccImg1 from "../assets/img/cc/1.webp";
import ccImg2 from "../assets/img/cc/2.webp";
import ccImg3 from "../assets/img/cc/3.webp";
import ccImg4 from "../assets/img/cc/4.webp";

const projects: ProjectCardDataProps[] = [
  {
    id: "ell-native",
    title: "Everybody Loves Languages",
    description:
      "Web and mobile application combining 5+ language-learning products into one modular system",
    type: "Cross-Platfrom",
    url: "",
    live: "https://www.elltechnologies.com/",
    play_store:
      "https://play.google.com/store/apps/details?id=com.elltechnologies.everybodyloveslearning",
    apple_store:
      "https://apps.apple.com/ca/app/everybody-loves-learning/id6755122109",
    case_study: "https://www.elltechnologies.com/hollywood-movie-based-learning/",
    techStack: [
      "TypeScript",
      "React Native",
      "Expo",
      "TanStack Query",
      "React",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Native Wind",
      "Zustand",
      "React Hook Form",
      "Axios",
      "i18next",
      "PostHog",
      "Sentry",
    ],
    status: "Completed",
    year: "2025",
    longDescription:
      "Everybody Loves Learning is a centralized web and mobile platform that brings together more than five independent language-learning products into a single, seamless experience. The application is designed to support multiple learning formats through a flexible, modular architecture, enabling diverse course structures and content delivery methods such as movie-based lessons, gamified learning flows, and storytelling-driven narratives. The platform powers products including English for Success, Campus Premium, and English AcadeMe Junior, while maintaining consistency, scalability, and a high-quality user experience across all offerings.",
    images: [ellImg1, ellImg2, ellImg3, ellImg4, ellImg5],
  },
  {
    id: "junior",
    title: "English AcadeMe Junior",
    description:
      "EAJ is a movie–based English program that boosts kids’ communicative competence with high educational value",
    type: "Web",
    case_study: "https://www.elltechnologies.com/english-academe-junior/",
    url: "",
    live: "https://junior.elltechnologies.com/",
    techStack: [
      "TypeScript",
      "Next.js",
      "MySQL",
      "React",
      "Node.js",
      "Express.js",
      "Sequelize",
      "Tailwind CSS",
      "Sentry",
      "PostHog",
    ],
    status: "Completed",
    year: "2025",
    longDescription:
      "English AcadeMe Junior is a movie-based English curriculum that improves children`s conversational competence while also providing excellent educational value.",
    images: [
      juniorImageHome,
      juniorImageMainBanner,
      progressImg,
      juniorAvatar,
      juniorImageActivities,
    ],
  },
  {
    id: "mockly",
    title: "Mockly",
    description:
      "Design inspiration platform for the AI age - blending automated UI/UX discovery pipelines with a modern, search-driven design experience for product designers",
    type: "Web",
    url: "",
    live: "https://app.mockly.space/dashboard",
    case_study: "https://www.leetpros.com/projects/mockly",
    techStack: [
      "TypeScript",
      "React",
      "Azure AI Search",
      "LLM",
      "Node.js",
      "Tailwind CSS",
      "Vector Search",
      "Puppeteer",
    ],
    status: "Completed",
    year: "2025",
    longDescription:
      "Mockly is a design inspiration platform built for product designers. It lets users explore real-world UI from apps and websites to gather inspiration for their next projects. The platform is powered by an autonomous AI system that continuously curates, indexes, and understands digital interfaces from across the web - making it one of the fastest-growing UI/UX libraries in the world. The system combines agentic crawlers that discover and capture interfaces like power users, an LLM pipeline that analyzes screenshots to produce structured descriptors (layout, hierarchy, components, flow purpose), and vector-based smart search with hybrid retrieval and semantic ranking in Azure AI Search - tuned for intent-led queries like 'clean fintech dashboards' or 'social onboarding flows'. Quality, de-duplication, and safety screening keep the catalogue trustworthy as volume grows.",
    images: [mocklyImg1, mocklyImg2, mocklyImg3, mocklyImg4, mocklyImg5],
  },
  {
    id: "champions-cube",
    title: "Champions Cube",
    description:
      "iOS-inspired web app for creators - combining a powerful card-deck CMS with a high-performance, image-rich viewing experience",
    type: "Web",
    url: "",
    live: "https://www.championscube.com/",
    case_study: "https://www.leetpros.com/projects/championscube",
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Static Site Generation",
      "Virtualization",
      "Image Optimization",
    ],
    status: "Completed",
    year: "2025",
    longDescription:
      "Champions Cube is a web app that feels unmistakably iOS-native: a card-deck creation CMS for the admin and a fast, image-rich deck viewer for customers. Admins work in a CMS to add and manage collectible champion cards - each with attributes, artwork, and guidance - then publish a curated deck customers can open with a unique access code. Customers land in a deck viewing app with over 200 cards in a virtualized list; tapping a card reveals a full-bleed detail screen with large character art, details, and usage guidance. The project delivers a native iOS experience on the web - from pagination dots and gesture-driven transitions to micro-interactions and inertial scrolling - using Next.js with static site generation for optimization and caching. Custom virtualization handles tall, image-heavy cards with windowed rendering, priority prefetching, and LQIP for high-res swaps, with image sizes optimized per device DPR and responsive formats to keep scrolling fluid at 60fps.",
    images: [ccImg1, ccImg2, ccImg3, ccImg4, ccImg1],
  },
  {
    id: "floragenic",
    title: "FloraGenic",
    description:
      "Multi-Vendor Ecommerce Platform for Nurseries & Gardeners. Also includes AI aided plants & disease identification",
    type: "Cross-Platfrom",
    url: "https://github.com/akdevjs/FloraGenic-Web",
    live: "https://floragenic-web.vercel.app/",
    techStack: [
      "Next.js",
      "TensorFlow",
      "GraphQL",
      "React",
      "React Native",
      "Python",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Flask",
      "Stripe",
      "Tailwind CSS",
      "Material UI",
      "Mantine UI",
    ],
    status: "Completed",
    year: "2023",
    longDescription:
      "FloraGenic is a comprehensive multi-vendor e-commerce platform designed specifically for plant nurseries and gardening enthusiasts. It provides a marketplace where vendors can list their products and customers can browse and purchase plants and gardening supplies. Along with that, FloraGenic features an AI-powered plant and disease identification tool that helps users identify plants and diagnose common plant diseases using image recognition technology and recommends treatments and care tips.",
    images: [
      "https://placehold.co/1200x800/10b981/ffffff?text=FloraGenic+Home",
      "https://placehold.co/1200x800/34d399/ffffff?text=Product+Catalog",
      "https://placehold.co/1200x800/6ee7b7/ffffff?text=Vendor+Dashboard",
    ],
  },
  {
    id: "draftly",
    title: "Draftly",
    description:
      "AI-powered blog with smart writing, semantic search, auto-moderation, and a chat assistant for content",
    type: "Web",
    url: "",
    techStack: [
      "TypeScript",
      "React.js",
      "LangChain",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Redis",
      "BullMQ",
      "OpenAI API",
      "PGVector",
      "RAG",
    ],
    status: "In Progress",
    year: "2026",
    longDescription:
      "This project is an AI-powered content publishing platform that enhances both the writing and reading experience using modern AI workflows. For authors, the platform includes an AI writing assistant embedded directly into the editor, enabling users to generate content, rewrite sections, adjust tone, expand ideas, and create SEO-friendly titles and summaries in real time. Upon publishing, posts are automatically tagged and categorized using AI, eliminating manual organization and ensuring consistent content structure across the platform. For readers, the platform provides AI-generated summaries (TL;DR, bullet points, simplified explanations) for every article, making long-form content more accessible. Instead of traditional keyword search, the app uses semantic search powered by embeddings, allowing users to discover relevant posts based on meaning rather than exact text matches. To maintain content quality, an AI-driven comment moderation system automatically detects spam, toxicity, and off-topic replies, helping authors manage discussions at scale. A standout feature is the “Chat with the Blog” experience, built using a Retrieval-Augmented Generation (RAG) pipeline. Readers can ask questions in natural language and receive contextual answers sourced directly from the blog’s content, with responses grounded in relevant articles rather than generic AI output. The backend is designed with production-ready AI infrastructure, including background job queues for AI tasks, streaming responses, prompt versioning, usage tracking, and rate limiting for cost control. Overall, the project demonstrates practical, real-world AI integration across content creation, discovery, moderation, and interaction—far beyond a basic CRUD blog.",
    images: [
      "https://placehold.co/800x1200/f59e0b/ffffff?text=FeedNest+Home",
      "https://placehold.co/800x1200/fbbf24/ffffff?text=Survey+Interface",
      "https://placehold.co/800x1200/fcd34d/ffffff?text=Rewards+Store",
    ],
  },
];

export default projects;
