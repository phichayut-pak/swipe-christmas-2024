interface IQuizInfo {
  question: string;
  answer: string[];
}

interface IQuiz {
  [key: string]: IQuizInfo;
}

export const quizs: IQuiz = {
  "1": {
    question: "Are you an ___ ?",
    answer: ["Extrovert", "Introvert", "Ambivert"],
  },
  "2": {
    question: "How would your friends describe you?",
    answer: ["Leader🫡", "Tua mom❤️‍🔥", "Very thoughtful 🎨", "Demeure🩷"],
  },
  "3": {
    question: "What's your social style?",
    answer: [
      "Party animal 🎉",
      "Enjoy being observer 🌿",
      "Social Butterfly🫶🏼",
      "Solo☕️",
    ],
  },
  "4": {
    question: "WWhich season do you love the most?",
    answer: ["Spring 🌸", "Summer ☀️", "Autumn 🍂", "Winter ❄️"],
  },
  "5": {
    question: "If you are at a Party, Choose your drinks!",
    answer: [
      "/QUIZ/GLASS 1.png",
      "/QUIZ/GLASS 2.png",
      "/QUIZ/GLASS 3.png",
      "/QUIZ/GLASS 4.png",
      "/QUIZ/GLASS 5.png",
    ],
  },
  "6": {
    question: "You are going out today! What Scent of Perfume will you use?",
    answer: ["Floral🌸", "Fruity🍋", "Wood🪵", "Fresh bubble 🫧"],
  },
  "7": {
    question: "It’s time for decorations, Choose your favorite ornaments!",
    answer: [
      "/QUIZ/ORNAMENTS 1.png",
      "/QUIZ/ORNAMENTS 2.png",
      "/QUIZ/ORNAMENTS 3.png",
      "/QUIZ/ORNAMENTS 4.png",
    ],
  },
  "8": {
    question: "Who do you want to be with on Christmas day?",
    answer: ["Friends 🎅", "Lover 💑", "Family 👨‍👩‍👦", "Pets 🐶", "Alone 😎"],
  },
  "9": {
    question:
      "What type of Christmas gift do you want to give to your beloved person?",
    answer: [
      "Handmade gifts 🎁",
      "Time Spending🩵",
      "Clothes & Accessories 👗",
      "Gift cards 💳",
    ],
  },
};
