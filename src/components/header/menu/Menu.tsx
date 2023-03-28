import styles from "./Menu.module.css";
import { IconAccount, IconArrow, IconClose, IconStore, MainLogo, MainMobileLogo } from "icons";
import { useDevice } from "lib/useDevice";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

type MenuProps = {
  isMenuOpen: boolean;
  closeMenu: () => void;
  scrollToFeatures?: () => void;
}

export const Menu = ({ scrollToFeatures, closeMenu, isMenuOpen }: MenuProps) => {
  const { isDesktop } = useDevice();

  return (
    <div className={clsx(styles.menuContent, isMenuOpen && styles.open)}>
      <div className={styles.menuLogoWrapper}>
        {isDesktop ? <MainLogo /> : <MainMobileLogo color="white" />}
        {!isDesktop && (
          <button className={styles.closeBtn} onClick={closeMenu}>
            <IconClose />
          </button>
        )}
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          <li><NavLink to="/">Home</NavLink></li>
          <li
            className={styles.featureItem}
            onClick={scrollToFeatures}
          >
            <span>Features</span>
            <IconArrow color={isDesktop ? 'black' : 'white'} />
          </li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      <div className={styles.actionsWrapper}>
        <div className={styles.menuIcon}>
          <IconAccount color={isDesktop ? 'black' : 'white'} />
        </div>
        <div className={styles.menuIcon}>
          <IconStore color={isDesktop ? 'black' : 'white'} />
        </div>
      </div>
    </div>
  );
};
