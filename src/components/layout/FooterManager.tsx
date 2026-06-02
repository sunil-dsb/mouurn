"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import NewFooter from "./NewFooter";

export default function FooterManager() {
  const pathname = usePathname();

  if (pathname === "/new") {
    return <NewFooter />;
  }

  return <Footer />;
}
