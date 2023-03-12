'use client';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import styles from "../styles";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex mx-auto flex-col gap-8`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles="text-center" />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="/people-01.png"
            alt="people-1"
            className="w-full h-full"
          />
        </div>

        <div
          className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="/people-02.png"
            alt="people-2"
            className="w-full h-full"
          />
        </div>

        <div
          className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="/people-03.png"
            alt="people-3"
            className="w-full h-full"
          />
        </div>

        <div
          className="absolute  top-1/3 left-[15%] w-[217px] h-[167px] p-[6px] rounded-[24px] world-gradient hidden lg:block" />
        <div
          className="absolute  top-1/3 left-[10%] w-[217px] h-[167px] p-[6px] rounded-[24px] world-gradient hidden lg:block" />

        <div className="absolute top-1/3 left-[20%] w-[196px] h-[150px] z-9 hidden  lg:block rounded-[24px]">
          <div className="world-back flex items-center justify-center w-full h-full">
            <img
              src="/world-1.png"
              alt="world-1"
              className="w-[180px] h-[140px] object-contain rounded-[24px]"

            />
          </div>

          <div classNam="absolute  h-[50px] w-full flex justify-between bottom-[30px] left-2">

            <div className="absolute  h-[50px] w-full flex justify-between bottom-[30px] left-2">
              <div className="absolute z-10">
                <img
                  src="/people-01.png"
                  alt="people-01"
                  className="w-[24px] h-[24px] object-contain"
                />
              </div>
              <div className="absolute left-4">
                <img
                  src="/people-02.png"
                  alt="people-02"
                  className="w-[24px] h-[24px] object-contain"
                />
              </div>
              <div className="absolute left-9">
                <img
                  src="/people-03.png"
                  alt="people-03"
                  className="w-[24px] h-[24px] object-contain"
                />
              </div>
            </div>
            <div className="absolute bottom-[60px] left-[70px]">
              <p className="text-white font-normal text-[12px]">+ 264 has joined</p>
            </div>
          </div>
          <div className="absolute bottom-3  text-center left-[20%]">
            <p className="text-white font-bold">The Upside Down</p>
          </div>
        </div>

        {/* Next Card */}

        <div
          className="absolute  top-6 right-[20%] w-[217px] h-[167px] p-[6px] rounded-[24px] world-gradient-1 hidden lg:block" />
        <div
          className="absolute  top-6 right-[30%] w-[217px] h-[167px] p-[6px] rounded-[24px] world-gradient-1 hidden lg:block" />

        <div className="absolute justify-center items-center top-6 right-[20%] w-[196px] h-[150px] z-9 hidden world-back lg:block rounded-[24px]">
          <div className="world-back flex items-center justify-center w-full h-full">
            <img
              src="/world-2.png"
              alt="world-2"
              className="w-[180px] h-[140px] object-contain rounded-[24px]"

            />
          </div>
          <div classNam="absolute  h-[50px] w-full flex justify-between bottom-[30px] left-2">

            <div className="absolute  h-[50px] w-full flex justify-between bottom-[30px] left-2">
              <div className="absolute z-10">
                <img
                  src="/people-01.png"
                  alt="people-01"
                  className=" relative w-[24px] h-[24px] object-cover"
                />
              </div>
              <div className="absolute left-4">
                <img
                  src="/people-02.png"
                  alt="people-02"
                  className="w-[24px] h-[24px] object-contain"
                />
              </div>
              <div className="absolute left-9">
                <img
                  src="/people-03.png"
                  alt="people-03"
                  className="w-[24px] h-[24px] object-contain"
                />
              </div>
            </div>
            <div className="absolute bottom-[60px] left-[70px]">
              <p className="text-white font-normal text-[12px]">+ 264 has joined</p>
            </div>
          </div>
          <div className="absolute bottom-3  text-center left-[20%]">
            <p className="text-white font-bold">Hawkin Labs</p>
          </div>
        </div>


      </motion.div>

    </motion.div>
  </section>
);

export default World;
