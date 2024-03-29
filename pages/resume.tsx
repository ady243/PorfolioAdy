/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Bar from "../components/Bar";
import { database, languages, tools } from "../data";

function resume() {
  return (
    <div className="p-6 py-2">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">
            <u>Educations</u>
          </h5>
          {/* <div>
            <h5 className="my-2 text-xl font-bold">WebItech</h5>
            <p className="font-semibold">Master</p>
            <p className="my-3">
              Ecole de spécialisation en dévéloppement web - 2022-2024
            </p>
            <p className="my-3"></p>
          </div> */}
          <div>
            <h5 className="my-2 text-xl font-bold">ESGI</h5>
            <p className="font-semibold">Master</p>
            <p className="my-3">Ecole supérieur d'ingénierie du web</p>
            <p className="my-3"></p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold">CFA SUP DE VINCI</h5>
            <p className="font-semibold">Bachelor 3</p>
            <p className="my-3">Ecole de spécialisation en dévéloppement web</p>
            <p className="my-3"></p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold">COURS DIDEROT</h5>
            <p className="font-semibold">
              BTS sérvice informatique aux organisations (SLAM)
            </p>

            <p className="my-3"> Brevet de technicien supérieur - 2019</p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">
            <u>Expériences</u>
          </h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Développeur web - Full Stack / Alternance :
            </h5>

            <p className="my-3">Octobre 2021 - Septembre 2022 : Lbj Consult</p>
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div></div>
        <div>
          <div className="stage">
            <h5 className="my-2 text-xl font-bold">
              Développeur web - Stage :{" "}
            </h5>
            <p className="font-semibold"></p>
            <p className="my-3 ">Mai 2019 - Aout 2019 : Why-not Paris</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl fonr-bold competences">
              Langages & Frameworks
            </h5>
            <div className="my-2 competences">
              {languages.map((languages, i) => (
                <Bar data={languages} key={i} />
              ))}
            </div>
          </div>
          <div>
            <h5 className="my-3 text-2xl fonr-bold competences">
              Base de données
            </h5>
            <div className="my-2 competences">
              {database.map((database, i) => (
                <Bar data={database} key={i} />
              ))}
            </div>
          </div>

          <div>
            <h5 className="my-3 text-2xl fonr-bold competences">
              outils et logiciels
            </h5>
            <div className="my-2 competences">
              {tools.map((tool, i) => (
                <Bar data={tool} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default resume;
