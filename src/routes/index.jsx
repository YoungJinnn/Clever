import { Routes, Route } from "react-router-dom";
import Login from "pages/Login/Login";
import SignUp from "pages/SignUp/SignUp";
import Main from "./Main";
import OnBoarding from "pages/OnBoarding/OnBoarding";
import NotFound from "./NotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<OnBoarding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/main/*" element={<Main />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
