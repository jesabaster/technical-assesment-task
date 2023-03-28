import styles from './ContactUs.module.css';
import { ContactUsForm } from "./contactUsForm";
import { ContactUsInformation } from "./contactUsInfromation";
import { ForwardedRef, forwardRef } from "react";

export const ContactUs = forwardRef(({}, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section className={styles.contactUs} ref={ref}>
      <div className="main-container">
        <h1 className={styles.contactUsTitle}>Contact us</h1>
        <p className={styles.contactUsSubtitle}>Any question or remarks? Just write us a message!</p>
        <div className={styles.content}>
          <ContactUsInformation />
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
});

