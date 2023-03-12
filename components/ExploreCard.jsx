'use client';

import { fadeIn } from "../utils/motion";
import { motion } from 'framer-motion';
import styles from "../styles";

const ExploreCard = ({ handleClick, index, active, id, imgUrl, title }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute h-full w-full object-cover rounded-[24px]" />
    {active !== id ? (
      <h3 className="text-white font-semibold absolute z-0 sm:text-[26px] text-[18px]
      lg:bottom-20 lg:-rotate-90 lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8
      justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}>
          <img
            src="/headset.svg"
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <p className="text-white font-normal text-[16px] leading-[20px] uppercase">
          Enter the Metaverse
        </p>
        <h2 className="font-semibold mt-[24px] sma:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
