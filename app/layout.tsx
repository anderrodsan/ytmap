import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/custom.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/navigation/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plex World",
  description: "Mapa interactivo para seguir los viajes de plex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col w-full h-[100dvh] overflow-x-hidden">
            <NavBar />
            <main className="flex-1 overflow-y-auto gradient1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
