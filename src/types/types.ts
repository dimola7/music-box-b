export interface IUser {
  user: any;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: string;
  provider: string;
  token?: string;
  last_login?: string;
}
export interface REQUESTUSER {
  id?: string;
  token?: string;
}
export interface IPlaylist {
  name: string;
  genreId: string;
  tracks?: [{ trackId: number; title: string }];
  isPublic: boolean;
  likes?: string[];
  ownerId?: string;
  listeningCount?: number;
  likesCount?: number;
}
export interface GENRE {
  id: number;
  name: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  type: string;
}

export type ResponseData = Record<string, any> | Record<string, any>[];
