import { services } from "../data";

import React from "react";
import { GetServerSidePropsContext } from "next";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        Développeur full stack, avec plus de 2 ans d’expérience. Mordu
        d’informatique, j’ai appris à coder dans divers langages informatiques
        (HTML ,NEXT.JS…) et j&#x27;ai créé des projets personnels, dont une
        application d&#x27;E-commerce de vente de mobilier en JAVA , je maîtrise
        les différentes étapes techniques de la création d’un site ou d’une
        application web ; de la compréhension des besoins utilisateurs, au
        développement frontend et backend en passant par la maintenance.
      </h5>

      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">
          Ce que je prpose
        </h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((services) => (
            // eslint-disable-next-line react/jsx-key
            <div
              className="col-span-2 bg-gray-200 rounded-lg dark:bg-dark-300 dark:bg-dark-500 md:col-span-1"
              key={services.title}
            >
              <ServiceCard service={services} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();

  return {
    props: {
      services: data.services,
    },
  };
};
// export const getStaticProps = async (_context: GetStaticPropsContext) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
