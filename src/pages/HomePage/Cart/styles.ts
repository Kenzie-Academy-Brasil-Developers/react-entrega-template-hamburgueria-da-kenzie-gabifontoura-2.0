import styled from "styled-components";


export const StyledTotalCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  border-top: 2px solid var(--color-grey-2);
  width:100%;
  background-color: ${({ theme }) => theme.colors.colorBackGround};

`;

export const StyledEmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
  gap: 1rem;
  text-align: center;
  
`;
