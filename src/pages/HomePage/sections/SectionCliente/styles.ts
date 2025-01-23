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
  backgroundCard:
    "linear-gradient(-168.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%);",
};

export const SectionCliente = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${Colors.backgroundPrimary};
  padding: 1rem;
  padding-bottom: 6rem;
`;

export const ContainerPrincipal = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media ${Breakpoints.bg} {
    gap: 2rem;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 30%;

  @media ${Breakpoints.bg} {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 2rem;
  }
`;

export const textWhatsPeople = styled.h2`
  font-weight: 600;
  font-size: 3rem;
  width: 45%;
  color: ${Colors.textWhite};

  @media ${Breakpoints.bg} {
    width: 100%;
  }
`;

export const Descricao = styled.p`
  color: ${Colors.textLight};
  font-weight: 400;
  font-size: 1.2rem;
  width: 35%;

  @media ${Breakpoints.bg} {
    width: 100%;
    padding-bottom: 2rem;
  }
`;

export const ContainerCardCliente = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4rem;

  @media ${Breakpoints.bg} {
    flex-direction: column;
  }
`;

export const ContainerImpresasParceiras = styled.div`
  width: 100%;
  min-height: 7.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4rem;
`;

export const ContainerImagemEmpresa = styled.div`
  width: 12rem;
  min-height: 7.5rem;
  flex-grow: 1;
  flex-basis: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
`;

export const ImagensEmpresa = styled.img`
  width: 70%;
  height: 100%;
`;

export const CardComecarAgora = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem 2rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${Colors.backgroundCard};

  @media ${Breakpoints.lg} {
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
  }
`;

export const ContainerTextCard = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

export const TextLetsTry = styled.h1`
  font-size: 3rem;
  color: ${Colors.textWhite};
  font-weight: 600;
`;

export const DescricaoCardComecarAgora = styled.p`
  font-size: 1.2rem;
  color: ${Colors.textLight};
  font-weight: 400;
  width: 55%;

  @media ${Breakpoints.lg} {
    width: 100%;
  }
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
