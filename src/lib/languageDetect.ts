// utils/language.js

export function getUserLanguage() {
    // ユーザーの言語を取得
    const userLang = process.env.LANG || process.env.LANGUAGE || process.env.LC_ALL || process.env.LC_MESSAGES;
  
    // 言語コードの形式を確認（例: 'en-US'）
    const langCode = userLang ? userLang.split('_')[0] : 'default'; // デフォルトは英語
  
    return langCode;
  }
  