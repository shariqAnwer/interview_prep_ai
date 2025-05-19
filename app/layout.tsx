import "./globals.css";

import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Prepwise",
  description: "An AI powered plattform for mock interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // dark is used to set the dark theme permanently
    <html lang="en" className={`dark ${monaSans.variable}`}>
      <body
        className={`${monaSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
