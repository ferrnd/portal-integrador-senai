import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portal Educacional SESI/SENAI",
  description: "Lobby que reúne os portais de matérias do Ensino Médio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
