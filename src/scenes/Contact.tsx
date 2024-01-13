import { LineGradient } from '@/components';
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";


const Form = () => {
  const { register, trigger, formState: { errors } } = useForm();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }
  return (
    <div id="contact" className="md:flex md:justify-between gap-16 mt-5">
      <motion.div className="flex justify-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
        <img src="/contact-image.jpeg" alt="contact" />
      </motion.div>
      <motion.div className="basis-1/2 mt-10 md:mt-0" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.2 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
        <form target="_blank" onSubmit={onSubmit} action="https://formsubmit.co/d548597402a65de7afb84eea69d70df5" method='POST'>

          <input className="w-full bg-blue font-semibold placeholder-opaque-black p-3" type="text" placeholder="NAME" {...register("name", { required: true, maxLength: 100, })} />
          {errors.name && (
            <p className="text-green mt-1">
              {errors.name.type === 'required' && "This field is required"}
              {errors.name.type === 'maxLength' && "Max length is 100 char."}
            </p>
          )}

          <input className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5" type="text" placeholder="EMAIL" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })} />
          {errors.email && (
            <p className="text-green mt-1">
              {errors.email.type === 'required' && "This field is required"}
              {errors.email.type === 'pattern' && "Invalid email address"}
            </p>
          )}

          <textarea className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5" placeholder="MESSAGE" {...register("message", { required: true, maxLength: 2000 })} rows={4} cols={50} />
          {errors.message && (
            <p className="text-green mt-1">
              {errors.message.type === 'required' && "This field is required"}
              {errors.message.type === 'maxLength' && "Max length is 2000 char."}
            </p>
          )}

          <button className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-green hover:text-white transition-500 duration-500" type="submit">
            SEND ME A MESSAGE
          </button >

        </form>
      </motion.div>
    </div>
  )
}

const Contact = () => {
  return (
    <section id="contact" className="py-48">
      <motion.div className="flex justify-end w-full" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-3/4" />
          </div>
        </div>
      </motion.div>
      <Form />

    </section>
  )
}

export default Contact
