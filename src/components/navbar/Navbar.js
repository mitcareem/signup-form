import styled, { css } from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../theme/themeSlice";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import Text from "../typography/Text";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  padding: 10px 20px;
  font-size: 16px;
  border-bottom: 1px solid black;

  ${(props) =>
    props.darkMode &&
    css`
      background-color: #331e42;
      color: white;
    `}
`;

const DarkModeIcon = styled(MdDarkMode)`
  font-size: 2.2em;
  cursor: pointer;
`;

const LightModeIcon = styled(MdLightMode)`
  font-size: 2.2em;
  cursor: pointer;
`;

const Navbar = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  return (
    <Nav darkMode={darkMode}>
      <Text fontSize={"1.2em"} fontWeight={"700"}>
        Home
      </Text>
      {darkMode ? (
        <LightModeIcon
          onClick={() => {
            dispatch(changeTheme(!darkMode));
          }}
        />
      ) : (
        <DarkModeIcon
          onClick={() => {
            dispatch(changeTheme(!darkMode));
          }}
        />
      )}
    </Nav>
  );
};

export default Navbar;
