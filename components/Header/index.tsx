import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-start py-2 items-center md:py-4 md:justify-between">
      <Link href="/">
        <Image src="/img/logo.png" alt="Logo" width={32} height={32} className="cursor-pointer" />
      </Link>
      <nav className="hidden md:block">
        <ul className="flex justify-around space-x-8 tracking-wide ">
          <Link href="nextjs">
            <li className="hover:text-gray-400 font-semibold cursor-pointer transition-all">
              NextJS
            </li>
          </Link>
          <Link href="tailwindcss">
            <li className="hover:text-gray-400 font-semibold cursor-pointer transition-all">
              TailwindCSS
            </li>
          </Link>
          <Link href="framermotion">
            <li className="hover:text-gray-400 font-semibold cursor-pointer transition-all">
              FamerMotion
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
