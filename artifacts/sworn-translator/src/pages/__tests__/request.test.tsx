import { render, screen } from '@testing-library/react';
import RequestPage from '../request';
import { BrowserRouter } from 'react-router-dom';

describe('RequestPage', () => {
  it('renders the request form', () => {
    render(
      <BrowserRouter>
        <RequestPage />
      </BrowserRouter>
    );
    expect(screen.getByText(/wyślij zapytanie/i)).toBeInTheDocument();
  });
});
