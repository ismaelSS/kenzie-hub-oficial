import { ShowcaseStyled } from "./styles";
import { AddTechs } from "../../../components/AddTechs";
import { ShowTechs } from "../../../components/ShowTechs";
import { UserInfos } from "./UserInfos";

export const Showcase = () => {

  return (
    <ShowcaseStyled>
      <UserInfos/>
      <AddTechs />
      <ShowTechs />
    </ShowcaseStyled>
  );
};
