import {
  AiFillGithub,
  AiFillGitlab,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import Image from "next/image";
import { useTheme } from "next-themes";

const Sliderbar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src="/ady.jpg"
        alt="user avatar"
        className="w-32 mx-auto rounded-full"
        width={207}
        height={260}
      />
      <h3 className="my-4 space-x-2 text-3xl font-medium tracking-wider font-classic">
        <span className="text-red-500">Ady </span>
        Masivi<br></br>
        <span>Masanzambi</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-100 ">
        Développeur web
      </p>

      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-100"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Télécharger le Resumé
      </a>
      {/* //social media icon */}

      <div className="flex justify-around w-9/12 mx-auto my-5 text-yellow-500 md:w-full">
        <a href="#">
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/ady-masivi-8547b41a7/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/ady243">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://gitlab.com/ady243">
          <AiFillGitlab className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* //address*/}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-100"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Ile de france</span>
        </div>
        <p className="my-2">masiviady7@gmail.com</p>
        <p className="my-2">0661172371</p>
      </div>
      {/* //email buttom*/}
      <button
        className="w-8/12 px-2 py-2 my-2 rounded-full bg-gradient-to-r from-red-600 to-blue to-yellow-400 focus:outline-none"
        onClick={() => window.open("mailto:masiviady7@gmail.com")}
      >
        Email
      </button>
      <br></br>
      <button
        onClick={changeTheme}
        className="w-1/12 px-0 py-2 my-2 rounded-full bg-gradient-to-r from-red-600 to-blue to-yellow-400"
      >
        <div className="icon h2">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M9.5 2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10S15.02 2 9.5 2z"></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path>
          </svg>
        </div>
      </button>
      <footer className="py-3 my-4">
        <ul className="pb-3 mb-3 nav justify-content-center border-bottom"></ul>
        <p className="text-center text-muted">
          ©2022 adymasivi. All rigth reserved
        </p>
      </footer>
    </div>
  );
};

export default Sliderbar;
