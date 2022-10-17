import styled from "styled-components";

export const RegisterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  width: fit-content;
  margin: 0 auto;
  margin-top: 48px;

  .divHeader {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const DivRegister = styled.div`
  width: 95vw;
  min-width: 295px;
  max-width: 370px;

  background-color: var(--grey-3);

  margin: 0 auto;

  border-radius: 4px;
  color: white;

  div {
    width: 95%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    padding: 34px 0 20px 0;

    .title3 {
      margin-bottom: 20px;
      align-self: center;
    }

    .span-Default {
      margin-bottom: 22px;
      color: var(--grey-1);
      align-self: center;
    }
    

    form {
      width: 100%;
      button {
        width: 100%;
      }
    }

    .select-default {
      margin-top: 18px;
      margin-bottom: 19px;
    }
  }
`;
