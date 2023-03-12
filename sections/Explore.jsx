'use client';
import { motion } from 'framer-motion';
import { ExploreCard, TypingText, TitleText } from '../components';
import { useState } from 'react';

import { staggerContainer } from '../utils/motion';
import { exploreWorlds } from '../constants';

import styles from '../styles';

const Explore = () => {

  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewPort={{ once: false, amount: 0.25}}
        className={`${styles.innerWidth} flex flex-col mx-auto`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText title={<>Choose the world you want
          <br className="md:block hidden" /> to explore</>}
          textStyles="text-center" />
        <div className='mt-[50px] flex flex-col lg:flex-row min-h-[70vh] gap-5 '>
          {exploreWorlds.map((world, index) => (
            <ExploreCard key={world.id}
              {...world}
              active={active}
              index={index}
              handleClick={setActive} />
          ))}
        </div>
      </motion.div>
    </section>
  )
};

export default Explore;
