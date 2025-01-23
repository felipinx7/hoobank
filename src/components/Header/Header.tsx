import * as S from "./styles";
import * as imagens from "../../assets/img";
import { navLinks } from "../../constant/constant";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

export const Header: React.FC = () => {
    
    const [Icone, setIcone] = useState(false)

    const handleIcone = () =>{
        setIcone((prev) => !prev)
    }


  return (
    <S.ContainerHeader>
      <S.Nav>
        <S.LogoHoobank src={imagens.logo} />
        <S.ContainerLinks>
          {navLinks.map((link, index) => (
            <S.LinkNavegacao key={index}>{link.title}</S.LinkNavegacao>
          ))}
        </S.ContainerLinks>
          <S.ContainerIconesMobile onClick={handleIcone}>
            {Icone ? <FaTimes/> : <FaBarsStaggered/>}
          </S.ContainerIconesMobile>
          <S.ContainerConteudoHeaderMobile className={Icone ? "active" : ""}>
            {navLinks.map((link, index) => (
                <S.LinkNavegacaoMobile key={index}>
                    {link.title}
                </S.LinkNavegacaoMobile>
            ))}
          </S.ContainerConteudoHeaderMobile>
      </S.Nav>
    </S.ContainerHeader>
  );
};
