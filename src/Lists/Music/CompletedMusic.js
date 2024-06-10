// start id with MP1
// In the author section i am gonna to put the names of the director of the orquestra and soloist of the concerto
// I don't want to change how i filter the list so I need the key of author in my objects.
// Same goes for genres
let completedMusic = [
  {
    id: "MP1",
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
    id: "MP2",
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
    id: "MP3",
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
    id: "MP4",
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
    id: "MP5",
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
    id: "MP6",
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
    id: "MP7",
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
    id: "MP8",
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
    id: "MP9",
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
    id: "MP10",
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
    id: "MP11",
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
    id: "MP12",
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
    id: "MP13",
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
    id: "MP14",
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
    id: "MP15",
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
    id: "MP16",
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
    id: "MP17",
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
    id: "MP18",
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
    id: "MP19",
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
    id: "MP20",
    name: "Gala 90 aniversario",
    author: "Eiko Senda / Stefano Lano",
    program: [
      {
        name: "Preludio de Los Maestros Cantores de Núremberg",
        composer: "Richard Wagner",
      },
      {
        name: "Wesendonck Lieder, WWV91",
        composer: "Richard Wagner",
      },
      {
        name: "Sinfonía Nº3, Eroica",
        composer: "Ludwig van Beethoven",
      },
    ],
    review: ``,
    genres: ["Orquesta Sinfónica Nacional", "2021"],
    favourite: false,
    score: 7,
  },
  {
    id: "MP21",
    name: "Chopin y Tchaikovsky",
    author: "Müza Rubackyté / Esteban Louise",
    program: [
      {
        name: "Concierto para piano Nª1",
        composer: "Frédéric Chopin",
      },
      {
        name: "Sinfonía Nº 4",
        composer: "P. I. Tchaikovsky",
      },
    ],
    review: `Muy buen programa. Sin duda alguna el primer concierto para piano de Chopin es uno de los mejores de la historia`,
    genres: ["Orquesta Sinfónica Nacional", "2022"],
    favourite: false,
    score: 8,
  },
  {
    id: "MP22",
    name: "Beethoven IX",
    author:
      "Sandra Silvera / Evgenia Pirshina / Gerardo Marandino / Federico Sanguinetti /Nicolás Rauss",
    program: [
      {
        name: "Sinfonía Nº 9",
        composer: "Ludwig van Beethoven",
      },
    ],
    review: `Es la novena sinfonía... no hay nada más que explicar`,
    genres: ["Orquesta Sinfónica Nacional", "Coro Nacional", "2022"],
    favourite: true,
    score: 9,
  },
  {
    id: "MP23",
    name: "Réquiem de Verdi",
    author:
      "Marly Montoni / Evgenia Pirshina / Santiago Vidal / Hermán Iturralde / Nicolas Rauss",
    program: [
      {
        name: "Misa de Réquiem",
        composer: "Giuseppe Verdi",
      },
    ],
    review: ``,
    genres: ["Orquesta Sinfónica Nacional", "Coro Nacional", "2023"],
    favourite: false,
    score: 7,
  },
  {
    id: "MP24",
    name: "Cuadros de una exposición",
    author: "Rachel Barton Pine / Ana María Patiño",
    program: [
      {
        name: "Pieza Montevideana Nº1",
        composer: "Beatriz Lockhart",
      },
      {
        name: "Concierto para violín Nº2",
        composer: "Sergei Profiev",
      },
      {
        name: "Cuadros de una exposición",
        composer: "Modest Mussorgsky",
      },
    ],
    review: `Excelente el concierto para violín`,
    genres: ["Orquesta Sinfónica Nacional", "2023"],
    favourite: false,
    score: 8,
  },
  {
    id: "MP25",
    name: "La patética",
    author: "Armands Abols / Nicolas Rauss",
    program: [
      {
        name: "Finlandia",
        composer: "Jean Sibelius",
      },
      {
        name: "Concierto para piano",
        composer: "Edvard Grieg",
      },
      {
        name: "Sinfonía Nº6",
        composer: "P. I. Tchaikovsky",
      },
    ],
    review: `Excelente programa de principio a fin. El concierto de Grieg es muy bueno y una pieza que debería escuchar más seguido. En lo personal me gusta más la quinta sinfonía de Tchaikovsky, pero tengo que reconocer que el impacto emocional que te deja el último movimiento de la sexta es inigualable. Una velada perfecta si no fuera por la dificultad que tienen algunas personas para tener un poco de respeto y silenciar sus celulares. Cuatro veces sonaron celulares, que un poco arruinaron la presentación del concierto para piano. Por favor, si van al teatro, silencien sus celulares.`,
    genres: ["Orquesta Sinfónica Nacional", "2023"],
    favourite: true,
    score: 9,
  },
  {
    id: "MP26",
    name: "Pasión Eslava",
    author: "Cristian Budu / Mika Eichenholz",
    program: [
      {
        name: "Concierto para piano Nº4",
        composer: "Sergei Rachmaninoff",
      },
      {
        name: "Sinfonía Nº7",
        composer: "Antonin Dvorák",
      },
    ],
    review: `Es un muy buen concierto para piano y en estos momentos uno de los que más escucho.`,
    genres: ["Orquesta Sinfónica Nacional", "2023"],
    favourite: false,
    score: 7,
  },
  {
    id: "MP27",
    name: "Carmen Nabucco Aida",
    author: "Nicolas Rauss",
    program: [
      {
        name: "Varias piezas",
        composer: "Wagner / Strauss / Borodin / Verdi / Mascagni",
      },
    ],
    review: `Diferente a lo que suelo escuchar pero está bueno conocer cosas nuevas`,
    genres: ["Orquesta Sinfónica Nacional", "Coro Nacional", "2023"],
    favourite: false,
    score: 6,
  },
  {
    id: "MP28",
    name: "Festival Mozart Villa-Lobos",
    author:
      "Natalia Vega / Abigail González / Andrés Barbery / Nicolás Zecchi / Esteban Louise",
    program: [
      {
        name: "Ave María Nº17",
        composer: "Heitor Villa-Lobos",
      },
      {
        name: "Requiem K.626",
        composer: "Wolfgang Amadeus Mozart",
      },
    ],
    review: `No estuvo muy bueno realmente. No tanto por las piezas en sí sino por la interpretación`,
    genres: ["Orquesta Sinfónica Nacional", "Coro Nacional", "2023"],
    favourite: false,
    score: 5,
  },
  {
    id: "MP29",
    name: "Ludwing Van...",
    author: "Priscila Rato / Nicolás Pasquet",
    program: [
      {
        name: "Concierto para violin Nº1",
        composer: "Dmitri Shostakovich",
      },
      {
        name: "Sinfonía Nº7",
        composer: "Ludwig van Beethoven",
      },
    ],
    review: ``,
    genres: ["Orquesta Sinfónica Nacional", "2023"],
    favourite: false,
    score: 7,
  },
  {
    id: "MP30",
    name: "Bohemian Rhapsody in Blue",
    author: "Ciro Fodere / Nicolas Rauss",
    program: [
      {
        name: "El Moldava",
        composer: "Bedrich Smetana",
      },
      {
        name: "Rhapsody in Blue",
        composer: "George Gershwin",
      },
      {
        name: "Sinfonía Nº1",
        composer: "Bohuslav Martinu",
      },
    ],
    review: `El concierto para piano excelente, esta fue la segunda vez que lo escuche en vivo. La sinfonía de Martinu no la conocía y fue un buen descubrimiento, muy recomendable la cuarta también.`,
    genres: ["Orquesta Sinfónica Nacional", "2024"],
    favourite: false,
    score: 8,
  },
  {
    id: "MP31",
    name: "Ciclo internacional de piano de Montevideo",
    author: "Varios",
    program: [
      {
        name: "Concierto homenaje a Sergei Rachmaninoff en el 150 aniversario de su nacimiento",
        composer: "",
      },
    ],
    review: ``,
    genres: ["2023"],
    favourite: false,
    score: 7,
  },
  {
    id: "MP32",
    name: "Gala de música popular uruguaya",
    author: "Varios / Esteban Louise",
    program: [
      {
        name: "El espectáculo se centrará en vertientes musicales, que identifican sus bases en la música contemporánea uruguaya y que se asocia a la identidad de géneros musicales como: candombe, murga, tango y canto popular.",
        composer: "",
      },
    ],
    review: ``,
    genres: ["Coro Nacional", "2023"],
    favourite: false,
    score: 6,
  },
  {
    id: "MP33",
    name: "Coro de la Nostalgia",
    author: "Esteban Louise",
    program: [
      {
        name: "Espectáculo que celebra una de las mayores tradiciones recientes de nuestro país. Es un concierto multimedia con proyecciones y banda en vivo junto a las voces del Coro Nacional del Sodre.",
        composer: "",
      },
    ],
    review: ``,
    genres: ["Coro Nacional", "2023"],
    favourite: false,
    score: 8,
  },
  {
    id: "MP34",
    name: "Ciclo de piano Nibya Mariño",
    author: "Éida Gencarelli - Raquel Boldorini",
    program: [
      {
        name: "Preludios de El clave bien temperado",
        composer: "Johann Sebastian Bach",
      },
      {
        name: "24 preludios",
        composer: "Frédéric Chopin",
      },
    ],
    review: ``,
    genres: ["2023"],
    favourite: false,
    score: 7,
  },
  {
    id: "MP35",
    name: "La Catalina Sinfónico",
    author: "Agarrate Catalina / Martín Jorge",
    program: [
      {
        name: "Un recorrido por el repertorio de la Catalina junto a la banda sinfónica de Montevideo y otros artistas invitados",
        composer: "",
      },
    ],
    review: `Una excelente noche, creo que nunca vi el teatro de verano tan lleno. ¡Espectacular la Catalina junto con la banda sinfónica!`,
    genres: ["Banda Sinfónica de Montevideo", "2023"],
    favourite: true,
    score: 10,
  },
  {
    id: "MP36",
    name: "Leitmotiv",
    author: "Ismael Dilon / Ariel Britos",
    program: [
      {
        name: "Concierto para Xilófono",
        composer: "Boris Papandopulo",
      },
      {
        name: "Sinfonía Nº5",
        composer: "P.I. Tchaikovsky",
      },
    ],
    review: `Es una de mis sinfonías favoritas, pero en esta ocasión no la pude disfrutar tanto.`,
    genres: ["Orquesta Juvenil del Sodre", "2023"],
    favourite: false,
    score: 6,
  },
  {
    id: "MP37",
    name: "Mikrokosmos",
    author:
      "Nahuel Cigaran /Magaly Correa / Selene Gutiérrez /Rocío Britos /Ariel Britos",
    program: [
      {
        name: "Fanfarria para la filarmónica de Viena",
        composer: "Richard Strauss",
      },
      {
        name: "Danzas rumanas",
        composer: "Béla Bartók",
      },
      {
        name: "Sinfonía concertante para oboe, clarinete, corno y fagot",
        composer: "Wolfgang Amadeus Mozart",
      },
    ],
    review: ``,
    genres: ["Orquesta Juvenil del Sodre", "2023"],
    favourite: false,
    score: 6,
  },

  {
    id: "MP38",
    name: "Tango Coral",
    author: "Varios / Esteban Louise",
    program: [
      {
        name: "El principal género urbano de nuestra ciudad nos acerca a emblemáticas obras que el CNS recrea con atractivos arreglos corales y la conjunción de orquesta típica, solistas y secciones instrumentales",
        composer: "",
      },
    ],
    review: ``,
    genres: ["Coro Nacional", "2022"],
    favourite: false,
    score: 7,
  },
  {
    id: "MP39",
    name: "Desde Rusia con Sheherazade y acordeón",
    author: "Iñaki Alberdi / JongWhi Vakh",
    program: [
      {
        name: "Entramado (concierto para acordeón)",
        composer: "Sofia Gubaidulina",
      },
      {
        name: "Sheherazade, suite sinfónica, Op.35",
        composer: "Nikolai Rimsky-Korsakov",
      },
    ],
    review: `Simplemente con encontré el programa lo suficientemente interesante. La primera pieza tiene una falta de melodía que a mi simplemente me desconcierta y no me gusta, claramente no es tipo de música que me gusta. `,
    genres: ["Orquesta Sinfónica Nacional", "2024"],
    favourite: false,
    score: 6,
  },
];

export default completedMusic;
