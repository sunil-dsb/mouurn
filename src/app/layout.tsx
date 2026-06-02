import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mouurn — for every kind of loss",
  description:
    "When someone you love is in pain and words aren't enough, mouurn helps you show up. Real ways to help, real words to say, and a place to hold it all.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
        />
      </head>
      {/* Chrome (logo/nav/footer) is opt-in per page via <SiteChrome>, so the
          style guide renders bare. */}
      <body>{children}</body>
    </html>
  );
}
