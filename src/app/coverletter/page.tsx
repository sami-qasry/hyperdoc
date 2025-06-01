"use client";
import { motion } from "framer-motion";

export default function CoverLetter() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Cover Letter</h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
        >
          <div className="prose dark:prose-invert max-w-none">
            <p className="mb-6">Dear Hiring Manager,</p>

            <p className="mb-4">
              I am writing to express my strong interest in software engineering
              positions that may be available at your organization. As a
              Software Engineering student at ENSET Mohammedia, I am passionate
              about creating efficient, innovative solutions using modern
              technologies.
            </p>

            <p className="mb-4">
              Throughout my academic journey, I have developed a strong
              foundation in software development, with particular expertise in
              web technologies. I have hands-on experience with React, Node.js,
              and TypeScript, and I am constantly learning and adapting to new
              technologies. My coursework and projects have honed my
              problem-solving abilities and analytical thinking.
            </p>

            <p className="mb-4">
              What sets me apart is my commitment to clean code, user-centered
              design, and continuous learning. I am particularly drawn to
              opportunities that allow me to work on challenging problems and
              contribute to meaningful projects. My experience with both
              frontend and backend development, coupled with my strong
              communication skills, makes me a valuable asset to any development
              team.
            </p>

            <p className="mb-4">
              I am excited about the possibility of bringing my skills,
              enthusiasm, and fresh perspective to your team. I would welcome
              the opportunity to discuss how my background and skills would be a
              good fit for your organization.
            </p>

            <p className="mb-6">
              Thank you for considering my application. I look forward to the
              possibility of discussing how I can contribute to your team.
            </p>

            <p>
              Best regards,
              <br />
              Sami EL-QASRY
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
