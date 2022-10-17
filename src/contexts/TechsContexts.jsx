import { createContext, useState } from "react";
import api from "../services/api";
import { toastSucess, toastError } from "../toast/toasmodels";

export const TechsContexts = createContext({});

export const TechsProvider = ({children}) => {
    const [techId, setTechId] = useState('')
    const [techName, setTechName] = useState('') 
    const [displayModalAdd, setDisplayModalAdd,] = useState('none')
    const [displayModalExcludeEdite,setDisplayModalExcludeEdite] = useState('none')
    const [reloadControler, setReloadControler] = useState(1) 

    const registerTech = (data, userToken) => {
        api.post('/users/techs', data, {headers: {
            Authorization: `Bearer ${userToken}`
        }}).then(() => {
        toastSucess('Tech cadastrada com sucesso');
         setReloadControler(reloadControler + 1)
        }
        ).catch(() => toastError('Algo deu errado tente novamente'))
    }

    const editeTech = (data, userToken, techId) => {
        api.put(`/users/techs/${techId}`, data,
        {
            headers: {
                Authorization: `Bearer ${userToken}`,
        }}).then(() => {
            toastSucess('tech editada com sucesso');
            setDisplayModalExcludeEdite("none");
            setReloadControler(reloadControler + 1).catch(() => toastError('Algo deu errado tente novamente'))
        })
    }

    const excludeTech = (userToken) => {
        api.delete(`/users/techs/${techId}`,{
            headers: {
                Authorization: `Bearer ${userToken}`,
        }}).then(() => {
            toastSucess('tech excluida com sucesso');
            setDisplayModalExcludeEdite("none");
            setReloadControler(reloadControler + 1).catch(() => toastError('Algo deu errado tente novamente'))
        })
    }

    return (
        <TechsContexts.Provider value={{techId, setTechId, registerTech, displayModalAdd, setDisplayModalAdd,reloadControler, editeTech,displayModalExcludeEdite, setDisplayModalExcludeEdite, excludeTech, techName, setTechName }}>
            {children}
        </TechsContexts.Provider>
    )
}