import { createContext, useContext, useReducer } from "react";
import { types } from "../backend/db/types";
import { categories } from "../backend/db/categories";
import { dataReducer } from "../reducers";

const DataContext = createContext();

const initial = {
  categories: [],
  products: [],
  productTypes: [],
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initial);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
