import React, { useContext } from "react";
import { Button, Menu } from "semantic-ui-react";
import AuthContext from "../../contexts/Auth/authContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { logout } = authContext;
  return (
    <>
      <Menu borderless>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button className="tertiary" onClick={logout}>
              Logout
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default Navbar;
