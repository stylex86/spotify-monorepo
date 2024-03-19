import {Schema, model} from 'mongoose';

const imageSchema = new Schema({
    height: Number,
    url: String,
    width: Number
});

const albumSchema = new Schema({
    idAlbum: String,
    artist: String,
    name: String,
    total_tracks: Number,
    release_date: Date,
    favorite: Boolean,
    images: [imageSchema]
}, {
    timestamps: true,
    versionKey: false
})
  
export default model('Albumes', albumSchema);
