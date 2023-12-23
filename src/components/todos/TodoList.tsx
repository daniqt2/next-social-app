import { useContext, useEffect, useState } from "react";

import { ITodo } from "../../interfaces/todo.interface";
import { TodoContext } from "../../providers/todo.provider";

export const TodoList: React.FC<{ id: number }> = ({ id }) => {
  const [todos, setTodos] = useState<ITodo[]>();
  const { getUserTodos } = useContext(TodoContext);

  useEffect(() => {
    const _todos = getUserTodos(id);
    setTodos(_todos);
  }, [id, getUserTodos]);

  const getClass = (completed: boolean): string =>
    completed ? "line-through text-gray-500" : "font-bold";

  if (!todos?.length) return <p>NO TODOS</p>;
  return (
    <div className="px-4">
      <p className="text-xl">T O D O - L I S T:</p>
      {todos.map((todo, idx) => {
        return (
          <p key={idx} className={getClass(todo.completed)}>
            {" "}
            - {todo.title}
          </p>
        );
      })}
    </div>
  );
};
