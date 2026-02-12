import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, RoundedButton } from "../../components/atoms";
import Animated from "../../components/animations";
import Icons from "../../components/icons";
import projects from "../../data/projects";
import classNames from "classnames";

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <Animated.PageTransition>
        <Container className="pt-32 min-h-screen">
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Project Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <RoundedButton
              as="button"
              className="cursor-pointer"
              onClick={() => history.push("/")}
            >
              Back to Home
            </RoundedButton>
          </div>
        </Container>
      </Animated.PageTransition>
    );
  }

  const {
    title,
    longDescription,
    description,
    type,
    url,
    live,
    figma,
    case_study,
    play_store,
    apple_store,
    techStack,
    status,
    year,
    images: projectImages = [],
  } = project;

  const sectionCount = 5;
  const emptyImage =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E";
  const images =
    projectImages.length > 0
      ? Array.from(
          { length: sectionCount },
          (_, i) => projectImages[i % projectImages.length]
        )
      : Array(sectionCount).fill(emptyImage);

  // Categorize tech stack
  const frontend =
    techStack?.filter((tech) =>
      [
        "React",
        "React Native",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Material UI",
        "Mantine UI",
        "Native Wind",
        "Framer Motion",
      ].includes(tech),
    ) || [];

  const backend =
    techStack?.filter((tech) =>
      [
        "Node.js",
        "Express.js",
        "Python",
        "Flask",
        "GraphQL",
        "Medusa.js",
      ].includes(tech),
    ) || [];

  const database =
    techStack?.filter((tech) =>
      [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Firebase",
        "Redis",
        "Prisma",
        "Sequelize",
        "MikroORM",
        "Mongoose",
        "PGVector",
      ].includes(tech),
    ) || [];

  const tools =
    techStack?.filter((tech) =>
      [
        "Expo",
        "TanStack Query",
        "Zustand",
        "React Hook Form",
        "Axios",
        "i18next",
        "PostHog",
        "Sentry",
        "Stripe",
        "Puppeteer",
        "JSDOM",
        "TensorFlow",
        "LangChain",
        "BullMQ",
        "OpenAI API",
        "RAG",
        "Figma",
        "Storybook",
      ].includes(tech),
    ) || [];

  return (
    <Animated.PageTransition>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Back Button - Fixed at top */}
        <div className="fixed top-20 left-4 md:left-8 z-50">
          <button
            onClick={() => history.push("/")}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="font-medium">Back</span>
          </button>
        </div>

        {/* Hero Section with Parallax */}
        <Animated.ParallaxSection
          imgUrl={images[0]}
          subheading={`${type} • ${year}`}
          heading={title}
        >
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
            <div className="col-span-1 md:col-span-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Overview
              </h2>
            </div>
            <div className="col-span-1 md:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                {status && (
                  <span
                    className={classNames(
                      "text-sm font-bold uppercase px-4 py-2 rounded-full",
                      status === "Completed" &&
                        "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
                      status === "In Progress" &&
                        "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
                      status === "Maintenance" &&
                        "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
                    )}
                  >
                    {status}
                  </span>
                )}
                <span className="text-gray-500 dark:text-gray-400">{year}</span>
              </div>
              <p className="mb-6 text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {longDescription || description}
              </p>
              <div className="flex flex-wrap gap-4">
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 dark:bg-orange-500 px-6 py-3 text-lg font-medium text-white transition-all hover:bg-indigo-600 dark:hover:bg-orange-600 hover:shadow-lg"
                  >
                    View Live
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
                {play_store && (
                  <a
                    href={play_store}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gray-800 dark:bg-gray-700 px-6 py-3 text-lg font-medium text-white transition-all hover:bg-gray-900 dark:hover:bg-gray-600 hover:shadow-lg"
                  >
                    Google Play
                    <Icons.PlayStore className="w-5 h-5" />
                  </a>
                )}
                {apple_store && (
                  <a
                    href={apple_store}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gray-800 dark:bg-gray-700 px-6 py-3 text-lg font-medium text-white transition-all hover:bg-gray-900 dark:hover:bg-gray-600 hover:shadow-lg"
                  >
                    App Store
                    <Icons.AppleStore className="w-5 h-5" />
                  </a>
                )}
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gray-800 dark:bg-gray-700 px-6 py-3 text-lg font-medium text-white transition-all hover:bg-gray-900 dark:hover:bg-gray-600 hover:shadow-lg"
                  >
                    GitHub
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
                {case_study && (
                  <a
                    href={case_study}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gray-800 dark:bg-gray-700 px-6 py-3 text-lg font-medium text-white transition-all hover:bg-gray-900 dark:hover:bg-gray-600 hover:shadow-lg"
                  >
                    Case Study
                  </a>
                )}
                {figma && (
                  <a
                    href={figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-purple-500 px-6 py-3 text-lg font-medium text-white transition-all hover:bg-purple-600 hover:shadow-lg"
                  >
                    Figma
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7m0 0H7m10 0v10"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </Animated.ParallaxSection>

        {/* Technology Stack Section */}
        <Animated.ParallaxSection
          imgUrl={images[1]}
          subheading="Technology"
          heading="Built with modern tools"
        >
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
            <div className="col-span-1 md:col-span-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Tech Stack
              </h2>
            </div>
            <div className="col-span-1 md:col-span-8 space-y-8">
              {frontend.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {frontend.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {backend.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    Backend
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {backend.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {database.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    Database
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {database.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {tools.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    Tools & Services
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {tools.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Animated.ParallaxSection>

        {/* Key Features Section */}
        <Animated.ParallaxSection
          imgUrl={images[2]}
          subheading="Features"
          heading="What makes it special"
        >
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
            <div className="col-span-1 md:col-span-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Key Features
              </h2>
            </div>
            <div className="col-span-1 md:col-span-8">
              <div className="space-y-6">
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Scalable Architecture
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Built with scalability in mind, utilizing modern
                    architecture patterns and best practices to ensure the
                    application can grow with increasing demands.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    User-Centric Design
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Designed with the end-user in mind, providing an intuitive
                    and seamless experience across all devices and platforms.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Performance Optimized
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Optimized for speed and efficiency with lazy loading, code
                    splitting, and efficient data fetching strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Animated.ParallaxSection>

        {/* Development Approach Section */}
        <Animated.ParallaxSection
          imgUrl={images[3]}
          subheading="Process"
          heading="How it was built"
        >
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
            <div className="col-span-1 md:col-span-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Development
              </h2>
            </div>
            <div className="col-span-1 md:col-span-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-500 dark:bg-orange-500 text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      Planning & Design
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 ml-11">
                    Started with comprehensive planning, wireframing, and design
                    mockups to establish a clear vision and user flow for the
                    application.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-500 dark:bg-orange-500 text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      Development & Testing
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 ml-11">
                    Implemented features iteratively with continuous testing,
                    ensuring code quality and functionality at every step of the
                    development process.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-500 dark:bg-orange-500 text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      Deployment & Optimization
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 ml-11">
                    Deployed with careful consideration for performance,
                    security, and scalability, followed by continuous monitoring
                    and optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Animated.ParallaxSection>

        {/* Results & Impact Section */}
        <Animated.ParallaxSection
          imgUrl={images[4]}
          subheading="Impact"
          heading="Results that matter"
        >
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
            <div className="col-span-1 md:col-span-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Outcome
              </h2>
            </div>
            <div className="col-span-1 md:col-span-8">
              <p className="mb-8 text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                This project successfully delivered a robust, scalable solution
                that meets and exceeds user expectations. The implementation of
                modern technologies and best practices ensures long-term
                maintainability and adaptability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <div className="text-4xl font-bold text-indigo-600 dark:text-orange-500 mb-2">
                    100%
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    Requirements Met
                  </div>
                </div>
                <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                    Fast
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    Performance
                  </div>
                </div>
                <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    Modern
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    Tech Stack
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 dark:bg-orange-500 px-8 py-4 text-xl font-medium text-white transition-all hover:bg-indigo-600 dark:hover:bg-orange-600 hover:shadow-xl"
                  >
                    Explore Project
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7m0 0H7m10 0v10"
                      />
                    </svg>
                  </a>
                )}
                {play_store && (
                  <a
                    href={play_store}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gray-800 dark:bg-gray-700 px-8 py-4 text-xl font-medium text-white transition-all hover:bg-gray-900 dark:hover:bg-gray-600 hover:shadow-xl"
                  >
                    Google Play
                    <Icons.PlayStore className="w-6 h-6" />
                  </a>
                )}
                {apple_store && (
                  <a
                    href={apple_store}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gray-800 dark:bg-gray-700 px-8 py-4 text-xl font-medium text-white transition-all hover:bg-gray-900 dark:hover:bg-gray-600 hover:shadow-xl"
                  >
                    App Store
                    <Icons.AppleStore className="w-6 h-6" />
                  </a>
                )}
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gray-800 dark:bg-gray-700 px-8 py-4 text-xl font-medium text-white transition-all hover:bg-gray-900 dark:hover:bg-gray-600 hover:shadow-xl"
                  >
                    View Code
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
                {case_study && (
                  <a
                    href={case_study}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gray-800 dark:bg-gray-700 px-8 py-4 text-xl font-medium text-white transition-all hover:bg-gray-900 dark:hover:bg-gray-600 hover:shadow-xl"
                  >
                    Case Study
                  </a>
                )}
              </div>
            </div>
          </div>
        </Animated.ParallaxSection>
      </div>
    </Animated.PageTransition>
  );
}
