
import { FastifyRequest, FastifyReply } from 'fastify';
import {axiosGet} from '../utils/response'
import Album from '../models/album.models'

interface QueryParameters {
    query: string;
    type: string;
    offset: string;
    limit: string;
}
 
export const getAlbumesBusqueda = async (request: FastifyRequest<{ Querystring: QueryParameters }>, reply: FastifyReply) => {
    try {

        const access_token = request.cookies['access_token'];
        const { query, type, offset, limit } = request.query;
        const queryString = `?query=${query}&type=album%2Cartist`;

        const response = await axiosGet(`/search${queryString}`, access_token);
        const albumes = response.albums.items;
        
        for ( const albumData of albumes ) {
            const artist = albumData.artists[0].name;
            const existente = await Album.findOne({ idAlbum: albumData.id });
            if(!existente){
                const nuevoAlbum = new Album({
                    idAlbum: albumData.id,
                    artist: artist,
                    name: albumData.name,
                    total_tracks: albumData.total_tracks,
                    favorite: false,
                    images: albumData.images
                });
                await nuevoAlbum.save();
            }
        }

        const results = await Album.find({
            $or: [
                { artist: { $regex: query, $options: 'i' } }, 
                { name: { $regex: query, $options: 'i' } }
            ]
        });

        reply.code(201).send({
            message: 'Datos obtenidos exitosamente.',
            data: results
        })
    } catch (error) {
        reply.code(500).send({ error: error });
    }
};

export const getAlbumesFavorites = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const results = await Album.find({ favorite: true });

        return reply.code(201).send({
            message: 'Datos obtenidos exitosamente.',
            data: results
        })
    } catch (error) {
        reply.code(500).send({ error: 'Error al obtener datos.' });
    }
};

export const updateAlbumFavorite = async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    try {
        const { id } = request.params;

        const album = await Album.findById(id);

        if(!album){
            return reply.code(404).send({error: 'Álbum no encontrado.'})
        }
        
        album.favorite = !album.favorite;
        await album.save();

        return reply.code(200).send({
            message: album.favorite ? "Se agrego como favorito el álbum" : "Se elimino de favoritos el álbum"
        })
    } catch (error) {
        console.error("Error al actualizar los datos:", error);
        reply.code(500).send({ error: 'Error al actualizar los datos.' });
    }
}