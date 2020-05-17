import { shade } from 'polished';
import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';
interface Props {
  toggleTheme(): void;
}

export const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      Theme Switcher
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        height={20}
        width={50}
        handleDiameter={25}
        onColor={colors.secundary}
        offColor={shade(0.20, colors.primary)}
      />
    </Container>
  );
};
