import { IUser } from "../interfaces/user.insterface";

interface IPropsUserCard {
  user: IUser;
  handleClick: (id: number) => void;
}

export const UserCard: React.FC<IPropsUserCard> = ({ user, handleClick }) => {
  return (
    <div
      className=" bg-white rounded-md m-4 max-w-96 p-4 cursor-pointer hover:bg-slate-400"
      onClick={() => handleClick(user.id)}
    >
      <p className="font-bold text-stone-900 text-lg">{user.name}</p>
      <p className="font-light text-stone-500 text-lg">@{user.username}</p>
    </div>
  );
};
