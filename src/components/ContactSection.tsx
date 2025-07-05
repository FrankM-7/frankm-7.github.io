import React from 'react';

const ContactSection: React.FC = () => (
    <>
        <div className="w-1/2 mx-auto p-8 flex flex-col items-center">
            <h2 className="text-5xl font-semibold mb-6">Contact Me</h2>
            <form className="space-y-2 w-full">
                <div>
                    <input
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Name"
                    />
                </div>
                <div>
                    <input
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Email"
                    />
                </div>
                <div>
                    <textarea
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder='Message'
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