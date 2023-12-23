import { useEffect, useState } from "react";

import { IUser } from "../interfaces/user.insterface";
import { UserCard } from "../components/userCard";
import { useNavigate } from "react-router-dom";
import userService from "../services/user.service";

export const UserList: React.FC<object> = () => {
  const [users, setUsers] = useState<IUser[]>();
  const navigate = useNavigate();

  useEffect(() => {
    //  should be in a state managment
    const getUsers = async () => {
      try {
        const users = await userService.getUserList();
        console.log(users);
        setUsers(users);
      } catch (e) {
        console.error(e);
      }
    };

    getUsers();
  }, []);

  const handleClick = (id: number) => navigate(`/user/${id}`);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {users?.map((user, idx) => (
        <UserCard user={user} key={`user-${idx}`} handleClick={handleClick} />
      ))}
    </div>
  );
};
