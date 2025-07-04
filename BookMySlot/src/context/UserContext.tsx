import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type User = {
  userId : number,
  name: string,
  token : string
}

type UserContextType = {
  user : User | null,
  setUser : (user : User | null ) => void;
}


const UserContext = createContext<UserContextType | undefined >(undefined);

export const UserProvider = ({ children } : {children : ReactNode}) => {
  const [user, setUser] = useState<User | null>(null); 
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () : UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}