import styles from './Header.module.css';
import { useDevice } from "lib/useDevice";
import { useEffect, useState } from "react";
import { MobileMenu } from "./mobileMenu";
import { Menu } from "./menu";
import { freezeScrolling, unfreezeScrolling } from "lib/freezeScrolling";

type HeaderProps = {
  scrollToFeatures: () => void;
}

export const Header = ({ scrollToFeatures }: HeaderProps) => {
  const { isDesktop } = useDevice();
  const [isMenuOpen, setIsMenuOpen] = useState(isDesktop);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  // I think it's good practice to freeze the scroll while opening a menu on a mobile device.
  useEffect(() => {
    if (isMenuOpen && !isDesktop) {
      freezeScrolling();
    } else {
      unfreezeScrolling();
    }
  }, [isMenuOpen, isDesktop]);

  return (
    <header className={styles.header}>
      <div className="wide-container">
        <Menu scrollToFeatures={scrollToFeatures} closeMenu={closeMenu} isMenuOpen={isMenuOpen} />
        {!isDesktop && <MobileMenu openMenu={openMenu} />}
        {!isDesktop && isMenuOpen && <div className={styles.overlay}/>}
      </div>
    </header>
  );
};

