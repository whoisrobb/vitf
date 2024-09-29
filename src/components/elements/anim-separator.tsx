import { motion } from "framer-motion";

const lineVariant = {
    initial: {
      x: '-100%',
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.3,
      }
    }
}

const AnimSeparator = () => {
  return (
    <motion.div
        variants={lineVariant}
        initial='initial'
        whileInView='animate'
        // viewport={{ once: true }}
        className="h-[1px] w-full bg-muted-foreground"></motion.div>
  )
}

export default AnimSeparator