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
    if (pathname === "/") setActiveItem("Apropos");
    if (pathname === "/projets") setActiveItem("Projets");
    if (pathname === "/cv") setActiveItem("CV");
  }, [pathname]);
  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-red-500 border-b-4 border-yellow-500 md:text-2xl">
        {activeItem}
      </span>
      <div className="space-x-5 text-red txt-lg">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Apropos"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projets"
          route="/projets"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="CV"
          route="/resume"
        />
      </div>
    </div>
  );
}

export default Navbar;
