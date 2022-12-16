import mbtoken from '../../assets/mbtoken.svg';
import metamask from '../../assets/metamask.svg';
import opensea from '../../assets/opensea.svg';
import styles from './SocialCard.module.scss';


const SocialCard = () => {
  return (
    <div className={styles['social_proof']}>
      <img src={mbtoken} alt='social_proof' />
      <img src={metamask} alt='social_proof' />
      <img src={opensea} alt='social_proof' />
    </div>
  );
};

export default SocialCard;
