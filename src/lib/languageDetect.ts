"Use Client";
export function getUserLanguage() {
  // ユーザーの言語を取得
  if (typeof window !== 'undefined') {
    const userLang = window.navigator.language;

    // 言語コードの形式を確認（例: 'en-US'）
    const langCode = userLang ? userLang.split('_')[0] : 'ass'; // デフォルトは英語
    console.log(process.env.LANG);
    console.log('Language:', userLang);
    return langCode;
  } else {
    return "ass"
  }
}
