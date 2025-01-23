import React from "react";
import * as S from "./styles";
import { Promocao } from "../../../../components/CardPromocao/Promocao";
import { FaArrowRight } from "react-icons/fa";
import * as imagens from "../../../../assets/img";
import { Header } from "../../../../components/Header/Header";

export const SectionMain: React.FC = () => {
  return (
    <S.SectionMain>
      <S.ContainerPrincipal>
        <S.ContainerText>
          <Promocao />
          <S.TextTheNext>
            <S.TextTheNext>The Next</S.TextTheNext>{" "}
            <S.SpanGeneration>Generation</S.SpanGeneration>
          </S.TextTheNext>
          <S.TextPayment>Payment Method</S.TextPayment>
          <S.TextDescricao>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </S.TextDescricao>
        </S.ContainerText>
        <S.ContainerImagem>
          <S.ImagemRobo src={imagens.robot} />
        </S.ContainerImagem>
      </S.ContainerPrincipal>
    </S.SectionMain>
  );
};
