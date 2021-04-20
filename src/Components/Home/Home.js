import React from "react";
import Canvas from "../Canvas/Canvas";
import PagePrincipal from "../PagePrincipal/PagePrincipal";
import SobreIntroducao from "../Sobre/SobreIntroducao";

import { ContainerHome } from "./HomeStyle";

export const Home = () => {
  return (
    <ContainerHome>
      <section className="principal">
        <Canvas />
        <PagePrincipal />
      </section>
      <SobreIntroducao />
    </ContainerHome>
  );
};

export default Home;
