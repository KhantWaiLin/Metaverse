'use client';
import styles from '../styles';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ title, subtitle, imgUrl, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className='flex md:flex-row flex-col w-full h-auto gap-6'>

    <img
      src={imgUrl}
      alt="icon"
      className="md:w-[270px] h-[250px] w-full rounded-[32px] object-cover"
    />
    <div className={`w-full flex  justify-between items-center `}>
      <div className="flex-1 md:ml-[32px] flex flex-col max-w-[650px] " >
        <h4 className='font-normal lg:text-[42px] text-secondary-white text-[26px]'>{title}</h4>
        <p className='mt-[16px] font-normal text-[14px] lg:text-[20px] text-secondary-white '>{subtitle}</p>
      </div>
      <div className='lg:flex hidden w-[100px] h-[100px] items-center justify-center rounded-full border-[1px] bg-transparent border-white'>
        <img
          src='./arrow.svg'
          alt='arrow'
          className='w-[40%] h-[40%] object-contain'
        />
      </div>
    </div>

  </motion.div>
);

export default InsightCard;
