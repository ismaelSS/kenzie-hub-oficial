import { useContext } from "react";
import { TechsContexts } from "../../contexts/TechsContexts";
import { ModalExcludeEditeTechDiv } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const ModalExcludeEditeTech = () => {
  const {techName} = useContext(TechsContexts)

  const {
    editeTech,
    excludeTech,
    techId,
    displayModalExcludeEdite,
    setDisplayModalExcludeEdite,
  } = useContext(TechsContexts);

  const formSchema = yup.object().shape({
    status: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    editeTech(data, localStorage.getItem("@kh_token"), techId);
  };

  return (
    <ModalExcludeEditeTechDiv
      displayModalExcludeEdite={displayModalExcludeEdite}
    >
      <div className="areaModalDiv">
        <div className="pseudoHeader">
          <h4>Tecnologia Detalhes</h4>
          <button onClick={() => setDisplayModalExcludeEdite("none")}>x</button>
        </div>

        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <label className="label-default" htmlFor="title">
            Nome
            {errors.title ? (
              <span className="error-input">{errors.title.message}</span>
            ) : (
              ""
            )}
          </label>
          <input className="input-Default" type="text" id="title" value={techName}/>
          <label className="label-default" htmlFor="status">
            Selecionar Status
          </label>
          <select
            className="select-default"
            id="status"
            {...register("status")}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediario</option>
            <option value="Avançado">Avançado</option>
          </select>

          <div className="divButtons">
            <button className="button-main button-edite" type="submit">
              Salvar alteração
            </button>
            <button
              className="button-grey button-exclude"
              onClick={() => {
                excludeTech(localStorage.getItem("@kh_token"));
                setDisplayModalExcludeEdite("none");
              }}
            >
              Excluir
            </button>
          </div>
        </form>
      </div>
    </ModalExcludeEditeTechDiv>
  );
};
