"use client";
import { motion } from "framer-motion";

export default function DigitalCV() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Digital CV</h1>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
          <video controls className="w-full" poster="/video-thumbnail.jpg">
            <source src="/video-cv.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold mb-4">Key Highlights</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Software Engineering Student at ENSET Mohammedia</li>
            <li>Passionate about web development and cloud computing</li>
            <li>Strong foundation in algorithms and data structures</li>
            <li>Experience with modern web technologies</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}
