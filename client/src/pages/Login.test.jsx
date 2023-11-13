import Login,{validateLogin} from './Login.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen,fireEvent,waitFor } from '@testing-library/react'
import axios from 'axios'


vi.mock('axios')

describe('validación de login', async () => {
  beforeEach(() => {
    vi.resetAllMocks()
    render( <Router>
      <Login />
     </Router>)
  })

  
  test('should show the error when password and email are empty', () => {
    const submitButton =screen.getByText('Ingresar');
    const emailInput = screen.getByPlaceholderText('Ingresa tu correo');
    const passwordInput = screen.getByPlaceholderText('Ingresa tu contraseña');
  
    expect(emailInput.value).toBe('');
    expect(passwordInput.value).toBe('');

    fireEvent.click(submitButton);
    const errorMessage = screen.getByText(/Por favor ingrese correo y contraseña./);
    expect(errorMessage).toBeInTheDocument()
  })

  test('should show the error when email is not valid', () => {
    const submitButton =screen.getByText('Ingresar');
    const emailInput = screen.getByPlaceholderText('Ingresa tu correo');
    const passwordInput = screen.getByPlaceholderText('Ingresa tu contraseña');

    fireEvent.change(emailInput, { target: { value: 'teste@xample' } });
    fireEvent.change(passwordInput, { target: { value: '5234543' } });

    fireEvent.click(submitButton);
    const errorMessage = screen.getByText(/Por favor ingrese un correo válido./);
    expect(errorMessage).toBeInTheDocument()
  })

  test('should show the error when the email or password are not correct', async () => {

      const email ='flores@gmail.com'
      const password = "123456"
      axios.post.mockResolvedValue({ data: { status: "error", message: 'El correo electrónico o contraseña que ingresaste no es correcto.' } })

    const submitButton =screen.getByText('Ingresar');
    const emailInput = screen.getByPlaceholderText('Ingresa tu correo');
    const passwordInput = screen.getByPlaceholderText('Ingresa tu contraseña');
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/login', { email, password });
    });
    expect(screen.getByText(/El correo electrónico o contraseña que ingresaste no es correcto./)).toBeInTheDocument();
  })

})
