import React, { createContext, useState } from "react";
import { clientList as list } from "../data/clientList";

type LoginContextType = {
  status: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
  clientList: {
    name: string;
    phone: string;
    adress: string;
    email: string;
  }[];
  setClientList: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        phone: string;
        adress: string;
        email: string;
      }[]
    >
  >;
};

export const LoginContext = createContext({} as LoginContextType);

export const LoginProvider = (props: any) => {
  const [status, setStatus] = useState(false);
  const [clientList, setClientList] = useState(list);

  return (
    <LoginContext.Provider
      value={{ status, setStatus, clientList, setClientList }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
