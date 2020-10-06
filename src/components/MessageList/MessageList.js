import { Box } from "@material-ui/core";
import React from "react";

const MessageList = ({ align }) => {
  return (
    <>
      <Box
        alignSelf={align}
        border="3px solid darkcyan"
        margin=".5rem"
        maxWidth="290px"
        bgcolor="#d8d8d8"
        borderRadius="5px"
        padding="0 10px"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ratione
        </p>
      </Box>
    </>
  );
};

export default MessageList;
