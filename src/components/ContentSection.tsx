import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import AboutMeSection from './AboutMeSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

interface ContentSectionProps {
  workRef: React.RefObject<HTMLElement | null>;
}
const ContentSection: React.FC<ContentSectionProps> = ({ workRef }) => {
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactMeRef = useRef<HTMLDivElement | null>(null);

  const scrollToAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContactMe = () => {
    contactMeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
    <section ref={workRef} className="min-h-screen">
      {/* STICKY NAVBAR */}
      <div className="sticky top-0 z-50 shadow nav-bar">
        <nav className="flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold">Frank.dev</h1>
          <div className="space-x-4">
              <a onClick={scrollToAboutMe} style={{ cursor: 'pointer' }} className="hover:text-blue-600">
                About
              </a>
              <a onClick={scrollToProjects} style={{ cursor: 'pointer' }} className="hover:text-blue-600">
                Projects
              </a>
              <a onClick={scrollToContactMe} style={{ cursor: 'pointer' }} className="hover:text-blue-600">
                Contact
              </a>
          </div>
        </nav>
      </div>
      <div className="p-18 space-y-6">
        <AboutMeSection aboutMeRef={aboutMeRef} />
        <ProjectsSection ref={projectsRef} />
        <ContactSection ref={contactMeRef} />
      </div>
    </section>
  );
};

export default ContentSection;