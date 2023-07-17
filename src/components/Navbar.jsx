import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
const Navbar = () => {
  const [active, SetActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 60) {
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
      }`}>
      <div className='w-full flex justify-between max-w-7xl items-center mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            SetActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt='logo' className='w-12 h-12 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Sohamm&nbsp;<span>| Not A Dev</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10 pr-5 '>
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.id
                  ? "font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 "
                  : "text-secondary"
              } hover:scale-125 transition duration-500 ease-in-out cursor-pointer`}
              onClick={() => {
                SetActive(Link.id);
              }}>
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? "opacity-0 pointer-events-none" : ""
            } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl transition-all duration-300`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.id
                      ? "font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 "
                      : "text-secondary"
                  } hover:scale-125 transition duration-500 ease-in-out cursor-pointer`}
                  onClick={() => {
                    setToggle(false);
                    SetActive(Link.id);
                  }}>
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
