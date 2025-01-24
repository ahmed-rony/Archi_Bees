import { Navigate, Outlet, useLocation } from "react-router-dom";
import useTimer from "./TimeHook";

const PrivateRouteBrief = () => {
    const location = useLocation();
    const { type: timerType, isLoading } = useTimer("get-timer");
  
    // Handle loading state
    if (isLoading || !timerType) {
      return <div>Loading...</div>; // Replace this with your preferred spinner/loading UI
    }
  
    // Redirect to home if not competition timerType
    if (location.pathname === "/brief" && timerType !== "competition") {
      console.log("Redirecting: Not competition timerType");
      return <Navigate to="/" replace />;
    }
  
    return <Outlet />;
  };
  
  export default PrivateRouteBrief;
  
