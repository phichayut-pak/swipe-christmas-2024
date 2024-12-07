"use client";
import { trackClickChangeLang, trackClickTurnOffOnMusic } from "@/mixpanels";
import { usePathname, useRouter } from "@/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { switchSound } from "@/store/sound";
import Image from "next/image";

interface NavBarProp {
    locale: string;
    isTextBlack?: boolean;
}
function NavBar({ locale, isTextBlack = false }: NavBarProp) {
    const pathname = usePathname();
    const router = useRouter();
    const dispatch = useAppDispatch();
    const soundSelection = useAppSelector((store) => store.sound);

    const changeLanguage = () => {
        trackClickChangeLang(locale == "en" ? "th" : "en");
        router.push(pathname, { locale: locale == "en" ? "th" : "en" });
    };

    const clickChangeSound = () => {
        trackClickTurnOffOnMusic(!soundSelection.turnOn);
        dispatch(switchSound());
    };

    return (
        <section className="flex items-center justify-between mb-4">
        <div className="w-7 ">
            <label className="flex items-center relative w-max cursor-pointer select-none">
            <input
                type="checkbox"
                onClick={clickChangeSound}
                className="border-2 appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full bg-white"
            />
            <span className="absolute font-medium text-xs uppercase right-2 text-black">
                <Image
                priority
                alt="music-off"
                src="/icon/music-off.png"
                height={22}
                width={20}
                style={{ height: 22, width: 20 }}
                />
            </span>
            <span className="absolute font-medium text-xs uppercase right-8 text-black">
                <Image
                priority
                alt="music-on"
                src="/icon/music-on.png"
                height={15}
                width={15}
                style={{ height: 15, width: 15 }}
                />
            </span>
            <span
                className={`w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gradient-to-r from-[#faa98f] to-[#fd6cab] ${
                soundSelection.turnOn ? "translate-x-7" : ""
                }`}
            ></span>
            </label>
        </div>{" "}
        <p
            className={`text-sm  text-center font-bold font-inter ${
            isTextBlack ? "text-black" : "text-white"
            }`}
        >
            Swipe 2024
        </p>
        <div className="text-white w-14">
            <label className="flex items-center relative w-max cursor-pointer select-none">
            <input
                onClick={changeLanguage}
                type="checkbox"
                className="border-2 appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full bg-white"
            />
            <span className="absolute font-medium text-xs uppercase right-2 text-black">
                TH
            </span>
            <span className="absolute font-medium text-xs uppercase right-8 text-black">
                EN
            </span>
            <span
                className={`w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gradient-to-r from-[#faa98f] to-[#fd6cab] ${
                locale === "en" ? "translate-x-7" : ""
                }`}
            ></span>
            </label>
        </div>
        </section>
  );
}

export default NavBar;
