import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { AppContext } from "./context";
import { AddUser } from "./components/AddUser";
import { UserList } from "./components/UserList";

function App() {
  const [user, setuser] = useState([
    {
      name: "John",
      age: 30,
    },
  ]);

  const dispacthUserEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADD_USER":
        setuser([...user, payload]);
        return;
      case "DELETE_USER":
        setuser(user.filter((user) => user.name !== payload.name));
        return;
      default:
        return;
    }
  };
  return (
    <div className="App">
      <AppContext.Provider value={{ user, dispacthUserEvent }}>
        <AddUser />
        <UserList />
      </AppContext.Provider>
    </div>
  );
}

export default App;
