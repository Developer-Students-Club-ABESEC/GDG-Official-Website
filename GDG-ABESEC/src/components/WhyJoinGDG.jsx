"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import {
  Code,
  Trophy,
  BookOpen,
  Users,
  MessageSquare,
  Rocket,
} from "lucide-react";

const cardData = [
  {
    title: "Technical Workshops",
    desc: "Hands-on coding sessions with industry tools and frameworks, designed to help you build real-world skills through practical exercises and guided learning.",
    icon: <Code size={32} />,
    tags: ["Hands-on", "Skill Boost", "Live Demos"],
    themeHex: "#4285F4",
  },
  {
    title: "Hackathons",
    desc: "48-hour innovation marathons filled with problem-solving, exciting prizes, expert mentorship, and the opportunity to build impactful prototypes with your team.",
    icon: <Trophy size={32} />,
    tags: ["48 Hours", "Teamwork", "Innovation"],
    themeHex: "#EA4335",
  },
  {
    title: "Study Jams",
    desc: "Collaborative learning programs focused on certifications and essential tech skills, where mentors guide you step-by-step through structured content and hands-on tasks.",
    icon: <BookOpen size={32} />,
    tags: ["Guided", "Peer Learning", "Certificates"],
    themeHex: "#FBBC05",
  },
  {
    title: "Networking",
    desc: "Connect with developers, professionals, and like-minded builders while sharing ideas, exploring opportunities, and forming collaborations that extend beyond events.",
    icon: <Users size={32} />,
    tags: ["Meet People", "Collaborate", "Community"],
    themeHex: "#34A853",
  },
  {
    title: "Tech Talks",
    desc: "Learn real-world insights from industry experts as they share cutting-edge technologies, best practices, career guidance, and inspiring stories from the tech world.",
    icon: <MessageSquare size={32} />,
    tags: ["Experts", "Latest Tech", "Insights"],
    themeHex: "#4285F4",
  },
  {
    title: "Build Projects",
    desc: "Work on real, impactful projects that strengthen your developer portfolio while collaborating with peers, solving problems, and applying your skills in practical scenarios.",
    icon: <Rocket size={32} />,
    tags: ["Real Projects", "Teamwork", "Portfolio"],
    themeHex: "#EA4335",
  },
];

const WhyJoinGDG = () => {
  return (
    <section className="w-full py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-5">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#e5e5e5] mb-3 text-center"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Why <span className="text-[#4285F4]">Join GDG?</span>
        </h2>

        <p
          className="text-center text-[#737373] text-base sm:text-lg mb-14"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Explore what makes our community a powerful space for learning and
          growth.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch">
          {cardData.map((card, index) => (
            <Tilt
              key={index}
              glareEnable={false}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.02}
              transitionSpeed={2500}
            >
              <div
                className="group relative p-7 h-full min-h-[350px] flex flex-col rounded-2xl bg-[#151515] border transition-all duration-700 hover:scale-[1.05] hover:-translate-y-2 overflow-hidden"
                style={{
                  borderColor: card.themeHex,
                  boxShadow: `0 4px 24px ${card.themeHex}20`,
                }}
              >
                {/* Hover Glow Layer */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl pointer-events-none"
                  style={{
                    boxShadow: `
                      0 0 80px ${card.themeHex}80,
                      0 0 120px ${card.themeHex}60,
                      0 0 160px ${card.themeHex}40,
                      inset 0 0 80px ${card.themeHex}30
                    `,
                    background: `radial-gradient(circle at 50% 50%, ${card.themeHex}20, transparent 70%)`,
                  }}
                ></div>

                <div className="relative z-10 flex flex-col flex-grow">
                  {/* Icon */}
                  <div
                    className="p-4 rounded-xl inline-block mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      backgroundColor: `${card.themeHex}15`,
                      border: `2px solid ${card.themeHex}80`,
                      color: card.themeHex,
                      boxShadow: `0 4px 16px ${card.themeHex}40`,
                    }}
                  >
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl sm:text-2xl font-bold mb-3 text-[#e5e5e5]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[#a3a3a3] text-sm leading-relaxed mb-5"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {card.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {card.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-4 py-2 rounded-full transition-all duration-500 backdrop-blur-sm"
                        style={{
                          backgroundColor: "transparent",
                          border: `1px solid ${card.themeHex}`,
                          color: card.themeHex,
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outer Hover Border */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl pointer-events-none"
                  style={{
                    border: `2px solid ${card.themeHex}60`,
                  }}
                ></div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinGDG;
