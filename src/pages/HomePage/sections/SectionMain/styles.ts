import styled from "styled-components";
import { Breakpoints } from "../../../../styles/BreakPoints";

// Definição de cores como variáveis
const Colors = {
  backgroundPrimary: "rgba(0, 4, 15, 1)",
  textWhite: "white",
  textLight: "rgba(255, 255, 255, 0.7)",
  gradientRadial:
    "radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)",
};

// Estilização do Conteúdo Principal
export const SectionMain = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 1rem 1.5rem;
  background-color: ${Colors.backgroundPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ContainerPrincipal = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media ${Breakpoints.bg} {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

export const ContainerText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1;
  gap: 0.5rem;
`;

export const TextTheNext = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  color: ${Colors.textWhite};
  line-height: 1.3;

  @media ${Breakpoints.bg} {
    font-size: 3rem;
  }
`;

export const SpanGeneration = styled.span`
  background: ${Colors.gradientRadial};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4rem;
  font-weight: 600;

  @media ${Breakpoints.bg} {
    font-size: 3rem;
  }
`;

export const TextPayment = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  color: ${Colors.textWhite};

  @media ${Breakpoints.bg} {
    font-size: 3rem;
  }
`;

export const ContainerDescricao = styled.div`
  max-width: 600px;

  @media ${Breakpoints.bg} {
    width: 100%;
    text-align: center;
  }
`;

export const TextDescricao = styled.p`
  font-weight: 400;
  font-size: 1.1rem;
  color: ${Colors.textLight};
  line-height: 1.6;

  @media ${Breakpoints.bg} {
    font-size: 1rem;
    width: 90%;
  }
`;

export const ContainerImagem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${Breakpoints.bg} {
    width: 100%;
    margin-top: 2rem;
  }
`;

export const ImagemRobo = styled.img`
  width: 100%;
  max-width: 900px;
  height: auto;
  object-fit: cover;
`;
