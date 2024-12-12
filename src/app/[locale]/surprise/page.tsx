"use client"
import IgContact from "@/components/IgContact"
import NavBar from "@/components/Navbar"
import { useLocale } from "next-intl"
import Image from "next/image"
import { useRouter } from "@/navigation"
const Surprise = () => {
    const locale = useLocale()
    const router = useRouter()
    return (
        <div
            className="w-full min-h-[100dvh] p-10 bg-center bg-no-repeat overflow-x-hidden"
            style={{
                backgroundImage: "url('/SPECIAL PRIZES/BACKGROUND.png')",
                backgroundSize: "cover",
            }}
        >

            <NavBar locale={locale}></NavBar>

            {/* Title */}
            <div className="w-full text-center font-inter font-bold italic text-2xl text-white flex justify-center items-center">
                Share Quiz &
                <br></br> Get Free Gifts!
            </div>

            {/* Box */}
            <div className="w-full relative flex flex-col justify-center items-center">
                <Image
                    alt="surprise"
                    src="/SPECIAL PRIZES/PRIZES.png"
                    width={317}
                    height={473}
                >

                </Image>

                <div className="absolute font-inter font-bold italic text-white text-xl bottom-0">
                    SUPER EASY!
                </div>
            </div>



            <div className="w-full flex justify-center items-center">
                <button onClick={() => router.push("/waiting") }className="p-3 w-1/2 text-center mt-8 rounded-lg shadow-lg text-white font-bold bg-gradient-to-r from-[#FAA98F] to-[#FD67AD]">
                    Go to Result
                </button>  
            </div>


            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <IgContact></IgContact>
            </div>

        </div>
    )
}

export default Surprise