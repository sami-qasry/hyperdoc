"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hello, I'm{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Sami EL-QASRY
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
          Software Engineering Student at ENSET Mohammedia, Morocco
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
          I'm passionate about building modern web applications and exploring
          new technologies. Currently focused on web development, cloud
          computing, and artificial intelligence.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/projects"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            View My Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <p className="text-gray-600 dark:text-gray-400">
              React, Next.js, TypeScript, Tailwind CSS
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Node.js, Express, MongoDB, REST APIs
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Tools</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Git, Docker, AWS, CI/CD
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
