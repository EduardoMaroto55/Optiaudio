import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen,fireEvent,waitFor,act } from '@testing-library/react'
import axios from 'axios'
import CardItems from './CardItem'
vi.mock('axios')

describe('cartItem  validation', async () => {
    beforeEach(() => {
      vi.resetAllMocks()
      localStorage.clear();
    })
    test('renders without crashing', () => {
        const data = {
            rows: [
              { metricValues: { 1: { value: '3' } } },
            ],
          };
        act(() => {
            render(<CardItems data={data} title="Usuarios activos totales" id={1} />);
          });
        const usuariosActivos = screen.getByText(/3/);
         expect(usuariosActivos).toBeInTheDocument()
    });
})  