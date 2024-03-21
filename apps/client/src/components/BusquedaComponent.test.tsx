import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BusquedaComponent } from './BusquedaComponent';

describe("BusquedaComponent", () => {
    // cargamos el componente en el render para ser usado en todas las pruebas 
    beforeEach(() => {
        render(<BusquedaComponent />);
    });

    test("realiza la verificación de que carga el componente", () => {
        // verificamos que el mostrar álbumes se encuentre en el componente
        expect(screen.getByText('Mostrar Álbumes')).toBeDefined();
    });

    test("verifica que useEffect se ejecuta al renderizar el componente", async () => {
        // esperamos que desaparezca el cargando que corresponde al useEffect para que muestre los favoritos al inicio
        await waitFor(() => {
            expect(screen.queryByText('Cargando...')).not.toBeInTheDocument();
        });
    });

    test("realiza una búsqueda al presionar Enter en el campo de búsqueda", async () => {
        const txtInput = screen.getByTestId('TxtBusqueda') as HTMLInputElement;

        // establecemos el value en el input
        fireEvent.change(txtInput, { target: { value: 'Texto de prueba' } });

        // hacemos una simulación del enter
        fireEvent.keyPress(txtInput, { key: 'Enter', code: 'Enter', charCode: 13 });

        // verificamos que al realizar la acción muestre el cargando
        await waitFor(() => {
            expect(screen.getByText('Cargando...')).toBeInTheDocument(); 
        });

        // esperamos y verificamos que el cargando desaparezca 
        await waitFor(() => {
            expect(screen.queryByText('Cargando...')).not.toBeInTheDocument();
        });
    });
});
