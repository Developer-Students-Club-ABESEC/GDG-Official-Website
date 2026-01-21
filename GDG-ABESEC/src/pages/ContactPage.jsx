import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollProgressBar from "../components/ScrollProgressBar";
import CursorTrail from "../components/ui/CursorTrail";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
              <ScrollProgressBar />
              <CursorTrail />
      <Contact />
        <Footer />

    </div>
  );
};
export default ContactPage;