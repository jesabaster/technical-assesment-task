import styles from './BurgerMenu.module.css';

type BurgerMenuProps = {
  onClick: () => void;
}

export const BurgerMenu = ({ onClick }: BurgerMenuProps) => {
  return (
    <div onClick={onClick} className={styles.burgerMenuWrapper}>
      <div className={styles.burgerMenu} />
    </div>
  );
};
