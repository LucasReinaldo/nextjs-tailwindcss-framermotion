import { motion } from "framer-motion";
import Link from "next/link";
import { IoArrowBackCircle } from "react-icons/io5";

const ReturnButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <Link href="/">
        <a className="flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-lg hover:bg-gray-600">
          <IoArrowBackCircle size={24} className="mr-2" />
          Home
        </a>
      </Link>
    </motion.div>
  );
};

export default ReturnButton;
