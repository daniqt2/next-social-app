import "./App.css";

import { Route, Routes } from "react-router-dom";

import { AlbumpProvider } from "./providers/albumProvider";
import { TodoProvider } from "./providers/todo.provider";
import { UserDetail } from "./views/userDetail.view";
import { UserList } from "./views/userList.view";

function App() {
  return (
    <>
      {/* TODO -> Providers should be in a reduced provider component */}
      <TodoProvider>
        <AlbumpProvider>
          <Routes>
            <Route path="/" element={<UserList />} />

            <Route path="/user/:id" element={<UserDetail />} />
          </Routes>
        </AlbumpProvider>
      </TodoProvider>
    </>
  );
}

export default App;
