import type { Metadata } from "next";
import { Bungee, Poppins, Permanent_Marker } from "next/font/google";
import "./globals.css";
import MusicPlayer from "@/components/Hero/MusicPlayer/MusicPlayer";
import { Lilita_One } from "next/font/google";

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-title",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-body",
});

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marker",
});

const lilita = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lilita",
});

export const metadata: Metadata = {
  title: "LTK Magazine",
  description: "Karaokê do Clã",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${bungee.variable} ${poppins.variable} ${marker.variable} ${lilita.variable}`}
      >
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}
