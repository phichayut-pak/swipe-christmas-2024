import IgContact from "@/components/IgContact";
import React from "react";
import NavBar from "@/components/Navbar";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Quiz10Navbar from "@/components/Quiz10Navbar";
import Quiz10Button from "@/components/Quiz10Button";

function Quiz10() {
  const t = useTranslations("quiz");
  const locale = useLocale();

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
      <div className="mt-10 px-10 flex gap-y-5 flex-col justify-center items-center w-full">
        <div className="text-2xl text-center font-bold text-white text-bold">
            {t(`quiz-10-problem`)}
        </div>

        <div className="flex justify-center items-center relative w-full h-auto">
          <Image
            alt="note"
            src="/QUIZ/NOTE.png"
            width={279}
            height={165}
            style={{ width: "279px", height: "165px" }}
          />
          <textarea
            placeholder={`${locale == "en" ? "Write your wishes here!" : "เขียนคำอวยพรตรงนี้เลย!" }`}
            className="text-sm bg-transparent absolute top-10 left-9 w-[75%] h-1/2 resize-none"
          />
        </div>

        <Quiz10Button>
          {t(`quiz-10-submit`)}
        </Quiz10Button>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <IgContact />
      </div>
    </div>
  );
}

export default Quiz10;
