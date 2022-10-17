import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toastSucess, toastError } from "../toast/toasmodels";

export const userContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userInfos, setUserInfos] = useState("");

  const redirectTo = (str) => {
    navigate(`/${str}`);
  };

  const userLogin = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        console.log(response);
        toastSucess("Login realizado com sucesso");
        localStorage.setItem("@kh_token", response.data.token);
        localStorage.setItem("@kh_id", response.data.user.id);
        localStorage.setItem("@kh_userName", response.data.user.name);
        localStorage.setItem(
          "@kh_userCourse",
          response.data.user.course_module
        );

        redirectTo("dashboard");
      })
      .catch((error) => toastError("email e/ou senha incorretos"));
  };

  const userRegister = (data) => {
    api
      .post("/users", data)
      .then((resp) => {
        toastSucess("Cadastro realizado com sucesso");
        redirectTo("");
      })
      .catch((error) => toastError("Dados invalidos tente novamente"));
  };

  const userGetInfos = (id) => {
    api
      .get(`/users/${id}`)
      .then((resp) => {
        setUserInfos(resp.data);
        redirectTo("dashboard");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <userContext.Provider
      value={{ userLogin, userRegister, redirectTo, userGetInfos, userInfos }}
    >
      {children}
    </userContext.Provider>
  );
};
