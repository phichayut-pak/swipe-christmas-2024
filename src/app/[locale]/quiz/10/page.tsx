"use client";
import IgContact from "@/components/IgContact";
import React, { useState } from "react";
import NavBar from "@/components/Navbar";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Quiz10Navbar from "@/components/Quiz10Navbar";
import Quiz10Button from "@/components/Quiz10Button";
import { useAppDispatch } from "@/store/hook";
import { selectQuiz } from "@/store/quiz";
import { userSelector } from "@/store/quiz";
import { useSelector } from "react-redux";

function Quiz10() {
  const locale = useLocale();
  const user = useSelector(userSelector);
  const dispatch = useAppDispatch();
  const [textareaValue, setTextareaValue] = useState("");

  return (
    <div
      className="w-full min-h-[100dvh] p-10"
      style={{
        backgroundImage: 'url("/QUIZ/BACKGROUND QUIZ 2.png")',
        backgroundSize: "100% 100%",
      }}
    >
      <NavBar locale={locale} />
      <Quiz10Navbar></Quiz10Navbar>
      <div className="text-2xl text-center font-bold text-white text-bold w-full mt-10">
        {/* {t(`quiz-10-problem`)} */}
        {locale === "en"
          ? "It’s time for wishes, write your wish to Santa here! Ho Ho Ho!🎄"
          : "ถึงเวลาแห่งการขอพรแล้ว ขอพรอะไรก็ได้แล้วส่งให้ Santa กัน! Ho Ho Ho🎄"}
      </div>
      <div className="mt-8 px-7 flex gap-y-5 flex-col justify-center items-center w-full">
        <div className="flex justify-center items-center relative w-full h-auto ">
          <p className="absolute left-6 lp:left-11 top-5 text-xs font-serif italic text-noteText">
            To: Santa
          </p>
          <Image
            alt="note"
            src="/QUIZ/NOTE_edited.png"
            width={279}
            height={165}
            style={{ width: "279px", height: "180px" }}
          />
          <textarea
            placeholder={`${
              locale == "en"
                ? "Write your wishes here!"
                : "เขียนคำอวยพรตรงนี้เลย!"
            }`}
            className="text-sm bg-transparent absolute top-10 left-9 lp:left-11 w-[75%] h-1/2 resize-none font-serif focus:outline-none"
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
          />
          <p className="absolute right-6 bottom-5 lp:right-11 text-xs font-serif italic text-noteText">
            From: {user.name}
          </p>
        </div>

        <Quiz10Button text={textareaValue}>
          {locale === "en" ? "Sent to Santa!" : "ส่งให้ Santa!"}
        </Quiz10Button>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <IgContact />
      </div>
    </div>
  );
}

export default Quiz10;
