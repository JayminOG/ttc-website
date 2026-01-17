import { motion } from "framer-motion";

const FadeInUp = ({ children, delay = 0, duration = 0.8, y = 40 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}        // 👈 triggers every time you scroll
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUp;
