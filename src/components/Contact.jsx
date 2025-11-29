import React, { useState } from "react";
import { Mail, User, MessageSquare, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Create mailto link with form data
    const mailtoLink = `mailto:vividleads4@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setStatus("sent");
      setTimeout(() => setStatus(""), 3000);
    }, 1000);
  };

  return (
    // Main container - Full screen section with dark background
    <div id="contact" className="min-h-screen bg-gray-900 text-white py-10 md:py-20 px-4">
      {/* Content wrapper - Smaller max width on mobile, larger on desktop */}
      <div className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
        {/* Header section - Title and description */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 rounded-2xl p-8 md:p-10 border border-gray-700 shadow-xl">
          <div className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Your Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Your Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Subject
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : status === "sent" ? (
                <>
                  <span>✓</span>
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-center text-gray-400 text-sm">
              Or reach out directly at{" "}
              <a href="mailto:vividleads4@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                vividleads4@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;