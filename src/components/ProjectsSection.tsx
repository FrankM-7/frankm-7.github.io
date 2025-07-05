import React from 'react';
import ProjectCard from './ProjectCard';
import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.png';
import { motion } from 'framer-motion';

interface ContentSectionProps {
  ref: React.RefObject<HTMLDivElement | null>;
}

const ProjectsSection: React.FC<ContentSectionProps> = ({ref}) => (    
    <motion.div
            ref={ref}
            id="about"
            className="flex flex-col md:flex-row items-center w-full scroll-mt-30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
    <div className='flex flex-col items-center gap-15'>
        <h2 className="text-5xl font-semibold sub-color">Projects</h2>
        <ProjectCard
            title="Budget Web App"
            description="A full-stack budgeting application built with React and Flask, featuring user authentication, expense tracking, and data storage in a MySQL database."
            link="https://example.com/project-one"
            bgPosition="right"
            image={project1Img}
        />
        <ProjectCard
            title="Groovy Discord Bot"
            description="A Discord bot developed in Python that streams music in real-time for all users in a voice channel, allowing users to queue, play, and control music playback through message commands."
            link="https://example.com/project-two"
            bgPosition="left"
            image={project2Img} // Replace with actual image for Project Two
        />
    </div>
    </motion.div>
);

export default ProjectsSection;