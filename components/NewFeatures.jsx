
import styles from '../styles';


const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className='flex-1 flex flex-col min-w-[210px] sm:max-w-[250px] '>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d] `}>
      <img
        src={imgUrl}
        alt="icon"
        className="w-1/2 h-1/2 object-contain"
      />
    </div>
    <h2 className='mt-[26px] font-bold text-[24px] text-white leading-[30px] '>{title}</h2>
    <p className='font-normal text-[18px] text-[#B0B0B0] flex-1 mt-[18px] leading-[32px]'>{subtitle}</p>
  </div>
);

export default NewFeatures;
