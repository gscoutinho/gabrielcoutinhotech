import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import db_info from "@/database/info.json" // info for the website
import NavBar from "@/components/NavBar"
import ActiveSectionContextProvider from "@/context/active-section-context";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GC.Tech",
  description: "Gabriel Coutinho - tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`p-2 flex flex-col items-center ${inter.className}`}>
        <ActiveSectionContextProvider>
          <NavBar>{db_info.NAV_ITENS}</NavBar>
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
