import { ITodo } from "../interfaces/todo.interface";
import fetcher from "./fetch.service";

const TODO_BASE_URL = "/todos";

const todoService = {
  getTodoList: (): Promise<ITodo[]> => fetcher.get(`${TODO_BASE_URL}/`),
};

export default todoService;
