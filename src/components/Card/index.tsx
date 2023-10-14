import React from 'react';
import { motion } from 'framer-motion';
import { CardProps } from '../../types';

const CSVCard: React.FC<CardProps> = ({ data }) => {
  return (
    <motion.div className="pointer-events-none min-h-[200px] rounded overflow-hidden bg-white sm:min-w-[27%] sm:max-w-[15%]">
      <div className="w-[200px] flex flex-col gap-4 pl-6 py-6">
        <img src={data.image} alt="B" className="w-10 h-10" />
        <div className="flex flex-col gap-1">
          <span className="text-Primary text-[14px] font-bold">
            {data.title}
          </span>
          <span className="text-TextBase text-xl font-bold">
            {data.subtitle}
          </span>
          <span className="text-[14px] text-TextBase leading-6">
            {data.description}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default CSVCard;
