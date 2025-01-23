import React from "react";
import { SectionMain } from "./sections/SectionMain/SectionMain";
import { Header } from "../../components/Header/Header";
import { SectionBeneficios } from "./sections/SectionBeneficios/SectionBeneficios";
import { SectionProducts } from "./sections/SectionProducts/SectionProducts";
import { SectionCliente } from "./sections/SectionCliente/SectionCliente";
import { Footer } from "./sections/Footer/Footer";

export const HomePage: React.FC = () => {
  return (
    <>
      {" "}
      <Header />
      <SectionMain />
      <SectionBeneficios />
      <SectionProducts />
      <SectionCliente />
      <Footer />
    </>
  );
};
