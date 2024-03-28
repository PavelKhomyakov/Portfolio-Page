"Use Client";
export function getUserLanguage() {
  // ユーザーの言語を取得
  if (typeof window !== 'undefined') {
    const userLang = window.navigator.language;

    // 言語コードの形式を確認（例: 'en-US'）
    const langCode = userLang ? userLang.split('_')[0] : 'amogus'; // デフォルトは英語F
    console.log('Language:', userLang);
    return userLang;
  }
}
