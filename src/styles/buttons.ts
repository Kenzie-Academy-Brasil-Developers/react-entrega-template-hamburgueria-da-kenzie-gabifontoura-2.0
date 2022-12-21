import styled, { css } from "styled-components";

interface iStyledButtonProps {
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
      case "small":
        return css`
          height: 1.5rem;
          padding: 0 0.5rem;
        `;
    }
  }}
  ${({ buttonStyle }) => {
    // eslint-disable-next-line default-case
    switch (buttonStyle) {
      case "primary":
        return css`
          background-color:${({ theme }) => theme.colors.colorBrand1};;
          
          &:hover {
            background-color:${({ theme }) => theme.colors.colorBrand2};
            color: ${({ theme }) => theme.colors.colorGrey1};

          }

          }
          &:disabled{
            background:var(--color-grey-3);
          
        }
        `;
      case "secondary":
        return css`
          background-color: ${({ theme }) => theme.colors.colorGrey1};
          border: 1px solid var(--color-brand-1) ;

          color: ${({ theme }) => theme.colors.colorText};
          

          &:hover {
            background-color:${({ theme }) => theme.colors.colorBrand2};
            

          }

          &:disabled {
            background: var(--color-grey-3);
          
          ]

          }
        `;
    }
  }}
`;
