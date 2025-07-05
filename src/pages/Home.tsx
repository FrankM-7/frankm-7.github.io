import React, { useRef } from 'react';
import ContentSection from '../components/ContentSection';
import FooterSection from '../components/FooterSection';

const Home: React.FC = () => {
  const workRef = useRef<HTMLElement | null>(null);

  const scrollToWork = () => {
    workRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        id='bgbg'
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
        style={{ width: '100%', position: 'relative', zIndex: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 relative z-10">
          Hi, I'm SUI <span className="sub-color">Frank</span>.
        </h1>
        <p className="text-xl md:text-2xl mb-6 relative z-10">
          A Full-Stack Software Developer.
        </p>
        <button
          onClick={scrollToWork}
          className="px-6 py-3 border-3 rounded border-sub-color hover:text-white transition sub-color font-bold hover:scale-105 active:scale-95 cursor-pointer relative z-10"
        >
          See My Work
        </button>
      </section>

      {/* WORK SECTION */}
      <ContentSection workRef={workRef} />
      <FooterSection />
    </>
  );
};

export default Home;