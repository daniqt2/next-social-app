import { IUser } from "../interfaces/user.insterface";
import fetcher from "./fetch.service";

const USER_BASE_URL = "/users";

const userService = {
  getUserList: (): Promise<IUser[]> => fetcher.get(`${USER_BASE_URL}/`),
  getUserDetail: (id: string): Promise<IUser> =>
    fetcher.get(`${USER_BASE_URL}/${id}`),
  getUserAlbums: (id: string) => fetcher.get(`${USER_BASE_URL}/${id}/albums`),
};

export default userService;
