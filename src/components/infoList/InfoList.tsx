import styles from './InfoList.module.css';
import clsx from "clsx";
import { Link } from "react-router-dom";

type InfoListItem = {
  id: string;
  text: string;
  icon?: JSX.Element;
}

type InfoListProps = {
  items: InfoListItem[];
  className?: string;
  title?: string;
  itemMargin?: 'large' | 'small';
}

// I decided to make a flexible reusable component, because I saw that this structure occurs several times on the page

export const InfoList = ({ title, items, itemMargin, className }: InfoListProps) => {
  return (
    <div className={clsx(styles.infoList, className)}>
      {title && <h3 className={styles.infoListTitle}>{title}</h3>}
      <ul>
        {items.map(({ icon, text, id }) => (
          <li
            className={clsx(styles.infoListItem, itemMargin === 'large' && styles.itemLargeMargin)}
            key={id}
          >
            {icon &&
              <div className={styles.iconWrapper}>
                {icon}
              </div>}
            <Link to="/">{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};