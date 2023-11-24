import { useContext } from "react";
import  { FirebaseAuth } from "../Context/AuthContext";


const useAuth = () => {
  const all = useContext(FirebaseAuth);
  return all;
};

export default useAuth;