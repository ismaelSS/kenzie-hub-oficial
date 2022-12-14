import { DashboadHeader } from "./styles";
import Logo from "../../../assets/img/Logo.svg";
import ToLoginPage from "../../../components/ToLoginPage";

export const Header = () => {
  const { GoLogin } = ToLoginPage();
  return (
    <DashboadHeader>
      <img src={Logo} alt="logo kenzie" />
      <button className="button-simple" onClick={GoLogin}>
        Sair
      </button>
    </DashboadHeader>
  );
};
