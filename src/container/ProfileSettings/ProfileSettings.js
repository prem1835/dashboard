import React from "react";
import { Box } from "@material-ui/core";
import { Settings, Shield } from "react-feather";

const ProfileSettings = () => {
  return (
    <>
      <Box
        marginBottom="2rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <p>
          Welcome Marissa <br />
          Account #3241D
        </p>
        <Shield color="darkcyan" size={45} />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        marginBottom="1rem"
        marginLeft="2rem"
      >
        <Settings color="darkcyan" size={40} />
      </Box>
      <Box border="2px solid darkgrey" textAlign="center" marginLeft="2rem">
        <p>My AVLON</p>
        <p>Account Settings</p>
        <p>Layout</p>
      </Box>
      <Box border="2px solid darkgrey" textAlign="center" marginLeft="2rem">
        <p>Contact us</p>
      </Box>
    </>
  );
};

export default ProfileSettings;
