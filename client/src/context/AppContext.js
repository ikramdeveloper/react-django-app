import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { USERS_API_URL } from "../constants";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [users, setUsers] = useState();

  const getUsers = async () => {
    try {
      const resp = await axios.get(USERS_API_URL);
      setUsers(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <AppContext.Provider value={{ users, getUsers }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
