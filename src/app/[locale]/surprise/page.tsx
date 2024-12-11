
import IgContact from "@/components/IgContact"
const Surprise = () => {
    return (
        <div
            className="w-full min-h-[100dvh] p-10 bg-center bg-no-repeat overflow-x-hidden"
            style={{
                backgroundImage: "url('/SPECIAL PRIZES/image.png')",
                backgroundSize: "cover",
            }}
        >
            <div className="">
                <div className="rounded-lg shadow-lg px-6 text-white p-3 font-bold bg-gradient-to-r from-[#FAA98F] to-[#FD67AD] absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-white">
                    Go to Result
                </div>  
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <IgContact></IgContact>
            </div>

        </div>
    )
}

export default Surprise