// styles
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

// components
import Header from "@/components/header";
import PageTransition from "@/components/page-transition";
import StairTransition from "@/components/stair-transition";

// meta data
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "FitHub",
  description: "Fitness App Design",
};

// font
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable}`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
