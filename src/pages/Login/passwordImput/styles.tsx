import styled from "styled-components";

export const DivInputPassaword = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  label {
    align-self: flex-start;
    font-size: 10px;
    font-weight: 400;
    display: flex;
    flex-direction:row;
  }

  .inputSimulator {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;

    height: 48px;
    width: calc(100% - 34px);

    border: 1px solid var(--grey-0);
    border-radius: 4px;
    padding: 0 18px 0 16px;
    background-color: var(--grey-2);

    #password {
      border: none;
      outline: none;
      background-color: transparent;
      color: var(--grey-0);

      height: 46px;

      padding: 0;

      width:95%;
    }
  }
`;
