"use client";

import { usePathname } from "next/navigation";
import LogoBar from "./LogoBar";
import NavBar from "./NavBar";
import NewNavBar from "./NewNavBar";
import AnnounceBanner from "../homepage-v2/AnnounceBanner";

export default function HeaderManager() {
  const pathname = usePathname();

  // These routes supply their own chrome (SiteChrome / ImprovedChrome / bare).
  if (
    pathname === "/" ||
    pathname === "/improved" ||
    pathname === "/new-improved" ||
    pathname === "/style-guide"
  ) {
    return null;
  }

  if (pathname === "/new") {
    return (
      <>
        <AnnounceBanner />
        <NewNavBar />
      </>
    );
  }

  return (
    <>
      <LogoBar />
      <NavBar />
    </>
  );
}
