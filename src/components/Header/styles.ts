import styled from "styled-components";
import { Breakpoints } from "../../styles/BreakPoints";

// VARIAVEIS DE CORES USADAS NO CÓDIGO
const Colors = {
  backgroundPrimary: "rgba(0, 4, 15, 1)",
  backgroundGradient: "linear-gradient(125.17deg, #272727 0%, #11101d 100%)",
  textLight: "rgba(255, 255, 255, 0.7)",
  textHover: "rgba(255, 255, 255, 1)",
};

// HEADER PRINCIPAL
export const ContainerHeader = styled.header`
  width: 100%;
  background-color: ${Colors.backgroundPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const Nav = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const LogoHoobank = styled.img`
  width: 7rem;
  height: auto;
  z-index: 12;
`;

export const ContainerLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media ${Breakpoints.md} {
    display: none;
  }
`;

export const LinkNavegacao = styled.a`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${Colors.textLight};
  transition: color 0.3s ease;

  &:hover {
    color: ${Colors.textHover};
  }
`;

// HEADER MOBILE
export const ContainerIconesMobile = styled.div`
  display: none;

  @media ${Breakpoints.md} {
    display: flex;
    font-size: 1.5rem;
    color: white;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 11;
  }
`;

export const ContainerConteudoHeaderMobile = styled.div`
  display: none;

  @media ${Breakpoints.md} {
    width: 100%;
    height: 100vh;
    transform: translateX(100%);
    background: ${Colors.backgroundGradient};
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    z-index: 10;
    padding: 2rem;
    transition: transform 0.3s ease-in-out;

    &.active {
      transform: translateX(0);
    }
  }
`;

export const LinkNavegacaoMobile = styled.a`
  font-size: 1.2rem;
  color: ${Colors.textLight};
  text-align: center;
  transition: color 0.3s ease;

  &:hover {
    color: ${Colors.textHover};
  }
`;
