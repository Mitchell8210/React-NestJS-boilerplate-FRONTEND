import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import LoginButton from "../../components/Auth0/LoginButton";
import LogoutButton from "../../components/Auth0/LogoutButton";
import MenuAppBar from "../../components/AppBar";

const useStyles = makeStyles((theme) => ({
  container: {},
  header: {},
}));

const Home = (props) => {
  const {} = props;
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <MenuAppBar />
    </Box>
  );
};

export default Home;
