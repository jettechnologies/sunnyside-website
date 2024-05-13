import TestimonyCard from "../components/TestimonyCard";
import { testimonies } from "../constant";

const Testimony = () => {

  return (
    <section className="max-w-full min-h-fit flex justify-center">
        <div className= "w-[90%] md:w-[85%] py-12 lg:py-20">
            <h3 className="fraunces-extraBold text-text-blue-200 text-size-600 lg:text-size-700 text-center uppercase">
                client testimonials
            </h3>
            <div className="w-full min-h-fit mt-8 flex flex-col lg:flex-row gap-4">
                {
                    testimonies.map((testimony, index) =>(
                        <TestimonyCard testimony = {testimony} key={index}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Testimony