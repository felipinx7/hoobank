import React from "react";
import * as S from "./styles";
import * as Imagens from "../../assets/img";
import { feedback } from "../../constant/constant";

export const CardCliente: React.FC = () => {
  return (
    <>
      {feedback.map((CardCliente, index) => (
        <S.Card key={index}>
          <S.ImagensAspas src={Imagens.quotes} />
          <S.textAvaliacaoCliente>{CardCliente.content}</S.textAvaliacaoCliente>
          <S.ContainerInfoUsuario>
            <S.Fotocliente src={CardCliente.img} />
            <S.ContaienrTextsInfoUsuario>
              <S.TextNomeUsuario>{CardCliente.name}</S.TextNomeUsuario>
              <S.TextEmpresa>{CardCliente.title}</S.TextEmpresa>
            </S.ContaienrTextsInfoUsuario>
          </S.ContainerInfoUsuario>
        </S.Card>
      ))}
    </>
  );
};
