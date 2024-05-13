import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { headerFinalImg, headerAnimateImg, arrowDownIcon } from "../assets"

const Hero = () => {

    const [animate, setAnimate] = useState(true);
    const heroImgVariants = {
        hidden: {
            y: "-100vw",
        },
        visible:{
            y: 0,
            scale:[0, 0.25 ,0.5, 1.15, 1],
            rotate: 360,
        }
    }

    const heroTextAnimate = {
        hidden: {
            x: "-100vw",
        },
        visible: {
            x: 0,
            transition: {
                delay: 2.2,
            }
        }
    }

    useEffect(() =>{
        const setFinalAnimation = setTimeout(() =>{
            setAnimate(false);
        }, 2000);

        return () => clearTimeout(setFinalAnimation);
    }, []);

  return (
    <section className="bg-hero-section w-full h-[--hero-height] relative z-10 pt-[5rem] grid place-items-center">
        <motion.div 
             className="w-full h-fit flex flex-col items-center z-10 max-sm:mb-[35%] max-[770px]:mb-[15%] lg:mb-[5%]"
            variants={heroTextAnimate}
            initial = "hidden"
            animate = "visible"
        >   
             <h2 className="hero-heading fraunces-extraBold text-text-white">
                we are creatives
            </h2>
            <a href="#about">
                <img src={arrowDownIcon} alt="arrow down icon" className="mt-16 w-[2rem] aspect-auto"/>
            </a>
        </motion.div>
        <motion.div 
             className="w-60% h-[30rem] absolute bottom-0"
            variants={heroImgVariants}
            initial="hidden"
            animate = "visible"
            transition={{
                duration: 2,
            }}
        >
            {animate ? <img src={headerAnimateImg} alt="hero section image" className="w-full h-full object-contain md:object-cover"/>
            : <img src={headerFinalImg} alt="hero section image" className="w-full h-full object-cover"/>}
        </motion.div>
    </section>
  )
}

export default Hero