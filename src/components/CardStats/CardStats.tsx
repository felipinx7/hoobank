import React from "react";
import * as S from "./styles";
import { stats } from "../../constant/constant";

export const CardStats: React.FC = () => {
  return (
    <>
      {stats.map((card, index) => (
        <S.CardStats key={index}>
          <S.TextValor>{card.value}</S.TextValor>
          <S.TextStatus>{card.title}</S.TextStatus>
        </S.CardStats>
      ))}
    </>
  );
};
