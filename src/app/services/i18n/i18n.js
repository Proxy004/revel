import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import * as Localization from "expo-localization";

const languageDetector = {
  type: "languageDetector",
  async: true, // flags below detection to be async
  detect: async (callback) => {
    const { locale } = await Localization.getLocalizationAsync();
    callback(locale);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        hello: { title: "Welcom" },
      },
      de: {},
    },
    ns: ["common"],
    defaultNS: "common",

    debug: true,
  });

export default i18n;
