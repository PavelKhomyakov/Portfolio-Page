import React, { useState } from 'react';
import { getUserLanguage } from '../lib/languageDetect';

const LatestNewsButton = () => {
    const userLanguage = getUserLanguage();
    const [showModal, setShowModal] = useState(false);

    const toggleNewsModal = () => {
        setShowModal(!showModal);
    };
    if (userLanguage === "ru") {
        return (
            <div>
                <button className='buttonNews' onClick={toggleNewsModal}>
                    {showModal ? 'Закрыть' : 'Последние обновления'}
                </button>
                {showModal && (
                    <div className='marginSmall'>
                        <i>
                            <p><b>29.03.2024</b> ー Обнаружил, что в субтитрах к "Mystery Man" есть логические ошибки. Исправлю в ближайшее время.</p>
                            <p><b></b></p>
                        </i>
                    </div>
                )}
            </div>
        );
    } else {
        return (
            <div>
                <button className='buttonNews' onClick={toggleNewsModal}>
                    {showModal ? 'Close Updates' : 'Latest Updates'}
                </button>
                {showModal && (
                    <div className='marginSmall'>
                        <i>
                            <p><b>29.03.2024</b> ー Found out that subs for "Mystery Man" have some logic mistakes. Will fix shortly.</p>
                            <p><b></b></p>
                        </i>
                    </div>
                )}
            </div>
        );
    }
};

export default LatestNewsButton;
