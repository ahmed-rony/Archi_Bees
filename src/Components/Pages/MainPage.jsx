import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../Component/Layout/Layout";
import Home from "./Home/Home";
import Page404 from "./Page404/Page404";
import Brief from "./Brief/Brief";
import Archive from "./Archive/Archive";
import PublicationPage from "./PublicationPage/PublicationPage";
import NewsPage from "./NewsPage/NewsPage";
import MemberModal from "../Component/MemberModal/MemberModal";

const MainPage = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/brief" element={<Brief />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/publication" element={<PublicationPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/1" element={<MemberModal />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default MainPage;
