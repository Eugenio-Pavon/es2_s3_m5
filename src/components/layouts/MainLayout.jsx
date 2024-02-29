import React from "react";
import MyNav from "../navigation/MyNav";

import MyFooter from "../footer/MyFooter";

const MainLayout = ({ children }) => {
  return (
    <>
      <MyNav />
      {children}

      <MyFooter />
    </>
  );
};

export default MainLayout;
