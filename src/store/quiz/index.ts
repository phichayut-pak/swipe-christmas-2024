import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface IAnswerState {
  [key: string]: number;
}

interface IUserState {
  name: string;
  age: string;
  gender: string;
  ig: string;
  mail: string;
}

interface IQuizState {
  answers: IAnswerState;
  user: IUserState;
  pin: string;
  isFinished: boolean;
}
interface IQuizAction {
  quiz: string;
  ans: any;
}

const initialState: IQuizState = {
  answers: {},
  user: { name: "", age: "", gender: "", ig: "", mail: "" },
  isFinished: false,
  pin: "",
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    selectQuiz: (state, action: PayloadAction<IQuizAction>) => {
      state.answers[action.payload.quiz] = action.payload.ans;
    },
    clearQuiz: (state) => {
      return initialState;
    },
    setUser: (state, action: PayloadAction<IUserState>) => {
      state.user = action.payload;
    },
    setPin: (state, action: PayloadAction<string>) => {
      state.pin = action.payload;
    },
    setFinish: (state) => {
      state.isFinished = true;
    },
  },
});

export const { selectQuiz, clearQuiz, setUser, setFinish, setPin } =
  quizSlice.actions;

export const quizSelector = (state: RootState) => state.quiz;

export const userSelector = (state: RootState) => state.quiz.user;

export default quizSlice.reducer;
