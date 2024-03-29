"use client";
import { useEffect } from 'react';
import { getUserLanguage } from './languageDetect';
import { language } from "../lib/enums"
export default function ButtonSupport() {
    const userLanguage = getUserLanguage();

    useEffect(() => {
        function handleClick() {
            if (userLanguage === language.RUSSIAN) {
                window.location.href = 'https://www.tinkoff.ru/cf/80Kkst81WRw';
            } else {
                window.location.href = 'https://ko-fi.com/sotar';
            }
            const clickCount = parseInt(localStorage.getItem('supportButtonCount') || '0') + 1;
            localStorage.setItem('supportButtonCount', clickCount.toString());
        }

        const button = document.getElementById('supportButton');
        if (button) {
            button.addEventListener('click', handleClick);
        }

        return () => {
            if (button) {
                button.removeEventListener('click', handleClick);
            }
        };
    }, []);

    return null; // This component doesn't render anything
}
