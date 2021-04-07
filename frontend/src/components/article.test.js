import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Article from './article';

test('Render article component successfully.', () => {
  const mockData = {
    comments: 'test-comments',
    title: 'test-title',
    uploaded_at: 'test data',
    id: 1234
  };

  render(
    <BrowserRouter>
      <Article 
        id={mockData.id}
        title={mockData.title}
        uploaded_at={mockData.uploaded_at}
        comments={mockData.comments}
      />
    </BrowserRouter>
  );
  const published_at__elem = screen.getByTestId('published_at');
  const comments__elem = screen.getByTestId('comments');
  const title__elem = screen.getByTestId('title');
  
  expect(title__elem.textContent).toBe(mockData.title);
  expect(published_at__elem.textContent).toBe(`published at: ${mockData.uploaded_at}`);
  expect(comments__elem.textContent).toBe(` ${mockData.comments}`);
});
