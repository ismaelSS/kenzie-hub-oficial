import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toastSucess, toastError } from "../toast/toasmodels";

export type IDataLogin = {
  email: string;
  password: string;
}

type IStrNull = string | null;

export type IDataRegister = {
  name:string;
  email:string;
  password:string;
  confirme_password:string;
  bio:string;
  contact:string;
  course_module:string;
}

interface UserProviderProps{
  children:ReactNode
}

interface IUserContext{
  userLogin: (data:IDataLogin) => void;
  redirectTo: (str:string) => void;
  userRegister: (data: IDataRegister) => void;
  userGetInfos: (id:IStrNull) => void;
  userInfos:string;
}

export const userContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }:UserProviderProps) => {
  const navigate = useNavigate();
  const [userInfos, setUserInfos] = useState("");

  const redirectTo = (str:string) => {
    navigate(`/${str}`);
  };

  const userLogin = (data:IDataLogin) => {
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

  const userRegister = (data:IDataRegister) => {
    api
      .post("/users", data)
      .then((resp) => {
        toastSucess("Cadastro realizado com sucesso");
        redirectTo("");
      })
      .catch((error) => toastError("Dados invalidos tente novamente"));
  };

  const userGetInfos = (id:IStrNull) => {
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
