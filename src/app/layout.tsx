import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { Recursive } from "next/font/google";
import type { Metadata } from "next/types";
import "./globals.css";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casecobra",
  description:
    "Capture your favorite memories with your own, one-of-one phone case. Casecobra allows you to protect your memories, not just your phone case.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <Navbar />

        <main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">{children}</div>
        </main>

        <Footer />

        <Toaster />
      </body>
    </html>
  );
}
