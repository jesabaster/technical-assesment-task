import clsx from "clsx";
import styles from './SocialLink.module.css';
import { useState } from "react";
import { Link } from "react-router-dom";

type HoveredIconProps = {
  icon: ({ isHovered }: { isHovered: boolean }) => JSX.Element;
  to: string;
}

export const SocialLink = ({ icon, to }: HoveredIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      to={to}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(styles.hoveredIcon, isHovered && styles.backgroundWhite)}
      target="_blank"
    >
      {icon({ isHovered })}
    </Link>
  );
};
