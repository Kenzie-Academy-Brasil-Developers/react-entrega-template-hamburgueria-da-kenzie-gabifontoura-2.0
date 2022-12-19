import styled from "styled-components";

export const StyledCartCard = styled.li`
  background: ${({ theme }) => theme.colors.colorGrey1};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  position: sticky;

 

  &:hover {
    filter: brightness(1.2);
  }

  img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    background-color: ${({ theme }) => theme.colors.colorFixedWhite};
  }

  button:hover {
    text-decoration: underline;
  }
`;


