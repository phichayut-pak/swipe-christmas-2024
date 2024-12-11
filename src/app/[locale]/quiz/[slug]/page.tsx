import IgContact from "@/components/IgContact";
import React from "react";
import QuizSection from "@/views/quiz/QuizSection";
import NavBar from "@/components/Navbar";
import { useTranslations, useLocale } from "next-intl";
import { quizs } from "@/views/quiz/quiz";

function Quiz({ params }: { params: { slug: string } }) {
  const t = useTranslations("quiz");
  const locale = useLocale();
  const quizImages = ["5", "7"]

  return (
    <div
      className="w-full min-h-[100dvh] p-10"
      style={{
        backgroundImage: `url('/QUIZ/BACKGROUND QUIZ 1.png')`,
        backgroundSize: "100% 100%",
      }}
    >
      <NavBar locale={locale} />
      <QuizSection
        quizNumber={params.slug}
        question={t(`quiz-${params.slug}-problem`)}
        answers={
          !quizImages.includes(params.slug)
            ? quizs[params.slug].answer.map((_, i) =>
                t(`quiz-${params.slug}-answer-${i}`)
              )
            : []
        }
      />
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <IgContact />
      </div>
    </div>
  );
}

export default Quiz;
