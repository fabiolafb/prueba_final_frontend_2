import { createContext  } from "react";

const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  // const [userLogin, setUserLogin] = useState([]);

  // const login = useCallback(function () {
  //   window.localStorage.setItem(MY_AUTH_APP, true);
  //   setUserLogin(true);
  // }, [])




  return (
    <AuthContext.Provider value={{ 
      // userLogin, setUserLogin 
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
