import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-custom-gradient text-white py-8 z-40 relative">
      <div className="container mx-auto px-6 lg:px-14 flex flex-col lg:flex-row lg:justify-between items-center gap-4">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-2">Synapse</h2>
          <p>Simplifying URL shortening for efficient sharing</p>
        </div>

        <p className="mt-4 lg:mt-0">
          &copy; 2025 Synapse. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-4 lg:mt-0">
          <a href="https://github.com/dnyaneshagale" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/dnyanesh-agale/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <FaLinkedin size={24} />
          </a>
          <a href="https://leetcode.com/dnyaneshagale/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <SiLeetcode size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;