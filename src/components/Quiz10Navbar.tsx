"use client"
import Image from "next/image"
import {useRouter} from "@/navigation"

const Quiz10Navbar = () => {
    const router = useRouter();
    const onClickBack = () => {
        router.push(`/quiz/9`);
      };

    return (
        <div className="flex items-center justify-between">
          <Image
            priority
            alt="back"
            src="/icon/back.svg"
            height={30}
            width={30}
            style={{ height: 30, width: 30 }}
            onClick={onClickBack}
          />

        <div className={`h-9 flex items-center px-3 rounded-xl text-2xl font-christmas text-white bg-gradient-to-r from-[#FAA98F] to-[#FD67AD]`}>
          <p> {`QUESTION 10`}</p>
        </div>
        <div className="w-7" />
      </div>
    )
}

export default Quiz10Navbar