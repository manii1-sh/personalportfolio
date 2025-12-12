import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { div } from "framer-motion/client";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient shadow-card rounded-[20px] p-[1px]"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={`${icon}${icon.includes("?") ? "&" : "?"}tr=f-auto`}
            alt={title}
            loading="lazy"
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      
      <div className="mt-4 flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary text-[14px] sm:text-[17px] max-w-3xl sm:leading-[30px] leading-1"
          >
            Hi, I'm Manish Pardhi — a Machine Learning and Flutter Developer with a solid foundation in Python, PostgreSQL, and Flutter. I'm passionate about building intelligent systems and cross-platform applications that solve real-world problems.
          </motion.p>

          <motion.p
            variants={fadeIn("", "", 0.2, 1)}
            className="mt-4 text-secondary text-[14px] sm:text-[17px] max-w-3xl sm:leading-[30px] leading-1"
          >
            Currently, I'm doing an internship, working on impactful projects and strengthening my technical skills while exploring innovative technologies to deliver clean and efficient solutions.
          </motion.p>
        </div>
        
        <motion.div
          variants={fadeIn("left", "spring", 0.1, 0.75)}
          className="flex-shrink-0"
        >
          <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-[#915eff] shadow-lg">
            <img
              src="/manish-photo.jpg"
              alt="Manish Pardhi"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
      <div className="mt-20 flex flex-wrap justify-center gap-16 sm:gap-20">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
