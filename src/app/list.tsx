import { worksAndLinks, worksAndLinksEng } from '../db/listOfWorks';
import { getUserLanguage } from './languageDetect';

interface Work {
  id: number;
  tag: string;
  link: string;
  work: string;
}

interface Props {
  tag: string;
}

export default function List({ tag }: Props) {
  const userLanguage = getUserLanguage();
  let filteredList;

  if (userLanguage === "ru") {
    filteredList = worksAndLinks.filter((work: Work) => work.tag === tag);
  } else {
    filteredList = worksAndLinksEng.filter((work: Work) => work.tag === tag);
  }

  const listItems = filteredList.map(work => <li key={work.id}><a href={work.link} target="_blank">{work.work}</a></li>);

  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}