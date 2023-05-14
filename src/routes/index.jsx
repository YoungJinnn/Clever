import { Routes, Route } from "react-router-dom";
import Login from "pages/Login/Login";
import SignUp from "./SignUp";
import Senior from "./Senior";
import Junior from "./Junior";
import OnBoarding from "pages/OnBoarding/OnBoarding";
import NotFound from "./NotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<OnBoarding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup/*" element={<SignUp />} />
      <Route path="/senior/*" element={<Senior />} />
      <Route path="/junior/*" element={<Junior />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
