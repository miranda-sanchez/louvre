import React from "react";
import ExhibitionsSection from "../components/ExhibitionsSection";
import PageHeader from "../components/PageHeader";
import headerImg from "../img/outside.jpg";

const Exhibitions = () => {
  return (
    <main>
      <PageHeader title="Exhibitions" backgroundImage={headerImg} />
      <ExhibitionsSection />
    </main>
  );
};

export default Exhibitions;
