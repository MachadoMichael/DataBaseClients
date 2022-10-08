import React, { createContext, useState } from "react";
import { userList } from "../data/userList";

type Props = {
  user: string;
  password: string;
};

type LoginContextType = {
  status: boolean;
  checkingRegister: any;
};

export const LoginContext = createContext({} as LoginContextType);

export const LoginProvider = (props: any) => {
  const [status, useStatus] = useState(false);
  const [registredUsers, setRegistredUsers] = useState(userList);

  const checkingRegister = ({ user, password }: Props) => {
    registredUsers.map((register) => {
      if (user === register.user && password === register.password) {
        useState(true);
      } else {
        alert("User or Password is wrong");
      }
    });
  };

  return (
    <LoginContext.Provider value={{ status, checkingRegister }}>
      {props.children}
    </LoginContext.Provider>
  );
};
