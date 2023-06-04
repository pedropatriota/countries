import React from 'react';
import {Moon as MoonOutlined} from '@styled-icons/boxicons-regular/Moon'
import {Moon} from '@styled-icons/heroicons-solid/Moon'

import * as Style from './styles';
import { ThemeContext } from 'styled-components';

interface IHeaderProps {
  toggleTheme(): void;
}

const Header = ({ toggleTheme }: IHeaderProps) => {
  const { title } = React.useContext(ThemeContext);

  return (
    <Style.Container>
      <span>Where is the world?</span>
      <div>
      {title === 'light' ? <MoonOutlined/>: <Moon/>}
      <button onClick={toggleTheme}>{`${title === 'light' ? 'dark' : 'light'} mode`}</button>
      </div>
    </Style.Container>
  );
};

export default Header;
