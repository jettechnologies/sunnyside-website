// import { useRef } from "react";
import { aboutFirstSection, aboutSecondSection } from "../assets";
import { motion } from "framer-motion";

const About = () => {


  return (
    <section id = "about" 
      className="max-w-full min-h-[--section-height]">
        <div className="w-full flex flex-col md:flex-row flex-nowrap h-fit">
          <div className="min-h-[25rem] w-full md:w-1/2 max-sm:order-2 grid place-items-center">
            <motion.div 
              className="w-[80%] h-fit text-center md:text-left"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{delay:0.5}}
              viewport={{once: true, amount: 0.5}}
            >
              <h3 className="fraunces-extraBold text-size-700 text-text-blue-400">
                Transform your brand
              </h3>
              <p className="text-size-500 text-text-blue-200 my-8">
                We are a full-service creative agency specializing in helping brands grow fast. 
                Engage your clients through compelling visuals that do most of the marketing for you.
              </p>
              <a href="#" className="fraunces-extraBold text-size-500 uppercase text-text-blue-400 about-link relative" id = "link-one">
                learn more
              </a>
            </motion.div>
          </div>
          <div className="min-h-[25rem] w-full md:w-1/2 max-sm:order-1 bg-yellow flex items-center justify-center">
            <div 
              className="w-full md:w-3/4 overflow-clip">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{delay: 0.5}}
                viewport={{once:true, amount: 0.5}}
              >
                <div 
                  className="w-full h-full rotate-[135deg]">
                  <img src={aboutFirstSection} alt="about section image" className="relative z-20"/> 
                  <div className="egg-shadow"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div  className="w-full flex flex-col md:flex-row h-fit">
          <div  className="min-h-[25rem] w-full md:w-1/2 bg-about-second-section flex items-end justify-center">
            <motion.div 
              className="w-full aspect-auto md:w-3/4"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{once:true, amount:0.5}}
            >
              <img src={aboutSecondSection} alt="about section image" className="w-full aspect-auto object-cover"/>
            </motion.div>
          </div>
          <div className="min-h-[25rem] w-full md:w-1/2 flex items-center justify-center">
            <motion.div 
              className="w-[80%] h-fit text-center md:text-left"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{once:true, amount:0.5}}
              transition={{delay:0.5}}
            >
              <h3 className="fraunces-extraBold text-size-700 text-text-blue-400">
                Transform your brand
              </h3>
              <p className="text-size-500 text-text-blue-200 my-8">
                We are a full-service creative agency specializing in helping brands grow fast. 
                Engage your clients through compelling visuals that do most of the marketing for you.
              </p>
              <a href="#" className="fraunces-extraBold text-size-500 uppercase text-text-blue-400 about-link relative" id = "link-two">
                learn more
              </a>
            </motion.div>
          </div>
        </div>
      </section>
  )
}

export default About