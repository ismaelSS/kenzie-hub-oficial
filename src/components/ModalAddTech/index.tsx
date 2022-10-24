import { ModalAddDiv } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IDataTechs, TechsContexts } from "../../contexts/TechsContexts";
import { useContext } from "react";
import { userContext } from "../../contexts/userContexts";

export const ModalAddTech = () => {
  
  const { registerTech } = useContext(TechsContexts);
  const {setDisplayModalAdd, displayModalAdd} = useContext(TechsContexts);
  const { tokenLocal } = useContext(userContext)

  const formSchema = yup.object().shape({
    title: yup.string().required("insira a tecnologia"),
    status: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataTechs>({
    resolver: yupResolver(formSchema)
  });

  const onSubmitFunction = (data: IDataTechs) => {
    registerTech(data, tokenLocal);
  };

  return (
    <ModalAddDiv displayModalAdd={displayModalAdd}>
      <div className="areaModalDiv">

  
      <div>
        <h4>Cadastrar Tecnologia</h4>
        <button onClick={() => setDisplayModalAdd('none')}>x</button>
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
        <input
          className="input-Default"
          type="text"
          id="title"
          {...register("title")}
        />
        <label className="label-default" htmlFor="status">
          Selecionar Status
        </label>
        <select className="select-default" id="status" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediario">Intermediario</option>
          <option value="Avançado">Avançado</option>
        </select>

        <button className="button-main" type="submit">
          Cadastrar tecnologia
        </button>
      </form>
      </div>
    </ModalAddDiv>
  );
};
