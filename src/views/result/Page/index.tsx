"use client";

import Image from "next/image";
import { useRouter } from "@/navigation";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hook";
import { results } from "@/views/result/results";
import NavBar from "@/components/Navbar";
import { calculateResult } from "@/views/result/utils/calculateType";
import { setFinish } from "@/store/quiz";
import { quizs } from "@/views/quiz/quiz";
import { useTranslations, useLocale } from "next-intl";
import { trackResultPage } from "@/mixpanels";
import ResultFooter from "../ResultFooter";

function Result() {
  const t = useTranslations("result");
  const [quizStorage, setQuizStorage] = useState("{}");
  const router = useRouter();
  const locale = useLocale();
  const dispatch = useAppDispatch();
  const quizSelection = useAppSelector((store) => store.quiz);
  const resultInfo =
    results[
      calculateResult(
        Object.keys(quizSelection.answers).length !== 0
          ? quizSelection.answers
          : JSON.parse(quizStorage)
      )
    ];

  const submitQuiz = async () => {
    const formData = new URLSearchParams();
    const fields = process.env.NEXT_PUBLIC_GOOGLE_FORM_FIELDS?.split(
      ","
    ) as string[];

    formData.append(fields[0], quizSelection.user.name);
    formData.append(fields[1], quizSelection.user.age);
    formData.append(fields[2], quizSelection.user.gender);
    formData.append(fields[3], quizSelection.user.mail);
    formData.append(fields[4], quizSelection.user.ig);
    for (let i = 1; i <= 10; i++) {
      formData.append(fields[i + 4], quizSelection.answers[i + ""] + "");
    }
    formData.append(fields[fields.length - 1], resultInfo.title);

    console.log(
      process.env.NEXT_PUBLIC_GOOGLE_FORM_URL + "?" + formData.toString()
    );

    await fetch(process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || "", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).catch();
  };

  useEffect(() => {
    if (
      Object.keys(quizSelection.answers).length === Object.keys(quizs).length &&
      !quizSelection.isFinished
    ) {
      trackResultPage();
      submitQuiz();
      localStorage.setItem("quiz", JSON.stringify(quizSelection.answers));
      dispatch(setFinish());
    } else {
      const quizTemp =
        typeof window !== "undefined"
          ? localStorage.getItem("quiz") || "{}"
          : "{}";

      setQuizStorage(quizTemp);

      // if (
      //     quizTemp === "{}" ||
      //     (typeof window !== "undefined" &&
      //     !quizSelection.isFinished &&
      //     !localStorage.getItem("quiz"))
      // )
      //     router.push("/");
    }
  }, []);

  return (
    <div
      className="w-full min-h-[100dvh] px-10 py-7 flex flex-col justify-center gap-0 bg-center bg-no-repeat bg-cover "
      style={{
        backgroundImage: `${
          resultInfo.id === "10"
            ? "url('/RESULT/BACKGROUND SANTA BABY.png')"
            : "url('/RESULT/BACKGROUND NORMAL.png')"
        }`,
      }}
    >
      <NavBar locale={locale} />

      <section className="flex flex-col justify-center w-full gap-2 px-4 py-1 align-middle rounded-2xl">
        <div className="flex flex-col items-center gap-1">
          <Image
            priority
            alt="logo"
            src="/WHAT IS SWIPE/SWIPE LOGO.png"
            height={30}
            width={30}
          />
          <p className="font-bold">{t("youAre")}</p>
          <p
            className={`font-bold text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#FD6FA4] to-[#FBD345] ${
              locale === "en" ? " font-christmas" : ""
            }`}
          >
            {resultInfo?.id ? t(`result-${resultInfo.id}-name`) : ""}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          {resultInfo?.id ? (
            <img
              alt={resultInfo.title}
              src={resultInfo.image}
              style={{ height: 190 }}
            />
          ) : (
            <div style={{ height: "190px" }} />
          )}

          <p className="text-base italic leading-5">
            {resultInfo?.id ? t(`result-${resultInfo.id}-title`) : ""}
          </p>
          <p
            className={`font-extralight ${
              locale === "en" ? "text-xs" : "text-md"
            }`}
          >
            {resultInfo?.id ? t(`result-${resultInfo.id}-desc`) : ""}
          </p>
        </div>

        <div className="text-center">
          <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FD6FA4] to-[#FBD345]">
            {t("matchingPeers")}
          </p>
          <div className="flex justify-center gap-4 mt-3">
            {resultInfo?.id && (
              <>
                {resultInfo.matchings.map((matching, index) => (
                  <Image
                    priority
                    key={`matching-${matching}-img`}
                    alt={results[resultInfo.matchings[index]].title}
                    src={results[resultInfo.matchings[index]].image}
                    height={97}
                    width={104}
                    style={{ width: 104, height: 97 }}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </section>
      {resultInfo?.id && (
        <ResultFooter
          downloadPath={resultInfo.download}
          downloadVideoPath={resultInfo.downloadVdo}
        />
      )}
    </div>
  );
}

export default Result;
