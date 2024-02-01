"use client";
import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const items = [
    {
      label: "About",
      path: "/about",
      active: `${pathname === "/about" && "text-blue-800"}`,
    },
    {
      label: "Pricing",
      path: "/pricing",
      active: `${pathname === "/pricing" && "text-blue-800"}`,
    },
    {
      label: "Contact",
      path: "/contact",
      active: `${pathname === "/contact" && "text-blue-800"}`,
    },
  ];
  return (
    <nav className="flex items-center bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"}>
        <HomeIcon className="m-2 w-4 h-4" />
      </Link>

      <div className="flex flex-1"></div>

      {items.map((item) => (
        <Link
          className={`mr-2 ${item.active}`}
          key={item.path}
          href={item.path}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
