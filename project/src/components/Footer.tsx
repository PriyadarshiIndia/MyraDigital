import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <section>
      <div className="mx-auto container py-16 xl:px-20 lg:px-12 sm:px-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and Social Media Column */}
          <div className="flex flex-col flex-shrink-0">
            <div className="dark:text-dark">
              <img
                src="public/img/logo.png"
                alt="Logo"
                className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="text-sm leading-none text-gray-800 mt-4 dark:text-dark">
              Copyright © 2021 Myra Digital India
            </p>
            <p className="text-sm leading-none text-gray-800 mt-4 dark:text-dark">
              All rights reserved
            </p>
            <div className="flex items-center gap-x-4 mt-12">
              <button
                aria-label="instagram"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center"
                onClick={() =>
                  window.open("https://www.instagram.com/myradigital.india/", "_blank")
                }
              >
                <Instagram size={18} color="white" />
              </button>

              <button
                aria-label="linked-in"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center"
              >
                <Linkedin size={18} color="white" />
              </button>
              <button
                aria-label="twitter"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center"
              >
                <Twitter size={16} color="white" />
              </button>
              <button
                aria-label="youtube"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center"
              >
                <Youtube size={18} color="white" />
              </button>
            </div>
          </div>

          {/* Company Links Column */}
          <div className="flex flex-col">
            <h2 className="text-base font-semibold leading-4 text-dark">Company</h2>
            <a
              href="#"
              className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-dark cursor-pointer"
            >
              Home
            </a>
            <a
              href="#"
              className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-dark cursor-pointer"
            >
              About Us
            </a>
            <a
              href="#"
              className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-dark cursor-pointer"
            >
              Contact
            </a>
            <a
              href="#"
              className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-dark cursor-pointer"
            >
              FAQ
            </a>
          </div>

          {/* Products Column */}
          <div className="flex flex-col">
            <h2 className="text-base font-semibold leading-4 text-gray-800 dark:text-dark">
              Products
            </h2>
            <a
              href="#"
              className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-dark cursor-pointer"
            >
              Chargers
            </a>
            <a
              href="#"
              className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-dark cursor-pointer"
            >
              Car Chargers
            </a>
            <a
              href="#"
              className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-dark cursor-pointer"
            >
              Data Cables
            </a>
            <a
              href="#"
              className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-dark cursor-pointer"
            >
              Projectors
            </a>
            <a
              href="#"
              className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-dark cursor-pointer"
            >
              Note Counting Machine
            </a>
            <a
              href="#"
              className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-dark cursor-pointer"
            >
              Power Banks
            </a>
            <a
              href="#"
              className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-dark cursor-pointer"
            >
              OEM Solutions
            </a>
          </div>

          {/* Support Links Column */}
          <div className="flex flex-col">
            <h2 className="text-base font-semibold leading-4 text-gray-800 dark:text-dark">
              Support
            </h2>
            <a
              href="privacy-policy"
              className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-dark cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="/terms&conditions"
              className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-dark cursor-pointer"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}