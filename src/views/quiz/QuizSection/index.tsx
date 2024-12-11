"use client";

import { quizs } from "../quiz";
import { useAppSelector, useAppDispatch } from "@/store/hook";
import { clearQuiz, selectQuiz } from "@/store/quiz";
import { useRouter } from "@/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import QuizSelectionButton from "../QuizSelection";
import QuizImageSelection from "../QuizImgSelection";
import Image from "next/image";
import { trackQuizPage } from "@/mixpanels";
import { useLocale } from "next-intl";
interface QuizCardProps {
  quizNumber: string;
  question: string;
  answers: string[];
}

function QuizSection({ quizNumber, question, answers }: QuizCardProps) {
  const router = useRouter();
  const locale = useLocale();
  const quizSelection = useAppSelector((store) => store.quiz);
  const dispatch = useAppDispatch();
  const choices = quizs[quizNumber];

  const imageChoices = ["7", "5"]

  useEffect(() => {
    trackQuizPage(quizNumber);
    if (
      +quizNumber - 1 > Object.keys(quizSelection.answers).length||
      quizSelection.isFinished ||
      quizSelection.user.name === ""
    ) {
      dispatch(clearQuiz());
      localStorage.removeItem("quiz");
      router.push("/");
    }
  }, []);

  const onClickAnswer = (ans: number) => {
    dispatch(
      selectQuiz({
        quiz: quizNumber,
        ans,
      })
    );
    setTimeout(
      () =>
        +quizNumber < Object.keys(quizs).length+1 // for christmas 2024, there are 9 quizzes and 1 short answer
          ? router.push(`/quiz/${+quizNumber + 1}`)
          : router.push("/pin"),
      300
    );
  };

  const onClickBack = () => {
    router.push(`/quiz/${+quizNumber - 1}`);
  };

  return (
    <section>
      <div className="flex items-center justify-between">
        {quizNumber === "1" ? (
          <div className="w-7" />
        ) : (
          <Image
            priority
            alt="back"
            src="/icon/back.svg"
            height={30}
            width={30}
            style={{ height: 30, width: 30 }}
            onClick={onClickBack}
          />
        )}
        <div className={`h-9 flex items-center px-3 rounded-xl text-2xl font-christmas text-white bg-gradient-to-r from-[#FAA98F] to-[#FD67AD]`}>
          <p> {`QUESTION ${quizNumber}`}</p>
        </div>
        <div className="w-7" />
      </div>
      <motion.div
        initial={{ y: 75, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <section className=" bg-white rounded-2xl p-4 w-full mt-4 flex flex-col gap-3">
          <p className={`text-2xl text-center font-bold ${locale == "th" && "font-prompt"}`}>{question}</p>
          {imageChoices.includes(quizNumber) && (
            <section className="flex flex-col gap-2 mt-3">
              <div className="flex gap-3 justify-center">
                {choices.answer.slice(0, 3).map((ans, index) => (
                  <QuizImageSelection
                    key={ans}
                    src={ans}
                    onClick={() => onClickAnswer(index)}
                    isSelected={index === quizSelection.answers[quizNumber]}
                  />
                ))}
              </div>
              <div className="flex gap-2 justify-center">
                {choices.answer.slice(3, 5).map((ans, index) => (
                  <QuizImageSelection
                    key={ans}
                    src={ans}
                    onClick={() => onClickAnswer(index + 3)}
                    isSelected={index + 3 === quizSelection.answers[quizNumber]}
                  />
                ))}
              </div>
            </section>
          )}
          {!imageChoices.includes(quizNumber) && (
            <section className="flex flex-col gap-2 mt-3">
              {answers.map((ans, index) => (
                <QuizSelectionButton
                  key={`answer-${index}`}
                  isSelected={index === quizSelection.answers[quizNumber]}
                  onClick={() => onClickAnswer(index)}
                >
                  {ans}
                </QuizSelectionButton>
              ))}
            </section>
          )}
        </section>
      </motion.div>
    </section>
  );
}

export default QuizSection;
