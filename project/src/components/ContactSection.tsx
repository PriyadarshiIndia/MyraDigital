"use client"

import { useState } from "react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://myra-api.vercel.app/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          product_title: formData.subject, // Use the dropdown value as the product title
          message: formData.message,
        }),
      })

      if (!response.ok) throw new Error("Failed to submit enquiry")

      setIsSubmitted(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Failed to submit your enquiry. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex items-center justify-center px-4 pt-40 pb-20 relative">
      {/* Pink background div - half height, full width */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-pink-500 z-0"></div>

      <div className="max-w-6xl w-full overflow-hidden border-none rounded-lg shadow-xl bg-white z-10 relative">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 text-center md:text-left relative px-6 pt-4  after:content-[''] after:absolute after:top-20 after:left-6 after:w-28 after:h-1 after:bg-pink-500">
        Myra Digital India pvt Ltd
      </h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side: Company Info and Map */}
          <div className="p-8 bg-white animate-fadeIn">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 animate-slideUp">Contact Us</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-3 animate-slideUp" style={{ animationDelay: "100ms" }}>
                <svg
                  className="h-5 w-5 text-pink-500 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800">Location</h3>
                  <p className="text-gray-600">153/1, Pocket C, Okhla Phase I, Okhla Industrial Estate, New Delhi, Delhi 110020</p>
                </div>
              </div>

              <div className="flex items-start gap-3 animate-slideUp" style={{ animationDelay: "200ms" }}>
                <svg
                  className="h-5 w-5 text-pink-500 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@myra-digital.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 animate-slideUp" style={{ animationDelay: "300ms" }}>
                <svg
                  className="h-5 w-5 text-pink-500 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91 8076418834</p>
                </div>
              </div>

              <div className="flex items-start gap-3 animate-slideUp" style={{ animationDelay: "400ms" }}>
                <svg
                  className="h-5 w-5 text-pink-500 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                  <p className="text-gray-600">+91 9711711185</p>
                </div>
              </div>
            </div>

            <div
              className="mt-8 h-64 rounded-lg overflow-hidden shadow-md animate-slideUp transition-transform hover:scale-[1.02]"
              style={{ animationDelay: "500ms" }}
            >
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3505.5738485175693!2d77.2771858!3d28.5224665!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce18208aad16d%3A0x9caa7199635a0cd2!2sMyra%20Digital%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1741418151748!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="p-8 bg-gray-50 animate-fadeIn">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 animate-slideUp">Get in Touch</h2>

            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 animate-scaleIn">
                <svg
                  className="h-16 w-16 text-pink-500 mb-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="animate-slideUp" style={{ animationDelay: "100ms" }}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-200"
                  />
                </div>

                <div className="animate-slideUp" style={{ animationDelay: "200ms" }}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-200"
                  />
                </div>

                <div className="animate-slideUp" style={{ animationDelay: "300ms" }}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+123 456 7890"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-200"
                  />
                </div>

                <div className="animate-slideUp" style={{ animationDelay: "400ms" }}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Subject
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="support">Projectors</option>
                    <option value="sales">Charging Solution</option>
                    <option value="feedback">OEM</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="animate-slideUp" style={{ animationDelay: "500ms" }}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-200 resize-none"
                  />
                </div>

                <div
                  className="animate-slideUp transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  style={{ animationDelay: "600ms" }}
                >
                  <button
                    type="submit"
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span>Submit</span>
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </div>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}