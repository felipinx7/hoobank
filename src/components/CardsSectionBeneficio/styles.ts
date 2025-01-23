import styled from "styled-components";

const colors = {
  background:
    "linear-gradient(153.47deg, rgba(255, 255, 255, 0) -341.94%, #14101D 95.11%)",
  textWhite: " rgba(255, 255, 255, 1)",
  textLigth: " rgba(255, 255, 255, 0.7)",
  blackBackground:
    "linear-gradient(144.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)",
  backgroundIcone: "rgba(9, 151, 124, 0.1)",
};

export const CradSection = styled.article`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.1rem;
  gap: 1rem;
  background-color: transparent;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.blackBackground};
    box-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);
  }
`;

export const ContainerIcone = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerFundoIcon = styled.div`
  background: ${colors.backgroundIcone};
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgIcone = styled.img`
  width: 50%;
  height: 50%;
`;

export const ContainerTextos = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const textTitulo = styled.h3`
  font-weight: 600;
  color: ${colors.textWhite};
  font-size: 1.2rem;
`;

export const Descricao = styled.p`
  color: ${colors.textLigth};
  font-size: 1rem;
  font-weight: 400;
`;
