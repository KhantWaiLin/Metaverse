'use client';
import { motion } from 'framer-motion';

import styles from '../styles';
import { socials } from '../constants';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className='footer-gradient' />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className='flex items-center justify-between gap-5 flex-wrap'>
        <h4 className='text-white  font-bold text-[44px] md:text-[64px]'>Enter the Metaverse</h4>
        <button className="flex h-fit items-center py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]">
          <img
            src='/headset.svg'
            alt='headset'
            className='w-[24px] h-[24px] object-contain'
          />
          <span className='font-normal text-[16px] text-white'>
            ENTER METAVERSE
          </span>
        </button>
      </div>
      <div className='flex flex-col'>
        <div className='mb-[50px] opacity-10 h-[2px] bg-white' />
        <div className='flex items-center justify-between flex-wrap gap-4'>
          <h4 className='font-extrabold text-[24px] text-white'>Metaversus</h4>
          <p className='font-normal text-[14px] text-white opacity-50'>
            Copyright © 2022 - 2023 Metaversus. All rights reserved.
          </p>
          <div className='flex gap-4'>
            {socials.map((social, index) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  </motion.footer>
);

export default Footer;
