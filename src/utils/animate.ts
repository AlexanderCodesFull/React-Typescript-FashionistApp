import { css } from "styled-components";

export const animate = () => {
  return css`
    animation: fade-in 0.4s ease-in forwards;

    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;
};
