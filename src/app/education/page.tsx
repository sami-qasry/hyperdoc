"use client";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
  {
    school: "ENSET Mohammedia, Morocco",
    degree: "Software Engineering and Distributed Information Systems (GLSID)",
    years: "2023 - Present",
    description: "Focused on advanced software development, system architecture, and distributed information systems.",
  },
  {
    school: "BTS Taounate, Morocco",
    degree: "Higher Technician Diploma in Information Systems Development (DSI)",
    years: "2021 - 2023",
    description: "Training in database management, application development, and information systems analysis.",
  },
  {
    school: "High School Al Wahda, Taounate, Morocco",
    degree: "Baccalaureate in Physical Sciences",
    years: "2020 - 2021",
    description: "Scientific track with a focus on mathematics, physics, and chemistry.",
  }
];


  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Education</h1>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <h2 className="text-2xl font-bold mb-2">{edu.school}</h2>
              <h3 className="text-xl text-gray-600 dark:text-gray-300 mb-2">
                {edu.degree}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {edu.years}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
