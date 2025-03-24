import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MOODPICKS",
  description: "A Movie Pick for Your Mood",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable}`}>
          <Header />

          <main className="min-h-screen">{children}</main>

          <footer className="bg-blue-300 py-10">
            <div className="container mx-auto px-4 text-center text-red-600">
              <p>Made with ❤️ by BlackPanda.</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
