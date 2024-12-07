import type { Metadata } from "next";
import "@/styles/globals.css";
import SnowFall from "@/components/SnowFall";
import StoreProvider from "@/store/StoreProvider";
import { notFound } from "next/navigation";
import Head from "next/head";
import {routing} from '@/i18n/routing';
import NavBar from "@/components/Navbar";
import { useRouter } from "next/navigation";

const locales = ["en", "th"];

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
    params: { locale },
}: {
    children: React.ReactNode;
    params: any;
}) {
    if (!locales.includes(locale as any)) notFound();
    return (
        <StoreProvider>
            <html lang={locale}>
                <body>
                    <main className="font-prompt container mx-auto max-w-[450px] min-h-[100dvh] bg-white">

                        <SnowFall />
                        {children}
                </main>
                </body>
            </html>
        </StoreProvider>
    );
}
