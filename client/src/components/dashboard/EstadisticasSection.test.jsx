
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen,fireEvent,waitFor } from '@testing-library/react'
import axios from 'axios'
import EstadisticasSection from './EstadisticasSection'
vi.mock('axios')

describe('dashboard  validation', async () => {
  beforeEach(() => {
    vi.resetAllMocks()
    localStorage.clear();
  })
  test('renders without crashing', () => {
    render(<Router><EstadisticasSection /></Router>);
  });

  test('fetches the ga4 data', async () => {
   
    axios.get.mockResolvedValue({ metricsData: {} });

    render(<Router><EstadisticasSection /></Router>);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/analytics');
    });

  });


})