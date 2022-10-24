import { AxiosResponse } from "axios";
import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toastSucess, toastError } from "../toast/toasmodels";
import { IResponseError } from "./TechsContexts";

export type IDataLogin = {
  email: string;
  password: string;
}

type IStrNull = string | null;

export interface ITech {
  id: string,
  title: string,
  status: string,
  created_at: string,
  updated_at: string
}

interface IUserInfos {
  id: string,
	name: string,
	email: string,
	course_module: string,
	bio: string,
	contact: string,
	techs: ITech[] | null,
	works: [],
	created_at: string,
	updated_at: string,
	avatar_url: null,
}

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
  userInfos:IUserInfos | null;
  tokenLocal: any;
}

interface IResponseLoginUserTechs{
  created_at:string,
  id:string,
  status:string,
  title:string,
  updated_at: string
}

interface IResponseLoginUser{
    id: string,
    name: string,
    email: string,
    course_module: string,
    bio: string,
    contact: string,
    created_at: string,
    updated_at: string,
    techs: IResponseLoginUserTechs,
    works: null,
    avatar_url: null
}

interface IResponseLogin{
  user: IResponseLoginUser,
  token: string
}

// interface ISetUserInfos{
//   setUserInfos: IUserInfos;
//   userInfos: null | IUserInfos;
// }

export const userContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }:UserProviderProps) => {
  const navigate = useNavigate();
  const [userInfos, setUserInfos] = useState<IUserInfos | null>(null);
  const tokenLocal = localStorage.getItem("@kh_token");

  const redirectTo = (str:string) => {
    navigate(`/${str}`);
  };



  const userLogin = async(data:IDataLogin) => {
    try{
      const response:AxiosResponse<IResponseLogin, IResponseError> = await api.post("/sessions", data)
        toastSucess("Login realizado com sucesso");
        localStorage.setItem("@kh_token", response.data.token);
        localStorage.setItem("@kh_id", response.data.user.id);
        localStorage.setItem("@kh_userName", response.data.user.name);
        localStorage.setItem(
          "@kh_userCourse",
          response.data.user.course_module
        );
        redirectTo("dashboard");
    }catch(error){
      toastError("email e/ou senha incorretos")
    }

  };

  const userRegister = async(data:IDataRegister) => {
    try{
      const response:AxiosResponse<IResponseLoginUser, IResponseError> = await api.post("/users", data);
      console.log('response Register');
      toastSucess("Cadastro realizado com sucesso");
      redirectTo("");
    }catch(error){
      toastError("Dados invalidos tente novamente")
    }
  };

  const userGetInfos = async(id:IStrNull) => {
    try{
      const response: AxiosResponse<IUserInfos, IResponseError> = await api.get(`/users/${id}`)
      console.log('assasasasasasasasa');
      console.log(response);
      setUserInfos(response.data);
      redirectTo("dashboard");
    }catch(error){
      console.error(error);
    }

  };

  return (
    <userContext.Provider
      value={{ userLogin, userRegister, redirectTo, userGetInfos, userInfos, tokenLocal }}
    >
      {children}
    </userContext.Provider>
  );
};
