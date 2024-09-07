import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button } from "@mui/material";

//* Menu side bar component use for small device users
const MenuSidebar = ({
  isOpen,
  setIsOpen,
  logout,
}: {
  isOpen: boolean;
  setIsOpen: boolean;
  logout: () => void;
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
        <div className="h-full px-3 pb-4 overflow-y-auto bg-secondary-50 shadow-2xl">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold my-4">Menu</h3>
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
                to="/bikes"
                className="block py-2 px-3 text-secondary-900 border rounded hover:bg-secondary-100 "
              >
                Bikes
              </Link>
            </motion.li>

            <motion.li variants={item}>
              <Link
                to={"/about-us"}
                className="block border py-2 px-3 text-secondary-900 rounded hover:bg-secondary-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0 "
              >
                About
              </Link>
            </motion.li>
            <motion.li>
              <Link
                to={"/login"}
                className="block border py-2 px-3 text-secondary-900 rounded hover:bg-secondary-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0 "
              >
                Login
              </Link>
            </motion.li>
            <motion.li>
              <Button
                onClick={() => logout()}
                variant="outlined"
                className="w-full"
              >
                Logout
              </Button>
            </motion.li>
          </motion.ul>
        </div>
      </motion.div>
    </div>
  );
};

export default MenuSidebar;
