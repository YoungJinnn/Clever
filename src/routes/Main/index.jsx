import { Routes, Route } from "react-router-dom";
import MainHome from "pages/Main/MainHome";
import MainDetail from "pages/Main/MainDetail";
import Upload from "pages/Main/Upload";
import Schedule from "pages/Main/Schedule";
import NotFound from "routes/NotFound";

const Main = () => {
  return (
    <Routes>
      <Route path="/Home" element={<MainHome />} />
      <Route path="/Home/*" element={<MainDetail />} />
      <Route path="/Upload" element={<Upload />} />
      <Route path="/Schedule" element={<Schedule />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Main;
