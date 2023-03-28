import { FooterLogo } from "icons";
import styles from './Footer.module.css';
import { footerLinksGroups } from "../../constants";
import { InfoList } from "../infoList";
import { JoinNewsletterCard } from "./joinNewsletterCard";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="wide-container">
        <div className={styles.footerLogoWrapper}>
          <FooterLogo />
        </div>
        <div className={styles.footerDivider} />
        <div className={styles.footerContent}>
          <div className={styles.footerLinksWrapper}>
            {footerLinksGroups.map(({ title, items, id, }) => (
              <InfoList
                className={styles.footerInfoList}
                items={items}
                title={title}
                key={id}
              />
            ))}
          </div>
          <JoinNewsletterCard />
        </div>
      </div>
    </footer>
  );
};