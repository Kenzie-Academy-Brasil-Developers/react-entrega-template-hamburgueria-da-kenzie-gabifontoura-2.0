import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`



:root{

    --color-background:#101010;
    --color-text:  #ffffff;


    --color-grey-1: #F5F5F5;
    --color-grey-2:#E0E0E0;
    --color-grey-3:#828282;
    --color-grey-4:#202020;
    

    
    --color-brand-1:#27AE60;
    --color-brand-2:#93D7AF;
    --color-secondary: #EB5757;


    --radius-1: 0.5rem;
    --radius-2: 0.25rem;

    --font-size-title-1:1.625rem; /* 26px*/
    --font-size-title-2:1.375rem; /* 22px*/
    --font-size-title-3:1.125rem; /* 18px*/
    --font-size-text-1:1rem;  /* 16px*/
    --font-size-text-2:0.875rem; /* 14px*/
    --font-size-text-3:0.75rem; /* 12px*/

    --font-weight-1:700;
    --font-weight-2:600;
    --font-weight-3:400;


}

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }
    a{
        color: unset;
        text-decoration: none;
    }
    ul, ol, li{
        list-style: none;
    }
    h1, h2, h3, h4, h5, h6, p, a, span, li, button, input, label{
        font-family: "Inter", sans-serif;
    }


    

    .flex{
        display: flex;
    }


    .column{
        flex-direction: column;
    }

    .between{
        justify-content: space-between;
    }

    .align-center{
        align-items: center;
    }

    .end{
        align-items: end;
    }

    .gap-05rem{
        gap:0.5rem;
    }
    
    .gap-1rem{
        gap:1rem;
    }
    
     /* width */
     ::-webkit-scrollbar {
      width: 0.5rem;
      border-radius: var(--radius-2);
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: var(--color-grey-2);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background:var(--color-grey-3);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: var(--color-brand-2);
    }

`;
