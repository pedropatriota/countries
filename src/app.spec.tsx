import { render } from '@testing-library/react';
import App from './App';

describe('render App', () => {
  it('should render correctly', () => {
    const { getByText } = render(<App />);

    expect(getByText('countries')).toBeInTheDocument();
  });
});
