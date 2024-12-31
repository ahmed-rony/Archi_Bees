import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../Component/Layout/Layout";
import Home from "./Home/Home";
import Page404 from "./Page404/Page404";
import Brief from "./Brief/Brief";

const MainPage = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/brief" element={<Brief />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default MainPage;
