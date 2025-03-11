import { motion } from "framer-motion";

const MotionButton = ({ text }) => {
  return (
    <motion.button
      className="button"
      whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {text}
    </motion.button>
  );
};

export default MotionButton;
