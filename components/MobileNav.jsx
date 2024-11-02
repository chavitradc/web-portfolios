"use client";
import { usePathname } from "next/navigation";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

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

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-[32px] text-blue-600" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/*logo*/}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold ">Whoami</h1>
          </Link>
        </div>
        {/*nav*/}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.direct}
                key={index}
                className={`${
                  link.path == pathname && "text-blue-600 "
                }text-xl capitalize hover:text-blue-600 transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
