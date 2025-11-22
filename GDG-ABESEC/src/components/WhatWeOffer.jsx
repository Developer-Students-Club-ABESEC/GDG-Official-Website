"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCode, FaUsers, FaRocket } from "react-icons/fa";

const WhatWeOffer = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const offerings = [
    {
      id: 1,
      title: "Technical Workshops",
      frontIcon: <FaCode className="text-6xl text-blue-400" />,
      frontDescription: "Learn cutting-edge technologies",
      backImage:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
      backTitle: "Hands-on Learning",
      backDetails:
        "Dive into curated hands-on sessions covering Web Dev, Cloud, AI/ML, Flutter and more. Designed to build real-world skills.",
      tags: ["Web Dev", "Cloud", "AI/ML", "Hands-on"],
      aos: "fade-right",
      defaultTiltY: 15,
    },
    {
      id: 2,
      title: "Community Events",
      frontIcon: <FaUsers className="text-6xl text-red-400" />,
      frontDescription: "Connect with fellow developers",
      backImage:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
      backTitle: "Network & Grow",
      backDetails:
        "Meet passionate developers, join clubs, collaborate on projects, and participate in fun interactive events.",
      tags: ["Networking", "Hackathons", "Teamwork"],
      aos: "fade-up",
      defaultTiltY: 0,
    },
    {
      id: 3,
      title: "Project Building",
      frontIcon: <FaRocket className="text-6xl text-green-400" />,
      frontDescription: "Build real-world projects",
      backImage:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      backTitle: "Innovate & Create",
      backDetails:
        "Collaborate on real projects that get showcased. Convert ideas into real solutions with guidance and peer learning.",
      tags: ["Projects", "Innovation", "Showcase", "Build"],
      aos: "fade-left",
      defaultTiltY: -15,
    },
  ];

  return (
    <section className="min-h-screen bg-black py-28 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mt-20 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold text-slate-300 mb-4">
            What We Are{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-cyan-400">
              Offering
            </span>
          </h2>
          <div className="h-[3px] w-96 max-w-full rounded-full mx-auto bg-linear-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mt-10 perspective-1000">
          {offerings.map((item) => (
            <FlipCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FlipCard = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const tagColors = [
    "bg-green-200 text-green-900",
    "bg-cyan-200 text-cyan-900",
    "bg-orange-200 text-orange-900",
    "bg-pink-200 text-pink-900",
    "bg-purple-200 text-purple-900",
    "bg-yellow-200 text-yellow-900",
  ];

  return (
    <div
      data-aos={item.aos}
      className="w-[300px] md:w-[330px] h-[430px] group cursor-pointer transition-transform duration-700"
      style={{
        transform: `rotateX(10deg) rotateY(${item.defaultTiltY}deg) translateZ(-160px) scale(0.94)`,
        transition: "0.6s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "rotateX(0deg) rotateY(0deg) translateZ(120px) scale(1.03)";
        setIsFlipped(true);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotateX(10deg) rotateY(${item.defaultTiltY}deg) translateZ(-160px) scale(0.94)`;
        setIsFlipped(false);
      }}
    >
      <motion.div
        className="relative w-full h-full rounded-2xl shadow-2xl"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-black/50 to-blue-950/40 p-8 flex flex-col items-center justify-center text-center backdrop-blur-md border border-white/10 shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          {item.frontIcon}

          <h3 className="text-2xl mt-6 font-semibold text-white">
            {item.title}
          </h3>

          <p className="text-slate-300 mt-3">{item.frontDescription}</p>

          <div className="mt-6 text-sm text-blue-300 opacity-90">
            Hover to explore →
          </div>
        </div>

        <div
          className="absolute w-full h-[90%] rounded-2xl overflow-hidden bg-black"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="relative w-full h-full">
            <img
              src={item.backImage}
              alt={item.backTitle}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/95"></div>

            <div className="absolute bottom-6 w-full px-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                {item.backTitle}
              </h3>

              <p className="text-slate-200 text-sm leading-relaxed mb-4 drop-shadow-md">
                {item.backDetails}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-[4px] rounded-full text-xs font-medium shadow-sm border border-white/10 ${tagColors[i % tagColors.length]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhatWeOffer;
