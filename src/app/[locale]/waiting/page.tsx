"use client"
import NavBar from "@/components/Navbar"
import { useLocale } from "next-intl"
import Image from "next/image"
import IgContact from "@/components/IgContact"
import { useRouter } from "@/navigation"
import { useEffect } from "react"

const Waiting = () => {
    const locale = useLocale()
    const router = useRouter()

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push(`/result`)
        }, 3000) // Adjust the timeout duration as needed

        return () => clearTimeout(timer)
    }, [locale, router])

    return (
        <div
            className="flex justify-center items-center w-full min-h-[100dvh] p-10 bg-center bg-no-repeat overflow-x-hidden"
            style={{
                backgroundImage: "url('/LOADING PAGE/BACKGROUND.png')",
                backgroundSize: "cover",
            }}
        >

            <div className="absolute inset-0 top-10">
                <NavBar locale={locale}></NavBar>
            </div>
            <div className="flex flex-col items-center justify-center">

                <Image alt="candy cane"
                src="/LOADING PAGE/CANDY CANE.png"
                width={137}
                height={124}
                className="animate-giggle"
                ></Image>

                <div className="mt-3 text-sm text-white font-inter ">
                    Moment please!
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <IgContact></IgContact>
            </div>
        </div>
    )
}

export default Waiting