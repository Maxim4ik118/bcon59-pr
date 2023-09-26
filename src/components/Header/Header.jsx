import styles from './Header.module.css';
import { ReactComponent as IconArrowDown } from '../../images/svg/arrow-down.svg';
import { ReactComponent as IconLogo } from '../../images/svg/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles['header-logo']} href="index.html">
        <IconLogo className={styles.headerLogoIcon} />
      </a>
      <nav className={styles.headerNav}>
        <a className={`${styles.headerNavLink} link`} href="#">
          Home
        </a>

        <a className={`${styles.headerNavLink} link`} href="#">
          Packages
        </a>

        <a className={`${styles.headerNavLink} link`} href="#">
          About us
        </a>

        <a className={`${styles.headerNavLink} link`} href="#">
          Contact us
        </a>
      </nav>
      <div className={styles.auth}>
        <a className={`${styles.authLogIn} link`} href="#">
          Log In
        </a>
        <a className={`${styles.authSingUp} link`} href="#">
          Sign Up
        </a>
        <div className={styles.langSwitcher}>
          <span className={styles.langSwitcherText}>
            CurrentLang <IconArrowDown className={styles.langSwitcherIcon} />
          </span>
          {/* <div>
            <p >en</p>
            <p>ua</p>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
