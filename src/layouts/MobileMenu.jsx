import { motion } from "motion/react";
import LinkList from "../components/LinkList";

export default function MobileMenu() {
  return (
    <motion.div
      initial={{ x: "100%" }}
      exit={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
      className="bg-bg-main fixed top-14.25 right-0 bottom-0 w-full lg:hidden"
    >
      <LinkList />
    </motion.div>
  );
}
