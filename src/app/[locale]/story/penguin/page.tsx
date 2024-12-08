"use client"

import NavBar from "@/components/Navbar"
import { useLocale } from "next-intl"
import Image from "next/image"
import IgContact from "@/components/IgContact"
import { useState } from "react"
import { userSelector } from "@/store/quiz"
import { useSelector } from "react-redux"
import { useRouter } from '@/navigation'

const PenguinPage = () => {
    const router = useRouter()
    const user = useSelector(userSelector)
    const [level, setLevel] = useState(1)
    const [choice, setChoice] = useState("")
    const [backgroundImage, setBackgroundImage] = useState("url('/STORY 5-7/PENGUIN_WITH_BG.png')")
    const locale = useLocale()

    const handleChoiceChange = (choice: string) => {
        if(choice == "yes") {
            setChoice("yes")
            setBackgroundImage("url('/STORY 5-7/HAPPY_PENGUIN.png')")

        } else {
            setChoice("no")
            setBackgroundImage("url('/STORY 5-7/SAD_PENGUIN.png')")
        }
    }

    return (
        <div className="relative w-full min-h-[100dvh] p-10 bg-center bg-no-repeat overflow-x-hidden"
            style={{
                backgroundImage: backgroundImage,
                backgroundSize: "cover",
            }}
        >
            { level === 1 && (

                <div className="gap-6 text-2xl font-bold text-center flex flex-col justify-center items-center absolute h-56 w-80 top-40 left-1/2 transform -translate-x-1/2 text-black">
                Hi, {user.name} <br/>
                I'm Penguinny!

                    <button onClick={() => setLevel(2)} className="shadow-lg text-center text-white text-xl rounded-lg py-2 px-8 bg-gradient-to-r from-[#FAA98F] to-[#FD67AD]">
                        Next
                    </button>

                </div>
            )}

            { level === 2 && (

                <div className="gap-6 text-2xl font-bold text-center flex flex-col justify-center items-center absolute h-56 w-80 top-40 left-1/2 transform -translate-x-1/2 text-black">
                    Are you ready to explore?

                    {choice === "" && (
                        
                        <div className="flex flex-col justify-center items-center gap-y-2">
                            <button onClick={() => handleChoiceChange("yes")} className="shadow-lg text-center text-white text-xl rounded-lg py-2 px-12 bg-gradient-to-r from-[#FAA98F] to-[#FD67AD]">
                                Yes
                            </button>

                            <button onClick={() => handleChoiceChange("no")} className="shadow-lg text-center text-white text-xl rounded-lg py-2 px-12 bg-black">
                                No
                            </button>
                        </div>
                    )}

                    {choice === "yes" && (
                        
                        <button onClick={() => router.push("/quiz/1")} className="shadow-lg text-center text-white text-2xl rounded-lg py-5 px-20 bg-gradient-to-r from-[#39D68E] to-[#29A85F]">
                                Yes!
                            </button>
                    
                    )}


                    {choice === "no" && (
                            
                            <div className="flex flex-col justify-center items-center gap-y-2">
                            <button onClick={() => router.push("/quiz/1")} className="shadow-lg text-center text-white text-xl rounded-lg py-2 px-12 bg-gradient-to-r from-[#FAA98F] to-[#FD67AD]">
                                Yes
                            </button>

                            <button onClick={() => router.push("/quiz/1")} className="shadow-lg text-center text-white text-xl rounded-lg py-2 px-12 bg-black">
                                Yes
                            </button>
                        </div>
                    )}

                </div>
            )}




            <div className="absolute w-full top-0 left-0 p-10 z-10">
                <NavBar locale={locale}></NavBar> 
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <IgContact></IgContact>
            </div>






            
        </div>
    )
}

export default PenguinPage