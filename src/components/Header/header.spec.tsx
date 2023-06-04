import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../../styles/themes';
import Header from '.';

describe('Header Component', () => {
  const props = {
    toggleTheme: jest.fn(),
    title: 'light'
  };
  it('should start as lightMode', () => {
    render(
      <ThemeProvider theme={light}>
        <Header {...props} />
      </ThemeProvider>
    );

    const currentButtonName = screen.getByRole('button', { name: 'dark mode' });
    const containerStyle = screen.getByRole('navigation');
    expect(currentButtonName).toBeInTheDocument();
    expect(containerStyle).toHaveStyle({ 'background-color': 'rgb(255, 255, 255)' });
  });

  it('should change from lightMode to darkMode', async () => {
    render(
      <ThemeProvider theme={dark}>
        <Header {...props} />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(props.toggleTheme).toHaveBeenCalledTimes(1);    
  });

  it('should match the snapshot', () => {
    const{container}= render(
      <ThemeProvider theme={light}>
        <Header {...props} />
      </ThemeProvider>
    )
      expect(container).toMatchSnapshot()
  })
});
