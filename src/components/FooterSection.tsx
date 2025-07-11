import React from 'react';
import emailImg from '../assets/email.png'

const FooterSection: React.FC = () => (
    <>
        <footer className="w-full bg-gray-900 text-gray-300 py-8 mt-12 flex flex-col items-center gap-2">
            <div className="flex space-x-6">
                <a
                    href="https://github.com/FrankM-7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label="GitHub"
                >
                    <svg width="35" height="35" className="fill-current" viewBox="0 0 24 24">
                        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
                    </svg>
                </a>
                <a
                    href="mailto:frankmartinez9761@gmail.com"
                    className="hover:text-white transition-colors"
                    aria-label="Email"
                >
                    <img width="37" height="37" src={emailImg} alt="circled-envelope"/>
                </a>
            </div>
            <div className="mb-4 md:mb-0 text-center md:text-left">
                <span className="font-semibold text-xs">Frank Martinez ©{new Date().getFullYear()}</span>
            </div>
        </footer>
    </>
);

export default FooterSection;