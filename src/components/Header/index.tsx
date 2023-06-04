import { Moon as MoonOutlined } from '@styled-icons/boxicons-regular/Moon';
import { Moon } from '@styled-icons/heroicons-solid/Moon';

import * as Style from './styles';

interface IHeaderProps {
  title: string;
  toggleTheme(): void;
}

const Header = ({ title, toggleTheme }: IHeaderProps) => {
  return (
    <Style.Container>
      <span>Where is the world?</span>
      <div>
        {title === 'light' ? <MoonOutlined /> : <Moon />}
        <button onClick={toggleTheme}>{`${title === 'light' ? 'dark' : 'light'} mode`}</button>
      </div>
    </Style.Container>
  );
};

export default Header;
