import React, { FC, PropsWithChildren, createContext, useContext, useEffect, useState } from "react";

import { getCurrentUser } from "../lib/appWrite";

const GlobalContext = createContext({
  isLogged: false,
  setIsLogged: (arg: boolean) => {},
  user: null,
  setUser: (arg: null) => {},
  loading: false,
});
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLogged(true);
          setUser(res);
        } else {
          setIsLogged(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
