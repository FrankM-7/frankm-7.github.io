import React from 'react';
import { Link } from 'react-router-dom';
import AboutMeSection from './AboutMeSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

interface ContentSectionProps {
  workRef: React.RefObject<HTMLElement | null>;
}
const ContentSection: React.FC<ContentSectionProps> = ({ workRef }) => (
  <section ref={workRef} className="min-h-screen">
    {/* STICKY NAVBAR */}
    <div className="sticky top-0 z-50 shadow nav-bar">
      <nav className="flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Frank.dev</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/projects" className="hover:text-blue-600">Projects</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </nav>
    </div>
    <div className="p-18 space-y-6">
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  </section>
);

export default ContentSection;