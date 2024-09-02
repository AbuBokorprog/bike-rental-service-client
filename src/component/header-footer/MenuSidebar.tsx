import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button } from "@mui/material";

//* Menu side bar component use for small device users
const MenuSidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: boolean;
}) => {
  const sidebarRef = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  // framer motion animation
  const container = {
    open: {
      x: 0,
      transition: { type: "Tween", staggerChildren: 0.3, stiffness: 100 },
    },
    closed: {
      x: -300,
      transition: {
        type: "Tween",
        stiffness: 100,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const item = {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "Tween", stiffness: 100 },
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: { type: "Tween", stiffness: 100 },
    },
  };

  // const { data } = useGetCategoriesQuery();

  return (
    <div>
      {/* Menu sidebar component contents */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={container}
        className={`lg:hidden fixed top-0 left-0 w-64 h-screen z-50 `}
        ref={sidebarRef}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-secondary-50 shadow-2xl">
          <div className="flex items-center justify-between my-2">
            <h3 className="text-xl font-medium my-4">Menu</h3>
            <Button variant="text" onClick={() => setIsOpen(false)}>
              <CancelIcon />
            </Button>
          </div>
          <motion.ul className="space-y-2 font-medium">
            <motion.li variants={item}>
              <Link
                to="/"
                className="block py-2 px-3 text-secondary-900 border rounded md:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </motion.li>
            <motion.li variants={item}>
              <Link
                to="/shop"
                className="block py-2 px-3 text-secondary-900 border rounded hover:bg-secondary-100 "
              >
                Products
              </Link>
            </motion.li>

            <motion.li variants={item}>
              <Link
                to={"/about-us"}
                className="block py-2 px-3 text-secondary-900 rounded hover:bg-secondary-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0 "
              >
                About
              </Link>
            </motion.li>
          </motion.ul>
        </div>
      </motion.div>
    </div>
  );
};

export default MenuSidebar;
