// import logo from "./logo.svg";
// import "./App.css";
import { useCallback, useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";


function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = useCallback((user) => {
    setUsers((users) => [...users, user]);
  }, []);
  console.log(users);
  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
