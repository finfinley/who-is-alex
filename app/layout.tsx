import type { Metadata } from "next";
import "./globals.css";



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
      <body className="flex flex-row">{children}</body>
    </html>
  );
}
