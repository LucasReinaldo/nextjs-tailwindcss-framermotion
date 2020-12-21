import Link from "next/link";

import { motion } from "framer-motion";

interface CardProps {
  href: string;
  imgSrc: string;
  layoutId: string;
}

const Card = ({ href, imgSrc, layoutId }: CardProps) => {
  return (
    <Link href={href}>
      <div
        className="relative h-20 md:h-40 shadow rounded-md cursor-pointer transform hover:-translate-y-2 transition"
        style={{ backgroundColor: "#3b4050" }}
      >
        <motion.img
          layoutId={layoutId}
          src={imgSrc}
          alt="Logo"
          className="w-full h-full"
        />
      </div>
    </Link>
  );
};

export default Card;
