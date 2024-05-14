// start id with 100000000000001
// In the author section i am gonna to put the names of the director of the orquestra and soloist of the concerto
// I don't want to change how i filter the list so I need the key of author in my objects.
// Same goes for genres
let completedMusic = [
  {
    id: 100000000000001,
    name: "Festival Pianissimo",
    author: "Andrea Lucchesini / Ligia Amadio",
    program: [
      {
        name: "Concierto para piano Nº 1 en re menor op. 15",
        composer: "Johannes Brahms",
      },
      {
        name: "Sinfonía Nº 3 en fa mayor op. 90",
        composer: "Johannes Brahms",
      },
    ],
    review: ``,
    genres: ["Orquesta Filarmónica de Montevideo", "2019"],
    favourite: false,
    score: 7,
  },
  {
    id: 100000000000002,
    name: "Jóvenes Talentos",
    author:
      "Bruno Genta / Azusa Saito / Lincoln Sena / Ervino Rieger / Martín Sosa",
    program: [
      {
        name: 'Preludio del acto I "La Sulamita"',
        composer: "Cesar Cortinas",
      },
      {
        name: "Concierto para violín, op. 64, en mi menor",
        composer: "Felix Mendelssohn",
      },
      {
        name: "Sinfonía Nº4, op 36, en fa menor",
        composer: "P.I. Tchaikovsky",
      },
    ],
    review: `La cuarta sinfonía es muy buena y el concierto de violín de Mendelssohn es de mis favoritos así que fue una combinación espectacular`,
    genres: ["Orquesta Filarmónica de Montevideo", "2020"],
    favourite: false,
    score: 8,
  },
  {
    id: 100000000000003,
    name: "Brahms",
    author: "Soyoung Yoon / Martín Garcia",
    program: [
      {
        name: "Epitafio",
        composer: "Luís Jure",
      },
      {
        name: "Concierto para violín",
        composer: "Johannes Brahms",
      },
      {
        name: "Sinfonía Nº2",
        composer: "Johannes Brahms",
      },
    ],
    review: `Muy buen concierto de violín, especialmente el tercer movimiento. Excelente interpretación de la solista.`,
    genres: ["Orquesta Filarmónica de Montevideo", "2023"],
    favourite: true,
    score: 10,
  },
  {
    id: 100000000000004,
    name: "La filarmónica Y Cuatro Pesos de Propina",
    author: "Cuatro Pesos / Martín Garcia",
    program: [
      {
        name: "Canciones varias en representación de toda la carrera musical de cuatro pesos.",
        composer: "Cuatro Pesos / Arreglos de Franco Polimeni",
      },
    ],
    review: `Antes de ir a este concierto nunca había escuchado canciones de cuatro pesos y me terminaron encantando. ¡Excelente noche!`,
    genres: ["Orquesta Filarmónica de Montevideo", "2023"],
    favourite: true,
    score: 9,
  },
  {
    id: 100000000000005,
    name: "Brasil en Concierto",
    author: "Eiko Senda / Élida Gencarelli / Ligia Amadio",
    program: [
      {
        name: "Suite pernambucana",
        composer: "César Guerra-Peixe",
      },
      {
        name: "Concierto para piano",
        composer: "Antonio Mastrogiovanni",
      },
      {
        name: "Igor Stravinski",
        composer: 'Suite de "El pájaro de fuego"',
      },
      {
        name: "Canciones de la Selva del Amazonas",
        composer: "Heitor Villa-Lobos",
      },
    ],
    review: `Fue muy lindo tener a Ligia Amadio dirigiendo nuevamente a la orquesta pero en esta ocasión el programa no me interesó tanto como en otras ocasiones. Especialmente el concierto para piano que era la disonancia en persona.`,
    genres: ["Orquesta Filarmónica de Montevideo", "2023"],
    favourite: false,
    score: 6,
  },
  {
    id: 100000000000006,
    name: "El arte del violín",
    author: "Leticia Moreno / Maestro Martín García",
    program: [
      {
        name: "Fantasía de Carmen",
        composer: "Pablo Sarasate",
      },
      {
        name: "Tzigane",
        composer: "Mauricio Ravel",
      },
      {
        name: "Sinfonía Nº1",
        composer: "Johannes Brahms",
      },
    ],
    review: `Dos excelentes y difíciles piezas de violín que Leticia interpretó de forma espectacular. Además de contar con la primera sinfonía de Brahms que es muy buena y para mí destaca el último movimiento que me da una muy particular sensación de paz`,
    genres: ["Orquesta Filarmónica de Montevideo", "2023"],
    favourite: true,
    score: 9,
  },
  {
    id: 100000000000007,
    name: "Batuta",
    author: "Emmanuele Baldini",
    program: [
      {
        name: "Sinfonía Nº8",
        composer: "Antonio Dvorak",
      },
      {
        name: "Concierto para violín, op. 64, en mi menor",
        composer: "Felix Mendelssohn",
      },
    ],
    review: `Un genio Emmanuele con su interpretación del concierto de Mendelssohn, el cual se encuentra entre mis favoritos sea dicho de paso, y una excelente pieza que toco como bis (E. Nazareth: Odeon) la cual no conocía.`,
    genres: ["Orquesta Filarmónica de Montevideo", "2023"],
    favourite: true,
    score: 10,
  },
  {
    id: 100000000000008,
    name: "El concierto",
    author: "Antonio Formaro / Daniel Hasaj",
    program: [
      {
        name: "Concierto para piano Nº1",
        composer: "P. I. Tchaikovsky",
      },
      {
        name: "Salón de Buenos Aires",
        composer: "Miguel del Aguila",
      },
      {
        name: "Francesca da Rimini",
        composer: "P. I. Tchaikovsky",
      },
    ],
    review: `Muy lindo el concierto para piano Nº 1 de Tchaikovsky, no diría que es de los que más escucho pero de todas formas muy bueno. Muy bueno también la pieza que tocó Antonio como bis (Rondo Capriccioso - Mendelssohn).`,
    genres: ["Orquesta Filarmónica de Montevideo", "2023"],
    favourite: false,
    score: 7,
  },
  {
    id: 100000000000009,
    name: "Guillermo Tell",
    author:
      "Javier Bezzato / Jorge Camiruaga / María José Aguiar / Pablo Schol / Thomas Herzog",
    program: [
      {
        name: "Preludio de “Lo Schiavo”",
        composer: "Carlos Gomes",
      },
      {
        name: "Concierto para piano Nº2",
        composer: "Félix Mendelssohn",
      },
      {
        name: "Aranaya",
        composer: "Domenico Melchiorre",
      },
      {
        name: "Obertura de Guillermo Tell",
        composer: "Giacomo Rossini",
      },
    ],
    review: `Nunca había escuchado el segundo concierto para piano de Mendelssohn y a partir de este concierto se convirtió en mi favorito junto al quinto de Beethoven, su segundo movimiento es simplemente perfecto.`,
    genres: ["Orquesta Filarmónica de Montevideo", "2023"],
    favourite: true,
    score: 9,
  },
  {
    id: 100000000000010,
    name: "Grandes Románticos",
    author: "Azusa Saito / Micah McLaurin / Martín García",
    program: [
      {
        name: "Obertura de Medea",
        composer: "Luigi Cherubini",
      },
      {
        name: "Concierto para violín Nº1",
        composer: "Max Bruch",
      },
      {
        name: "Concierto para piano Nº2",
        composer: "Frederic Chopin",
      },
    ],
    review: `Muy bueno el concierto para violín de Bruch que ya lo conocía antes de este concierto, pero nunca había escuchado en vivo. También estuvo bien el concierto para piano de Chopin, pero prefiero el primero`,
    genres: ["Orquesta Filarmónica de Montevideo", "2022"],
    favourite: false,
    score: 9,
  },
  {
    id: 100000000000011,
    name: "Rapsodia",
    author: "Luis Pérez Aquino / Martín García",
    program: [
      {
        name: "Preludio para La Siesta de un Fauno",
        composer: "Claude Debussy",
      },
      {
        name: "Rhapsody in Blue",
        composer: "George Gershwin",
      },
      {
        name: "Valse lente",
        composer: "Franz Schreker",
      },
      {
        name: "W.A Mozart",
        composer: "Sinfonía Nº41 “Júpiter”",
      },
    ],
    review: `Podría haber sido perfecto si no hubiesen cortado medio concierto por un acto política que, al menos para mí, fue sin previo aviso. Más allá de esto el concierto de Gershwin es excelente, divertido de escuchar y con una parte muy dulce en el medio. Lastima no haber podido escuchar la primera mitad de la sinfonía.`,
    genres: ["Orquesta Filarmónica de Montevideo", "2022"],
    favourite: false,
    score: 8,
  },
  {
    id: 100000000000012,
    name: "Salsipuedes",
    author:
      "Federico Nathan Project / Freddy Vilches Latin Band / Martín García",
    program: [
      {
        name: "Suite Latinoamericana",
        composer: "Freddy Vilches",
      },
      {
        name: "Salsipuedes",
        composer: "Federico Nathan",
      },
    ],
    review: `Simplemente excelentes ambas piezas, tengo grandes recuerdos del concierto y es una lástima no poder tener o encontrar una grabación para poder escucharlo nuevamente. Nuestras raíces hechas música.`,
    genres: ["Orquesta Filarmónica de Montevideo", "2023"],
    favourite: true,
    score: 10,
  },
  {
    id: 100000000000013,
    name: "Grandes músicos Uruguayos",
    author: "Enrique Graf / Ligia Amadio",
    program: [
      {
        name: "Concierto Nº 4 para piano",
        composer: "Ludwing Van Beethoven",
      },
      {
        name: "Sinfonía Nº 7",
        composer: "Ludwing Van Beethoven",
      },
    ],
    review: `Ambas piezas son excelentes, principalmente la séptima sinfonía que cada uno de sus movimientos destaca`,
    genres: ["Orquesta Filarmónica de Montevideo", "2021"],
    favourite: false,
    score: 8,
  },
  {
    id: 100000000000014,
    name: "El emperador",
    author: "Gloria Campaner / Daniel Hasaj",
    program: [
      {
        name: "Momento sinfónico",
        composer: "Hector Tosar",
      },
      {
        name: "Concierto para piano Nº5 “Emperador”",
        composer: "Ludwing Van Beethoven",
      },
      {
        name: "Metamorfosis sinfónica",
        composer: "Paul Hindemith",
      },
    ],
    review: `"El emperador" es en mi opinión el mejor concierto para piano (de los que conozco al menos). Desde la primera vez que lo escuché es mi favorito y nuca voy a olvidar la primera vez que puede escucharlo en vivo (no fue en esta ocasión) hace como 6 o 7 años aproximadamente. Si la perfección existe, Beethoven llegó más allá aún.`,
    genres: ["Orquesta Filarmónica de Montevideo", "2022"],
    favourite: true,
    score: 10,
  },
  {
    id: 100000000000015,
    name: "Matías Ferreyra / Rodolfo Saglimbeni",
    author: "",
    program: [
      {
        name: "Immigrant music",
        composer: "Elbio Barilari ",
      },
      {
        name: "Concierto para piano Nº3",
        composer: "Serguéi Prokofiev",
      },
      {
        name: "Mi madre la oca",
        composer: "Maurice Ravel",
      },
    ],
    review: `En el 2023 empecé a escuchar un poco de Prokofiev por lo que fue bueno poder escuchar el segundo concierto para piano en vivo.`,
    genres: ["Orquesta Filarmónica de Montevideo", "2023"],
    favourite: false,
    score: 7,
  },
  {
    id: 100000000000016,
    name: "Virtuoso",
    author: "Francesco D'Orazio / Martín García",
    program: [
      {
        name: "Concierto para violín",
        composer: "Ludwing Van Beethoven",
      },
      {
        name: "Sinfonía Nº3",
        composer: "Johannes Brahms",
      },
    ],
    review: `Este concierto para violín se encuentra entre mis piezas favoritas, pero no esta ocasión no me gustó para nada la interpretación del solista. No era necesariamente mala, pero por momentos me pareció que lo que estaba escuchando era un montón de sonidos inconexos. La sinfonía muy buena, aunque no es de mis favoritas.`,
    genres: ["Orquesta Filarmónica de Montevideo", "2023"],
    favourite: false,
    score: 6,
  },
  {
    id: 100000000000017,
    name: "Adagio a Zitarrosa",
    author: "Alfredo Zitarrosa / Martín García / Julio Cobelli y otros",
    program: [
      {
        name: "La voz de Alfredo Zitarrosa junto a la Filarmónica de Montevideo bajo la dirección de Martín García en un trabajo junto al Archivo Zitarrosa.",
        composer: "Alfredo Zitarrosa y arreglos de Franco Polimeni",
      },
    ],
    review: `Para los que no pudimos escuchar al maestro cantar, esta tal vez sea la mejor oportunidad y más cercana experiencia a lo que sería escucharlo cantar. Muy lindos arreglos con la voz, las guitarras y toda la orquesta. ¡Un excelente homenaje!`,
    genres: ["Orquesta Filarmónica de Montevideo", "2023"],
    favourite: true,
    score: 9,
  },
  {
    id: 100000000000018,
    name: "Gala Inaugural",
    author: "Markus Groh / Martín García",
    program: [
      {
        name: "Melga Sinfónica",
        composer: "Eduardo Fabini",
      },
      {
        name: "Concierto para piano Nº3",
        composer: "Ludwig van Beethoven",
      },
      {
        name: "Sinfonía Nº4",
        composer: "Johannes Brahms",
      },
    ],
    review: `Excelente concierto y sinfonía.`,
    genres: ["Orquesta Filarmónica de Montevideo", "2024"],
    favourite: false,
    score: 8,
  },
  {
    id: 100000000000019,
    name: "De los Alpes a las Sierras",
    author: "Esteban Urtiaga / Martín García",
    program: [
      {
        name: "Rapsodia sobre un tema de Paganini",
        composer: "Serguéi Rajmáninov",
      },
      {
        name: "Sinfonía Nº 36",
        composer: "W.A. Mozart",
      },
      {
        name: "Mañana de Reyes",
        composer: "Eduardo Fabini",
      },
    ],
    review: `Rapsodia sobre un tema de Paganini es excelente, principalmente la variación N.º 18. Todo el mundo tendría que escucharla.`,
    genres: ["Orquesta Filarmónica de Montevideo", "2022"],
    favourite: false,
    score: 7,
  },
  {
    id: 100000000000001,
    name: "",
    author: "",
    program: [
      {
        name: "",
        composer: "",
      },
      {
        name: "",
        composer: "",
      },
    ],
    review: ``,
    genres: ["Orquesta Filarmónica de Montevideo", "2019"],
    favourite: false,
    score: 6,
  },
  {
    id: 100000000000001,
    name: "",
    author: "",
    program: [
      {
        name: "",
        composer: "",
      },
      {
        name: "",
        composer: "",
      },
    ],
    review: ``,
    genres: ["Orquesta Filarmónica de Montevideo", "2019"],
    favourite: false,
    score: 6,
  },
];

export default completedMusic;
