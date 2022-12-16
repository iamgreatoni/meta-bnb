import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiAlignJustify, FiX } from 'react-icons/fi';
import logo from '../../assets/logo.png';
import styles from './Header.module.scss';

import Modal from '../Modal/Modal';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [modal, setModal] = useState(false);

  const clearModal = () => {
    setModal(null);
  };

  return (
    <>
      {modal && <Modal onClear={clearModal} />}
      <header className={styles.header}>
        <Link to='/' className={styles.logo}>
          <img src={logo} alt='logo' />
        </Link>
        <div className={styles.desktop}>
          <nav className={styles.nav_bar}>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/place'>Place to stay</Link>
              </li>
              <li>
                <Link to='/'>NFTs</Link>
              </li>
              <li>
                <Link to='/'>Community</Link>
              </li>
            </ul>
          </nav>
        </div>
        <button
          className={styles['desktop_btn']}
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          Connect wallet
        </button>
        <div className={styles.mobile}>
          {toggleMenu ? (
            <FiX
              className={styles.icon}
              onClick={() => {
                setToggleMenu((prevState) => !prevState);
              }}
            />
          ) : (
            <FiAlignJustify
              className={styles.icon}
              onClick={() => {
                setToggleMenu(true);
              }}
            />
          )}
          {toggleMenu && (
            <nav className={styles.nav_bar}>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/place'>Place to stay</Link>
                </li>
                <li>
                  <Link to='/'>NFTs</Link>
                </li>
                <li>
                  <Link to='/'>Community</Link>
                </li>
              </ul>
              <button
                className={styles['mobile_btn']}
                onClick={() => {
                  setModal(true);
                }}
              >
                Connect wallet
              </button>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
