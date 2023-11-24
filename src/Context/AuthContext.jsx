import { createContext } from "react";

export const FirebaseAuth = createContext(null);


const AuthContext = ({ children }) => {
  const values = {
    name:'akash'
  }
  return (
    <FirebaseAuth.Provider value={values}>
      {children}
    </FirebaseAuth.Provider>
  );
};

export default AuthContext;