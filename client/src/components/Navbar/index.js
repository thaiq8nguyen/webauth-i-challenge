import React, { useContext } from "react";
import { Button, Menu } from "semantic-ui-react";
import AuthContext from "../../contexts/Auth/authContext";
import styles from "../../assets/styles/navbar.module.scss";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { logout } = authContext;
  return (
    <>
      <Menu borderless className={styles.navbar}>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button inverted onClick={logout}>
              Logout
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default Navbar;
