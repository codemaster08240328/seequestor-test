import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';

describe('App Renders Correctly', () => {
  const history = createBrowserHistory();
  
  test('renders base url', () => {
    history.push('/');
  
    render(
      <Router history={history}>
        <App />
      </Router>
    );
  
    const header__elem = screen.getByText('All Articles');
    expect(header__elem).toBeInTheDocument();
  });
});
