import type { Metadata } from "next";
import { REM, Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const rem = REM({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-rem",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// Utilisation d'une police système similaire en attendant SF Pro
const sfProSystem = {
  variable: "--font-sf-pro",
  style: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
};

export const metadata: Metadata = {
  title: "M-MOTORS - Votre concessionnaire de confiance",
  description:
    "Trouvez votre véhicule idéal parmi notre sélection de voitures d'occasion de qualité",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${rem.variable} ${inter.variable}`}
      style={sfProSystem.style}
      suppressHydrationWarning
    >
      <body className="font-inter">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
