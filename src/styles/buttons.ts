import styled, { css } from "styled-components";

interface iStyledButtonProps{
 buttonStyle: string;
 buttonSize: string;
 color?: string;
}

export const StyledButton = styled.button<iStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: var(--radius-1);
  transition: 0.4s;
  color: ${({ color }) => (color ? color : "white")};
  font-size: 1rem;

  
  &:hover {
    filter: brightness(1.2);

  }
  ${({ buttonSize }) => {
    // eslint-disable-next-line default-case
    switch (buttonSize) {
      case "default":
        return css`
          height: 3rem;
          padding: 0 1.25rem;
        `;
      case "medium":
        return css`
          height: 2.5rem;
          padding: 0 1.25rem;
        `;
    }
  }}
  ${({ buttonStyle }) => {
    // eslint-disable-next-line default-case
    switch (buttonStyle) {
      case "primary":
        return css`
          background-color:var(--color-brand-1);
          color: var(--color-text);
          

          &:hover {
            background-color:var(--color-brand-2);
            color: #000000}

          }
          &:disabled{
            background:var(--color-grey-3);
          
        }
        `;
      case "secondary":
        return css`
          background-color:var(--color-brand-2);
         

          &:hover {
            background-color:var(--color-brand-2);
          
            &:disabled{
              background:var(--color-grey-3);
              
            }
            `;
    }
  }}


`;

