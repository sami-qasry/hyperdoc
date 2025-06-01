"use client";
import { motion } from "framer-motion";

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

export default function Experience() {
  const experiences: Experience[] = [
    {
      title: "Software Engineering Intern",
      company: "Tech Company",
      location: "Casablanca, Morocco",
      period: "June 2025 - Present",
      description: [
        "Developed and maintained web applications using React and Node.js",
        "Collaborated with team members using Agile methodologies",
        "Implemented responsive designs and improved user experience",
      ],
    },
    {
      title: "Web Development Project",
      company: "University Project",
      location: "ENSET Mohammedia",
      period: "January 2025 - May 2025",
      description: [
        "Led a team of 4 students in developing a full-stack web application",
        "Implemented user authentication and authorization",
        "Created RESTful APIs and integrated with frontend",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Experience</h1>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-[200px_1fr] md:gap-8">
                <div className="mb-4 md:mb-0 text-gray-600 dark:text-gray-400">
                  {exp.period}
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <div className="text-gray-600 dark:text-gray-300 mb-4">
                    {exp.company} • {exp.location}
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 md:left-[196px] w-3 h-3 bg-blue-500 rounded-full" />
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[5px] top-4 md:left-[201px] w-0.5 h-24 bg-gray-200 dark:bg-gray-700" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
