import type { Metadata } from "next";
import { Platypi } from "next/font/google";
import "./globals.css";

const platypi = Platypi({
  variable: "--font-platypi",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heywall Marketplace",
  description:
    "Buy, sell, and discover great deals. Connect with your community and find amazing products on Heywall Marketplace.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${platypi.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
