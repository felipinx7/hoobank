import styled from "styled-components";
import { Breakpoints } from "../../../../styles/BreakPoints";

// Definição de cores como variáveis
const Colors = {
  backgroundPrimary: "rgba(0, 4, 15, 1)",
  textWhite: "white",
  textLight: "rgba(255, 255, 255, 0.7)",
  gradientRadial:
    "radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)",
  backgroundButton:
    "linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)",
};

export const SectionProducts = styled.section`
  width: 100%;
  min-height: auto;
  background-color: rgba(0, 4, 15, 1);
  padding: 0 2rem 8rem 2rem;
`;

export const containerPrincipal = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media ${Breakpoints.bg} {
    flex-direction: column-reverse;
    align-items: baseline;
    gap: 6rem;
  }
`;

export const ContainerPagamento = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${Breakpoints.bg} {
    width: 100%;
  }
`;

export const ImagemPagamento = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContainerText = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  gap: 1rem;

  @media ${Breakpoints.bg} {
    width: 100%;
  }
`;

export const TextEasilyControl = styled.h3`
  font-size: 3rem;
  font-weight: 600;
  color: ${Colors.textWhite};
`;

export const Descricao = styled.p`
  color: ${Colors.textLight};
  font-weight: 500;
  font-size: 1.1rem;
`;

export const ContainerLojaDeAplicativo = styled.div`
  width: 50%;
  height: 3rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: baseline;
`;

export const ImagemAppleStory = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImagemPlayStory = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContainerCartaoIdeial = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonGetStarted = styled.button`
  max-width: 10.5rem;
  height: 4rem;
  width: 100%;
  background: ${Colors.backgroundButton};
  border-radius: 10px;
  color: ${Colors.backgroundPrimary};
  font-size: 1.2rem;
  border: none;
  font-weight: 600;
  cursor: pointer;
`;

export const ImagemCard = styled.img`
  width: 80%;
  height: 80%;
`;

export const containerPrincipalCartaoIdeial = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media ${Breakpoints.bg} {
    flex-direction: column;
    align-items: baseline;
    gap: 6rem;
  }
`;
