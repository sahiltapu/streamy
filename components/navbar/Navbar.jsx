import React from "react";

import LOGO from "../logo/logo";
import Link from "next/link";
import Search from "./Search";
import Actions from "./Actions";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] bg-[#441456] px-2 lg:px-4 flex justify-between items-center shadow-sm">
      <Link href={"/"}>
        <div className="flex items-center gap-x-4 pr-5">
          <LOGO width={50} height={50} src="/images/streamy-logo-img.png" />
          <div className="hidden lg:flex flex-col font-mono">
            <p className="text-2xl font-semibold">Streamy</p>
            <p className="text-xs text-muted-foreground">Let&apos;s play</p>
          </div>
        </div>
      </Link>
      <Search />
      <Actions />
    </nav>
  );
};

export default Navbar;
