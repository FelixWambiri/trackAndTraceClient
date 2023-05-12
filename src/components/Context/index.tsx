import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface AppContextType {
  userToken?: string;
  items?: any[];
}

interface AppDispatchContextType {
  setUserToken: Dispatch<SetStateAction<string | undefined>>;
  setItems: Dispatch<SetStateAction<any[] | undefined>>;
}

const AppContext = createContext<AppContextType>({});
const AppDispatchContext = createContext<AppDispatchContextType>({
  setUserToken: () => {},
  setItems: () => {},
});

interface Props {
  children: ReactNode;
}

const AppContextProvider = ({ children }: Props) => {
  const token = localStorage.getItem("token");
  const [userToken, setUserToken] = useState<string>(token ?? "");
  const [items, setItems] = useState<any[]>();

  return (
    <AppContext.Provider value={{ userToken, items }}>
      <AppDispatchContext.Provider value={{ setUserToken, setItems }}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext, AppDispatchContext };
