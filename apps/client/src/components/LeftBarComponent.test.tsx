import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { LeftBarComponent } from './LeftBarComponent';

describe("BusquedaComponent", () => {
    // cargamos el componente en el render para ser usado en todas las pruebas 
    beforeEach(() => {
        render(<LeftBarComponent />);
    });

    test("realiza la verificación de que carga el componente", () => {
        // verificamos que el mostrar álbumes se encuentre en el componente
        expect(screen.getByAltText('logo')).toBeInTheDocument();
    });
});
