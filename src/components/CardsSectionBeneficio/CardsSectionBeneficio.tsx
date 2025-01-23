import React from "react";
import * as S from "./styles";
import { features } from "../../constant/constant";

export const CardBeneficio: React.FC = () => {
  return (
    <>
      {features.map((card, index) => (
        <S.CradSection key={index}>
          <S.ContainerIcone>
            <S.ContainerFundoIcon>
              <S.ImgIcone src={card.icon} />
            </S.ContainerFundoIcon>
          </S.ContainerIcone>
          <S.ContainerTextos>
            <S.textTitulo>{card.title}</S.textTitulo>
            <S.Descricao>{card.content}</S.Descricao>
          </S.ContainerTextos>
        </S.CradSection>
      ))}
    </>
  );
};
