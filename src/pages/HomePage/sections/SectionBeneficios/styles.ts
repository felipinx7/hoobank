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

export const SectionBeneficios = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${Colors.backgroundPrimary};
  display: flex;
  padding: 2rem;
`;

export const SectionContainerMain = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerCardStats = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  justify-content: center;
  align-items: start;
  transform: translateY(-2rem);

  @media ${Breakpoints.bg} {
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
  }
  @media ${Breakpoints.md} {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

export const containerText = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  @media ${Breakpoints.bg} {
    width: 100%;
  }
`;

export const ContainerInfoMain = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 2rem;
  align-items: baseline;
  justify-content: space-between;

  @media ${Breakpoints.bg} {
    flex-direction: column;
    gap: 5rem;
  }
`;
export const TextDoYouBussines = styled.h2`
  color: ${Colors.textWhite};
  font-size: 3rem;
  font-weight: 600;
`;

export const Descricao = styled.p`
  color: ${Colors.textLight};
  font-weight: 500;
  font-size: 1.2rem;
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

export const ContainerCardBeneficios = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  @media ${Breakpoints.bg} {
    width: 100%;
    align-items: baseline;
  }
`;
