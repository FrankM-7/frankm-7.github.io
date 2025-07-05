import React from 'react';
import ProjectCard from './ProjectCard';
import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.png';

const ProjectsSection: React.FC = () => (
    <div className='flex flex-col items-center gap-20'>
        <h2 className="text-5xl font-semibold">Projects</h2>
        <ProjectCard
            title="Budget Web App"
            description="A full-stack budgeting application built with React and Flask, featuring user authentication, expense tracking, and data storage in a MySQL database."
            link="https://example.com/project-one"
            bgPosition="right"
            bgColor="#f87171" // Tailwind red-400
            image={project1Img}
        />
        <ProjectCard
            title="Groovy Discord Bot"
            description="A Discord bot developed in Python that streams music in real-time for all users in a voice channel, allowing users to queue, play, and control music playback through message commands."
            link="https://example.com/project-two"
            bgPosition="left"
            bgColor="#60a5fa" // Tailwind blue-400
            image={project2Img} // Replace with actual image for Project Two
        />
    </div>
);

export default ProjectsSection;