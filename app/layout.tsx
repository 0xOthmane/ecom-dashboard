import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ModalProvider } from "@/components/providers/ModalProvider";

import "./globals.css";
import { ToastProvider } from "@/components/providers/ToastProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider />
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
