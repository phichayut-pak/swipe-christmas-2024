interface IResultInfo {
    id: string;
    title: string;
    desc: string;
    subDesc: string;
    image: string;
    download: string;
    downloadTh: string;
    downloadVdo: string;
    downloadVdoTh: string;
    matchings: string[];
}

interface IResult {
    [key: string]: IResultInfo;
}

export const results: IResult = {
    "1": {
        id: "1",
        title: "Cool Freezy Snowman",
        desc: "A cool, independent soul who enjoys observing with a calm vibe",
        subDesc:
            "You bring a cool breeze to every holiday moment! You are a uniquely cool and independent person, finding happiness in observing others. Your cozy home is your relaxed haven that makes you feel calm and at peace.",
        image: "/image/result-cool-freezy-snowman.png",
        matchings: ["2", "3", "4"],
        download: "/background/result-cool-freezy-snowman.png",
        downloadTh: "/background/result-cool-freezy-snowman-th.png",
        downloadVdo: "/video/result-cool-freezy-snowman.mp4",
        downloadVdoTh: "/video/result-cool-freezy-snowman-th.mp4",
    },
    "2": {
        id: "2",
        title: "A Fluffy polar bear",
        desc: "A neutral character who always seeks balance in every situation",
        subDesc:
            "You are the mediator when things get complicated.  You always create a perfect balance of happiness and peace! but you love to be with people and enjoy some quiet time too. Your presence brings positivity to your friends!",
        image: "/image/result-poppy-doppy-penguin.png",
        matchings: ["2", "5", "7"],
        download: "/background/result-just-a-penguin.png",
        downloadTh: "/background/result-just-a-penguin-th.png",
        downloadVdo: "/video/just-a-penguin.mp4",
        downloadVdoTh: "/video/just-a-penguin-th.mp4",
    },
    "3": {
        id: "3",
        title: "Bravery Nutcracker",
        desc: "A heart-warming leader who everyone relies on",
        subDesc:
            "You are the quiet strength everyone relies on. Your bravery and discipline help you bring peace to even the most chaotic situations >< You have your own charm and your presence always make people feel calm and pleasant",
        image: "/image/result-artistic-pine-tree.png",
        matchings: ["1", "5", "8"],
        download: "/background/result-artistic-pine-tree.png",
        downloadTh: "/background/result-artistic-pine-tree-th.png",
        downloadVdo: "/video/result-artistic-pine-tree.mp4",
        downloadVdoTh: "/video/result-artistic-pine-tree-th.mp4",
    },
    "4": {
        id: "4",
        title: "Aesthetic Pine Tree",
        desc: "A modern artist who blends creativity with social charm.",
        subDesc:
            "You’re the aesthetics heart of the holidays! With your modern vibes and creative touch, you light up every room with a style. You love being around people just enough to share your artistic vibes, but you also treasure moments of calm to let your creativity flow.",
        image: "/image/result-little-elves.png",
        matchings: ["2", "7", "9"],
        download: "/background/result-little-elves.png",
        downloadTh: "/background/result-little-elves-th.png",
        downloadVdo: "/video/result-little-elves.mp4",
        downloadVdoTh: "/video/result-little-elves-th.mp4",
    },
    "5": {
        id: "5",
        title: "Twinny Marshmallow",
        desc: "A fun spirit who thrives vibrant friendships.",
        subDesc:
            "You’re the fun, playful one who’s always sticking close to your friends! With your trendy style and youthful energy, you bring joy to everyone that you meet!",
        image: "/image/result-dizzy-glittering-champagne.png",
        matchings: ["10", "8", "7"],
        download: "/background/result-dizzy-glittering-champagne.png",
        downloadTh: "/background/result-dizzy-glittering-champagne-th.png",
        downloadVdo: "/video/result-dizzy-glittering-champagne.mp4",
        downloadVdoTh: "/video/result-dizzy-glittering-champagne-th.mp4",
    },
    "6": {
        id: "6",
        title: "Glamorously Ballerina",
        desc: "glamorous soul who shines with beauty and elegance",
        subDesc:
            "You are glamorous and cutesy, always catching people’s attention with your elegance and beauty! Your graceful movements and charms always create positive vibes to your friends!",
        image: "/image/result-naughty-sock.png",
        matchings: ["4", "10", "9"],
        download: "/background/result-naughty-sock.png",
        downloadTh: "/background/result-naughty-sock-th.png",
        downloadVdo: "/video/result-naughty-sock.mp4",
        downloadVdoTh: "/video/result-naughty-sock-th.mp4",
    },
    "7": {
        id: "7",
        title: "Twisty Candy Cane",
        desc: "A lively one who brings joy to every gathering",
        subDesc:
            "You’re the life of the party! You are always full of energy and fun because you know how to turn every moment into a celebration. With your extroverted nature and love for a good time, you make sure everyone’s having the best party during the holidays!",
        image: "/image/result-gingerbread-eatery-cookie.png",
        matchings: ["5", "10", "6"],
        download: "/background/result-gingerbread-eatery-cookie.png",
        downloadTh: "/background/result-gingerbread-eatery-cookie-th.png",
        downloadVdo: "/video/result-gingerbread-eatery-cookie.mp4",
        downloadVdoTh: "/video/result-gingerbread-eatery-cookie-th.mp4",
    },
    "8": {
        id: "8",
        title: "Glowy North Star",
        desc: "An adventurous spirit who seeks energy from new places!",
        subDesc:
            "You’re the adventurous spirit lighting up the holidays! You are always ready to explore and bring excitement to every occasion. With your active nature and boundless energy, you keep things moving and bring a sense of wonder to every holiday adventure.",
        image: "/image/result-cozy-santa.png",
        matchings: ["10", "9", "5"],
        download: "/background/result-cozy-santa.png",
        downloadTh: "/background/result-cozy-santa-th.png",
        downloadVdo: "/video/result-cozy-santa.mp4",
        downloadVdoTh: "/video/result-cozy-santa-th.mp4",
    },
    "9": {
        id: "9",
        title: "Santa baby",
        desc: "A playful mysterious soul who leaves a lasting impression.",
        subDesc:
            "You are the hidden magic of Christmas!  Your playful, mysterious nature keeps people guessing, and every time you appear, it’s a moment to treasure. You bring a sense of excitement and wonder that can’t be found anywhere else.",
        image: "/image/result-trendy-tasty-reindeer.png",
        matchings: ["10", "6", "8"],
        download: "/background/result-trendy-tasty-reindeer.png",
        downloadTh: "/background/result-trendy-tasty-reindeer-th.png",
        downloadVdo: "/video/result-trendy-tasty-reindeer.mp4",
        downloadVdoTh: "/video/result-trendy-tasty-reindeer-th.mp4",
    },
    "10": {
        id: "10",
        title: "Trendy Tasty Reindeer",
        desc: "A stylish trendsetter who loves aesthetics and cool vibes.",
        subDesc:
        "You’re always the trendsetter! You inspire others with your fashionable choices and love for all things aesthetic. Whether it’s a chic café to visit or exploring the latest trends, you make everything look effortlessly stylish and cool.",
        image: "/image/result-trendy-tasty-reindeer.png",
        matchings: ["9", "8", "6"],
        download: "/background/result-trendy-tasty-reindeer.png",
        downloadTh: "/background/result-trendy-tasty-reindeer-th.png",
        downloadVdo: "/video/result-trendy-tasty-reindeer.mp4",
        downloadVdoTh: "/video/result-trendy-tasty-reindeer-th.mp4",
    },
  };
  