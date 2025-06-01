"use client";
import { motion } from "framer-motion";

type Certificate = {
  title: string;
  provider: string;
  date: string;
  credentialId?: string;
  link?: string;
};

export default function Certifications() {
  const certificates: Certificate[] = [
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      provider: "Cisco Networking Academy - ENSET Mohammedia",
      date: "March 5, 2025",
      credentialId: "",
      link: "/certifications/1.pdf",
    },
    {
      title: "EF SET English Certificate (B2 - Upper Intermediate)",
      provider: "EF Standard English Test",
      date: "May 15, 2024",
      credentialId: "",
      link: "/certifications/2.pdf",
    },
    {
      title: "Introduction to MongoDB",
      provider: "ENSET - Hassan II University of Casablanca",
      date: "December 28, 2024",
      credentialId: "MDB9ex2uhlm0x",
      link: "/certifications/4.pdf",
    },
    {
      title: "Getting Started with Linux Fundamentals (RH104)",
      provider: "NDG - Cisco Networking Academy",
      date: "March 12, 2025",
      credentialId: "",
      link: "/certifications/5.pdf",
    },
    {
      title: "NDG Linux Unhatched",
      provider: "NDG - Cisco Networking Academy",
      date: "May 26, 2024",
      credentialId: "",
      link: "/certifications/6.pdf",
    },
    {
      title: "Network Security",
      provider: "Cisco Networking Academy - ENSET Mohammedia",
      date: "October 8, 2024",
      credentialId: "",
      link: "/certifications/7.pdf",
    },
    {
      title: "Networking Essentials",
      provider: "Cisco Networking Academy - ENSET Mohammedia",
      date: "January 5, 2024",
      credentialId: "",
      link: "/certifications/9.pdf",
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
        <h1 className="text-4xl font-bold mb-8 text-center">Certifications</h1>
        <div className="grid gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{cert.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {cert.provider}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Issued: {cert.date}
                  </p>
                  {cert.credentialId && (
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Credential ID: {cert.credentialId}
                    </p>
                  )}
                </div>
                {cert.link && (
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Verify
                    <svg
                      className="w-4 h-4 ml-2"
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
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
