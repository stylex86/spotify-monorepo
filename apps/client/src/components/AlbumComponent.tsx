import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';


export const AlbumComponent = ({ item }: { item: any }) => {
    const lastImage = item.images[1];

    return (
        <>
            <div className="py-6 relative">
                <div className="w-48 overflow-hidden relative">
                <div className="overflow-hidden">
                    <img className="object-cover rounded-lg" src={lastImage.url} alt="Imagen" />
                </div>
                <div className="py-4">
                    <div className="flex justify-between items-center">
                    <div className="font-bold text-md text-[#1db954]">{item.artist}</div>
                    </div>
                    <div className="font-bold text-xl text-white">{item.name}</div>
                    <p className="text-base text-gray-300">
                    {new Date(item.release_date).getFullYear()} • Canciones {item.total_tracks}
                    </p>
                </div>

                <button className={`${item.favorite ? 'bg-red-500 hover:bg-red-600' : 'bg-orange-500 hover:bg-orange-600'} text-white font-bold py-2 px-4 w-full rounded flex items-center justify-center`}>
                    {
                        item.favorite ? (
                            <MinusIcon className="w-6" />
                        ) : (
                            <PlusIcon className="w-6" />
                        )
                    }
                    
                    Favoritos
                </button>
                </div>
            </div>
        </>
    )
}
