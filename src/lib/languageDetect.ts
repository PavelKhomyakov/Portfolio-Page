import { language } from "./enums"

export function getUserLanguage() {

  if (typeof window !== 'undefined') {
    const userLang = window.navigator.language;
    const langCode = userLang ? userLang.split('_')[0] : language.ENGLISH;

    return langCode;
  }
}
