import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('Tests for home page', () => {
  test('Should show the header title on the screen', () => {
    render(<App />);
    const title = screen.getByRole('link', { name: /lista de tarefas/i });
    expect(title).toBeInTheDocument();
  });

  test('Should show the title on the screen', () => {
    render(<App />);
    const title = screen.getByRole('heading', { name: /usuários/i });
    expect(title).toBeInTheDocument();
  });
});
