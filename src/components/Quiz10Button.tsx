"use client"
import { useRouter } from "@/navigation"

const Quiz10Button = ({ children } : { children : string}) => {
    const router = useRouter();
    const onSubmit = () => {
        router.push(`/surprise`);
    };

    return (
        <button onClick={onSubmit} className={`h-9 flex items-center justify-center rounded-xl w-full text-center text-lg font-bold font-inter text-white bg-gradient-to-r from-[#FAA98F] to-[#FD67AD]`}>
            {children}
        </button>
    )
}

export default Quiz10Button