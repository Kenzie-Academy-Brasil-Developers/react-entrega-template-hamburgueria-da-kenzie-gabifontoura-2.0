import { keyframes } from 'styled-components';

export const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translatey(-100px) scale(0.9);
  } to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;