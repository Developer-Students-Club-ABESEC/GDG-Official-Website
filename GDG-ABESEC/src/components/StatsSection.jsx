"use client";

import React, { useEffect, useRef } from "react";
import { Users, Trophy, UsersRound } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function StatsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: false,
      offset: 80,
    });

    const handleScroll = () => {
      const cards = sectionRef.current?.querySelectorAll(".stat-card");
      if (!cards) return;

      const viewportHeight = window.innerHeight;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const fadeOutStart = viewportHeight * 0.2;
        const fadeOutEnd = viewportHeight * 0.05;

        if (rect.top < fadeOutStart) {
          const opacity = Math.max(
            0,
            Math.min(1, (rect.top - fadeOutEnd) / (fadeOutStart - fadeOutEnd))
          );
          card.style.opacity = opacity;
        } else {
          card.style.opacity = 1;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    {
      id: 1,
      icon: <Users className="w-10 h-10 text-blue-400" />,
      title: "1000+",
      subtitle: "Community Members",
    },
    {
      id: 2,
      icon: <Trophy className="w-10 h-10 text-yellow-400" />,
      title: "20+",
      subtitle: "Events Organized",
    },
    {
      id: 3,
      icon: <UsersRound className="w-10 h-10 text-green-400" />,
      title: "50+",
      subtitle: "Team Members",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-[130vh] bg-black  py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden flex items-center justify-center"
    >
      <div className="max-w-[270px] mx-auto -mt-72 w-full flex flex-col items-center space-y-20">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className="stat-card w-full flex h-36 -mb-3 flex-col items-center justify-center rounded-3xl border border-slate-700/60 bg-slate-900/80 shadow-[0_0_30px_rgba(0,0,0,0.3)] backdrop-blur-md text-center p-4 hover:border-slate-400/50 transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="mb-3">{stat.icon}</div>
            <h3 className="text-4xl font-semibold text-white mb-1 tracking-wide">
              {stat.title}
            </h3>
            <p className="text-slate-300 text-base font-light tracking-wider">
              {stat.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
