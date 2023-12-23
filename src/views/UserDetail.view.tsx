import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { IUser } from "../interfaces/user.insterface";
import { TodoList } from "../components/todos/TodoList";
import userService from "../services/user.service";

export const UserDetail: React.FC<object> = () => {
  const { id } = useParams();
  const [user, setUser] = useState<IUser>();
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      try {
        if (!id) return;
        const user = await userService.getUserDetail(id);
        setUser(user);
      } catch (e) {
        console.error(e);
      }
    };

    getUsers();
  }, [id]);

  const goBack = () => navigate(`/`);

  if (!user) return null; // should be loader
  return (
    <div className="p-5">
      <div className=" text-left pb-5">
        <button onClick={goBack} className=" hover:font-bold">
          Go back
        </button>
      </div>
      <div className="flex">
        <div className="">
          <p className="text-2xl font-bold">{user.name}</p>
          <p className="text-xl">@{user.username}</p>
          <div className="text-left mt-4">
            <p className="text-lg">
              <span className=" text-gray-400">email:</span> {user.email}
            </p>
            <p className="text-lg">
              <span className=" text-gray-400">city:</span> {user.address.city}
            </p>
            <p className="text-lg">
              <span className=" text-gray-400">website:</span> {user.website}
            </p>
            <p className="text-lg">
              <span className=" text-gray-400">company:</span>{" "}
              {user.company.name}
            </p>
          </div>
        </div>
        <div className="flex-grow-1 px-10">
          <div className=" text-left">
            <TodoList id={user.id} />
          </div>
        </div>
      </div>
    </div>
  );
};
