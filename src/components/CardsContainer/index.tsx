import React from 'react';
import { motion } from 'framer-motion';
import CSVCard from '../Card';
import { CardContainerProps } from '../../types';

const CardContainer: React.FC<CardContainerProps> = ({ data }) => {
  const carousel = React.useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="cursor-grab overflow-hidden relative max-w-full"
      whileTap={{ cursor: 'grabbing' }}
    >
      <motion.div
        className="w-max flex rounded-xl gap-2"
        drag="x"
        dragConstraints={{ right: 0, left: -width - 40 }}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {data.map((d, index: number) => (
          <CSVCard key={index} data={d} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CardContainer;
