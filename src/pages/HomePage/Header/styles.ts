import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.colorGrey1};
  position: fixed;
  top: 0;
  z-index: 1;
  height: 6rem;
  padding: 1.5rem 1rem;
  @media (max-width: 400px) {
    padding: 2rem 1rem;
  }

  .lupa {
    color: var(--color-grey-1);
    width: max-content;
    height: 2.25rem;
    background-color: var(--color-brand-1);
    padding: 0.65rem;
    border-radius: var(--radius-2);
    position: absolute;
    top: 0.85rem;
    right: 0.4rem;

    @media (max-width: 700px) {
      display: none;
    }
  }

  .lupa-mobile {
    color: ${({ theme }) => theme.colors.colorGrey4};
    margin-right: 0.5rem;
    width: 1.35rem;
    height: max-content;

    @media (min-width: 700px) {
      display: none;
    }
  }

  .searchBarMobile {
    margin-top: 0.5rem;

    @media (min-width: 700px) {
      display: none;
    }
  }

  .searchBar {
    margin-left: 5rem;
    max-width: 30rem;
    width: 100%;
    position: relative;

    @media (max-width: 700px) {
      display: none;
    }
  }

  .cartBtn {
    width: 1.35rem;
    height: max-content;
    cursor: pointer;

    @media (max-width: 400px) {
      width: 1.35rem;
    }
  }

  .cartIcon {
    color: ${({ theme }) => theme.colors.colorGrey4};
    height: 1.35rem;
    width: 100%;
    @media (max-width: 400px) {
      height: 1.35rem;
    }
  }

  .exit {
    color: ${({ theme }) => theme.colors.colorGrey4};
    height: 1.35rem;
    width: 100%;
    @media (max-width: 400px) {
      height: 1.35rem;
    }
  }

  .darkmode {
    color: ${({ theme }) => theme.colors.colorGrey4};
    height: 1.35rem;
    width: 100%;
    @media (max-width: 400px) {
      height: 1.35rem;
    }
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
    top: 1.5rem;

    @media (min-width: 700px) {
      top: 1.5rem;
    }
  }
`;
