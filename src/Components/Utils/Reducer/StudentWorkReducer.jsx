import { createContext, useReducer, useMemo } from "react";

const INITIAL_STATE = {
  studentName: "",
  year: "",
  title: "",
  school: "",
  location: "",
  category: "",
  client: "",
  country: "",
  studentImg: null,
  projectPics: [],
  videoId: "",
  desc: [],
  rawDesc: "",
};

const StudentWorkContext = createContext(INITIAL_STATE);

const StudentWorkReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "UPDATE_DESC":
      return {
        ...state,
        desc: action.payload.descArray,
        rawDesc: action.payload.rawDesc,
      };
    case "ADD_IMAGES":
      return {
        ...state,
        studentImg: action.payload.projectCover || state.studentImg,
        projectPics: action.payload.uploadImg || state.projectPics,
      };
    case "RESET_FORM":
      return INITIAL_STATE;
    default:
      console.error(`Unknown action type: ${action.type}`);
      return state;
  }
};

export const StudentWorkProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StudentWorkReducer, INITIAL_STATE);

  // Use memo to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <StudentWorkContext.Provider value={contextValue}>
      {children}
    </StudentWorkContext.Provider>
  );
};

export default StudentWorkContext;
