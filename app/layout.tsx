import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "PulseBoard Pro",
    template: "%s | PulseBoard Pro"
  },
  description:
    "A premium SaaS dashboard starter built for portfolio work, client delivery, and product launches.",
  metadataBase: new URL("https://pulseboard.example"),
  openGraph: {
    title: "PulseBoard Pro",
    description:
      "A premium SaaS dashboard starter built for portfolio work, client delivery, and product launches."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[rgb(var(--bg))] antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
