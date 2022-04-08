import React from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(
    function () {
      window.scrollTo(0, 0);

      if (pathname.length > 1) {
        document.title = pathname.substring(1);
      } else {
        document.title = "Projects";
      }
    },
    [pathname]
  );

  return null;
}
