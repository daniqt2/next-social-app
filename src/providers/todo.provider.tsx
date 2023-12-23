import React, { PropsWithChildren, useEffect, useState } from "react";

import { ITodo } from "../interfaces/todo.interface";
import todoService from "../services/todo.service";

export interface ITodosState {
  todos: ITodo[];
  getUserTodos: (id: number) => ITodo[];
}

const initialState = {} as ITodosState;

export const TodoContext = React.createContext<ITodosState>(initialState);

export const TodoProvider: React.FC<PropsWithChildren<object>> = ({
  children,
}) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const getTodoList = async () => {
    try {
      const _todos = await todoService.getTodoList();
      setTodos(_todos);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const getUserTodos = (userId: number) =>
    todos?.filter((todo) => todo.userId === userId);

  const contextValue = { todos, getUserTodos };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};
