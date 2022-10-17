import { Header } from "./header";
import { Showcase } from "./showcase";
import { DashboardSection } from "./styles";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toastError } from "../../toast/toasmodels";
import { userContext } from "../../contexts/userContexts";
import { ModalAddTech } from "../../components/ModalAddTech";
import { TechsContexts } from "../../contexts/TechsContexts";
import { ModalExcludeEditeTech } from "../../components/ModalExcludeEditeTech";

const Dashboard = () => {
  const navigate = useNavigate();
  const {userGetInfos} = useContext(userContext)
  const {reloadControler} = useContext(TechsContexts)
  useEffect(() => {
    if(localStorage.getItem("@kh_id") === null){
      toastError('Ops! algo deu errado, tente logar novamente')
      navigate('/')
    }
    userGetInfos(localStorage.getItem("@kh_id"))

  }, [localStorage.getItem("@kh_id"), reloadControler]);

  return (
    <DashboardSection>
      <Header />
      <Showcase />
      <ModalAddTech/>
      <ModalExcludeEditeTech/>
    </DashboardSection>
  );
};

export default Dashboard;
