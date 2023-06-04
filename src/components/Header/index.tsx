import * as Style from './styles'

interface IHeaderProps{
  theme: 'light' | 'dark';
  toggleTheme(): void; 
}

const Header = ({theme, toggleTheme}: IHeaderProps) => {

  return(
    <Style.Container>
      <span>Where is the world?</span>
      <button onClick={toggleTheme}>{`${theme} mode`}</button>
    </Style.Container>
  )
}

export default Header