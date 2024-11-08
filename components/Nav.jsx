"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
    direct: "/",
  },
  {
    name: "about",
    path: "/about",
    direct: "/about",
  },
  {
    name: "experience",
    path: "/experience",
    direct: "/experience",
  },
  {
    name: "certificate",
    path: "/certificate",
    direct: "/certificate",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.direct}
            key={index}
            className={`${
              link.path == pathname &&
              "text-blue-600 border-b-2 border-blue-600"
            } capitalize font-medium hover:text-blue-600 transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
