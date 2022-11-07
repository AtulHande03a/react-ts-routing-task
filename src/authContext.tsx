import { useState, createContext, useContext } from "react";

interface InputProviderProps {
  children: React.ReactNode;
}

// type SetState{
//   setIsLoggedIn:()=>{}
// }

const authContext = createContext<{
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}>({ isLoggedIn: false, setIsLoggedIn: () => {} });

const useAuth = () => useContext(authContext);

function AuthProvider({ children }: InputProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <authContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export { AuthProvider, useAuth };
