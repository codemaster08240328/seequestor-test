import { screen, render } from '@testing-library/react';
import Layout from './layout';

describe('Layout Component Rendered Correctly', () => {
  test('Render with Loading status', () => {
    render(
      <Layout
        loading={true}
        error={false}
      >
        <div data-testid='child-component'>Test Rendering</div>
      </Layout>
    );
    
    const spinner__elem = screen.getByTestId('spinner-wrapper');
    expect(spinner__elem).toBeInTheDocument();
  });
  
  test('Render with Error status', () => {
    render(
      <Layout
        loading={false}
        error={true}
      >
        <div data-testid='child-component'>Test Rendering</div>
      </Layout>
    );
    
    const error__elem = screen.getByTestId('error-wrapper');
    expect(error__elem).toBeInTheDocument();
  });

  test('Render with child component', () => {
    render(
      <Layout
        loading={false}
        error={false}
      >
        <div data-testid='child-component'>Test Rendering</div>
      </Layout>
    );
    
    const child__elem = screen.getByTestId('child-component');
    expect(child__elem).toBeInTheDocument();
  });
})
