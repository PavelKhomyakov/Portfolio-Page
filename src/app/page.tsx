"use client";
import styles from "../styles/page.module.css";
import StartBlock from "./startBlock";
import List from "./list";
import { getUserLanguage } from '../lib/languageDetect';

export default function Home() {
  const userLanguage = getUserLanguage();
  let locale = Intl.DateTimeFormat().resolvedOptions().locale;
  console.log('locale:', locale);

  return (
    <main className={styles.main}>
      <center>
        <h1>
          <div>Translated by SOTAR</div>
        </h1>
      </center>
      <StartBlock />
      
      <div>{userLanguage}</div>
      <div>{locale}</div>
      {userLanguage === "ru-RU" ? (
        <> {/* Russian */}
          <div>
            <h2><center><b>Фильмы Кодзи Сираиси:</b></center></h2>
          </div>
          <div>
            <h3><b>Серия Senritsu Kaiki:</b></h3>
          </div>
          <div>
            <a
              href="https://mega.nz/folder/MlFFyKoY#uzLR6ETqf0Oj8jrgwXh-Qw"
              target="_blank"
            >
              Ссылка на субтитры для всех фильмов отдельно
            </a>
          </div>
          <List tag="Kowasugi" />
          <div>
            <h3><b>Остальное:</b></h3>
          </div>
          <List tag="Shiraishi" />
          <b>
            <div>
              <h3><b>В процессе:</b></h3>
            </div>
            <ul><li>ー</li></ul>
          </b>
        </>
      ) : (
        <> {/* English */}
          <div>
            <h2><center><b>Koji Shiraishi&#39;s movies:</b></center></h2>
          </div>
          <div>
            <h3><b>Senritsu Kaiki Files:</b></h3>
          </div>
          <p>You can watch all Senritsu Kaiki shorts on YouTube with subtitles <a href="https://www.youtube.com/playlist?list=PL85UM6A-okWjZ8B4JL5lqhquYFo95zXrs" target="_blank">here</a>.</p>
          <div>Previously all movies were translated from RU to ENG <mark>without me</mark> and with machine translators. Now I re-translated everything by myself (only 4th is in progress), so the quality is higher.</div>
          <div>All links for the main movies lead to the Russian torrent tracker. But you can download movies from it without any problems. You can get all the english subs             <a
            href="https://mega.nz/folder/E9FCVSbZ#rmzr0tlNmnY3PLN2Y7OtAg"
            target="_blank"
          >
            here
          </a>.</div>
          <List tag="Kowasugi" />
          
          <div>
            <h3><b>Other Movies:</b></h3>
          </div>
          <List tag="Shiraishi" />
          <b>
            <div>
              <h3><b>In Process:</b></h3>
            </div>
            <ul><li>ー</li></ul>
          </b>
        </>
      )}
      <footer>
        <div>
          <div className="right">Contact: <a href="https://twitter.com/s0tar">Twitter</a></div>
        </div>
      </footer>
    </main>
  );
}
