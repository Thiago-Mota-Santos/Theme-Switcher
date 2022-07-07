import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

import { Container } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container>
      Text
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        offColor={colors.primary}
        onColor={shade(0.15, colors.secondary)}
        height={10}
        width={40}
        handleDiameter={20}
      />
    </Container>
  );
};

export default Header;
