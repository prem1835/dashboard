import React from "react";
import {
  Airplay,
  GitMerge,
  MessageCircle,
  BarChart2,
  Cpu,
  HelpCircle,
  LogOut,
} from "react-feather";
import { Box } from "@material-ui/core";

const styles = {
  container: {
    backgroundColor: "#505050",
    padding: "13px",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
  },
};

const SideBar = () => {
  return (
    <div style={styles.container}>
      <Box
        display="flex"
        flexDirection="column"
        flex="50%"
        justifyContent="space-evenly"
        marginBottom="5rem"
      >
        <Airplay size={35} color="white" />
        <MessageCircle size={35} color="darkcyan" />
        <GitMerge size={35} color="white" />
        <BarChart2 size={35} color="white" />
        <Cpu size={35} color="white" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        flex="10%"
        justifyContent="space-evenly"
      >
        <HelpCircle size={35} color="white" />
        <LogOut size={35} color="white" />
      </Box>
    </div>
  );
};

export default SideBar;
