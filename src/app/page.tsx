"use client";

import styles from "../styles/page.module.css";
import StartBlock from "./startBlock";
import List from "./list";
import { getUserLanguage } from '../lib/languageDetect';
import LatestNewsButton from './lastUpdates';
import { home, language } from "../lib/enums";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  const userLanguage = getUserLanguage();
  const isRussian = userLanguage === language.RUSSIAN;

  return (
    <main className={styles.main}>
      <center>
        <h1>
          <div>{home.SITE_NAME}</div>
        </h1>
      </center>
      <StartBlock />
      <LatestNewsButton />
      <div>
        <h2><center><b>{isRussian ? home.HEADER_RU : home.HEADER_ENG}</b></center></h2>
      </div>
      <div>
        <h3><b>{isRussian ? home.SENRITSU_RU : home.SENRITSU_ENG}</b></h3>
      </div>
      {isRussian ? (
        <> {/* Russian */}
          <div>
            <a
              href="https://mega.nz/folder/MlFFyKoY#uzLR6ETqf0Oj8jrgwXh-Qw"
              target="_blank"
            >
              Ссылка на субтитры для всех фильмов отдельно
            </a>
          </div>
        </>
      ) : (
        <> {/* English */}
          <p>You can watch all Senritsu Kaiki shorts on YouTube with subtitles <a href="https://www.youtube.com/playlist?list=PL85UM6A-okWjZ8B4JL5lqhquYFo95zXrs" target="_blank">here</a>.</p>
          <div>Previously all movies were translated from RU to ENG <mark>without me</mark> and with machine translators. Now I re-translated everything by myself (only 4th is in progress), so the quality is higher.</div>
          <div>All links for the main movies lead to the Russian torrent tracker. But you can download movies from it without any problems. You can get all the english subs             <a
            href="https://mega.nz/folder/E9FCVSbZ#rmzr0tlNmnY3PLN2Y7OtAg"
            target="_blank"
          >
            here
          </a>.</div>
        </>
      )}
      <List tag="Kowasugi" />
      <div>
        <h3><b>{isRussian ? home.OTHER_RU : home.OTHER_ENG}</b></h3>
      </div>
      <List tag="Shiraishi" />
      <div>
        <h3><b>{isRussian ? home.PROCESS_RU : home.PROCESS_ENG}</b></h3>
      </div>
      <ul><li>ー</li></ul>

      <footer>
        <div>
          <div className="right">Contact: <a href="https://twitter.com/s0tar">Twitter</a></div>
        </div>
      </footer>
    </main>
  );
}
