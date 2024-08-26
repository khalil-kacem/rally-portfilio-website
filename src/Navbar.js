import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import styles from './Navbar.module.css';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="App">
        <nav className={`${styles.navbar}`}>
          <a className={`${styles.logo}`}>Rally</a>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive} className='messi'>
              <Link to='/' className={`${styles.navLink}`}><a >Home</a></Link>
            </li>
            <li onClick={removeActive}>
            <Link to='/about' className={`${styles.navLink}`}>About us</Link>
            </li>
            <li onClick={removeActive}>
            <Link to='/gallery' className={`${styles.navLink}`}>Gallery</Link>
            </li>
            <li onClick={removeActive}>
            <Link to='/contact' className={`${styles.navLink}`}>Contact us</Link>
            </li>
          </ul>
          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </div>
  );
}

export default Navbar;
