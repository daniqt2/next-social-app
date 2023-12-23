import "./App.css";

import { Route, Routes } from "react-router-dom";

import { TodoProvider } from "./providers/todo.provider";
import { UserDetail } from "./views/userDetail.view";
import { UserList } from "./views/userList.view";

function App() {
  return (
    <>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<UserList />} />

          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </TodoProvider>
    </>
  );
}

export default App;
