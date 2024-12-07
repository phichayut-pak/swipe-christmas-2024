"use client";

import { useAppSelector } from "@/store/hook";
import { useEffect, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Snowfall from "react-snowfall";

function SnowFall() {

  const player = useRef<any>();
  const soundSelection = useAppSelector((store) => store.sound);

  const onClickPause = () => player.current.audio.current.pause();
  const onClickPlay = () => player.current.audio.current.play();

  useEffect(() => {
    soundSelection.turnOn && !soundSelection.isInitial && onClickPlay();
    !soundSelection.turnOn && !soundSelection.isInitial && onClickPause();
  }, [soundSelection]);

  return (
    <>
      <AudioPlayer
        src={"https://swipe-christmas-asset.vercel.app/ChristmasbyAlexGrohl.mp3"}
        ref={player}
        style={{ display: "none" }}
        loop
        crossOrigin="anonymous"
      />
      
      <Snowfall snowflakeCount={50} />
    </>
  );
}

export default SnowFall;
