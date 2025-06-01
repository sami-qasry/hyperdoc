"use client";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  image?: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description:
        "A modern and responsive portfolio website to showcase my projects, experience, and skills. Built with performance and design in mind.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio", // Remplace par ton lien
    },
    {
      title: "Provincial Directorate Management App",
      description:
        "A hybrid desktop and web application for managing inventory and administrative data of the Provincial Directorate in Taounate.",
      techStack: ["VB.NET", "MySQL", "HTML", "CSS"],
      github: "",
    },
    {
      title: "Medical Office Management System",
      description:
        "A web application for automating appointments, patient records, and administrative workflows in a private clinic.",
      techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      github: "",
    },
    {
      title: "Transportation Management Web App",
      description:
        "Developed as an intern at FikraLabs, this app enables managing drivers, trips, and vehicles efficiently with an intuitive UI.",
      techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Spring Boot"],
      github: "",
    },
    {
      title: "AI-Powered Chatbot",
      description:
        "A chatbot application that uses OpenAI's GPT-3 to provide intelligent responses and assist users with various queries.",
      techStack: ["Node.js", "Express", "OpenAI API", "Socket.IO"],
      github: "",
    },
    {
      title: "Student Project Supervision Platform",
      description:
        "Internal tool used to supervise and evaluate final year projects, including task tracking, report uploads, and feedback system.",
      techStack: ["React", "Node.js", "MongoDB"],
      github: "",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-500 hover:text-blue-600"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View on GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
