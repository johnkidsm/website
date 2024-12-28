import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { li, nav } from "framer-motion/client";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
    className={`${
      styles.paddingX
    } w-full flex items-center py-5 fixed top-0 z-20 ${
      scrolled ? "bg-primary" : "bg-transparent"
    }`}
    >
      <div className="w-full flex justify-between items-center
      max-w-7xl mx-auto">
        <Link 
          to='/'
          className="flex flex-row gap-4"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src="/Logo_vai-modified.png" alt="logo"
            className="w-12 h-12 object-contain rounded-full"
          />
              <div className="flex flex-col gap-1">
      <h1 className="text-white text-[28px] flex flex-wrap items-start gap-x-2">
        <span className="relative">
          Virtual A.I. China & International 智龙X科技
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"></span>
        </span>
      </h1>
      <p className="text-white text-[14px]">- We make the brain.</p>
    </div>
        </Link>
        <ul className="list-none hidden sm:flex
        flex-row gap-10">
          {
            navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active == link.title
                    ? "text-white"
                    : "text-secondary"
                } hover:text-white text-[18px]
                font-medium cursor-pointer
                `}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
        </ul>

        <div className="sm:hidden flex flex-1
        justify-end items-center">
          <img src={toggle ? close : menu} 
            alt="menu" 
            className="w-[28px] h-[28px]
            object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient
          absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start
            flex-col gap-4">
              {
                navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active == link.title
                        ? "text-white"
                        : "text-secondary"
                    } font-poppins font-medium cursor-pointer
                    text-[16px]
                    `}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar