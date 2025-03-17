import { Instagram, Linkedin, Twitter, Youtube, Send } from "lucide-react"

export default function Footer() {
  return (
    <section>
      <div className="mx-auto container py-16 xl:px-20 lg:px-12 sm:px-6 px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4">
          {/* Logo and Social Media Column */}
          <div className="flex flex-col flex-shrink-0">
            <div className="dark:text-dark">
              <img
                src="public\img\logo.png"
                alt="Logo"
                className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="text-sm leading-none text-gray-800 mt-4 dark:text-dark">Copyright © 2021 Myra Digital India</p>
            <p className="text-sm leading-none text-gray-800 mt-4 dark:text-dark">All rights reserved</p>
            <div className="flex items-center gap-x-4 mt-12">
              <button
                aria-label="instagram"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center"
                onClick={() => window.open("https://www.instagram.com/myradigital.india/", "_blank")}
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
          <div className="sm:ml-0 ml-8 flex flex-col">
            <h2 className="text-base font-semibold leading-4 text-dark text-dark">Company</h2>
            <a
              href="#"
              className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-dark text-dark cursor-pointer"
            >
              Blog
            </a>
            <a
              href="#"
              className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-dark text-dark cursor-pointer"
            >
              Pricing
            </a>
            <a
              href="#"
              className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-dark text-dark cursor-pointer"
            >
              About Us
            </a>
            <a
              href="#"
              className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-dark text-dark cursor-pointer"
            >
              Contact us
            </a>
            <a
              href="#"
              className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-dark text-dark cursor-pointer"
            >
              Testimonials
            </a>
          </div>

          {/* Support Links Column */}
          <div className="flex flex-col">
            <h2 className="text-base font-semibold leading-4 text-gray-800 dark:text-dark">Support</h2>
            <a
              href="#"
              className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 text-dark cursor-pointer"
            >
              Legal policy
            </a>
            <a
              href="#"
              className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 text-dark cursor-pointer"
            >
              Status policy
            </a>
            <a
              href="#"
              className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 text-dark cursor-pointer"
            >
              Privacy policy
            </a>
            <a
              href="#"
              className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 text-dark cursor-pointer"
            >
              Terms of service
            </a>
          </div>

          {/* Newsletter Subscription - Desktop */}
          <div className="mt-10 lg:block hidden">
            <label className="text-xl font-medium leading-5 text-gray-800 dark:text-dark">Get updates</label>
            <div className="cursor-pointer flex items-center justify-between border border-gray-800 dark:border-white mt-4">
              <input
                type="text"
                className="text-base leading-4 p-4 w-full focus:outline-none text-gray-800 dark:text-white dark:placeholder-white dark:bg-gray-900 dark:border-white placeholder-gray-800"
                placeholder="Enter your email"
              />
              <button
                aria-label="send"
                className="mr-4 fill-current text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              >
                <Send size={16} className="dark:text-white dark:hover:text-gray-200" />
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription - Mobile */}
        <div className="mt-10 lg:hidden">
          <label className="text-xl font-medium text-dark">Get updates</label>
          <div className="flex items-center justify-between border border-gray-800 dark:border-white mt-4">
            <input
              type="text"
              className="text-base leading-4 p-4 relative z-0 w-full focus:outline-none text-gray-800 placeholder-gray-800 dark:text-white dark:placeholder-white dark:border-white dark:bg-gray-900"
              placeholder="Enter your email"
            />
            <button
              aria-label="send"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer mr-4 cursor-pointer relative z-40"
            >
              <Send
                size={16}
                className="fill-current text-gray-800 hover:text-gray-500 dark:text-white dark:hover:text-gray-200"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

