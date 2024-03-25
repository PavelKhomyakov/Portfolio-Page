export function getUserLanguage(): string {
    if (typeof navigator !== 'undefined') {
      const userLang = navigator.language;
      return userLang.split('-')[0]; // Extract the language code (e.g., 'en' from 'en-US')
    }
    return 'en'; // Fallback to a default language
  }
  