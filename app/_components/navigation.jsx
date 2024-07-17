"use client";

import {
  TvIcon,
  HomeIcon,
  DocumentCurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  {
    name: "Transactions",
    href: "/transactions",
    icon: DocumentCurrencyDollarIcon,
  },
  { name: "About", href: "/about", icon: TvIcon },
];

export default function Navigation() {
  const pathName = usePathname();
  // console.log(pathName);
  return (
    <div className="flex h-full flex-col p-4 gap-6">
      <Link
        className="flex items-center gap-3 rounded-md bg-gray-900 p-4"
        href="/"
      >
        <Image alt="logo" src="/logo.png" width={40} height={40} />
        <span className="text-yellow-400 font-bold text-lg">
          Expense Tracker
        </span>
      </Link>
      <div className="flex flex-col grow gap-2">
        {links.map(({ name, href, icon: Icon }, index) => (
          <Link
            key={index}
            href={href}
            className={clsx(
              "flex items-center gap-2 rounded-md p-4 text-sm font-medium hover:bg-rose-50 hover:text-red-500",
              { "bg-rose-50 text-red-500": pathName === href },
              { "bg-gray-50": pathName !== href }
            )}
          >
            <Icon className="w-6" />
            <p>{name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
