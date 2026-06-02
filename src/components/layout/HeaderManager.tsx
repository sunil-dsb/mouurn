"use client";

import { usePathname } from "next/navigation";
import LogoBar from "./LogoBar";
import NavBar from "./NavBar";
import NewNavBar from "./NewNavBar";
import AnnounceBanner from "../homepage-v2/AnnounceBanner";

export default function HeaderManager() {
  const pathname = usePathname();

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
