import { contacts, socialNetworks } from "../../../constants";
import { InfoList, SocialLink } from "components";
import styles from './ContactUsInformation.module.css';
import bubblesImage from 'assets/bubblesImage.png';
import mobileBubblesImage from 'assets/mobileBubblesImage.png';
import { useDevice } from "lib/useDevice";

export const ContactUsInformation = () => {
  const { isDesktop } = useDevice();
  return (
    <div className={styles.contactInformation}>
      <h2 className={styles.contactInformationTitle}>Contact Information</h2>
      <p className={styles.contactInformationSubtitle}>Say something to start a live chat!</p>
      <InfoList className={styles.infoList} items={contacts} itemMargin="large" />
      <div className={styles.socialNetworksWrapper}>
        {socialNetworks.map(({ icon, id, link }) => (
          <SocialLink icon={icon} key={id} to={link} />
        ))}
      </div>
      <img className={styles.bubblesImage} src={isDesktop ? bubblesImage : mobileBubblesImage} alt="bubbles" />
    </div>
  );
};
