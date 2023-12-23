import React, { PropsWithChildren, useEffect, useState } from "react";

import { IAlbum } from "../interfaces/album.interface";
import albumService from "../services/album.service";

export interface IAlbumState {
  albums: IAlbum[];
  getAlbumById: (userId: number) => IAlbum | undefined;
}

const initialState = {} as IAlbumState;

export const AlbumContext = React.createContext<IAlbumState>(initialState);

export const AlbumpProvider: React.FC<PropsWithChildren<object>> = ({
  children,
}) => {
  const [albums, setAlbums] = useState<IAlbum[]>([]);

  const getAlbumList = async () => {
    try {
      const _albums = await albumService.getAlbumPhotosList();
      setAlbums(_albums);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    getAlbumList();
  }, []);

  const getAlbumById = (albumId: number) =>
    albums?.find((album) => album.id === albumId);

  const contextValue = { albums, getAlbumById };

  return (
    <AlbumContext.Provider value={contextValue}>
      {children}
    </AlbumContext.Provider>
  );
};
