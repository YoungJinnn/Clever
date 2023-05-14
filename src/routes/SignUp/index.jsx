import { Routes, Route } from "react-router-dom";
import SignUpMain from "pages/SignUp/SignUpMain";
import SignUpNext from "pages/SignUp/SignUpNext";
import SeniorDetail from "pages/SignUp/SeniorDetail";
import JuniorDetail from "pages/SignUp/JuniorDetail";
import NotFound from "routes/NotFound";

const SignUp = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUpMain/>} />
      <Route path="/next" element={<SignUpNext/>} />
      <Route path="/senior" element={<SeniorDetail />} />
      <Route path="/junior" element={<JuniorDetail />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default SignUp;