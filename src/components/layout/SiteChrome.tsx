import ScrollToTop from "./ScrollToTop";
import LogoBar from "./LogoBar";
import NavBar from "./NavBar";
import Footer from "./Footer";

/**
 * Site chrome (logo bar, nav, footer) shared by the public marketing pages.
 * Pages opt in by wrapping their content in <SiteChrome>. The style guide
 * deliberately does NOT use it, so it renders as a bare design-system doc.
 */
export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Faithful clone stays a centered 1200px column (the global body cap was
    // removed so /improved can go full-bleed).
    <div className="mx-auto w-full max-w-site">
      <ScrollToTop />
      <LogoBar />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
