import { Link } from "react-router-dom";
import { DivRegister, RegisterSection } from "./styles";
// import useNavegation from "../../hooks/useResquest";
import logo from "../../assets/img/Logo.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IDataRegister, userContext } from "../../contexts/userContexts";
import { useContext, useEffect } from "react";

const Register = () => {
  const {userRegister, redirectTo, userGetInfos} = useContext(userContext)
  

  useEffect(() => {
    if (localStorage.getItem("@kh_id")) {
      userGetInfos(localStorage.getItem("@kh_id"));
      redirectTo("dashboard");
    }
    
  }, [localStorage.getItem("@kh_id")]);

  // const {apiResquestRegister} = useNavegation()
  const formSchema = yup.object().shape({
    name: yup.string().required("Insira seu nome"),
    email: yup
      .string()
      .required("Insira um e-mail")
      .email("Insira um e-mail valido"),
    password: yup.string().required("Você deve inserir uma senha"),
    confirme_password: yup
      .string()
      .required("Insira a confirmação")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    bio: yup.string().required("Fale sobre você"),
    contact: yup.string().required("insira um meio de contato"),
    course_module: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataRegister>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data:IDataRegister) => {
    userRegister(data);
  };

  return (
    <RegisterSection>
      <div className="divHeader">
        <img src={logo} alt="logo KenzieHub" />

        <Link className="button-simple" to="/">
          Voltar
        </Link>
      </div>

      <DivRegister>
        <div className="forPadding">
          <h2 className="title3">Crie sua Conta</h2>

          <span className="span-Default">Rapido e grátis, vamos nessa</span>

          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <label className="label-default" htmlFor="name">
              Nome
              {errors.name ? (
                <span className="error-input">{errors.name.message}</span>
              ) : (
                ""
              )}
            </label>
            <input
              className="input-Default"
              id="name"
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />

            <label className="label-default" htmlFor="email">
              Email
              {errors.email ? (
                <span className="error-input">{errors.email.message}</span>
              ) : (
                ""
              )}
            </label>
            <input
              className="input-Default"
              id="email"
              type="text"
              placeholder="digite aqui se email"
              {...register("email")}
            />

            <label className="label-default" htmlFor="password">
              Senha
              {errors.password ? (
                <span className="error-input">{errors.password.message}</span>
              ) : (
                ""
              )}
            </label>
            <input
              className="input-Default"
              id="password"
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />

            <label className="label-default" htmlFor="passwordConfirme">
              Confirmar Senha
              {errors.confirme_password ? (
                <span className="error-input">
                  {errors.confirme_password.message}
                </span>
              ) : (
                ""
              )}
            </label>
            <input
              className="input-Default"
              id="passwordConfirme"
              type="password"
              placeholder="Confirme sua senha"
              {...register("confirme_password")}
            />

            <label className="label-default" htmlFor="bio">
              Bio
              {errors.bio ? (
                <span className="error-input">{errors.bio.message}</span>
              ) : (
                ""
              )}
            </label>
            <input
              className="input-Default"
              id="bio"
              type="text"
              placeholder="Fale sobre Você"
              {...register("bio")}
            />

            <label className="label-default" htmlFor="Contact">
              Contato
              {errors.contact ? (
                <span className="error-input">{errors.contact.message}</span>
              ) : (
                ""
              )}
            </label>
            <input
              className="input-Default"
              id="Contact"
              type="text"
              placeholder="Opção de contato"
              {...register("contact")}
            />

            <label className="label-default" htmlFor="selectModulo">
              Selecionar módulo
              {errors.course_module ? (
                <span className="error-input">
                  {errors.course_module.message}
                </span>
              ) : (
                ""
              )}
            </label>
            <select
              className="select-default"
              id="selectModulo"
              {...register("course_module")}
            >
              <option value="Primeiro Módulo">Primeiro Módulo</option>
              <option value="Segundo Módulo">Segundo Módulo</option>
              <option value="Terceiro  Módulo">Terceiro Módulo</option>
              <option value="Quarto  Módulo">Quarto Módulo</option>
              <option value="Quinto Módulo">Quinto Módulo</option>
              <option value="Sexto  Módulo">Sexto Módulo</option>
            </select>

            <button className="button-main-negative" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </DivRegister>
    </RegisterSection>
  );
};

export default Register;
