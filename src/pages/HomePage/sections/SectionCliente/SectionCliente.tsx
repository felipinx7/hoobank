import React from "react";
import * as S from "./styles";
import { CardCliente } from "../../../../components/CardCliente/CardCliente";
import * as Imagens from "../../../../assets/img";

export const SectionCliente: React.FC = () => {
  return (
    <S.SectionCliente>
      <S.ContainerPrincipal>
        <S.ContainerText>
          <S.textWhatsPeople>What people are saying about us</S.textWhatsPeople>
          <S.Descricao>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </S.Descricao>
        </S.ContainerText>
        <S.ContainerCardCliente>
          <CardCliente />
        </S.ContainerCardCliente>
        <S.ContainerImpresasParceiras>
          <S.ContainerImagemEmpresa>
            <S.ImagensEmpresa src={Imagens.airbnb} />
          </S.ContainerImagemEmpresa>
          <S.ContainerImagemEmpresa>
            <S.ImagensEmpresa src={Imagens.binance} />
          </S.ContainerImagemEmpresa>
          <S.ContainerImagemEmpresa>
            <S.ImagensEmpresa src={Imagens.coinbase} />
          </S.ContainerImagemEmpresa>
          <S.ContainerImagemEmpresa>
            <S.ImagensEmpresa src={Imagens.dropbox} />
          </S.ContainerImagemEmpresa>
        </S.ContainerImpresasParceiras>
        <S.CardComecarAgora>
          <S.ContainerTextCard>
            <S.TextLetsTry>Let’s try our service now!</S.TextLetsTry>
            <S.DescricaoCardComecarAgora>
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </S.DescricaoCardComecarAgora>
          </S.ContainerTextCard>
          <S.ButtonGetStarted>Get Started</S.ButtonGetStarted>
        </S.CardComecarAgora>
      </S.ContainerPrincipal>
    </S.SectionCliente>
  );
};
