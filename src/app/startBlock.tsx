import ButtonSupport from "../lib/supportButton"
import { getUserLanguage } from '../lib/languageDetect';

export default function StartBlock() {
  const userLanguage = getUserLanguage();
  const rusText =
    "Привет. Этот сайт - своеобразное портфолио, где можно отслеживать переводы, которыми я занимаюсь. Уже больше 5 лет я учу японский, и чтобы совершенствовать его, я занимаюсь переводами интересных мне вещей. Я не профессиональный переводчик, работаю один и сам редактирую все свои тексты. Не стоит ждать от них качества уровня профессиональных работ. Я всегда благодарен за критику, поскольку это позволяет мне улучшать мои навыки и совершенствовать переводы. Потому если вы нашли ошибки или хотите предложить что-то — не стесняйтесь писать.";
  const engText =
    "Welcome to my portfolio site, where I showcase my translations. I have been studying Japanese for over 5 years, and to enhance my skills, I translate content that piques my interest. Please note that I am not a professional translator, and I work independently, editing all my texts myself. Therefore, the quality of my translations may not match that of a professional. I value constructive criticism as it helps me improve. If you spot any errors or have suggestions, feel free to share them. If you use my subs anywhere, plese, don't cut off my name. It makes me sad.";
  if (userLanguage === "en") {
    return (
      <>
        <div>{engText}</div>
        <button id="supportButton" className="margin">Support</button>
        <ButtonSupport />
      </>
    );
  } else {
    return (
      <>
        <div>{rusText}</div>
        <button id="supportButton" className="margin">Поддержать</button>
        <ButtonSupport />
      </>
    );
  }
}
