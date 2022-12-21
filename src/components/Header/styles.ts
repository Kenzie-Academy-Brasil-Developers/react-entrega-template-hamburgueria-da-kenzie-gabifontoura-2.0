import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.colorGrey1};
  position: fixed;
  top: 0;
  z-index: 1;
  height: 6rem;
  padding: 1rem;


  .nav {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 400px) {
      gap: 1.5rem;
    }
  }

  .lupa {
    color: var(--color-grey-1);
    width: max-content;
    height: 2.25rem;
    background-color: var(--color-brand-1);
    padding: 0.65rem;
    border-radius: var(--radius-2);
    position: absolute;
    top: 1.8rem;
    margin-left: 12.25rem;
    @media (max-width: 700px) {
      display: none;
    }
  }

  .lupa-mobile {
    color: ${({ theme }) => theme.colors.colorGrey4};
    margin-right: 0.5rem;
    width: 1.25rem;
    height: max-content;

    @media (min-width: 700px) {
      display: none;
    }
  }

  .searchBarMobile{
    @media (min-width: 700px) {
      display: none;
    }
  }

  .searchBar {
    
    @media (max-width: 700px) {
      display: none;
    }
  }

  .cartBtn {
    width: 1.25rem;
    height: max-content;
    cursor: pointer;
  }

  .cartIcon {
    color: ${({ theme }) => theme.colors.colorGrey4};
    height: 1.25rem;
    width: 100%;
  }

  .exit {
    color: ${({ theme }) => theme.colors.colorGrey4};
    height: 1.25rem;
    width: 100%;
  }

  .darkmode {
    color: ${({ theme }) => theme.colors.colorGrey4};
    height: 1.25rem;
    width: 100%;
  }

  .countItens {
    background-color: var(--color-brand-1);
    width: max-content;
    height: 1.2rem;
    padding: 0.12rem 0.3rem;
    color: var(--color-text);
    font-size: 0.7rem;
    border-radius: var(--radius-2);
    align-items: center;
    position: absolute;
    top: 0.5rem;

    @media (min-width: 700px) {
      top: 1.5rem;
    }
  }
`;
