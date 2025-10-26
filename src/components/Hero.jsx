import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";


const Hero = () => {
  const handleDownloadCV = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Download button clicked!'); // Debug log
    
    try {
      // Create download link
      const link = document.createElement('a');
      link.href = '/ManishPardhi_Resume.pdf';
      link.download = 'Manish_Pardhi_CV.pdf';
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('Download initiated'); // Debug log
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open('/ManishPardhi_Resume.pdf', '_blank');
    }
  };

  return (
    <section className="relative w-full   h-screen mx-auto">
      <div
        className={`${styles.paddingX} inset-0 sm:top-[70px] top-[90px] absolute max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi, I'm <span className="text-[#915eff]">Manish Pardhi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I develop Mobile applications and <br className="sm:block hidden" />{" "}
            Machine learning models
          </p>
          <div className="mt-8">
            <button
              type="button"
              onClick={handleDownloadCV}
              className="bg-[#915eff] hover:bg-[#7c3aed] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center gap-2 cursor-pointer z-10 relative"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </button>
          </div>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute sm:bottom-24 bottom-36 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
