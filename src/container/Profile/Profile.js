import React from "react";
import { Box } from "@material-ui/core";
import { User } from "react-feather";

const Profile = () => {
  return (
    <Box borderRight="2px solid" width="100%" height="95vh">
      <figure style={{ textAlign: "center", margin: 0, padding: "1rem 0" }}>
        <User size={50} color="darkcyan" />
        <figcaption>Daniel Johnson</figcaption>
      </figure>
      <Box marginLeft="1rem">
        <p>57 y/o, 80142 Denver Rise inc.</p>
        <p>Account: #3F51B515</p>
        <p>Idle Time: x:xx</p>
        <p>Latest Purchases</p>
        <p>Client since 06/2012</p>
        <p></p>
        <p>Membership type</p>
        <p>Payment info</p>
      </Box>
    </Box>
  );
};

export default Profile;
