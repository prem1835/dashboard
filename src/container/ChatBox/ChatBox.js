import { Box, Grid } from "@material-ui/core";
import React from "react";
import ChatForm from "../../components/ChatForm/ChatForm";
import ChatTitle from "../../components/ChatTitle/ChatTitle";
import MessageList from "../../components/MessageList/MessageList";

const ChatBox = () => {
  return (
    <Box
      borderRight="2px solid"
      height="95vh"
      paddingTop="1.5rem"
      fontSize="16px"
    >
      <Grid container direction="column">
        <Grid item container justify="flex-end">
          <ChatTitle />
        </Grid>
        <Grid item>
          <Box height="70vh" display="flex" flexDirection="column">
            <MessageList align="flex-end" />
            <MessageList align="flex-end" />
            <MessageList align="flex-start" />
            <MessageList align="flex-start" />
          </Box>
        </Grid>
        <Grid item>
          <ChatForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatBox;
