import { Box } from "@material-ui/core";
import React from "react";
import { PhoneCall, PlusCircle, Video } from "react-feather";

const ChatTitle = () => {
  return (
    <Box display="flex" justifyContent="space-evenly" flexBasis="150px">
      <PlusCircle color="darkcyan" size={30} />
      <PhoneCall color="darkcyan" size={30} />
      <Video color="darkcyan" size={30} />
    </Box>
  );
};

export default ChatTitle;
