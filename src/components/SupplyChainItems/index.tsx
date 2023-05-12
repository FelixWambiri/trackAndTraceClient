import React from "react";

import SupplyChainList from "./supplyChainList";
import ResponsiveGridContainer from "./GridContainer";

const SupplyChainContainer = () => {
  return (
    <ResponsiveGridContainer>
      <SupplyChainList />
    </ResponsiveGridContainer>
  );
};

export default SupplyChainContainer;
