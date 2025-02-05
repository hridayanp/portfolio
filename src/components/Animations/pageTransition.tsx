import { motion } from 'framer-motion';
import { Fragment } from 'react/jsx-runtime';

export const PageTransition = () => {
  return (
    <Fragment>
      {/* Black div (first) - Sliding in and sliding out first */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Teal div (second) - Sliding in (only this one slides in) */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-teal-500"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.2, duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Off-white div (third) - Sliding out last */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-white"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.4, duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
    </Fragment>
  );
};
