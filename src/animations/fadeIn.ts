import { keyframes } from 'styled-components';

export const fadeInCardsAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px) scale(0.9);
  } to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;