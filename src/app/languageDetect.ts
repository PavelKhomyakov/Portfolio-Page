export function getUserLanguage(): string {

        const userLang = navigator.language;
        return userLang.split('-')[0]; // Extract the language code (e.g., 'en' from 'en-US')

}
