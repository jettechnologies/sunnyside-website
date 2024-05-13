import { projects, socialIcons } from "../constant";
import { motion } from "framer-motion";

const Projects = () => {

  const parentVariants = {
    visible:{
      opacity: 1,
      x:0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3
      },
    }
}

const childrenVariants = {
    hidden: {
      x: -30,
      opacity:0,
    },
    visible: (i:number) =>({
        x: 0,
        opacity:1,
        transition:{
          delay: i * 0.5,
        }
    })
  }

  return (
    <section id = "projects" className="max-w-full min-h-[--section-height]">
      <motion.div 
        className="flex flex-wrap w-full min-h-1/2"
        variants={parentVariants}
        animate = "visible"
      >
        {
          projects.map((project, index) =>(
            <motion.div 
              className="w-[50%] lg:w-[25%] h-[15rem] lg:h-full"
              variants={childrenVariants}
              initial = "hidden"
              whileInView="visible"
              viewport={{once:true, amount:0.5}}
              custom={index}
              key={index}
            >
              <img src={project} alt="Project images" className="w-full h-full object-cover"/>
            </motion.div>
          ))
        }
      </motion.div>
      <footer className="w-full min-h-fit py-14 lg:py-20 bg-services-first-section">
        <div className = "w-full h-fit flex flex-col gap-y-10 items-center">
          <h3 className="text-size-600 lg:text-size-700 fraunces-extraBold text-text-cyan">sunnyside</h3>
          <ul className="flex gap-x-14 w-fit text-size-500 text-cyan capitalize">
            <li className="">
              <a href="#about" className="">About</a>
            </li>
            <li>
              <a href="#services" className="">Services</a>
            </li>
            <li>
              <a href="#projects" className="">Projects</a>
            </li>
          </ul>
          <div className="w-fit flex gap-x-8">
            {
              socialIcons.map((socialIcon, index) =>(
                <img src={socialIcon} alt="sunnyside social icons" className="w-6 h-6 object-cover cursor-pointer" key={index}/>
              ))
            }
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Projects