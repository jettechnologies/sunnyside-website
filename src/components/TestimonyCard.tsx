import { motion } from "framer-motion";
import { Testimonies } from "../constant"


interface Props{
  testimony: Testimonies,
}

const TestimonyCard = ({ testimony }:Props ) => {

  const { animate, img, content, name, title } = testimony;

  const parentVariants = {
    visible: (i:number) => ({
      opacity: 1,
      x:0,
      transition: {
        delay: i * 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3
      },
    }),
    hidden: { opacity: 0, x: -100 },
}

const childrenVariants = {
    hidden: {
      x: -30,
      opacity:0,
    },
    visible: {
        x: 0,
        opacity:1,
    }
  }

  return (
    <motion.div 
      className= "w-full md:flex-1 min-h-fit shadow-sm shadow-text-blue-100 flex flex-col gap-y-10 p-4"
      variants={parentVariants}
      initial = "hidden"
      whileInView="visible"
      custom={animate}
      viewport={{once:true, amount: 0.5}}
    >
      <motion.div 
        className="w-24 h-24 rounded-full self-center overflow-clip"
        variants={childrenVariants}
      >
        <img src={img} alt="testimony images" className="w-full h-full object-cover"/>
      </motion.div>
      <motion.p 
        className="text-size-500 text-text-blue-300 text-center"
        variants={childrenVariants}
      >
        {content}
      </motion.p>
     <motion.div 
        className="w-full text-center capitalize" 
        variants={childrenVariants}
      >
        <h4 className="fraunces-extraBold text-size-500 text-text-blue-400">
          {name}
        </h4>
        <p className="text-size-400 text-text-blue-200 mt-2">
          {title}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default TestimonyCard

