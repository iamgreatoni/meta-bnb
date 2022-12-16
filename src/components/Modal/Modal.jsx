import styles from './Modal.module.scss';
import metamask from '../../assets/metamaskfox.svg';
import wallet from '../../assets/walletconnect.svg';
import x from '../../assets/x.png';
import vector from '../../assets/vector.png';


const Modal = ({ onClear }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onClear} />
      <div className={styles.modal}>
        <div className={styles.head}>
          <h3>Connect Wallet</h3>
          <img src={x} alt='close' onClick={onClear} />
        </div>
        <div className={styles.details}>
          <small>Choose your preferred wallet</small>
          <div className={styles.wallet}>
            <div className={styles.side}>
              <div className={styles.meta}>
                <img src={metamask} alt='metamask icon' />
                <p>Metamask</p>
              </div>
              <img src={vector} alt='vector' />
            </div>
            <div className={styles.side}>
              <div className={styles.wal}>
                <img src={wallet} alt='metamask icon' />
                <p>WalletConnect</p>
              </div>
              <img src={vector} alt='vector' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
