import { AxiosResponse } from "axios";
import { createContext, ReactNode, useState } from "react";
import api from "../services/api";
import { toastSucess, toastError } from "../toast/toasmodels";

interface ITechsProviderProps {
  children: ReactNode;
}

export interface IDataTechs {
  title?: string;
  status: string;
}

type TFlexNone = "none" | "flex";

interface ITechsContext {
  registerTech: (data: IDataTechs, userToken: string) => void;
  techId: string;
  setTechId: React.Dispatch<React.SetStateAction<string>>;
  displayModalAdd: string;
  setDisplayModalAdd: React.Dispatch<React.SetStateAction<TFlexNone>>;
  reloadControler: number;
  editeTech: (data: IDataTechs, userToken: string, techId: string) => void;
  displayModalExcludeEdite: string;
  setDisplayModalExcludeEdite: React.Dispatch<React.SetStateAction<TFlexNone>>;
  excludeTech: (userToken: string) => void;
  techName: string;
  setTechName: React.Dispatch<React.SetStateAction<string>>;
}

interface IResponseTech {
  id: string,
	title: string,
	status: string,
	created_at: string,
	updated_at: string
}

export interface IResponseError{
  status: string,
  title: string,
}

export const TechsContexts = createContext<ITechsContext>({} as ITechsContext);

export const TechsProvider = ({ children }: ITechsProviderProps) => {
  const [techId, setTechId] = useState<string>("");
  const [techName, setTechName] = useState<string>("");
  const [displayModalAdd, setDisplayModalAdd] = useState<TFlexNone>("none");
  const [displayModalExcludeEdite, setDisplayModalExcludeEdite] =
    useState<TFlexNone>("none");
  const [reloadControler, setReloadControler] = useState<number>(1);

  const registerTech = async (data: IDataTechs, userToken: string) => {
    try {
      const response: AxiosResponse<IResponseTech, IResponseError> = await api.post(
        "/users/techs",
        data,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      toastSucess("Tech cadastrada com sucesso");
      setReloadControler(reloadControler + 1);
    } catch (error) {
      toastError("Algo deu errado tente novamente");
    }
  };

  const editeTech = async (data: IDataTechs, userToken: string, techId: string) => {
    try{
      const response:AxiosResponse<IResponseTech, IResponseError> = await api
        .put(`/users/techs/${techId}`, data, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
      toastSucess("tech editada com sucesso");
        setDisplayModalExcludeEdite("none");
        setReloadControler(reloadControler + 1);
    }catch(error){
      toastError("Algo deu errado tente novamente")
    }
  };

  const excludeTech = async(userToken: string) => {
    try{
     const response:AxiosResponse<IResponseTech, IResponseError> = await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      toastSucess("tech excluida com sucesso");
        setDisplayModalExcludeEdite("none");
        setReloadControler(reloadControler + 1);
    }catch(error){
      toastError("Algo deu errado tente novamente");
    }
  };

  return (
    <TechsContexts.Provider
      value={{
        techId,
        setTechId,
        registerTech,
        displayModalAdd,
        setDisplayModalAdd,
        reloadControler,
        editeTech,
        displayModalExcludeEdite,
        setDisplayModalExcludeEdite,
        excludeTech,
        techName,
        setTechName,
      }}
    >
      {children}
    </TechsContexts.Provider>
  );
};
