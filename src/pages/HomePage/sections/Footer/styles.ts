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

export const footer = styled.footer`
  width: 100%;
  min-height: auto;
  background-color: ${Colors.backgroundPrimary};
  padding: 2rem;
`;

export const ContainerPrincipal = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  hr {
    width: 100%;
    margin-top: 2rem;
    background: transparent;
    height: 1px;
    border: 0.5px solid ${Colors.textLight};
  }
`;

export const ContainerParteCima = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media ${Breakpoints.lg} {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ContainerInfoBanco = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  gap: 1rem;
`;

export const LogoMarcaHooBank = styled.img``;

export const TextNewWay = styled.p`
  color: ${Colors.textLight};
  font-weight: 400;
  font-size: 1.2rem;
  width: 70%;
`;

export const ContainerLinksFooter = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${Breakpoints.lg} {
    width: 100%;
  }
  @media ${Breakpoints.sm} {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: flex-end;
  height: 100%;
  gap: 1rem;
`;

export const TitleLinks = styled.h4`
  font-weight: 500;
  font-size: 1.2rem;
  color: ${Colors.textWhite};
`;

export const LinkText = styled.p`
  font-size: 1rem;
  color: ${Colors.textLight};
  font-weight: 400;
`;

export const ContainerParteBaixo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding-top: 2rem;

  @media ${Breakpoints.md} {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const TextCopiright = styled.p`
  color: ${Colors.textLight};
  font-weight: 400;
  font-size: 1.2rem;
`;

export const ContainerRedesSociais = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;
`;

export const IconRedeSocial = styled.img`
  max-width: 17rem;
  width: 100%;
`;
