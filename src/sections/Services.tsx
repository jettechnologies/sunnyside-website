import { motion } from "framer-motion"

const Services = () => {

  const firstSectionVariants = {
    hidden:{
      x: -100,
      opacity: 0,
    },
    visible:{
      x:0,
      opacity: 1,
      transition:{
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.4,
      }
    }
  }

  const secondSectionVariants = {
    hidden:{
      x: -100,
      opacity: 0,
    },
    visible:{
      x:0,
      opacity: 1,
      transition:{
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.4,
      }
    }
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
    <section id = "services" className="max-w-full min-h-[--section-height] flex max-sm:flex-col">
      <div className="bg-services-first-section w-full min-h-[30rem] flex justify-center md:w-1/2 pb-12">
        <motion.div 
          className="w-[90%] max-h-full relative flex justify-center"
          variants={firstSectionVariants}
          initial = "hidden"
          whileInView="visible"
          viewport={{once:true, amount: 0.5}}
        >
          <motion.div 
            className="w-full h-[80%] absolute top-0 bg-graphic bg-cover bg-top bg-no-repeat"
            variants={childrenVariants}
          >
          </motion.div>
          <motion.div 
            className="w-[60%] text-center text-text-cyan self-end"
            variants={childrenVariants}
          >
            <h3 className="fraunces-extraBold text-size-600 uppercase">
              graphic design
            </h3>
            <p className="text-size-500">
              Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="bg-services-second-section w-full  min-h-[30rem] flex justify-center md:w-1/2 pb-12">
        <motion.div 
          className="w-[90%] max-h-full relative flex justify-center"
          variants={secondSectionVariants}
          initial = "hidden"
          whileInView="visible"
          viewport={{once:true, amount: 0.5}}
        >
          <motion.div 
            className="w-full h-[80%] absolute top-0 bg-photography bg-cover bg-top bg-no-repeat"
            variants={childrenVariants}
          >
            {/* <img src={photographImg} alt="service image two" className="w-full h-full object-cover" /> */}
          </motion.div>
          <motion.div 
            className="w-[60%] text-center text-text-blue self-end"
            variants={childrenVariants}
          >
            <h3 className="fraunces-extraBold text-size-600 uppercase">
              Photography
            </h3>
            <p className="text-size-500">
              Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services