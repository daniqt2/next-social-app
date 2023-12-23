import { IUser } from "../interfaces/user.insterface";
import fetcher from "./fetch.service";

const TODO_BASE_URL = "/todos";

const todoService = {
  getTodoList: (): Promise<IUser[]> => fetcher.get(`${TODO_BASE_URL}/`),
};

export default todoService;
