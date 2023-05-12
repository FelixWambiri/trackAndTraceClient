import React from "react";
import { Box, List } from "@material-ui/core";

import { useGetSupplyChainItems } from "../Queries/index";
import SupplyListItem from "./supplyListItem";
import EmptySupplyItems from "./emptySupplyItems";

const SupplyChainList: React.FC = () => {
  const items = useGetSupplyChainItems();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      {items?.length > 0 ? (
        <List style={{ marginTop: 30 }}>
          {items.map((item) => (
            <SupplyListItem item={item} key={item.id} />
          ))}
        </List>
      ) : (
        <EmptySupplyItems />
      )}
    </Box>
  );
};

export default SupplyChainList;
