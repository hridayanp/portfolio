import { motion } from 'framer-motion';
import { RefObject } from 'react';

interface IconAnimatedProps {
  reference: RefObject<HTMLLIElement>; // specify that reference is an li element
}

const IconAnimated: React.FC<IconAnimatedProps> = () => {
  //   const { scrollYProgress } = useScroll({
  //     target: reference,
  //     offset: ['center end', 'center center'],
  //     layoutEffect: false,
  //   });

  return (
    <figure className="absolute left-0 stroke-black">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-purple-900 stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-white"
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-purple-900"
        />
      </svg>
    </figure>
  );
};

export default IconAnimated;
