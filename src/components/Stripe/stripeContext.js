import React from "react";
// Data
import { sublinks } from "../../data";

const StripeContext = React.createContext();

const StripeProvider = function ({ children }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = React.useState(false);
  const [page, setPage] = React.useState({ page: "", links: [] });
  const [location, setLocation] = React.useState({});

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <StripeContext.Provider
      value={{ isSubmenuOpen, page, location, openSubmenu, closeSubmenu }}
    >
      {children}
    </StripeContext.Provider>
  );
};

export const useStripeContext = () => React.useContext(StripeContext);

export { StripeContext, StripeProvider };
