import React from 'react'
import styles from './ImageCard.module.scss';
import settings from '../../assets/setting.png';
import { cards } from '../Place/Place';

const ImageCard = () => {
  return (
    <>
      <div className={styles.row}>
        <ul>
          <li>Restaurant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>Fantasy city</li>
          <li>Beach</li>
          <li>Carbines</li>
          <li>Off-grid</li>
          <li>Farm</li>
          <li className={styles.location}>
            <img src={settings} alt='settings icon' />
            <p>Location</p>
          </li>
        </ul>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.card}>{cards}</div>
      </div>
    </>
  )
}

export default ImageCard;
