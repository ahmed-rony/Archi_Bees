import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import MainPage from "./Components/Pages/MainPage";
import CustomCursor from "./Components/Utils/CustomCursor/CustomCursor";
import { StudentWorkProvider } from "./Components/Utils/Reducer/StudentWorkReducer";
import { ArchiveProvider } from "./Components/Utils/Reducer/ArchiveReducer";
import { NewsProvider } from "./Components/Utils/Reducer/NewsReducer";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StudentWorkProvider>
          <ArchiveProvider>
            <NewsProvider>
              <CustomCursor />
              <MainPage />
            </NewsProvider>
          </ArchiveProvider>
        </StudentWorkProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
