import { Box } from "@material-ui/core";
import React from "react";
import { Send } from "react-feather";

const styles = {
  input: {
    width: "80%",
    resize: "none",
    margin: "0 10px",
    outline: "none",
    padding: "10px",
  },
  btn: {
    border: "none",
    background: "transparent",
  },
};

const ChatForm = () => {
  return (
    <Box margin="1rem 0" textAlign="center">
      <form
        action=""
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <textarea placeholder="type the message" style={styles.input} />
        <button type="submit" style={styles.btn}>
          <Send color="darkcyan" />
        </button>
      </form>
    </Box>
  );
};

export default ChatForm;
