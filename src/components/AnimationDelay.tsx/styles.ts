import styled, { Keyframes } from "styled-components";

function addDelay(max: number) {
  let css = "";

  Array(max)
    .fill(0)
    .forEach((_, index) => {
      css += `
    &:nth-child(${index + 1}) {
      opacity: 0;
      animation-delay: ${index * 0.1}s;
    }
  `;
    });

  return css;
}

export const AnimationWrapper = styled.div<{
  max: number;
  keyframe: Keyframes;
}>`
  animation-name: ${({ keyframe }) => keyframe};
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;

  ${({ max }) => addDelay(max)}

  width: 100%;
  display: flex;
  justify-content: center;
`;
