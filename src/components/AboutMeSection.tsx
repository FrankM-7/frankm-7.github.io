import React from 'react';
import SkillCard from './AboutMeSection/SkillCard';
import linuxSvg from '../assets/linux.svg';
import reactSvg from '../assets/react.svg';
import phpSvg from '../assets/php.svg';
import cSvg from '../assets/c.svg';
import pythonSvg from '../assets/python.svg';
import gitSvg from '../assets/git.svg';
import dockerSvg from '../assets/docker.svg';
import mySqlSvg from '../assets/mysql.svg';
import rubySvg from '../assets/ruby.svg';
import javaSvg from '../assets/java.svg';
import gradPic from '../assets/grad3.jpg';
import { motion } from 'framer-motion';

interface ContentSectionProps {
  aboutMeRef: React.RefObject<HTMLDivElement | null>;
}

const AboutMeSection: React.FC<ContentSectionProps> = ({ aboutMeRef }) => {
    // define gaps
    const gap = 20;

    return (
        <motion.div
            ref={aboutMeRef}
            id="about"
            className="flex flex-col md:flex-row items-center w-full scroll-mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
        <div  className="flex flex-col md:flex-row items-center w-full scroll-mt-24">
            <div className="md:w-1/2 w-full flex flex-col justify-center items-center gap-6">
                <h2 className="text-5xl font-semibold">About Me</h2>
                <img
                    src={gradPic}
                    alt="Frank's graduation"
                    className="w-80 h-80 object-cover rounded-full mb-4"
                />
                <p className="mb-6 flex text-lg">
                    Hi, I'm Frank Martinez — a software developer who loves solving problems with clean, efficient code. 
                    From backend systems to full-stack apps, I enjoy building things that work well and feel good to use. 
                    I'm always exploring new tools, learning new tech, and tinkering with side projects (shoutout to my Raspberry Pi). 
                    Outside of coding, I like running, experimenting, and thinking up the next cool idea.                
                </p>
            </div>
            {/* Right: Skills */}
            <div className="md:w-1/2 w-full flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: gap }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            borderRadius: 6,
                            gap: gap,
                        }}>
                        <SkillCard icon={linuxSvg} title="Linux" />
                        <SkillCard icon={gitSvg} title="Git" />
                        <SkillCard icon={dockerSvg} title="Docker" />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            borderRadius: 6,
                            gap: gap
                        }}>
                        <SkillCard icon={reactSvg} title="React" />
                        <SkillCard icon={phpSvg} title="PHP" />
                        <SkillCard icon={cSvg} title="C++" />
                        <SkillCard icon={pythonSvg} title="Python" />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            borderRadius: 6,
                            gap: gap,
                        }}>
                        <SkillCard icon={mySqlSvg} title="mySQL" />
                        <SkillCard icon={rubySvg} title="Ruby on Rails" />
                        <SkillCard icon={javaSvg} title="Java" />
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
    );
};

export default AboutMeSection;
