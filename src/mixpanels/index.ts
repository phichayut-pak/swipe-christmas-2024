import { mixpanel } from "./mixpanelConfig";

export const trackLandingPage = () => {
    mixpanel.track("Visit Landing Page");
};

export const trackWhoAreYouPage = () => {
    mixpanel.track("Visit User Page");
};

export const trackPinPage = () => {
    mixpanel.track("Visit Pin Page");
};

export const trackMapPage = () => {
    mixpanel.track("Visit Map Page");
};

export const trackResultPage = () => {
    mixpanel.track("Visit Result Page");
};

export const trackAboutUsPage = () => {
    mixpanel.track("Click About Us Page");
};

export const trackClickIg = () => {
    mixpanel.track("Click IG page");
};

export const trackClickShare = (source: string) => {
    mixpanel.track("Click Share button " + source);
};

export const trackClickRestart = () => {
    mixpanel.track("Click Restart button");
};

export const trackClickChangeLang = (lang: string) => {
    mixpanel.track(`Change language to ${lang}`);
};

export const trackClickTurnOffOnMusic = (isTurnOn: boolean) => {
    isTurnOn
    ? mixpanel.track("Click Turn On Music")
    : mixpanel.track("Click Turn Off Music");
};

export const trackQuizPage = (quiz: string) => {
    mixpanel.track("Visit Quiz Page " + quiz);
};
