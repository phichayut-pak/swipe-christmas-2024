import type { Metadata } from "next";
import "@/styles/globals.css";
import SnowFall from "@/components/SnowFall";
import StoreProvider from "@/store/StoreProvider";
import { notFound } from "next/navigation";
import Head from "next/head";
import {routing} from '@/i18n/routing';
import NavBar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

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
            url: "https://swipe-christmas-2024.vercel.app/web_bg.png",
            width: 800,
            height: 600,
        },
        ],
        type: "website",
    },
};

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
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
