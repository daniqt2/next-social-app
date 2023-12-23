import { useParams } from "react-router-dom";

export const UserDetail: React.FC<object> = () => {
  const { id } = useParams();

  return (
    <>
      <div>user {id}</div>
    </>
  );
};
