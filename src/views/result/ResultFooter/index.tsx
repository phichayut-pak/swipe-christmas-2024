"use client";

import Button from "@/components/Button";
import { useRouter } from "@/navigation";
import { trackClickRestart, trackClickShare } from "@/mixpanels";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PanInfo, motion, useAnimate } from "framer-motion";

interface ResultFooterProp {
  downloadPath: string;
  downloadVideoPath: string;
}

function ResultFooter({ downloadPath, downloadVideoPath }: ResultFooterProp) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();

  function handleDragEnd(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) {
    if (info.offset.y < -80) {
      animate(scope.current, { y: -250 }, { duration: 1 });
      router.push("/swipe");
    } else {
      animate(scope.current, { y: 0, opacity: 1 }, { duration: 0.5 });
    }
  }
  const ref = useRef<any>();

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [open]);

  return (
    <section>
      <div className="flex justify-between gap-5 mb-3">
        <div className="w-full relative">
          <Button
            className="w-full"
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            Share
          </Button>

          {open && (
            <div
              ref={ref}
              className="absolute mt-2 bg-gray-100 rounded-lg p-1 flex gap-1 h-auto z-50 w-full"
            >
              <button className="text-center w-full hover:bg-gray-50 rounded-lg p-2">
                <a
                  type="button"
                  className="h-full w-full"
                  href={downloadPath}
                  download
                  onClick={() => {
                    trackClickShare("Image");
                  }}
                >
                  <Image
                    priority
                    alt="image-icon"
                    src="/icon/image-icon.png"
                    height={20}
                    width={20}
                    className="mx-auto"
                    style={{ height: 20, width: 20 }}
                  />
                  Image{" "}
                </a>
              </button>
              <button className="text-center w-full hover:bg-gray-50 rounded-lg p-2">
                <a
                  type="button"
                  className="h-full w-full"
                  href={downloadVideoPath}
                  download
                  onClick={() => {
                    trackClickShare("Video");
                  }}
                >
                  <Image
                    priority
                    alt="image-vdo"
                    src="/icon/video-icon.png"
                    height={20}
                    width={20}
                    className="mx-auto"
                    style={{ height: 20, width: 20 }}
                  />
                  Video
                </a>
              </button>
            </div>
          )}
        </div>

        <button
          className="w-1/2 border-2 font-sans rounded-lg shadow-inner h-8  font-bold bg-white text-gray-300"
          onClick={() => {
            trackClickRestart();
            router.push("/");
          }}
        >
          Restart
        </button>
      </div>
    </section>
  );
}

export default ResultFooter;
