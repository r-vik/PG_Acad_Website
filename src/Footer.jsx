import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Linkedin,
} from "lucide-react";
import Logo from '../src/assets/Logo.png'
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white relative top-0 ">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <img src={Logo} alt="Academic Council Logo" className="h-12" />
              <p className="text-sm text-gray-400">
                Empowering minds, shaping futures.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#connect"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Connect
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/pg-academic-society-iit-mandi-803b08330/"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Linkedin size={20} />
                  
                </a>
              </div>
              <div className="mt-4">
                <a
                  href="mailto:pgacademic_secretary@students.iitmandi.ac.in"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <Mail size={20} className="mr-2" />
                  Email Us
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Inspirational Quote
              </h3>
              <blockquote className="text-gray-400 italic">
                "The capacity to learn is a gift; the ability to learn is a
                skill; the willingness to learn is a choice."
              </blockquote>
              <p className="text-gray-500 mt-2">- Brian Herbert</p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} PG Academic Council. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer

