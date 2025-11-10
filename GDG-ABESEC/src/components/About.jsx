"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 700, 
      easing: "ease-out-cubic", 
      once: false, 
      offset: 200, 
    });
  }, []);

  return (
    <>
      <section className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-slate-100 mb-4">Welcome to GDG</h1>
          <p className="text-xl text-slate-400">Scroll down to see About section</p>
        </div>
      </section>

      <section className="min-h-screen bg-black py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div
            className="text-center mb-16"
           
          >
            <h2 className="text-6xl md:text-7xl font-bold text-slate-300 mb-4">
              About Us
            </h2>
            <div className="h-[3px] w-64 bg-linear-to-r from-red-500 via-green-500 to-yellow-400 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
      
            <div
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="text-slate-300 text-lg font-mono leading-relaxed text-left">
                Google Developer Groups (GDG) on Campus ABESEC is a vibrant student community
                driven by curiosity, collaboration, and innovation. We bring together passionate
                developers, designers, and problem-solvers to explore emerging technologies and
                turn ideas into impactful projects. Through workshops, hackathons, and speaker
                sessions, GDG ABESEC empowers students to learn, build, and grow in a supportive
                ecosystem that bridges classroom learning with real-world experience.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <CardContainer>
                <CardBody className="relative rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm hover:border-slate-400/50 transition-all duration-300">
                  <CardItem translateZ="100">
                    <img
                      src="/about-img1.jpg"
                      alt="GDG Community"
                      className="w-full h-80 object-cover rounded-2xl"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen  bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-100 mb-4">Next Section</h2>
          <p className="text-xl text-slate-400">Continue exploring...</p>
        </div>
      </section>
    </>
  );
}
