import { createContext, useReducer, useMemo } from "react";

const INITIAL_STATE = {
  title: "",
  date: "",
  link: "",
  desc: "",
  image: null,
};

const NewsContext = createContext(INITIAL_STATE);

const NewsReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "ADD_IMAGES":
      return {
        ...state,
        studentImg: action.payload.projectCover || state.studentImg,
      };
    case "RESET_FORM":
      return INITIAL_STATE;
    default:
      console.error(`Unknown action type: ${action.type}`);
      return state;
  }
};

export const NewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NewsReducer, INITIAL_STATE);

  // Use memo to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <NewsContext.Provider value={contextValue}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
