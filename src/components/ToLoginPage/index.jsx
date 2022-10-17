import { useNavigate } from "react-router-dom";

const ToLoginPage = () => {
  const navigate = useNavigate();

  const GoLogin = () => {
    localStorage.clear();
    navigate("/");
  };
  return { GoLogin };
};

export default ToLoginPage;
