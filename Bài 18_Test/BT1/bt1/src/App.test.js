import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('Test App component', () => {
  render(<App />);
  const usernameInput = screen.getByLabelText('Username');
  const passwordInput = screen.getByLabelText('Password');
  const submitButton = screen.getByText('Submit');

  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('Test both field empty', () => {
  render(<App />);
  const submitButton = screen.getByText('Submit');
  fireEvent.click(submitButton);

  const errorMessage = screen.queryByText('Vui lòng điền đầy đủ thông tin');
  expect(errorMessage).toBeInTheDocument();
})

test('Test username empty', () => {
  render(<App />);
  const passwordInput = screen.getByLabelText('Password');
  const submitButton = screen.getByText('Submit');

  fireEvent.change(passwordInput, { target: { value: '12345' } });
  fireEvent.click(submitButton);

  const errorMessage = screen.queryByText('Vui lòng nhập tên người dùng');
  expect(errorMessage).toBeInTheDocument();
});

test('Test password empty', () => {
  render(<App />);
  const usernameInput = screen.getByLabelText('Username');
  const submitButton = screen.getByText('Submit');

  fireEvent.change(usernameInput, { target: { value: 'ndnghia' } });
  fireEvent.click(submitButton);

  const errorMessage = screen.queryByText('Vui lòng nhập mật khẩu');
  expect(errorMessage).toBeInTheDocument();
});

test('Test incorrect password', () => {
  render(<App />);
  const usernameInput = screen.getByLabelText('Username');
  const passwordInput = screen.getByLabelText('Password');
  const submitButton = screen.getByText('Submit');

  fireEvent.change(usernameInput, { target: { value: 'ndnghia' } });
  fireEvent.change(passwordInput, { target: { value: 'saimatkhau' } });
  fireEvent.click(submitButton);

  const errorMessage = screen.getByText('Hãy kiểm tra tài khoản của bạn');
  expect(errorMessage).toBeInTheDocument();
});

test('Test incorrect username', () => {
  render(<App />);
  const usernameInput = screen.getByLabelText('Username');
  const passwordInput = screen.getByLabelText('Password');
  const submitButton = screen.getByText('Submit');

  fireEvent.change(usernameInput, { target: { value: 'saitendangnhap' } });
  fireEvent.change(passwordInput, { target: { value: '12345' } });
  fireEvent.click(submitButton);

  const errorMessage = screen.getByText('Hãy kiểm tra tài khoản của bạn');
  expect(errorMessage).toBeInTheDocument();
});


test('Test loggin successfully', () => {
  render(<App />);
  const usernameInput = screen.getByLabelText('Username');
  const passwordInput = screen.getByLabelText('Password');
  const submitButton = screen.getByText('Submit');

  fireEvent.change(usernameInput, { target: { value: 'ndnghia' } });
  fireEvent.change(passwordInput, { target: { value: '12345' } });
  fireEvent.click(submitButton);

  const errorMessage = screen.queryByText('Đăng nhập thành công');
  expect(errorMessage).toBeInTheDocument();
});


