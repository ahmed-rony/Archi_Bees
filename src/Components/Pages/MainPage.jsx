import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../Component/Layout/Layout";
import Home from "./Home/Home";
import Page404 from "./Page404/Page404";
import Brief from "./Brief/Brief";
import Archive from "./Archive/Archive";
import PublicationPage from "./PublicationPage/PublicationPage";
import NewsPage from "./NewsPage/NewsPage";
import Login from "./AuthPage/Login";
import CreateStudentWork from "../Admin/Pages/CreateStudentWork/CreateStudentWork";
import CreateArchive from "../Admin/Pages/CreateArchive/CreateArchive";
import CreateNews from "../Admin/Pages/CreateNews/CreateNews";
import PdfUpload from "../Admin/Component/pdfUpload";
import PdfDetails from "../Admin/Component/PdfDetails";
import PrivateRoute from "../Utils/Hooks/PrivateRoutes";
import PrivateRouteBrief from "../Utils/Hooks/PrivateRouteBrief";

const MainPage = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/publication" element={<PublicationPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/pdf" element={<PdfUpload />} />
            <Route path="/pdfDetails" element={<PdfDetails />} />

            <Route element={<PrivateRouteBrief />}>
              <Route path="/brief" element={<Brief />} />
            </Route>
            
            <Route element={<PrivateRoute />}>
              <Route path="/auth/admin/create_student_work" element={<CreateStudentWork />} />
              <Route path="/auth/admin/create_archive" element={<CreateArchive />} />
              <Route path="/auth/admin/create_news" element={<CreateNews />} />
            </Route>

          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default MainPage;
