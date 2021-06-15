import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import LoginButton from "../../components/Auth0/LoginButton";
import LogoutButton from "../../components/Auth0/LogoutButton";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 10,
  },
  header: {},
}));

const Home = (props) => {
  const { isAuthenticated } = props;
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      WELCOME HOME
      <LoginButton />
      <LogoutButton />
      {isAuthenticated && <Box>I am logged in now!</Box>}
    </Box>
  );
};

export default Home;
