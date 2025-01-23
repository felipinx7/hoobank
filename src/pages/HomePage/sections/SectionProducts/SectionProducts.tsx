import React from "react";
import * as S from "./styles";
import * as Imagens from "../../../../assets/img";

export const SectionProducts: React.FC = () => {
  return (
    <S.SectionProducts>
      <S.containerPrincipal>
        <S.ContainerPagamento>
          <S.ImagemPagamento src={Imagens.bill} />
        </S.ContainerPagamento>
        <S.ContainerText>
          <S.TextEasilyControl>
            Easily control your billing & invoicing.
          </S.TextEasilyControl>
          <S.Descricao>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </S.Descricao>
          <S.ContainerLojaDeAplicativo>
            <S.ImagemAppleStory src={Imagens.apple} />
            <S.ImagemPlayStory src={Imagens.google} />
          </S.ContainerLojaDeAplicativo>
        </S.ContainerText>
      </S.containerPrincipal>
      <S.ContainerCartaoIdeial>
        <S.containerPrincipalCartaoIdeial>
          <S.ContainerText>
            <S.TextEasilyControl>
              Find a better card deal in few easy steps.
            </S.TextEasilyControl>
            <S.Descricao>
              {" "}
              Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
              aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </S.Descricao>
            <S.ButtonGetStarted>Get Started</S.ButtonGetStarted>
          </S.ContainerText>
          <S.ContainerPagamento>
            <S.ImagemCard src={Imagens.card} />
          </S.ContainerPagamento>
        </S.containerPrincipalCartaoIdeial>
      </S.ContainerCartaoIdeial>
    </S.SectionProducts>
  );
};
