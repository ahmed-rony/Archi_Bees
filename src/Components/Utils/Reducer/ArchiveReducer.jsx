import { createContext, useReducer, useMemo } from "react";

const INITIAL_STATE = {
  archTeamId: "",
  year: "",
  title: "",
  projectPics: [],
};

const ArchiveContext = createContext(INITIAL_STATE);

const ArchiveReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "ADD_IMAGES":
      return {
        ...state,
        projectPics: action.payload.uploadImg || state.projectPics,
      };
    case "RESET_FORM":
      return INITIAL_STATE;
    default:
      console.error(`Unknown action type: ${action.type}`);
      return state;
  }
};

export const ArchiveProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ArchiveReducer, INITIAL_STATE);

  // Use memo to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <ArchiveContext.Provider value={contextValue}>
      {children}
    </ArchiveContext.Provider>
  );
};

export default ArchiveContext;
