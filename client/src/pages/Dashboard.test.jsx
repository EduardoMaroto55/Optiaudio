import Dashboard from './Dashboard.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen,fireEvent,waitFor } from '@testing-library/react'
import axios from 'axios'
import EstadisticasSection from '../components/dashboard/EstadisticasSection'
vi.mock('axios')

describe('dashboard  validation', async () => {
  beforeEach(() => {
    vi.resetAllMocks()
    localStorage.clear();
  })
  test('renders without crashing', () => {
    render(<Router><Dashboard /></Router>);
  });

  test('fetches users on db', async () => {
    const users = [{ id: 1, first_name: "Test", last_name: "Blue",  phone_number: "85662484",  password: "$2a$10$JyrOKIV7oTHD8AHzJsl8ee.x3uLuCeeNwPBu3hL/oSpPwQwGXxojS",  email: "test@blue.com"}];
    axios.get.mockResolvedValue({ data: users });

    render(<Router><Dashboard /></Router>);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/getusers');
    });
  });

})