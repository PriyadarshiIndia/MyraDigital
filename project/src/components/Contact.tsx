import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <h2 className="text-4xl font-bold text-[#333333] mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our products? We're here to help you find the perfect solution for your needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#4A90E2]/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-[#4A90E2]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#333333]">Phone Support</h3>
                  <p className="text-gray-600">+1 (800) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#50C5B7]/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-[#50C5B7]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#333333]">Email</h3>
                  <p className="text-gray-600">support@smartaccessories.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F5F5F5] rounded-2xl p-8 animate__animated animate__fadeInRight">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#333333] mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#333333] mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2" htmlFor="subject">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="product">Product Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-6 rounded-lg transition-colors ${
                  isSubmitted
                    ? 'bg-[#50C5B7] text-white'
                    : 'bg-[#4A90E2] text-white hover:bg-[#50C5B7]'
                }`}
              >
                {isSubmitted ? 'Message Sent! ✓' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;