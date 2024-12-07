"use client";

import { useAppDispatch } from "@/store/hook";
import { clearQuiz } from "@/store/quiz";
import { PanInfo, motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { trackLandingPage } from "@/mixpanels";
import { useRouter } from "@/navigation";
import Image from "next/image";

function SwipeUpButton() {
  const router = useRouter();
  const [scope, animate] = useAnimate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    trackLandingPage();
  }, []);

  function handleDragEnd(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) {
    if (info.offset.y < -80) {
      animate(scope.current, { y: -250 }, { duration: 1 });
      router.push("/story/2");
    } else {
      animate(scope.current, { y: 0, opacity: 1 }, { duration: 0.5 });
    }
  }

  useEffect(() => {
    dispatch(clearQuiz());
    localStorage.removeItem("quiz");
  }, []);

  return (
    <motion.div
      style={{
        willChange: "transform",
        cursor: "grab",
      }}
      whileTap={{ cursor: "grabbing" }}
      layout
      transition={{ type: "spring", stiffness: 600, damping: 30 }}
      className="h-20 w-full text-center text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
    >
      <motion.div
        drag="y"
        dragDirectionLock
        onDragEnd={handleDragEnd}
        ref={scope}
      >
        <h1 className="text-4xl font-bold text-black font-poppins">Swipe Up!</h1>
        <h1 className="text-xl font-extralight text-black ">to begin your journey</h1>
        <section className="flex flex-col items-center rotate-180 ">
          <Image
            priority
            alt="arrow-down"
            src="/icon/arrow-down.svg"
            height={40}
            width={60}
            style={{ height: 40, width: 60 }}
            className=""
          />
        </section>
      </motion.div>
    </motion.div>
  );
}

export default SwipeUpButton;
