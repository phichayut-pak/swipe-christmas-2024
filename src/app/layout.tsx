import type { Metadata } from "next";
import "@/styles/globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Swipe",
  description: "Share your vibes with Swipe!🌟",
  icons: "/icon/swipe-logo.svg",
  openGraph: {
    title: "Swipe",
    description: "Share your vibes with Swipe!🌟",
    siteName: "Swipe",
    images: [
      {
        url: "https://swipe-christmas-web.vercel.app/background/og-image.png",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
