import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    bgColor?: string;
    bgPosition?: 'left' | 'right';
    image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    link,
    bgColor = '#f87171',
    bgPosition = 'left',
    image,
}) => {
    return (
        <div
            className={`h-200 relative shadow-md duration-300 flex flex-col md:flex-row ${
                bgPosition === 'right' ? 'md:flex-row-reverse' : ''
            } items-center w-full`}
        >
            <div
                className={`md:w-7/10 w-full flex flex-col justify-center items-center gap-6`}
                style={{ backgroundColor: bgColor, height: '100%' }}
                aria-hidden="true"
            >
                <img
                    src={image}
                    alt="Project background"
                    className="max-w-[90%] max-h-[90%] object-contain"
                />
            </div>
            <div
                className={`md:w-3/10 flex justify-center flex-col ${
                    bgPosition === 'right' ? 'translate-x-15' : '-translate-x-15'
                }`}
            >
                <h2 className="text-4xl font-bold mb-2">{title}</h2>
                <p className="text-xl mb-4">{description}</p>
                <a href={link} className="hover:underline text-xl">
                    View Project
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
