import { useEffect } from "react";
import { useLocation } from "react-router-dom";
useLocation;

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default ScrollTop;
