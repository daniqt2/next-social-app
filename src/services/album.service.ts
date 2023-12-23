import { IAlbum } from "../interfaces/album.interface";
import fetcher from "./fetch.service";

const ALBUM_BASE_URL = "/photos";

const albumService = {
  getAlbumPhotosList: (): Promise<IAlbum[]> =>
    fetcher.get(`${ALBUM_BASE_URL}/`),
  getAlbumPhotos: (id: string): Promise<IAlbum> =>
    fetcher.get(`${ALBUM_BASE_URL}/${id}`),
};

export default albumService;
