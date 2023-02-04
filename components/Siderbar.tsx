/* eslint-disable @next/next/no-img-element */

import {
  UilEnvelopeMinus,
  UilMapPin,
  UilArrowToBottom,
  UilLaptop,
  UilGitlab,
  UilGithubAlt,
  UilLinkedinAlt,
  UilInstagram,
} from "@iconscout/react-unicons";
import BoutonTheme from "./BoutonTheme";

const Sliderbar = () => {
  return (
    <div className="">
      <img
        src="https://zupimages.net/up/23/05/x0mx.jpeg"
        alt="user avatar"
        className="w-32 mx-auto rounded-full"
        width={207}
        height={260}
      />
      <h3 className="my-4 space-x-2 text-3xl font-medium tracking-wider font-classic">
        <span className="text-tokos">Ady </span>
        Masivi<br></br>
        <span>Masanzambi</span>
      </h3>
      <p className="flex justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-autres">
        <UilLaptop className="w-6 h-6 " />
        Développeur web
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-tokos"
        href=""
        download="name"
      >
        <UilArrowToBottom className="w-6 h-6 animate-bounce" />
        Télécharger le Resumé
      </a>
      {/* //social media icon */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-autres md:w-full">
        <a href="#">
          <UilInstagram className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/ady-masivi-8547b41a7/">
          <UilLinkedinAlt className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/ady243">
          <UilGithubAlt className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://gitlab.com/ady243">
          <UilGitlab className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* //address*/}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-100"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <UilMapPin />
          <span>Ile de france</span>
        </div>
        <p className="my-2">masiviady7@gmail.com</p>
      </div>
      {/* //email buttom*/}
      <div className="email">
        <button
          className="flex px-2 py-2 my-8 rounded-full w-8/24 bg-gradient-to-r from-tokos to-autres focus:outline-none "
          style={{
            marginLeft: "2rem",

            textAlign: "center",
            justifyContent: "center",
          }}
          onClick={() => window.open("mailto:masiviady7@gmail.com")}
        >
          <UilEnvelopeMinus /> envoyer un e-mail
        </button>
      </div>

      <br></br>
      <p>Thème</p>
      <BoutonTheme />
      <footer className="py-3 my-3">
        <ul className="pb-3 mb-3 nav justify-content-center border-bottom"></ul>
        <p className="text-center mt-80 text-muted">
          ©2022 adymasivi. All rigth reserved
        </p>
      </footer>
    </div>
  );
};

export default Sliderbar;
