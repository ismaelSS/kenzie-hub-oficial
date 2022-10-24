import { useContext } from "react";
import { TechsContexts } from "../../contexts/TechsContexts";
import { AddTechsSection } from "./styles";

export const AddTechs = () => {
  const {setDisplayModalAdd} = useContext(TechsContexts);
  return (
    <AddTechsSection>
      <h2 className="title2">Tecnologias</h2>
      <button className="button-add title1"
      onClick={() => setDisplayModalAdd('flex')}>+</button>
    </AddTechsSection>
  );
};
