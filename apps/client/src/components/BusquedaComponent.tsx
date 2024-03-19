import { useState, useEffect } from 'react';
import { fetchData } from '../hooks/fetchData';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { AlbumComponent } from './AlbumComponent';

export const BusquedaComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
        try {
            const responseData = await fetchData('/albumes-favorites');
            console.log(responseData);

            setData(responseData.data);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchDataFromApi();
}, []); // Se ejecuta solo una vez después de montar el componente

  return (
    <>
        <div className="p-2">
            <div className="mx-auto">
              <div className="rounded-lg overflow-hidden">
                <div className="flex items-center px-4 py-4 bg-[#0e0e0e] space-x-2">
                  <div className="relative w-[800px]">
                    <input
                      type="text"
                      placeholder="Buscar por Álbum o Artista"
                      className="border w-2/3 border-gray-300 rounded-full pl-10 pr-24 py-2 focus:outline-none focus:border-green-500 transition-all duration-300"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
                <div className="list-none p-0 bg-[#191414]">
                  <div className='px-4 py-4'>
                    <h1 className='text-white text-2xl font-semibold'>Mostrar Álbumes</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

                        {data.map((item, index) => (
                            <AlbumComponent key={index} item={item} />
                         ))} 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
