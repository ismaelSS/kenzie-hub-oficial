import styled from "styled-components";

export const ShowTechsDiv = styled.div`
  width: 100%;
  background-color:var(--grey-2);

  display:flex;
  justify-content:center;
  border-radius:4px;

  max-height: 510px;
  overflow-y:scroll;
  ::-webkit-scrollbar {
    display: none;
}
  ul {
    width:95%;

    display:flex;
    flex-direction:column;
    align-items:center;
    /* justify-content:center; */

    padding: 23px 0;
    gap:16px;

    li{
        height:49px;
        width:calc(100% - 26px);

        background-color:var(--grey-4);
        border-radius:4px;

        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0 13px;
        cursor:pointer;

        
    }

    li:hover{
        background-color:var(--grey-3);
    }
  }
`;
