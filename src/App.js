import React from "react";
import Sidebar from "./container/SideBar/SideBar";
import TopBar from "./container/TopBar/Topbar";
import Profile from "./container/Profile/Profile";
import ChatBox from "./container/ChatBox/ChatBox";
import ProfileSettings from "./container/ProfileSettings/ProfileSettings";
import Grid from "@material-ui/core/Grid";
import "./App.scss";
import { Box } from "@material-ui/core";

function App() {
  return (
    <Box height="100vh" fontSize="20px">
      <Grid container>
        <TopBar />
      </Grid>
      <Grid container>
        <Grid item>
          <Sidebar />
        </Grid>
        <Grid item xs={2}>
          <Profile />
        </Grid>
        <Grid item xs={6}>
          <ChatBox />
        </Grid>
        <Grid item xs={3}>
          <ProfileSettings />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
