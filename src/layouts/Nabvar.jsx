import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { SearchContainer } from "../features/search/components/Search";
import MobileMenu from "./MobileMenu";
import NavLink from "../components/NavLink";
import LoginButton from "../features/auth/components/LoginButton";
import SignUpButton from "../features/auth/components/SignUpButton";
import Container from "./Container";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <header className="border-b-border-divider border-b border-solid">
      <Container>
        <nav className="flex items-center gap-8 px-7 py-3 xl:px-0">
          <Logo />
          <NavLink />
          <SearchContainer />
          <MenuButton onToggle={handleToggle} toggle={toggle} />

          <div className="hidden lg:flex lg:gap-3.5">
            <LoginButton />
            <SignUpButton />
          </div>

          <AnimatePresence>
            {toggle && <MobileMenu key="menu" toggle={toggle} />}
          </AnimatePresence>
        </nav>
      </Container>
    </header>
  );
}

function Logo() {
  return <span className="font-[Cinzel] text-2xl text-white">Kurosaw</span>;
}

function MenuButton({ onToggle, toggle }) {
  return (
    <motion.button
      whileTap={{ rotate: 90 }}
      className="ml-auto lg:hidden"
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
