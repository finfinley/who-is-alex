import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "./components/NavBar";


export const metadata: Metadata = {
  title: "Who is Alex?",
  description: "???",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-row">
        <NavBar />
        <main>
          <div className="max-w-max">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
