import { LineGradient } from '@/components';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    { person: "before:content-person1", testimonial: "A auctor pharetra hendrerit mattis amet eriam interdum platea", bg: 'red', delay: 0 },
    { person: "before:content-person2", testimonial: "A auctor pharetra hendrerit mattis amet eriam interdum platea", bg: 'yellow', delay: 0.2 },
    { person: "before:content-person3", testimonial: "A auctor pharetra hendrerit mattis amet eriam interdum platea", bg: 'blue', delay: 0.4, hidden_scale: 0.8, visible_scale: 1 },
  ]
  return (
    <section id="testimonials" className="pt-32 pb-16">
      <motion.div className="md:w-1/3 text-center md:text-left" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/4" />
        <p className="mt-10">
          Here's What People Are Saying About My work. Aliquam aliquet integer ut fames odio in at. At magna ornare dictum lectus.
        </p>
      </motion.div>

      <div className="md:flex md:justify-between gap-8">
        {testimonials.map((item, index) => {
          return (
            <motion.div key={index} className={`bg-${item.bg} 
                mx-auto relative max-w-[400px] h-[350px] 
                flex flex-col justify-end p-16 mt-48 before:absolute 
                before:top-[-120px] before:-ml-[110px] before:left-1/2 
                ${item.person}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{ hidden: { opacity: 0, y: 50, scale: item.hidden_scale }, visible: { opacity: 1, y: 0, scale: item.visible_scale } }}
            >
              <p className="font-playfair text-6xl">“</p>
              <p className="text-center text-xl">{item.testimonial}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Testimonials
