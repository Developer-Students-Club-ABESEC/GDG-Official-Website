"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";

import { FooterBackgroundGradient } from "./ui/hover-footer";
import { TextHoverEffect } from "./ui/hover-footer";
import { Link } from "react-router-dom";

function Footer() {
  // Footer link data
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Events", href: "/events" },
        { label: "Team", href: "/team" },
        { label: "Showcase", href: "/achievements" },
        { label: "Contact", href: "/contact" },
        { label: "Back to Top", action:"scrollTop" },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#3ca2fa]" />,
      text: "dsc@abesec.ac.in",
      href: "mailto:dsc@abesec.ac.in",
    },
    {
      icon: <Phone size={18} className="text-[#3ca2fa]" />,
      text: "+91 120 123 4567",
      href: "tel:+911201234567",
    },
    {
      icon: <MapPin size={18} className="text-[#3ca2fa]" />,
      text: "ABES Engineering College, Ghaziabad, India",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/company/gdg-abesec/", hoverColor: "hover:text-[#0A66C2]", },
    { icon: <Instagram size={20} />, label: "Instagram", href: "https://www.instagram.com/gdg.abesec/", hoverColor: "hover:text-[#E4405F]", },
    { icon: <Twitter size={20} />, label: "Twitter", href: "https://x.com/gdgabesec", hoverColor: "hover:text-[#1DA1F2]", },
  ];

  return (
    <footer className="bg-[#0F0F11]/10 relative h-fit rounded-3xl overflow-hidden m-8">
      <div className="max-w-7xl mx-auto p-14 z-40 relative z-50 text-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4 md:col-span-2 md:order-1 md:items-center  lg:col-span-1 lg:order-none lg:items-start">
            <div className="flex items-start space-x-3 md:items-center">
              <img src="/src/assets/gdg-logo.png" alt="GDG Logo" className="h-10 w-10 object-contain mt-1"/>
              <div className="leading-tight md:flex md:items-center md:space-x-2 lg:block">
                <div className="text-2xl font-bold text-white">
                  Google
                  </div>
                  <div className="text-lg font-medium text-gray-300">
                    Developers Group
                    </div>
                    </div>
                    </div>

            <p className="text-sm leading-relaxed md:text-center lg:text-left">
              A community of developers passionate about Google technologies and building innovative solutions.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="mx-auto w-fit md:order-2 lg:order-none">
              <h4 className="text-white text-lg font-semibold mb-6 text-center">
                {section.title}
              </h4>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    {link.action === "scrollTop" ? (
                      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="hover:text-[#3ca2fa] transition-colors">
                        {link.label}
                        </button>
                        ) : (
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-[#3ca2fa] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                    {link.pulse && (
                      <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-[#3ca2fa] animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div className="md:order-3 lg:order-none">
            <h4 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#3ca2fa] transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-[#3ca2fa] transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-700 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6">
            {socialLinks.map(({ icon, label, href, hoverColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`text-gray-400 transition-colors ${hoverColor}`}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} GDG ABESEC. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36 pointer-events-none z-0">
        <TextHoverEffect text="GDG ABESEC" className="pointer-events-auto" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default Footer;