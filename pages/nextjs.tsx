import { motion } from "framer-motion";
import ReturnButton from "../components/ReturnButton";

const NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.img src="/img/nextjs.svg" layoutId="nextjs-logo" />

      <ReturnButton />
    </div>
  );
};

export default NextPage;
