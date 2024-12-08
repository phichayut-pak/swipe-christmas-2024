import NavBarSound from "@/components/SoundNavBar";
import SwipeUpButton from "@/components/SwipeUpButton";
import SoundButton from "@/components/SoundButton";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="w-full min-h-[100dvh] p-10 bg-center bg-no-repeat"
      style={{
      backgroundImage: "url('/STORY 1/bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center", // Ensures the image is centered
      backgroundRepeat: "no-repeat" // Prevents repeating the background
      }}
    >
      <section className="flex flex-col items-center text-white">
        <div className="w-full relative flex justify-center items-center">
          <div className="absolute left-0">
            <SoundButton></SoundButton>
          </div>
          <Image
            priority
            alt="logo"
            src="/icon/swipe-logo.svg"
            height={30}
            width={30}
            style={{ height: 30, width: 30 }}
          />
        </div>
        <h1 className="text-xl font-bold">Personality Test</h1>
        <h1 className="text-sm font-extralight">
          Swipe’s 2024 Christmas Edition
        </h1>
      </section>

      <section className="flex items-end absolute bottom-14 left-0 w-2/3 right-0 mx-auto">
        <SwipeUpButton />
      </section>
    </div>
  );
}
