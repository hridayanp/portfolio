import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Replacing scroll transition
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [icon, setIcon] = useState('white');
  const navigate = useNavigate(); // React Router Navigation

  // Toggle the hamburger menu on mobile
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
        setIcon('blue');
      } else {
        setScrolling(false);
        setIcon('white');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'About', path: '/about' },
    { title: 'Projects', path: '/projects' },
  ];

  return (
    <motion.header
      className={`fixed top-0 py-4 left-0 right-0 z-50 transition-all duration-300 ${
        scrolling
          ? 'bg-transparent bg-opacity-30 backdrop-blur-lg shadow-md'
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container mx-auto flex items-center justify-between px-8 py-2">
        {/* Left - Navigation Menu */}
        <ul className="hidden sm:flex space-x-8 px-8">
          {navLinks.map(({ title, path }) => (
            <li key={path}>
              <button
                onClick={() => navigate(path)}
                className={`cursor-pointer text-xl font-medium transition-colors ${
                  scrolling
                    ? 'text-white hover:underline hover:underline-offset-[12px]'
                    : 'text-white hover:underline hover:underline-offset-[12px]'
                }`}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>

        {/* Center - Logo */}
        <div
          className="flex items-center justify-center w-auto cursor-pointer gap-4"
          onClick={() => navigate('/')}
        >
          <h1 className="cursor-pointer text-4xl font-medium transition-colors text-white mr-14">
            HP
          </h1>
        </div>

        {/* Right - Social Icons */}
        <div className="hidden sm:flex space-x-6 px-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-[#E4405F] transition-all duration-300 hover:-translate-y-1"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-[#0077B5] transition-all duration-300 hover:-translate-y-1"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-[#fff] transition-all duration-300 hover:-translate-y-1"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-[#fff] transition-all duration-300 hover:-translate-y-1"
          >
            <FaXTwitter />
          </a>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className="relative w-8 h-6 flex flex-col justify-between items-center">
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

        {/* Mobile Menu Items */}
        <div className="flex flex-col justify-center items-center h-full space-y-6">
          <ul className="space-y-6">
            {navLinks.map(({ title, path }) => (
              <li key={path}>
                <button
                  onClick={() => {
                    navigate(path);
                    toggleMenu();
                  }}
                  className="cursor-pointer text-black font-medium text-2xl"
                >
                  {title}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons in Mobile Menu */}
          <div className="flex space-x-6 mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl text-gray-700 hover:text-green-500" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl text-gray-700 hover:text-green-500" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
