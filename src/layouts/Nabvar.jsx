import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import MobileMenu from "./MobileMenu";
import { SearchContainer } from "../features/search/components/Search";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <nav className="border-b-border-divider flex h-16.25 items-center gap-5 border-b border-solid px-7 py-3">
      <Logo />
      <SearchContainer />
      <MenuButton onToggle={handleToggle} toggle={toggle} />
      <AnimatePresence>
        {toggle && <MobileMenu key="menu" toggle={toggle} />}
      </AnimatePresence>
    </nav>
  );
}

function Logo() {
  return <span className="font-[Cinzel] text-2xl text-white">Kurosaw</span>;
}

function MenuButton({ onToggle, toggle }) {
  return (
    <motion.button
      whileTap={{ rotate: 90 }}
      className="ml-auto md:hidden"
      type="button"
      onClick={onToggle}
    >
      {toggle ? (
        <AiOutlineClose className="text-2xl text-white" />
      ) : (
        <CiMenuBurger className="text-2xl text-white" />
      )}
    </motion.button>
  );
}
