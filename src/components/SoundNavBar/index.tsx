"use client";
import { trackClickTurnOffOnMusic } from "@/mixpanels";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { switchSound } from "@/store/sound";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavBarSoundProp {
  isTextBlack?: boolean;
}

function NavBarSound({ isTextBlack = false }: NavBarSoundProp) {
  const pathname = usePathname()
  const dispatch = useAppDispatch();
  const soundSelection = useAppSelector((store) => store.sound);

  const clickChangeSound = () => {
    trackClickTurnOffOnMusic(!soundSelection.turnOn);
    dispatch(switchSound());
  };

  return (
    <section className="flex justify-between items-center mb-4 z-10">
      <div className="w-7">
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
      </div>
      <p
        className={`text-sm  text-center text-white font-bold`}
      >
        Swipe 2024
      </p>
      <div className="w-7" />
    </section>
  );
}

export default NavBarSound;
