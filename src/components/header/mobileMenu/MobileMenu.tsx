import { MainMobileLogo } from "icons";
import { BurgerMenu } from "../burgerMenu";
import styles from './MobileMenu.module.css';

type MobileMenuProps = {
  openMenu: () => void;
}

export const MobileMenu = ({ openMenu }: MobileMenuProps) => {
  return (
    <div className={styles.mobileMenu}>
      <div className="wide-container">
        <div className={styles.mobileMenuContent}>
          <MainMobileLogo />
          <BurgerMenu onClick={openMenu} />
        </div>
      </div>
    </div>
  );
};