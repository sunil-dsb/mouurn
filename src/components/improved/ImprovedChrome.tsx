import ScrollToTop from "../layout/ScrollToTop";
import ImprovedLogoBar from "./ImprovedLogoBar";
import ImprovedNavBar from "./ImprovedNavBar";
import ImprovedFooter from "./ImprovedFooter";

/**
 * Chrome for /improved - accessible SVG-icon nav + elevated footer.
 * Full-bleed (no width cap), unlike the faithful clone.
 */
export default function ImprovedChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollToTop />
      <ImprovedLogoBar />
      <ImprovedNavBar />
      <main>{children}</main>
      <ImprovedFooter />
    </>
  );
}
