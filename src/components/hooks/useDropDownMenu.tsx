import { useCallback, useState } from 'react';

export const useDropDownMenu = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const handleDropDownMenu = useCallback(() => {
    setIsClicked(!isClicked);
  }, [isClicked]);

  const handleMouseEnter = useCallback(() => {
    setIsClicked(true);
    setIsShow(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsClicked(false);
    setIsShow(false);
  }, []);

  return {
    handleDropDownMenu,
    handleMouseEnter,
    handleMouseLeave,
    isClicked,
    isShow,
  };
};
