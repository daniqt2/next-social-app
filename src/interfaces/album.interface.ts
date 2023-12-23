export interface IAlbum {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IUserAlbum {
  userId: number;
  id: number;
  title: string;
}
