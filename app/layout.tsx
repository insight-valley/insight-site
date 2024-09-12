import "./css/style.css";

import { Inter, Architects_Daughter } from "next/font/google";
import { Metadata } from "next";
import Header from "@/components/ui/header";
import Metrics from "./metrics";
import { OPEN_GRAPH, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: OPEN_GRAPH,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-dark-purple-100 text-gray-200 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          {/* <Banner /> */}
          <Metrics />
        </div>
      </body>
    </html>
  );
}
