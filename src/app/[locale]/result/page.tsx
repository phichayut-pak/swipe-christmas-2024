import ResultPage from "@/views/result/Page";
import { NextIntlClientProvider, useMessages } from "next-intl";
import pick from "lodash/pick"

function Result() {
    const messages = useMessages();

    return (
        <NextIntlClientProvider messages={pick(messages, "result")}>
            <ResultPage />
        </NextIntlClientProvider>
    );
}

export default Result;
