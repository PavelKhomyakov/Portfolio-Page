import React, { useState } from 'react';
import { getUserLanguage } from '../lib/languageDetect';
import { language, updates } from "../lib/enums"

const LatestNewsButton = () => {
    const userLanguage = getUserLanguage();
    const [showModal, setShowModal] = useState(false);

    const toggleNewsModal = () => {
        setShowModal(!showModal);
    };
    if (userLanguage === language.RUSSIAN) {
        return (
            <div>
                <button className='buttonNews' onClick={toggleNewsModal}>
                    {showModal ? updates.CLOSE_RU : updates.UPDATES_RU}
                </button>
                {showModal && (
                    <div className='marginSmall'>
                        <i>
                            <p><b>29.03.2024</b> ー Обнаружил, что в субтитрах к 「Mystery Man」 есть логические ошибки. Исправлю в ближайшее время.</p>
                            <p><b>21.05.2024</b> ー Субтитры к фильму 「Never Send Me, Please」 добавлены</p>
                            <p><b>24.06.2024</b> ー Исправил ссылки. Сейчас нет ссылки только для 「Kimyou Kitan」. Будет позже.</p>
                        </i>
                    </div>
                )}
            </div>
        );
    } else {
        return (
            <div>
                <button className='buttonNews' onClick={toggleNewsModal}>
                    {showModal ? updates.CLOSE_ENG : updates.UPDATES_ENG}
                </button>
                {showModal && (
                    <div className='marginSmall'>
                        <i>
                            <p><b>29.03.2024</b> ー Found out that subs for 「Mystery Man」 have some logic mistakes. Will fix shortly.</p>
                            <p><b>21.05.2024</b> ー Added subs for a movie 「Never Send Me, Please」.</p>
                            <p><b>24.06.2024</b> ー Fixed some links. Now only 「Kimyou Kitan」 link is missing, will be added later.</p>
                        </i>
                    </div>
                )}
            </div>
        );
    }
};

export default LatestNewsButton;
