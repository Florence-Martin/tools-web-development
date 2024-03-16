import { createContext, useContext, useMemo, useState } from "react";
import postData from "../datas/technoDatas.json";

const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({ children }) => {
  const [posts] = useState(postData);

  const value = useMemo(() => {
    return {
      posts,
    };
  }, [posts]);
  return <Provider value={value}>{children}</Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
