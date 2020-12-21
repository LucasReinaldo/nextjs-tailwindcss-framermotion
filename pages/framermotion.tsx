import { motion } from "framer-motion";
import ReturnButton from "../components/ReturnButton";

const FramerMotion = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.img src="/img/framermotion.svg" layoutId="framermotion-logo" />

      <ReturnButton />
    </div>
  );
};

export default FramerMotion;
