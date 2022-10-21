import styled from "styled-components";

export const LoginSection = styled.div`
  width:fit-content;
  margin: 0 auto;
  margin-top:78px;

  display:flex;
  flex-direction:column;
  gap:36px;
  
  .error-input{
    margin: 0;
    color:var(--color-negative);
    margin-left: 10px;
  }

  img{
    height:20px;
  }
`

export const DivLogin = styled.div`
  background-color: var(--grey-3);
  color: var(--grey-0);
  border-radius: 4px;
  width: 90vw;
  max-width: 395px;

  margin: 0 auto;

  padding: 33px 17px;

  .forPadding {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 auto;

    h2 {
        margin-bottom:23px;
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 21px;

      .labelEmail {
        display: flex;
        flex-direction: row;
        margin-bottom: -4px;
        font-family: Inter;
        font-size: 10px;
        font-weight: 400;
      }

      input{
        font-size:13px;
      }

      #email {
        background-color: var(--grey-2);
        color: var(--grey-0);

        height: 48px;
        width: 100%;
        max-width: calc(100% - 28px);

        padding: 0 13px;

        border: 1px solid var(--grey-0);
        border-radius: 4px;
      }

      button {
        width: 100%;
        font-size: 13px;
      }
    }
  }

  span {
    margin-top: 27px;
    margin-bottom: 17px;

    font-size: 10px;
    font-weight: 600;
    color: var(--grey-1);
  }

  a {
    text-decoration: none;
    line-height: 48px;
    width: 100%;
    text-align: center;
    font-size: 13px;
  }

  path {
    color: var(--grey-1);
  }
`;
