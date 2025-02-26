"use client"

import { useEffect, useState } from "react"
import { Mail, Phone } from "lucide-react"

export default function Maintenance() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center w-full min-h-screen bg-white text-slate-800 overflow-hidden px-4 sm:px-6">
      <div className="relative z-10 w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
        <div
          className={`bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden transition-all duration-1000 ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <div className="w-full h-48 sm:h-56 md:h-64 relative bg-gradient-to-r from-slate-50 to-slate-100 flex items-center justify-center p-4">
            <img
              src="https://www.uuptwa.com/uuptwa/district/member/web_update.gif"
              alt="Maintenance"
              width={240}
              height={180}
              className="object-contain max-h-full rounded shadow-md"
            />
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-pink-600">
              Under Maintenance
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed text-center">
              We're currently making some improvements to our website to serve you better. Please check back soon!
            </p>

            <div className="w-full p-5 rounded-xl bg-slate-50 border border-slate-100 space-y-4">
              <h2 className="text-xl font-semibold text-slate-800">Need assistance?</h2>
              <div className="flex flex-col space-y-3">
                <a
                  href="mailto:info.myra-digital.com"
                  className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info.myra-digital.com</span>
                </a>
                <div className="inline-flex items-center gap-2 text-slate-700">
                  <Phone className="w-5 h-5" />
                  <span>9711711185 / 9873346997</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-[380rem] h-[380rem] rounded-[46%] bg-pink-500 animate-slow-spin origin-[48%_50%]"></div>
        </div>
      </div>
    </div>
  )
}

