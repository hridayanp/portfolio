import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Vayu from '@/assets/images/common/vayu.svg';
import VayuWhite from '@/assets/images/common/vayu-white.svg';

import UNDP from '@/assets/images/common/undp-white.svg';
import UNDPBlue from '@/assets/images/common/undp-blue.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [icon, setIcon] = useState('white');

  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the hamburger menu on mobile
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    // Listen to scroll events
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolling(true); // If scrolled more than 50px, make header translucent
        setIcon('blue');
      } else {
        setScrolling(false); // Otherwise, keep the header transparent
        setIcon('white');
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    // { title: 'Home', id: 'home', offset: -75, isDropdown: false },
    { title: 'About', id: 'about', offset: -86, isDropdown: false },
    // { title: 'Partners', id: 'partners', offset: -150, isDropdown: false },
    { title: 'Thematic Areas', id: 'features', offset: -80, isDropdown: false },
    { title: 'Data Access', id: 'data-access', offset: -90, isDropdown: false },
    {
      title: 'Challenge Structure',
      id: 'challenge-structure',
      offset: -50,
      isDropdown: false,
    },
    {
      title: 'Evaluation & Prizes',
      id: 'evaluation-prizes',
      offset: -5,
      isDropdown: false,
    },
    // { title: 'Our Partners', id: 'partners', offset: -160, isDropdown: false },
    { title: 'Contact', id: 'contact', offset: 0, isDropdown: false },
    // {
    //   title: 'Outreach Strategy',
    //   id: 'outreach',
    //   offset: -77,
    //   isDropdown: true,
    // },
    // {
    //   title: 'Post-Event Follow-Up',
    //   id: 'post-event',
    //   offset: -150,
    //   isDropdown: true,
    // },
    // {
    //   title: 'Intellectual Property and Open-Source Requirements',
    //   id: 'open-source',
    //   offset: -75,
    //   isDropdown: true,
    // },
  ];

  // const dropdownRef = useRef<HTMLLIElement | null>(null);

  // const handleDropdownToggle = () => {
  //   setIsDropdownOpen((prev) => !prev);
  // };

  // // Close the dropdown if clicked outside
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current?.contains(event.target as Node)
  //     ) {
  //       setIsDropdownOpen(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  // Close dropdown when a section is clicked
  // const handleSetActive = () => {
  //   setIsDropdownOpen(false);
  // };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolling ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto flex items-center justify-between px-8 py-1">
        {/* Logo */}
        <div className="flex items-center gap-2 justify-start w-auto cursor-pointer">
          <Link to={'home'} smooth={true} duration={500}>
            <img
              src={icon === 'white' ? UNDP : UNDPBlue}
              alt="logo"
              className="h-15 w-10"
            />
          </Link>

          <Link to={'home'} smooth={true} duration={500}>
            <img
              src={icon === 'white' ? VayuWhite : Vayu}
              alt="logo"
              className="h-10 mt-4"
            />
          </Link>
        </div>

        <ul className="hidden sm:flex space-x-8 mx-auto pl-0 pr-5">
          {/* Render Static Nav Links */}
          {navLinks
            .filter(({ isDropdown }) => !isDropdown)
            .map(({ title, id, offset }) => (
              <li key={id}>
                <Link
                  to={id}
                  smooth={true}
                  duration={500}
                  offset={offset}
                  className={`cursor-pointer text-lg font-medium transition-colors ${
                    scrolling
                      ? 'text-black hover:text-green-500'
                      : 'text-white hover:text-green-500'
                  }`}
                  // onSetActive={handleSetActive}
                >
                  {title}
                </Link>
              </li>
            ))}

          {/* Dropdown Menu for Outreach, Post-Event, and Open-Source */}
          {/* <li className="relative" ref={dropdownRef}>
            <button
              onClick={handleDropdownToggle}
              className={`cursor-pointer text-lg font-medium transition-colors ${
                scrolling
                  ? 'text-black hover:text-green-500'
                  : 'text-white hover:text-green-500'
              }`}
            >
              More
            </button>

            {isDropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`absolute right-0 mt-2 ${
                  icon === 'white' ? 'bg-primary' : 'bg-white'
                } shadow-lg rounded-lg py-2 w-48`}
              >
                {navLinks
                  .filter(({ isDropdown }) => isDropdown)
                  .map(({ title, id, offset }) => (
                    <li key={id}>
                      <Link
                        to={id}
                        smooth={true}
                        duration={500}
                        offset={offset}
                        className={`block cursor-pointer text-lg font-medium transition-colors px-4 py-2 hover:bg-green-500 hover:text-white ${
                          scrolling
                            ? 'text-black hover:text-white'
                            : 'text-white hover:text-black'
                        }`}
                        onSetActive={handleSetActive}
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
              </motion.ul>
            )}
          </li> */}
        </ul>

        {/* Hamburger Menu on Mobile */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <div className="relative w-8 h-6 flex flex-col justify-between items-center">
              {/* Hamburger icon */}
              <motion.div
                className={`h-1 w-full ${
                  icon === 'white' ? 'bg-white' : 'bg-gray-700'
                }`}
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 8 : 0,
                  x: isMenuOpen ? 3 : 0,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <motion.div
                className={`h-1 w-full ${
                  icon === 'white' ? 'bg-white' : 'bg-gray-700'
                }`}
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <motion.div
                className={`h-1 w-full ${
                  icon === 'white' ? 'bg-white' : 'bg-gray-700'
                }`}
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -8 : 0,
                  x: isMenuOpen ? 3 : 0,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className={`sm:hidden fixed top-0 right-0 bottom-0 left-0 bg-white z-40 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-black text-3xl"
        >
          &times;
        </button>

        {/* Menu Items Centered */}
        <div className="flex flex-col justify-center items-center h-full space-y-6">
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  smooth={true}
                  duration={500}
                  offset={link.offset}
                  onClick={toggleMenu}
                  className="cursor-pointer text-black font-medium text-2xl"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
