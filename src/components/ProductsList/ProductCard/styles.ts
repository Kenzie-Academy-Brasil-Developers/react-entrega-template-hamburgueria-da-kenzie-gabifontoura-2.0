import styled from "styled-components";

export const StyledProductCard = styled.li`
  background: ${({ theme }) => theme.colors.colorGrey1};
  border: 2px solid ${({ theme }) => theme.colors.colorGrey2};
  border-radius: var(--radius-2);
  &:hover {
    filter: brightness(1.2);
    border: 2px solid ${({ theme }) => theme.colors.colorBrand1};
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    width: 13rem;
    height: 17rem;
    justify-content: space-between;
  }
  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    background-color: ${({ theme }) => theme.colors.colorBackGround};
  }
`;
