import AppLogo from "../icons/AppLogo";
import HeartIcon from "../icons/HeartIcon";
import MenuIcon from "../icons/MenuIcon";
import Profile from "../icons/Profile";
import SearchIcon from "../icons/SearchIcon";
import ShoppingBag from "../icons/ShoppingBag";
import TopBannerIcon from "../icons/TopBannerIcon";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.topStrip}>
        <div className={styles.stripItem}>
          <TopBannerIcon />
          <span>Lorem ipsum dolor</span>
        </div>

        <div className={`${styles.stripItem} ${styles.hideOnMobile}`}>
          <TopBannerIcon />
          <span>Lorem ipsum dolor</span>
        </div>

        <div className={`${styles.stripItem} ${styles.hideOnMobile}`}>
          <TopBannerIcon />
          <span>Lorem ipsum dolor</span>
        </div>
      </div>

      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.showOnMobile}>
            <MenuIcon />
          </div>
          <AppLogo />
        </div>

        <div className={styles.logo}>LOGO</div>

        <div className={styles.iconGroup}>
          <SearchIcon />
          <HeartIcon />
          <ShoppingBag />
          <div className={styles.hideOnMobile}>
            <Profile />
          </div>
        </div>
      </div>

      <div className={styles.tabs}>
        <a>SHOP</a>
        <a>SKILLS</a>
        <a>STORIES</a>
        <a>ABOUT US</a>
        <a>CONTACT US </a>
      </div>
    </nav>
  );
};

export default NavBar;
