import styled from "styled-components";
import { Breakpoints } from "../../styles/BreakPoints";

const Colors = {
  backgroundHover:
    "linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)",
  textLigth: "rgba(255, 255, 255, 0.7)",
  textWhite: "white",
};

export const Card = styled.article`
  max-width: 370px;
  width: 100%;
  height: 25rem;
  border-radius: 20px;
  background-color: transparent;
  transition: all 0.3s ease;
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem;

  &:hover {
    background: ${Colors.backgroundHover};
  }

  @media ${Breakpoints.bg} {
    max-width: unset;
    width: 100%;
  }
`;

export const ImagensAspas = styled.img`
  width: 3rem;
  height: 1.5rem;
`;
export const textAvaliacaoCliente = styled.p`
  color: ${Colors.textWhite};
  font-weight: 400;
  font-size: 1.1rem;
`;

export const ContainerInfoUsuario = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: baseline;
  gap: 2rem;

  @media ${Breakpoints.xs} {
    flex-direction: column;
  }
`;

export const Fotocliente = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

export const ContaienrTextsInfoUsuario = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-direction: column;
`;

export const TextNomeUsuario = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${Colors.textWhite};
`;

export const TextEmpresa = styled.p`
  color: ${Colors.textLigth};
  font-size: 1rem;
  font-weight: 400;
`;
