import { worksAndLinks } from '../db/listOfWorks';

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
  const filteredList = worksAndLinks.filter((work: Work) => work.tag === tag);
  const listItems = filteredList.map(work => <li key={work.id}><a href={work.link} target="_blank">{work.work}</a></li>);

  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}