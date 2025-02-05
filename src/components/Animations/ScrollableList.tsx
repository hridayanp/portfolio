import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import IconAnimated from './IconAnimated';

interface ListItem {
  id: number;
  content: JSX.Element;
}

interface ScrollableListProps {
  items: ListItem[];
}

const ScrollableList: React.FC<ScrollableListProps> = ({ items }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const iconRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
    layoutEffect: false,
  });

  return (
    <div className="w-[75%] mx-auto relative">
      {/* Vertical Progress Bar */}
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-[12%] top-[5%] w-2 h-[70%] bg-[#000] origin-top"
      />

      <ul className="relative left-10 w-full flex flex-col items-start justify-between ml-4">
        {items.map((item) => (
          <li
            ref={iconRef}
            key={item.id}
            className="py-1 flex items-center justify-start space-x-4"
          >
            <IconAnimated reference={iconRef} />
            {/* Text Content */}
            <div>{item.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollableList;
