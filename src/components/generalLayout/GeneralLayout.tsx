import styles from "./GeneralLayout.module.css";
import { Outlet } from "react-router";
import { ForwardedRef, forwardRef } from "react";
import { Header } from "../header";
import { Footer } from "../footer";

export const GeneralLayout = forwardRef(({}, ref: ForwardedRef<HTMLElement>) => {

  const scrollToFeatures = () => {
   if(typeof ref !== 'function' && ref?.current) {
     ref.current.scrollIntoView({ behavior: 'smooth' });
   }
  };

  return (
    <div className={styles.generalLayout}>
      <Header scrollToFeatures={scrollToFeatures} />
      <Outlet />
      <Footer />
    </div>
  );
});
