import { motion } from "framer-motion";
import ReturnButton from "../components/ReturnButton";

const Tailwind = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.img src="/img/tailwind.svg" layoutId="tailwind-logo" />

      <ReturnButton />
    </div>
  );
};

export default Tailwind;
