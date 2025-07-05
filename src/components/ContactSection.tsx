import React from 'react';
import ProjectCard from './ProjectCard';

const ContactSection: React.FC = () => (
    <>
        <div className="max-w-md mx-auto p-8">
            <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
            <form className="space-y-4">
                <div>
                    <label className="block mb-1" htmlFor="name">Name</label>
                    <input
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="text"
                        id="name"
                        name="name"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="email">Email</label>
                    <input
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="message">Message</label>
                    <textarea
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        id="message"
                        name="message"
                        rows={4}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    </>
);

export default ContactSection;