"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import NewFooter from "./NewFooter";

export default function FooterManager() {
  const pathname = usePathname();

  // These routes supply their own footer (SiteChrome / ImprovedChrome / bare).
  if (
    pathname === "/" ||
    pathname === "/improved" ||
    pathname === "/new-improved" ||
    pathname === "/style-guide" ||
    pathname === "/lab"
  ) {
    return null;
  }

  if (pathname === "/new") {
    return <NewFooter />;
  }

  return <Footer />;
}
