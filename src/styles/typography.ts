import styled, { css } from "styled-components";
import BaseText from "./BaseText";

interface iStyledTextProps{
    justifyContent?:string;
    textAlign?: string;
    fontWeight?: number;
    fontSize?:string;
    color?:string;
}

export const StyledText = styled(BaseText)<iStyledTextProps>`
  overflow: hidden;
  justify-content: ${({ justifyContent }) => justifyContent};
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => (color ? color : "white")};
  font-size: ${({ fontSize }) => {
    // eslint-disable-next-line default-case
    switch (fontSize) {
      case "one":
        return css`
          font-size: 3rem;

          color: var(--color-brand-1);

          @media (max-width: 800px) {
            font-size: 2rem;
          }
          @media (max-width: 400px) {
            font-size: 1.6rem;
          }
        `;
      case "two":
        return css`
          font-size: 2rem;
          text-overflow: ellipsis;

          @media (max-width: 800px) {
            font-size: 1.8rem;
          }
          @media (max-width: 400px) {
            font-size: 1.4rem;
          }
        `;
      case "three":
        return css`
          font-size: 5rem;
          text-overflow: ellipsis;

          @media (max-width: 800px) {
            font-size: 1.5rem;
          }
          @media (max-width: 400px) {
            font-size: 1.25rem;
          }
        `;

      case "bodyText":
        return css`
          font-size: var(--font-size-text-4);
          color: var(--color-grey-1);
          @media (max-width: 800px) {
            font-size: var(--font-size-text-3);
          }
          @media (max-width: 400px) {
            font-size: var(--font-size-text-2);
          }
        `;
      case "warnText":
        return css`
          font-size: var(--font-size-text-4);
          color: var(--color-secondary);
          @media (max-width: 800px) {
            font-size: var(--font-size-text-3);
          }
          @media (max-width: 400px) {
            font-size: var(--font-size-text-3);
          }
        `;
    }
  }};
`;
