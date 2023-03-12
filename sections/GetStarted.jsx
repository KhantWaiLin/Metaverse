'use client';

import { motion } from 'framer-motion';

import { fadeIn, staggerContainer, planetVariants } from '../utils/motion';
import styles from '../styles';
import { StartSteps, TypingText, TitleText } from '../components';
import { startingFeatures } from '../constants';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex mx-auto lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`${styles.flexCenter} flex-1`}>
        <img
          src='/get-started.png'
          alt='get-started'
          className='h-[90%] w-[90%] object-contain' />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex flex-col justify-center">
        <TypingText title="| How Metaversus Works" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className='flex flex-col max-w-[370px] mt-[31px] gap-[24px]'>
          {startingFeatures.map((feature, index) => {
            return (
              <StartSteps
                key={feature}
                number={index + 1}
                text={feature}
              />
            )
          })}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
