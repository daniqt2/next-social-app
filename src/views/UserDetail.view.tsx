import { useEffect, useState } from "react";

import { IUser } from "../interfaces/user.insterface";
import { useParams } from "react-router-dom";
import userService from "../services/user.service";

export const UserDetail: React.FC<object> = () => {
  const { id } = useParams();
  const [user, setUser] = useState<IUser>();

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

  if (!user) return null; // should be loader
  return (
    <div className="p-5">
      <div className="grid grid-cols-4 gap-4">
        <div className=" cols-1">
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
        <div className="cols-3">
          <div className=" text-left">
            <p className="text-lg">{user.email}</p>
            <p className="text-lg">{user.address.city}</p>
            <p className="text-lg">{user.website}</p>
            <p className="text-lg">{user.company.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
