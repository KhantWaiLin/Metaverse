'use client';

import { motion } from 'framer-motion';
import { InsightCard, TypingText, TitleText } from '../components';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import styles from '../styles';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex mx-auto flex-col gap-8`}
    >
      <TypingText title="| Insights" textStyles="text-center" />
      <TitleText title={<>Insight about metaverse</>} textStyles="text-center" />
      <div className='mt-[50px] flex flex-col gap-[30px] '>
        {insights.map((insight, index) => (
          <InsightCard
            key={`insight-${index}`}
            index={index + 1}
            {...insight}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
