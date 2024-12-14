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
    <section
      className={`flex relative items-end mb-4 ${
        pathname === "/waiting" ? "justify-center" : "justify-between"
      }`}
    >
      <div className={`w-7 ${pathname === "/waiting" && "hidden"}`}>
        <label className="relative flex items-center cursor-pointer select-none w-max">
          <input
            type="checkbox"
            onClick={clickChangeSound}
            className="transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer w-14 h-7"
          />
          <span className="absolute text-xs font-medium text-black uppercase right-2">
            <Image
              priority
              alt="music-off"
              src="/icon/music-off.png"
              height={22}
              width={20}
              style={{ height: 22, width: 20 }}
            />
          </span>
          <span className="absolute text-xs font-medium text-black uppercase right-8">
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
        className={`absolute translate-x-1/2 right-1/2 flex top-10 items-center justify-center text-sm text-center font-bold font-inter ${
          isTextBlack ? "text-black" : "text-white"
        }`}
      >
        Swipe 2024
      </p>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-1 mb-2">
          <Image
            priority
            alt="logo"
            src="/logo/logo-punpro.png"
            height={28}
            width={28}
            className="size-7"
          />
          <Image
            priority
            alt="logo"
            src="/logo/logo-camphub.png"
            height={28}
            width={28}
            className="size-7"
          />
        </div>
        <div
          className={`text-white w-14 ${pathname === "/waiting" && "hidden"}`}
        >
          <label className="relative flex items-center cursor-pointer select-none w-max">
            <input
              onClick={changeLanguage}
              type="checkbox"
              className="transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer w-14 h-7"
            />
            <span className="absolute text-xs font-medium text-black uppercase right-2">
              TH
            </span>
            <span className="absolute text-xs font-medium text-black uppercase right-8">
              EN
            </span>
            <span
              className={`w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gradient-to-r from-[#faa98f] to-[#fd6cab] ${
                locale === "en" ? "translate-x-7" : ""
              }`}
            ></span>
          </label>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
