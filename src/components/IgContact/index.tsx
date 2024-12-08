"use client";
import Image from "next/image";
import { trackClickIg } from "@/mixpanels";

function IgContact() {
  const clickToIg = () => {
    trackClickIg();
    window.open("https://www.instagram.com/swipesvibes", "_blank");
  };
  return (
    <button
      className="flex gap-2 justify-center align-middle"
      onClick={clickToIg}
    >
      <Image
        priority
        alt="logo"
        src="/icon/ig-logo.svg"
        height={30}
        width={30}
      />
      <span className="text-md font-extralight">swipesvibes</span>
    </button>
  );
}

export default IgContact;
