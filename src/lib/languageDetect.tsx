"use client";
import { useEffect, useState } from 'react';

export function getUserLanguage() {
  const [userLanguage, setUserLanguage] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userLang = window.navigator.language;
      const langCode = userLang ? userLang.split('_')[0] : 'amogus'; // デフォルトは英語
      console.log('Language:', userLang);
      setUserLanguage(langCode);
    }
  }, []);

  return userLanguage;
}
