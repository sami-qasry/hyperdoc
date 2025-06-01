"use client";
import { motion } from "framer-motion";

export default function CV() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-8">Download CV</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Click the button below to download my complete CV in PDF format.
          </p>
          <motion.a
            href="/EL-QASRYSami.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download CV
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
