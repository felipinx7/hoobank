import React from "react";
import * as S from "./styles";
import * as imagens from "../../assets/img";

export const Promocao: React.FC = () => {
  return (
    <S.CardPromocao>
      <S.containerIcone>
        <S.imgIcone src={imagens.discount} />
      </S.containerIcone>
      <S.Textpromocao>
        <S.spanText>20% </S.spanText>DISCOUNT FOR{" "}
        <S.spanText>1 MONTH </S.spanText>ACCOUNT
      </S.Textpromocao>
    </S.CardPromocao>
  );
};
