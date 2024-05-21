const worksAndLinks = [
  {
    id: 1,
    link: "https://rutracker.org/forum/viewtopic.php?t=6176424",
    work: "До Ужаса Страшные и Странные Файлы 01: Операция по захвату Кутисакэ-онна / Senritsu Kaiki File Kowasugi! File 01 - Operation Capture the Slit-Mouthed Woman",
    tag: "Kowasugi"
  },
  {
    id: 2,
    link: "https://mega.nz/folder/V5MXBSCL#YOXTKSyjSEa9lebvjKbuOw",
    work: "Короткометражка『Kudo's Secret』",
    tag: "Kowasugi"
  },
  {
    id: 3,
    link: "https://rutracker.org/forum/viewtopic.php?t=6186259",
    work: "До Ужаса Страшные и Странные Файлы 02: Дрожащий Призрак / Senritsu Kaiki File Kowasugi! File 02: Shivering Ghost",
    tag: "Kowasugi"
  },
  {
    id: 4,
    link: "https://mega.nz/folder/o9dwnKYY#1xyrYz6LrmHtQ5PNHZ9whg",
    work: "Короткометражка 『To the Other Side』",
    tag: "Kowasugi"
  },
  {
    id: 5,
    link: "https://mega.nz/folder/AwdzkBrK#cQ0gOi3negso6RkAzxOfkQ",
    work: "Короткометражка 『GOOD-BYE』",
    tag: "Kowasugi"
  },
  {
    id: 6,
    link: "https://mega.nz/folder/pgsknKAC#rgX00930jocGuUFQqC6e9Q",
    work: "Короткометражка 『Исчезнувшая Актриса — Анна Исибаси』",
    tag: "Kowasugi"
  },
  {
    id: 7,
    link: "https://rutracker.org/forum/viewtopic.php?t=6197808",
    work: "До Ужаса Страшные и Странные Файлы 03: Легенда о Каппа-Людоеде / Senritsu Kaiki File Kowasugi! File 03: Legend of a Human-Eating Kappa",
    tag: "Kowasugi"
  },
  {
    id: 8,
    link: "https://mega.nz/folder/w8UiWY6Y#Vv_BHFz9fKNE0ezzqwrA1g",
    work: "Короткометражка 『Mystery Man』",
    tag: "Kowasugi"
  },
  {
    id: 9,
    link: "https://rutracker.org/forum/viewtopic.php?t=6203850",
    work: "До Ужаса Страшные и Странные Файлы 04: Правда! Туалетная Ханако / Senritsu Kaiki File Kowasugi! File 04: The Truth! Hanako-san in the toilet",
    tag: "Kowasugi"
  },
  {
    id: 10,
    link: "https://mega.nz/folder/Ag8VhLaa#Q3owEUfysJpo-_moFzNFew",
    work: "Короткометражка 『Her Brother』",
    tag: "Kowasugi"
  },
  {
    id: 11,
    link: "https://rutracker.org/forum/viewtopic.php?t=6212412",
    work: "До Ужаса Страшные и Странные Файлы! Пролог Фильма: Правда про проклятие Ойвы / Senritsu Kaiki File Kowasugi! Preface: True Story of the Ghost of Yotsua",
    tag: "Kowasugi"
  },
  {
    id: 12,
    link: "https://rutracker.org/forum/viewtopic.php?t=6246194",
    work: "До Ужаса Страшные и Странные Файлы! Самый Страшный Фильм в Истории / Senritsu Kaiki File Kowasugi! The Most Terrifying Movie in History",
    tag: "Kowasugi"
  },
  {
    id: 13,
    link: "https://mega.nz/folder/48VX0Tra#d-8ReJVnzrAw8quZ5eLY2w",
    work: "Короткометражка 『Simokita 2014』",
    tag: "Kowasugi"
  },
  {
    id: 14,
    link: "https://rutracker.org/forum/viewtopic.php?t=6250691",
    work: "До Ужаса Страшные и Странные Файлы! Последняя Глава / Senritsu Kaiki File Kowasugi! Final Chapter",
    tag: "Kowasugi"
  },
  {
    id: 15,
    link: "https://mega.nz/folder/w1EBTS5K#qaqY2qUC7hD-RemNqC_zFw",
    work: "Короткометражка 『Message From Byond』",
    tag: "Kowasugi"
  },
  {
    id: 16,
    link: "https://mega.nz/file/U8kjXD5A#0Fkda02MK1dk2lIHP_R4XGqEwFbuF78PJv0yy4vPc_M",
    work: "Ещё Более Страшные и Странные Файлы 01: Коккури-сан / Senritsu Kaiki File Super Kowasugi! FILE 01: Kokkuri-san",
    tag: "Kowasugi"
  },
  {
    id: 17,
    link: "https://mega.nz/file/coU1nDoK#WeT5SVwuyzSqYu8Tmlf3zGG1R8W-XqnPIdRLkO0njFE",
    work: "Ещё Более Страшные и Странные Файлы 02: Мрачная и Странная История! Монстр Женщина-Змея / Senritsu Kaiki File Super Kowasugi! FILE 02: Dark Mystery! Monster Snake Woman",
    tag: "Kowasugi"
  },
  {
    id: 18,
    link: "https://mega.nz/folder/F1lyyIIY#g7sbelkjk6FGL5yLxSvy9w",
    work: "Короткометражка 『REST』",
    tag: "Kowasugi"
  },
  {
    id: 19,
    link: "https://rutracker.org/forum/viewtopic.php?t=6254381",
    work: "Ura Horror",
    tag: "Shiraishi"
  },
  {
    id: 20,
    link: "https://mega.nz/folder/JksigS6L#mNZLh_Y4vL3XQy1DvkL7qw",
    work: "Короткометражки Zetsuosore Taikan Kimodameshi",
    tag: "Shiraishi"
  },
  {
    id: 21,
    link: "https://rutracker.org/forum/viewtopic.php?t=6467991",
    work: "До Ужаса Страшный и Странный Мир / Senritsu Kaiki World Kowasugi",
    tag: "Kowasugi"
  },
  {
    id: 22,
    link: "",
    work: "Ultra Violent People",
    tag: "Shiraishi"
  },
  {
    id: 23,
    link: "",
    work: "Koji Shiraishi no Kimyou Kitan",
    tag: "Shiraishi"
  },
  {
    id: 24,
    link: "https://mega.nz/folder/h48HTYiA#9ZOdEWdoTK5qG8HvO37PTw",
    work: "Never Send Me, Please",
    tag: "Shiraishi"
  }
];

const worksAndLinksEng = [
  {
    id: 1,
    link: "https://rutracker.org/forum/viewtopic.php?t=6176424",
    work: "Senritsu Kaiki File Kowasugi! File 01 - Operation Capture the Slit-Mouthed Woman",
    tag: "Kowasugi"
  },
  {
    id: 2,
    link: "https://mega.nz/folder/V5MXBSCL#YOXTKSyjSEa9lebvjKbuOw",
    work: "Short『Kudo's Secret』",
    tag: "Kowasugi"
  },
  {
    id: 3,
    link: "https://rutracker.org/forum/viewtopic.php?t=6186259",
    work: "Senritsu Kaiki File Kowasugi! File 02: Shivering Ghost",
    tag: "Kowasugi"
  },
  {
    id: 4,
    link: "https://mega.nz/folder/o9dwnKYY#1xyrYz6LrmHtQ5PNHZ9whg",
    work: "Short 『To the Other Side』",
    tag: "Kowasugi"
  },
  {
    id: 5,
    link: "https://mega.nz/folder/AwdzkBrK#cQ0gOi3negso6RkAzxOfkQ",
    work: "Short 『GOOD-BYE』",
    tag: "Kowasugi"
  },
  {
    id: 6,
    link: "https://mega.nz/folder/pgsknKAC#rgX00930jocGuUFQqC6e9Q",
    work: "Short 『Missing Actress Anna Ishibashi』",
    tag: "Kowasugi"
  },
  {
    id: 7,
    link: "https://rutracker.org/forum/viewtopic.php?t=6197808",
    work: "Senritsu Kaiki File Kowasugi! File 03: Legend of a Human-Eating Kappa",
    tag: "Kowasugi"
  },
  {
    id: 8,
    link: "https://mega.nz/folder/w8UiWY6Y#Vv_BHFz9fKNE0ezzqwrA1g",
    work: "Short 『Mystery Man』",
    tag: "Kowasugi"
  },
  {
    id: 9,
    link: "https://rutracker.org/forum/viewtopic.php?t=6203850",
    work: "Senritsu Kaiki File Kowasugi! File 04: The Truth! Hanako-san in the toilet",
    tag: "Kowasugi"
  },
  {
    id: 10,
    link: "https://mega.nz/folder/Ag8VhLaa#Q3owEUfysJpo-_moFzNFew",
    work: "Short 『Her Brother』",
    tag: "Kowasugi"
  },
  {
    id: 11,
    link: "https://rutracker.org/forum/viewtopic.php?t=6212412",
    work: "Senritsu Kaiki File Kowasugi! Preface: True Story of the Ghost of Yotsua",
    tag: "Kowasugi"
  },
  {
    id: 12,
    link: "https://rutracker.org/forum/viewtopic.php?t=6246194",
    work: "Senritsu Kaiki File Kowasugi! The Most Terrifying Movie in History",
    tag: "Kowasugi"
  },
  {
    id: 13,
    link: "https://mega.nz/folder/48VX0Tra#d-8ReJVnzrAw8quZ5eLY2w",
    work: "Short 『Shimokita 2014』",
    tag: "Kowasugi"
  },
  {
    id: 14,
    link: "https://rutracker.org/forum/viewtopic.php?t=6250691",
    work: "Senritsu Kaiki File Kowasugi! Final Chapter",
    tag: "Kowasugi"
  },
  {
    id: 15,
    link: "https://mega.nz/folder/w1EBTS5K#qaqY2qUC7hD-RemNqC_zFw",
    work: "Short 『Message From Beyond』",
    tag: "Kowasugi"
  },
  {
    id: 16,
    link: "https://mega.nz/file/U8kjXD5A#0Fkda02MK1dk2lIHP_R4XGqEwFbuF78PJv0yy4vPc_M",
    work: "Senritsu Kaiki File Super Kowasugi! FILE 01: Kokkuri-san",
    tag: "Kowasugi"
  },
  {
    id: 17,
    link: "https://mega.nz/file/coU1nDoK#WeT5SVwuyzSqYu8Tmlf3zGG1R8W-XqnPIdRLkO0njFE",
    work: "Senritsu Kaiki File Super Kowasugi! FILE 02: Dark Mystery! Monster Snake Woman",
    tag: "Kowasugi"
  },
  {
    id: 18,
    link: "https://mega.nz/folder/F1lyyIIY#g7sbelkjk6FGL5yLxSvy9w",
    work: "Short 『REST』",
    tag: "Kowasugi"
  },
  {
    id: 19,
    link: "https://nyaa.si/view/1574757",
    work: "Ura Horror",
    tag: "Shiraishi"
  },
  {
    id: 20,
    link: "https://mega.nz/folder/JksigS6L#mNZLh_Y4vL3XQy1DvkL7qw",
    work: "Shorts 「Zetsuosore Taikan Kimodameshi」",
    tag: "Shiraishi"
  },
  {
    id: 21,
    link: "https://rutracker.org/forum/viewtopic.php?t=6467991",
    work: "Senritsu Kaiki World Kowasugi",
    tag: "Kowasugi"
  },
  {
    id: 22,
    link: "",
    work: "Noroi Removed Scenes",
    tag: "Shiraishi"
  },
  {
    id: 23,
    link: "",
    work: "Ultra Violent People",
    tag: "Shiraishi"
  },
  {
    id: 24,
    link: "",
    work: "Koji Shiraishi no Kimyou Kitan",
    tag: "Shiraishi"
  },
  {
    id: 25,
    link: "https://mega.nz/folder/h48HTYiA#9ZOdEWdoTK5qG8HvO37PTw",
    work: "Never Send Me, Please",
    tag: "Shiraishi"
  }
];

export { worksAndLinks, worksAndLinksEng };