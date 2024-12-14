"use client";
import { useRouter } from "@/navigation";
import { useAppDispatch } from "@/store/hook";
import { selectQuiz } from "@/store/quiz";
import { setFinish } from "@/store/quiz";

const Quiz10Button = ({
  children,
  text,
}: {
  children: string;
  text: string;
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const onSubmit = () => {
    dispatch(selectQuiz({ quiz: "10", ans: text }));
    dispatch(setFinish());
    console.log(text);
    router.push(`/surprise`);
  };

  return (
    <button
      onClick={onSubmit}
      className={`h-9 flex items-center justify-center rounded-xl w-full text-center text-lg font-bold font-inter text-white bg-gradient-to-r from-[#FAA98F] to-[#FD67AD]`}
    >
      {children}
    </button>
  );
};

export default Quiz10Button;
