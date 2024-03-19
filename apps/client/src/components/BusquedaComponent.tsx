import { useState, useEffect } from 'react';
import { fetchData } from '../hooks/utilApi';

import { MagnifyingGlassIcon, ArrowPathIcon } from '@heroicons/react/24/solid';
import { AlbumComponent } from './AlbumComponent';

export const BusquedaComponent = () => {
  const [data, setData] = useState([]);
  const [InputBusqueda, setInputBusqueda] = useState('');
  const [loading, setLoading] = useState(false);
  
  const realizarBusqueda = async () => {
    try {
        if (InputBusqueda.trim() === '') return; // validación para evitar que se realice una busqueda con valores vacios
        setLoading(true);
        const responseData = await fetchData('/albumes', InputBusqueda);
        
        setData(responseData.data);
        setLoading(false);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  }

  // Función que cada vez que ocurra un onchange guarde el valor en un useState
  const inputOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputBusqueda(event.target.value);
  };

  // Cada vez que se presiona enter se realizá una busqueda
  const inputBusquedaKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter'){
      realizarBusqueda();
    }
  }

  // Se ejecuta solo al iniciar el componente donde mostrará los álbumes favoritos
  useEffect(() => {
    const fetchDataFavorites = async () => {
        try {
            setLoading(true);
            const responseData = await fetchData('/albumes-favorites');
            setData(responseData.data);
            setLoading(false);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchDataFavorites();
  }, []);



  return (
    <>
        <div className="p-2">
            <div className="mx-auto">
              <div className="rounded-lg overflow-hidden">
                <div className="flex items-center px-4 py-4 bg-[#0e0e0e] space-x-2">
                  <div className="relative w-[800px]">
                    <input
                      type="text"
                      placeholder="Presiona enter para buscar por artista o álbum"
                      className="border w-2/3 border-gray-300 rounded-full pl-10 pr-24 py-2 focus:outline-none focus:border-green-500 transition-all duration-300"
                      onChange={inputOnchange}
                      onKeyDown={inputBusquedaKeyPress}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
                <div className="list-none p-0 bg-[#191414]">
                  <div className='px-4 py-4'>
                    <h1 className='text-white text-2xl font-semibold'>Mostrar Álbumes</h1>
                      {loading ? (
                          <div className="flex items-center">
                              <div className="mr-2">Cargando...</div>
                              <ArrowPathIcon className="h-5 w-5 text-gray-400 animate-spin" />
                          </div>
                       ) : (
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {data.map((item, index) => (
                              <AlbumComponent key={index} item={item} />
                            ))}
                          </div>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
