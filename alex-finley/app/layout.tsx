import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "./components/NavBar";
import { Pet } from "./components/Pet";
import { ErrorBoundary } from "react-error-boundary";

export const metadata: Metadata = {
  title: "Who is Alex?",
  description: "???",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const defaultIndex = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  return (
    <ErrorBoundary
      fallback={<div>Oops... need to work on my coding skills.</div>}
    >
      <html lang="en">
        <body className="flex flex-row">
          <NavBar />
          {/* <main>
            <div className="max-w-max">{children}</div>
            <Pet defaultIndex={defaultIndex} />
          </main> */}
        </body>
      </html>
    </ErrorBoundary>
  );
}
