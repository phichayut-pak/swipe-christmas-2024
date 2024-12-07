import { default as useMixpanel } from "mixpanel-browser";

useMixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || "");

export const mixpanel = useMixpanel;
