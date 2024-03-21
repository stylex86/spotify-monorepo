import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AlbumComponent } from './AlbumComponent';

// creamos un objeto de prueba para validar todas las funciones
const item = {
    _id: 'albumId',
    images: [{ url: 'image-url' }, { url: 'image-url' }],
    favorite: false,
    artist: 'Artist',
    name: 'Album Name',
    release_date: '2024-01-01',
    total_tracks: 10,
};

describe("AlbumComponent", () => {
    // cargamos el componente en el render para ser usado en todas las pruebas 
    beforeEach(() => {
        render(<AlbumComponent item={item} />);
    });

    test("realizamos la verificación de la creacion del componente", () => {
        // validamos el artista
        expect(screen.getByText('Artist')).toBeInTheDocument();

        // validamos el nombre del álbum
        expect(screen.getByText('Album Name')).toBeInTheDocument();

        // Emulamos lo que haria el componente
        const releaseYear = new Date(item.release_date).getFullYear();
        const expectedText = `${releaseYear} • Canciones ${item.total_tracks}`;

        // validamos que es el resultado esperado
        expect(screen.getByText(expectedText)).toBeInTheDocument();
    });

    test("verificación que la clase corresponda al estado de favoritos", () => {
        const button = screen.getByText('Favoritos');

        expect(button).toHaveClass('bg-orange-500 hover:bg-orange-600');
    });

    test("verificación de cambio de estado con boton favorite", async () => {
        const button = screen.getByText('Favoritos');
        fireEvent.click(button);

        // verificamos que cambie el estado y sea la clase correspondiente del botón
        await waitFor(() => {
            expect(button).toHaveClass('bg-red-500 hover:bg-red-600');
        });

        // verificamos que el boton se actualice
        expect(button).toHaveTextContent('Favoritos'); 
    });
});