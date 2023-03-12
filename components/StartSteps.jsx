import styles from "../styles";

const StartSteps = ({ text, number }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`bg-[#323f5d] ${styles.flexCenter} 
      w-[70px] h-[70px] rounded-[24px]`}>
      <p className="text-white font-bold text-[20px]">{number}</p>
    </div>
    <p className="font-normal text-[#B0B0B0] flex-1 ml-[30px] text-[18px] leading-32px">
      {text}
    </p>

  </div>

);

export default StartSteps;
