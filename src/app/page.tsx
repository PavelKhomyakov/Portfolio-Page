import styles from "./page.module.css";
import StartBlock from "./startBlock";
import List from "./list";

export default function Home() {

  return (
    <main className={styles.main}>
      <center>
        <h1>
          <div>Translated by SOTAR</div>
        </h1>
      </center>
      <StartBlock />
      <b>
        <div>
        <h2><center><b>Фильмы Кодзи Сираиси:</b></center></h2>
        </div>
      </b>
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
      <footer>
        <div>
          <div className="right"><a href="https://twitter.com/s0tar">My Twitter</a></div>
        </div>
      </footer>
    </main>
  );
}
