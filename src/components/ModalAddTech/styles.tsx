import styled from "styled-components";

interface IModalDivProps {
    displayModalAdd: string
}

export const ModalAddDiv = styled.div<IModalDivProps>`

height:100vh;
width:100vw;

background-color:#00000066;

display:${(props) => `${props.displayModalAdd}`};
justify-content:center;
align-items:center;

position:absolute;
z-index: 10;
top:0;
left:0;

.areaModalDiv{
width: 90vw;
min-width:295px;
max-width:369px;
background-color:var(--grey-3);
border-radius:4px;

display:flex;
flex-direction:column;
align-items:center;
padding-bottom:32px;

position:relative;

div{
    display:flex;
    background-color:var(--grey-2);

    height:50px;
    padding: 0 20px;
    margin-bottom:25px;

    justify-content:space-between;
    align-items:center;
    width:calc(100% - 40px);
    border-radius: 4px 4px 0 0;

    h3{
        font-weight:700;
        font-size:14px;
    }

    button{
        background:none;
        border:none;   

        color:var(--grey-1);
        font-size:16px;
        font-weight:600;
    }
}

form{
    width:90%;

    input{
        border: 1px solid var(--grey-0);
    }

    select{
        margin-top:22px;
        border: 1px solid var(--grey-0);
        padding: 0 14px 0 16px;
    }
    button{
        margin-top:21px;
        width:100%
    }
}
}
`
