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
        url: "https://swipe-christmas-2024.vercel.app/web_bg.png",
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
