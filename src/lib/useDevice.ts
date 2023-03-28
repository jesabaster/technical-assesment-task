import { useEffect, useState } from 'react';


//Created custom useDevice hook for convenient usage of current device size for implementation of some logic for adaptive design
export const useDevice = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.outerWidth > 430;
      setIsDesktop(isDesktop);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isDesktop };
};

