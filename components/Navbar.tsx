import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;

  name: string;
  route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span
          onClick={() => setActiveItem(name)}
          className="hover:text-yellow-500"
        >
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

function Navbar() {
  const [activeItem, setActiveItem] = useState<string>("");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("à propos");
    if (pathname === "/project") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Cv");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-red-500 border-b-4 border-yellow-500 md:text-2xl">
        {activeItem}
      </span>
      <div className="space-x-5 text-red txt-lg">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="À propos"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projets"
          route="/project"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Cv"
          route="/resume"
        />
      </div>
    </div>
  );
}

export default Navbar;
