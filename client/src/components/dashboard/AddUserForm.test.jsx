import AddUserForm,{handleSubmit} from './AddUserForm'
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen,fireEvent,waitFor } from '@testing-library/react'
import axios from 'axios'


vi.mock('axios')
describe('AddUserForm', () => {
    test('renders form fields and submits form', async () => {
      axios.post.mockResolvedValue({});
  
      render(<AddUserForm padding={5} />);
  
      const nameInput = screen.getByLabelText('name');
      const apellidoInput = screen.getByLabelText('apellido');
      const emailInput = screen.getByLabelText('email');
      const passwordInput = screen.getByLabelText('password');
      const telInput = screen.getByLabelText('telefono');

      // Add more inputs as needed
  
      fireEvent.change(nameInput, { target: { value: 'Test Name' } });
      fireEvent.change(apellidoInput, { target: { value: 'Test Apellido' } });
      fireEvent.change(emailInput, { target: { value: 'Test Name' } });
      fireEvent.change(passwordInput, { target: { value: 'Test Apellido' } });
      fireEvent.change(telInput, { target: { value: 'Test Name' } });
      // Fire events for more inputs as needed
  
      fireEvent.submit(screen.getByRole('form'));
  
      await waitFor(() => {
        expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/api/adduser', {
          name: 'Test Name',
          apellido: 'Test Apellido',
          // Add more fields as needed
        });
      });
    });
  });