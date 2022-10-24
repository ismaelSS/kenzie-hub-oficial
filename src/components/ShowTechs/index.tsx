import { useContext } from "react"
import { TechsContexts } from "../../contexts/TechsContexts"
import { ITech, userContext } from "../../contexts/userContexts"
import { ShowTechsDiv } from "./styles"


export const ShowTechs = () =>{
    const {userInfos} = useContext(userContext)
    const {setTechId, setDisplayModalExcludeEdite, setTechName} = useContext(TechsContexts);
    const userTechs = userInfos?.techs;
    
    return(
    <ShowTechsDiv>
        <ul>
            {
                userTechs ? 
                userTechs.map((tech: ITech, techIndex: number) => (
                    <li 
                    id={tech.id} 
                    key={techIndex}
                    onClick={(e)=> { 
                        setTechId(tech.id);
                        setDisplayModalExcludeEdite('flex');
                        setTechName(tech.title)
                    }}>
                        <h3 className="title3">{tech.title}</h3>
                        <span className="font1-grey">{tech.status}</span>
                    </li>
                ))
                :
                <h1>você ainda não tem tecnologias cadastradas</h1>
            }
        </ul>
    </ShowTechsDiv>
    )
}