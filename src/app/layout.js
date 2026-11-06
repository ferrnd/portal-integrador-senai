import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-principal",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Portal Integrador | SENAI",
  description:
    "Página inicial do Projeto Integrador Final do SENAI Valinhos. Acesse os portais de Geografia, Biologia, História, Português e Filosofia.",
  openGraph: {
    siteName: "Projeto Integrador · SENAI Valinhos",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={barlow.variable}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
