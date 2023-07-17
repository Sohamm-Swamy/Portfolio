import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt='what' className='w-16 h-16 object-contain' />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", ",0.1,1")}
        className='mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        <i>"Learn, Grow, Adapt and Conquer"</i>
        <br />A musician by Passion, Computer Enthusiast by choice! Pursuing my
        bachelor's degree in Computer Science while fine-tuning my vocal cords,
        I've got a knack for Entrepreneurship, Flutter app development, and even
        competitive coding. My skills extend beyond music and tech as I am a
        strategic chess player, a composed volleyball setter, and a great cook.
        Leadership and Management are the other things I excel at. I also
        volunteer for hosting my college events. Last but not least I also write
        heartfelt poems.
      </motion.p>
      <div className='mt-10 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
