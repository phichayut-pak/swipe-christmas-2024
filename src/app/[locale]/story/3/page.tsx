"use client"
import NavBar from "@/components/Navbar"
import { useLocale } from "next-intl"
import Image from "next/image"

const Story3 = () => {
    const locale = useLocale()
    return (
        <div
            className="relative w-full min-h-[100dvh] p-10 bg-center bg-no-repeat overflow-x-hidden"
            style={{
            backgroundImage: "url('/STORY 3/BACKGROUND.png')",
            backgroundSize: "cover",
            }}
        >
            <div className="absolute w-full top-0 left-0 p-10 z-10">
                <NavBar locale={locale}></NavBar> 
            </div>
            
            <div className="absolute inset-0 " style={{ height: 'calc(100% - 100px)' }}> {/* Adjusted height */}
                <Image
                    alt="globe"
                    src="/STORY 3/GLOBE.png"
                    width={1500} // Adjusted width
                    height={1500} // Adjusted height
                    className="absolute -left-16 top-0 h-auto bg-center min-w-[140%]" // Tailwind CSS classes to make the width go further than the screen
                    // Added id for reference
                                    />
                                    
                {/* <Image
                    alt="tag"
                    src="/STORY 3/TAG.png"
                    width={300}
                    height={300}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2" // Adjusted position to stick with the bottom of the globe image and center in x direction
                /> */}
            </div>
        </div>  
    )
}

export default Story3