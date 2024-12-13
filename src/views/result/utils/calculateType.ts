import { IAnswerState } from "@/store/quiz";
import { quizPoint } from "./quizPoint";

export const calculateResult = (answers: IAnswerState): string => {
  if (Object.keys(answers).length === 0) return "";
  let resultPoint: {
    [key: string]: number;
  } = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
  };

  for (const [key, value] of Object.entries(answers)) {
    // Ignore non-numeric keys or keys greater than "9"
    if (isNaN(Number(key)) || Number(key) > 9) {
      continue;
    }

    const quizPointInfo = quizPoint[key][value];
    let index = 1;
    for (const [keyP, valueP] of Object.entries(quizPointInfo)) {
      resultPoint[index + ""] = resultPoint[index + ""] + valueP;
      index++;
    }
  }

  let result = "1";
  let maxP = resultPoint[result];

  for (const [key, value] of Object.entries(resultPoint)) {
    if (value > maxP) {
      maxP = value;
      result = key;
    }
  }

  return result;
};
