import React from "react";
import * as S from "./styles";
import { CardStats } from "../../../../components/CardStats/CardStats";
import { stats } from "../../../../constant/constant";
import { CardBeneficio } from "../../../../components/CardsSectionBeneficio/CardsSectionBeneficio";

export const SectionBeneficios: React.FC = () => {
  return (
    <S.SectionBeneficios>
      <S.SectionContainerMain>
        <S.ContainerCardStats>
          <CardStats />
        </S.ContainerCardStats>
        <S.ContainerInfoMain>
          <S.containerText>
            <S.TextDoYouBussines>
            You do the business, <br />
            we’ll handle the money.
            </S.TextDoYouBussines>
            <S.Descricao>
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </S.Descricao>
            <S.ButtonGetStarted>Get Started</S.ButtonGetStarted>
          </S.containerText>
          <S.ContainerCardBeneficios>
            <CardBeneficio />
          </S.ContainerCardBeneficios>
        </S.ContainerInfoMain>
      </S.SectionContainerMain>
    </S.SectionBeneficios>
  );
};
