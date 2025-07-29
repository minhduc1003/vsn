import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/context/ModalContext";

export const metadata: Metadata = {
  title: "ArtSchool Reject",
  description: "ArtSchool Reject - Independent Creative Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
      >
        <ModalProvider>
          <Header />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
