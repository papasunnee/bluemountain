import React from "react";
import Banner from "../components/Header/Banner";
import Layout from "../components/Layout";
import Vacancies from "../components/Vacancies";

export default () => {
  return (
    <Layout>
      <Banner bgImage="featuredVacancy" min />
      <Vacancies />
    </Layout>
  );
};
