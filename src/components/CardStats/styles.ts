import styled from "styled-components";
import { Breakpoints } from "../../styles/BreakPoints";

export const Colors = {
  colorText:
    "radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)",
  colorWhite: "white",
};

export const CardStats = styled.article`
  width: auto;
  height: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  hr {
    width: 1rem;
    transform: rotate(90deg);

    @media ${Breakpoints.bg} {
      display: none;
    }
  }
`;

export const TextValor = styled.h2`
  color: ${Colors.colorWhite};
  font-size: 2.5rem;
  font-weight: 600;
`;

export const TextStatus = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  background: ${Colors.colorText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  word-break: break-all;
`;
