import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface AppContextType {
  userToken?: string;
}

interface AppDispatchContextType {
  setUserToken: Dispatch<SetStateAction<string | undefined>>;
}

const AppContext = createContext<AppContextType>({});
const AppDispatchContext = createContext<AppDispatchContextType>({
  setUserToken: () => {},
});

interface Props {
  children: ReactNode;
}

const AppContextProvider = ({ children }: Props) => {
  const [userToken, setUserToken] = useState<string>();

  return (
    <AppContext.Provider value={{ userToken }}>
      <AppDispatchContext.Provider value={{ setUserToken }}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext, AppDispatchContext };
