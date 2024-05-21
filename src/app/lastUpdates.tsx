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
                            <p><b>29.03.2024</b> ー Обнаружил, что в субтитрах к &quot;Mystery Man&quot; есть логические ошибки. Исправлю в ближайшее время.</p>
                            <p><b>21.05.2014</b> ー Субтитры к фильму &quot;Never Send Me, Please&quot; добавлены</p>
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
                            <p><b>29.03.2024</b> ー Found out that subs for &quot;Mystery Man&quot; have some logic mistakes. Will fix shortly.</p>
                            <p><b>21.05.2014</b> ー Added subs for a movie &quot;Never Send Me, Please&quot;.</p>
                        </i>
                    </div>
                )}
            </div>
        );
    }
};

export default LatestNewsButton;
