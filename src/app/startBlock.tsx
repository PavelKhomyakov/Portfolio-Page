import ButtonSupport from "../lib/supportButton"
import { getUserLanguage } from '../lib/languageDetect';
import { start, language } from "../lib/enums"

export default function StartBlock() {
  const userLanguage = getUserLanguage();
  const isRussian = userLanguage === language.RUSSIAN;

  return (
    <>
      <div>{isRussian ? start.START_RU : start.START_ENG}</div>
      <button id="supportButton" className="margin">{isRussian ? start.SUPPORT_RU : start.SUPPORT_ENG}</button>
      <ButtonSupport />
    </>
  );
}
