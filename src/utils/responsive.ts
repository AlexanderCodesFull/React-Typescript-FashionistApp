import { css } from "styled-components";

interface Props {
  [x: string]: string | number;
}

export const mobile = (style: Props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${style}
    }
  `;
};
