import { createContext, ReactNode, useState } from "react";
import api from "../services/api";
import { toastSucess, toastError } from "../toast/toasmodels";


interface ITechsProviderProps{
  children: ReactNode
}

export interface IDataTechs {
  title?: string;
  status: string;
}

type TFlexNone = 'none' | 'flex';

interface ITechsContext {
  registerTech: (data: IDataTechs, userToken:string) => void;
  techId:string;
  setTechId:React.Dispatch<React.SetStateAction<string>>;
  displayModalAdd: string;
  setDisplayModalAdd: React.Dispatch<React.SetStateAction<TFlexNone>>;
  reloadControler: number;
  editeTech: (data:IDataTechs, userToken:string, techId:string) => void;
  displayModalExcludeEdite:string;
  setDisplayModalExcludeEdite:React.Dispatch<React.SetStateAction<TFlexNone>>;
  excludeTech: (userToken:string) => void
  techName:string;
  setTechName:React.Dispatch<React.SetStateAction<string>>
}

export const TechsContexts = createContext<ITechsContext>({} as ITechsContext);

export const TechsProvider = ({ children }:ITechsProviderProps) => {
  const [techId, setTechId] = useState<string>("");
  const [techName, setTechName] = useState<string>("");
  const [displayModalAdd, setDisplayModalAdd] = useState<TFlexNone>("none");
  const [displayModalExcludeEdite, setDisplayModalExcludeEdite] =
    useState<TFlexNone>("none");
  const [reloadControler, setReloadControler] = useState<number>(1);

  const registerTech = (data: IDataTechs, userToken: string) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(() => {
        toastSucess("Tech cadastrada com sucesso");
        setReloadControler(reloadControler + 1);
      })
      .catch(() => toastError("Algo deu errado tente novamente"));
  };

  const editeTech = (data:IDataTechs, userToken:string, techId:string) => {
    api
      .put(`/users/techs/${techId}`, data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(() => {
        toastSucess("tech editada com sucesso");
        setDisplayModalExcludeEdite("none");
        setReloadControler(reloadControler + 1);
      })
      .catch(() => toastError("Algo deu errado tente novamente"));
  };

  const excludeTech = (userToken:string) => {
    api
      .delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(() => {
        toastSucess("tech excluida com sucesso");
        setDisplayModalExcludeEdite("none");
        setReloadControler(reloadControler + 1);
      }).catch(() => toastError("Algo deu errado tente novamente"));
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
