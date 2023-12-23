import "./App.css";

import { Route, Routes } from "react-router-dom";

import { UserDetail } from "./views/userDetail.view";
import { UserList } from "./views/userList.view";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </>
  );
}

export default App;
