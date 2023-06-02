// UserDetails.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import UserDetail from './UserDetail';

test('Renders UserDetails component với giá trị đúng', () => {
  const info = {
    username: 'ndnghia',
    email: 'ndnghia@gmail.com',
    phone: '0123456789',
  };

  render(<UserDetail info={info} />);

  const username = screen.getByText(`Username: ${info.username}`);
  const email = screen.getByText(`Email: ${info.email}`);
  const phone = screen.getByText(`Phone: ${info.phone}`);

  expect(username).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(phone).toBeInTheDocument();
});

test('Renders UserDetails component with no values', () => {
    const info = {
      username: '',
      email: '',
      phone: '',
    };
  
    render(<UserDetail info={info} />);
  
    const username = screen.queryByText(`Username: ${info.username}`);
    const email = screen.queryByText(`Email: ${info.email}`);
    const phone = screen.queryByText(`Phone: ${info.phone}`);
  
    expect(username).not.toBeInTheDocument();
    expect(email).not.toBeInTheDocument();
    expect(phone).not.toBeInTheDocument();
  });

