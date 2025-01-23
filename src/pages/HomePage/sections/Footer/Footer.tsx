import React from "react";
import * as S from "./styles";
import { footerLinks, socialMedia } from "../../../../constant/constant";
import * as Imagens from "../../../../assets/img";

export const Footer: React.FC = () => {
  return (
    <S.footer>
      <S.ContainerPrincipal>
        <S.ContainerParteCima>
          <S.ContainerInfoBanco>
            <S.LogoMarcaHooBank src={Imagens.logo} />
            <S.TextNewWay>
              A new way to make the payments easy, reliable and secure.
            </S.TextNewWay>
          </S.ContainerInfoBanco>
          <S.ContainerLinksFooter>
            {footerLinks.map((links, index) => (
              <S.ContainerLinks key={index}>
                <S.TitleLinks>{links.title}</S.TitleLinks>
                {links.links.map((linksFooter) => (
                  <S.LinkText key={index}>{linksFooter.name}</S.LinkText>
                ))}
              </S.ContainerLinks>
            ))}
          </S.ContainerLinksFooter>
        </S.ContainerParteCima>
        <hr />
        <S.ContainerParteBaixo>
          <S.TextCopiright>
            Copyright &copy; 2025 Hoobank All Rigths Reserved
          </S.TextCopiright>
          <S.ContainerRedesSociais>
           {socialMedia.map((social, index) => (
             <S.IconRedeSocial src={social.icon}/>
           ))}
          </S.ContainerRedesSociais>
        </S.ContainerParteBaixo>
      </S.ContainerPrincipal>
    </S.footer>
  );
};
