import Navbar from "./ui/Navbar";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import CursorTrail from "./ui/CursorTrail";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import React, { useState } from "react";





export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.subject && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Abes Engineering College',
      subContent: 'Ghaziabad, India',
      color: 'bg-blue-500'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'dsc@abesec.ac.in',
      subContent: 'support@gdg.com',
      color: 'bg-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 120 123 4567',
      subContent: 'Mon-Fri, 9am-6pm',
      color: 'bg-blue-500'
    }
  ];

  return (
    <>
    <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

          * {
            font-family: 'Inter', sans-serif;
          }

          html {
            scroll-behavior: smooth;
          }

          ::-webkit-scrollbar {
            width: 6px;
          }
          
          ::-webkit-scrollbar-track {
            background: black;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #333;
            border-radius: 3px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #444;
          }
        `}
      </style>
      
            <CursorTrail /> 
            <div className="fixed top-4 left-4 md:top-8 md:left-8 z-20 flex flex-col gap-2 pointer-events-none">
              <div className="flex items-center gap-2 pointer-events-auto">
                <img
                  src="https://www.svgrepo.com/show/353810/google-developers.svg"
                  className="h-8 w-10 sm:h-12 sm:w-14 md:h-14 md:w-16"
                  alt="gdgLogo"
                />
              
                <div className="flex items-center gap-0.5 font-bold text-xl sm:text-2xl md:text-3xl">
                  <span className="text-blue-500">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-yellow-300">o</span>
                  <span className="text-green-500">g</span>
                  <span className="text-blue-500">l</span>
                  <span className="text-red-500">e</span>
                </div>
              
              </div>
              
              <div className="text-white text-sm sm:text-base md:text-lg tracking-wide ml-0.5">
                Developers Group
              </div>
              
            </div>
      
        
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-0 w-full h-px bg-white"></div>
              <div className="absolute top-1/2 left-0 w-full h-px bg-white"></div>
              <div className="absolute top-3/4 left-0 w-full h-px bg-white"></div>
              <div className="absolute top-0 left-1/4 h-full w-px bg-white"></div>
              <div className="absolute top-0 left-1/2 h-full w-px bg-white"></div>
              <div className="absolute top-0 left-3/4 h-full w-px bg-white"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto text-center">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-white text-black text-sm font-semibold tracking-wider">
                  IDEAS INTO ACTION
                </span>
              </motion.div>

              <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="
                        relative 
                        inline-block 
                        px-4
                        text-6xl md:text-8xl lg:text-9xl 
                        font-black 
                        mb-8 
                        tracking-tighter
                      "
                style={{
                  background: "linear-gradient(135deg, #fff 0%, #888 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                GET IN TOUCH

                {/* underline */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "calc(100% - 2rem)" }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute bottom-0 left-1/2 h-1 bg-white"
                  style={{ transform: "translateX(-50%)" }}
                />
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base md:text-xl text-gray-500 max-w-3xl mx-auto mb-12"
                style={{
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 300,
                }}
              >
                Share your thoughts, questions, or feedback — we’d love to hear it.{" "}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center justify-center gap-2 text-gray-500 text-xs"
                style={{
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                <span>Scroll down to explore</span>
              </motion.div>
              <Navbar />
            </div>
          </motion.section>
          
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;

              return (
                <Tilt
                  key={index}
                  glareEnable={false}
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  scale={1.05}
                  transitionSpeed={2500}
                >
                  <div
                    className="group relative p-6 h-full rounded-2xl 
                     bg-white/10 backdrop-blur-xl 
                     border border-white/10 
                     transition-all duration-700 
                     hover:scale-[1.04] hover:-translate-y-2 
                     overflow-hidden"
                  >
                    {/* 🔵 Hover Glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl pointer-events-none"
                      style={{
                        boxShadow: `
                0 0 40px rgba(66,133,244,0.35),
                inset 0 0 40px rgba(66,133,244,0.15)
              `,
                        background:
                          "radial-gradient(circle at 50% 50%, rgba(66,133,244,0.12), transparent 70%)",
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 
                         bg-white/10 border border-white/20 
                         text-[#5F6F8E]"
                      >
                        <Icon size={24} />
                      </div>

                      <h3 className="text-xl font-semibold text-[#E5E7EB] mb-2">
                        {info.title}
                      </h3>

                      <p className="text-[#9CA3AF] font-medium">
                        {info.content}
                      </p>

                      <p className="text-[#6B7280] text-sm mt-1">
                        {info.subContent}
                      </p>
                    </div>
                  </div>
                </Tilt>
              );
            })}
          </div>

          {/* Contact Form */}
          <div
            className="group relative max-w-3xl mx-auto mb-20 rounded-2xl 
             bg-white/10 backdrop-blur-xl 
             border border-white/10 
             transition-all duration-700 
             hover:scale-[1.03] hover:-translate-y-2 
             overflow-hidden"
          >
            {/* 🔵 Hover Glow Layer (SAME AS CARDS) */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 
               transition-all duration-700 rounded-2xl pointer-events-none"
              style={{
                boxShadow: `
        0 0 40px rgba(66,133,244,0.35),
        inset 0 0 40px rgba(66,133,244,0.15)
      `,
                background:
                  "radial-gradient(circle at 50% 50%, rgba(66,133,244,0.12), transparent 70%)",
              }}
            />

            {/* 🟢 Form Content */}
            <div className="relative z-10 p-6">

              <h2 className="text-2xl font-bold text-[#E5E7EB] mb-6">
                Send Us a Message
              </h2>

              {submitted && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg mb-6">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-[#9CA3AF] mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg 
                       bg-black/40 border border-white/10 
                       text-gray-100 placeholder-gray-500 
                       focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-[#9CA3AF] mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg 
                       bg-black/40 border border-white/10 
                       text-gray-100 placeholder-gray-500 
                       focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-[#9CA3AF] mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg 
                     bg-black/40 border border-white/10 
                     text-gray-100 placeholder-gray-500 
                     focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-[#9CA3AF] mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg 
                     bg-black/40 border border-white/10 
                     text-gray-100 placeholder-gray-500 
                     focus:outline-none focus:ring-2 focus:ring-blue-500/60 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full md:w-auto 
                   bg-[#6B7280]/80 hover:bg-[#4285F4] 
                   text-white font-semibold 
                   px-8 py-3 rounded-lg 
                   transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        
      
    </>
  );
}