// we start at 1000000  to diferentiate with other categories
let pendingGames = [
  {
    id: 1000001,
    name: "Cyberpunk 2077",
    author: "CD Projekt Red",
    plot: "Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto ambientado en el futuro sombrío de Night City, una peligrosa megalópolis obsesionada con el poder, el glamur y las incesantes modificaciones corporales.",
    genres: ["RPG", "Acción"],
  },
  {
    id: 1000002,
    name: "Hogwarts Legacy",
    author: "Avalanche Software",
    plot: "Hogwarts Legacy es un RPG inmersivo de acción en mundo abierto. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico.",
    genres: ["Acción", "RPG", "Aventura"],
  },
  {
    id: 1000003,
    name: "NieR:Automata",
    author: "Square Enix",
    plot: "NieR: Automata narra la historia de los androides 2B, 9S y A2, que luchan para recuperar el mundo distópico dirigido por las máquinas que han invadido unas poderosas formas de vida mecánicas.",
    genres: ["Acción", "RPG"],
  },
  {
    id: 1000004,
    name: "Red Dead Redemption 2",
    author: "Rockstar Games",
    plot: "Arthur Morgan y la banda de Van der Linde se ven obligados a huir. Con agentes federales y los mejores cazarrecompensas de la nación pisándoles los talones, la banda deberá atracar, robar y luchar para sobrevivir en su camino por el escabroso territorio del corazón de América. Mientras las divisiones internas aumentan y amenazan con separarlos a todos, Arthur deberá elegir entre sus propios ideales y la lealtad a la banda que lo vio crecer.",
    genres: ["Acción", "Aventura"],
  },
  {
    id: 1000005,
    name: "Battle Chef Brigade Deluxe",
    author: "Trinket Studios",
    plot: "Bienvenido a Victusia, donde se venera a los miembros de la selecta brigada de chefs de batalla por su capacidad de eliminar monstruos con destreza ¡y convertirlos en deliciosos platos! Sin embargo, entrar no es sencillo: los chefs de todo Victusia deben luchar por su lugar en una competición de alta exigencia. Sigue a dos participantes, Mina y Trash, en su aventura durante el desarrollo del torneo. Para ser parte de la brigada, tendrás que cazar monstruos con ataques combinados, preparar tus ingredientes recién capturados en un desafío de cocina basado en puzles y servir tus platillos ante los jueces, todo esto, ¡contrarreloj!",
    genres: ["Acción", "Aventura", "Indie", "RPG"],
  },
  {
    id: 1000006,
    name: "CrossCode",
    author: "Radical Fish Games",
    plot: "Un juego de rol de acción 2D con inspiración retro. CrossCode combina unos gráficos de 16 bits al estilo SNES con unas físicas fluidas, unos combates de ritmo frenético, unos interesantes puzles y una fascinante historia de ciencia ficción.",
    genres: ["Acción", "Aventura", "Indie", "RPG"],
  },
  {
    id: 1000007,
    name: "Cuphead",
    author: "Studio MDHR Entertainment",
    plot: "Cuphead es un juego de acción clásico estilo 'dispara y corre' que se centra en combates contra el jefe. Inspirado en los dibujos animados de los años 30, los aspectos visual y sonoro están diseñados con esmero empleando las mismas técnicas de la época, es decir, animación tradicional a mano, fondos de acuarela y grabaciones originales de jazz.",
    genres: ["Acción", "Indie"],
  },
  {
    id: 1000008,
    name: "Darkest Dungeon II",
    author: "Red Hook Studios",
    plot: "Darkest Dungeon II is a roguelike road trip of the damned. Form a party, equip your stagecoach, and set off across the decaying landscape on a last gasp quest to avert the apocalypse. The greatest dangers you face, however, may come from within...",
    genres: ["Estrategia", "RPG", "Indie", "Roguelike"],
  },
  {
    id: 1000009,
    name: "Deus Ex: Mankind Divided",
    author: "Eidos Montreal",
    plot: "Corre el año 2029 y los humanos aumentados mecánicamente han sido relegados al estatus de parias que viven totalmente marginados y aislados del resto de la sociedad. Adam Jensen es ahora un experimentado agente encubierto en un mundo que ha dado en despreciar a los de su clase. Equipado con un nuevo arsenal de armas y aumentos de última generación, Adam tendrá que escoger bien la estrategia adecuada y en quién confiar para destapar una conspiración a escala global.",
    genres: ["Acción", "RPG"],
  },
  {
    id: 1000010,
    name: "Furi",
    author: "The Game Bakers",
    plot: "Te capturaron. ¿Ves lo que te han hecho? El carcelero es la clave. Mátalo y serás libre. Lucha por tu libertad en este juego ultrafluido de lucha frenética con espadas y disparos con dos mandos.",
    genres: ["Acción", "Indie"],
  },
  {
    id: 1000011,
    name: "Inscryption",
    author: "Daniel Mullins Games",
    plot: "El creador de Pony Island y The Hex presenta una nueva, alucinante y autodestructiva carta de amor a los videojuegos. Inscryption es un juego de cartas, una odisea negra como la tinta que mezcla el «roguelike» de creación de mazos, puzles de estilo «escape room» y terror psicológico en un batido con un toque de sangre. Pero más oscuros aún son los secretos inscritos en las cartas...",
    genres: ["Estrategia", "Aventura", "Indie"],
  },
  {
    id: 1000012,
    name: "Ni no Kuni Wrath of the White Witch",
    author: "Level 5",
    plot: "Acompaña a Oliver en su viaje a través de un mundo en el que encontrará tanto nuevas amistades como enemigos terribles con la esperanza de recuperar a su madre, a la que perdió tras un trágico accidente.",
    genres: ["Acción", "Aventura", "JRPG", "RPG"],
  },
  {
    id: 1000013,
    name: "Outer Wilds",
    author: "Mobius Digital",
    plot: "Outer Wilds, nombrado juego del año 2019 por Giant Bomb, Polygon, Eurogamer y The Guardian, es un galardonado título de mundo abierto, que se desarrolla en un enigmático sistema solar confinado a un bucle temporal infinito.",
    genres: ["Acción", "Aventura"],
  },
  {
    id: 1000014,
    name: "Pathfinder: Kingmaker",
    author: "Owlcat Games",
    plot: "Explora las Tierras Robadas, una región disputada durante siglos. Cientos de reinos se han alzado y han caído en estas tierras y ahora te toca a ti dejar tu huella: ¡crea tu propio reino! Para hacerlo, tendrás que sobrevivir tanto a la despiadada y salvaje naturaleza como a la amenaza de los reinos rivales, así como a las de tu propia corte.",
    genres: ["Aventura", "RPG"],
  },
  {
    id: 1000015,
    name: "Salt and Sanctuary",
    author: "Ska Studios",
    plot: "Explora una isla inquietante y castigadora en este estilizado juego de rol de acción en 2D. Salt and Sanctuary combina combates 2D rápidos y brutales con mecánicas de juego de rol ricamente desarrolladas en un reino maldito de ciudades olvidadas, mazmorras empapadas de sangre y monumentos profanados.",
    genres: ["Acción", "RPG", "Indie"],
  },
  {
    id: 1000016,
    name: "Sekiro: Shadows Die Twice",
    plot: "En Sekiro: Shadows Die Twice encarnas al 'lobo manco', un guerrero desfigurado y caído en desgracia que ha sido rescatado al borde de la muerte. Tras jurar proteger a un joven señor descendiente de un antiguo linaje, te conviertes en el objetivo de despiadados enemigos, entre ellos el peligroso clan Ashina. Cuando el joven señor sea capturado, nada te detendrá en tu peligrosa aventura por restituir tu honor, ni siquiera la muerte.",
    author: "FromSoftware",
    genres: ["Acción", "Aventura"],
  },
  {
    id: 1000017,
    name: "Spiritfarer: Edición Farewell",
    author: "Thunder Lotus Games",
    plot: "Spiritfarer es un juego de gestión sobre la muerte. Como maestre de un ferri que transporta a las almas, deberás construir un barco para explorar el mundo, cuidar de tus amigos espíritus y guiarlos camino del más allá. Incluye el juego base y tres actualizaciones de contenido importantes.",
    genres: ["Aventura", "Simulación", "Indie"],
  },
  {
    id: 1000018,
    name: "Sunless Skies",
    author: "Failbetter Games",
    plot: "¡Capitanea una locomotora de vapor espacial mientras un nuevo imperio victoriano se dirige a las estrellas! Lleva a tu desafortunada tripulación a meterse en problemas y volverlos locos. Contrabandear almas. Trueque por barriles de tiempo. Haga una parada para jugar al cricket (y una buena taza de té).",
    genres: ["Aventura", "RPG", "Indie"],
  },
  {
    id: 1000019,
    name: "Terraria",
    author: "Re-Logic",
    plot: "¡Cava, lucha, explora, construye! Nada es imposible en este juego de aventuras repleto de acción. El mundo es tu lienzo y la tierra misma es tu pintura. ¡Coge tus herramientas y adelante! Crea armas para deshacerte de una gran variedad de enemigos en numerosos ecosistemas. Excava profundo bajo tierra para encontrar accesorios, dinero y otras cosas muy útiles. Reúne recursos para crear todo lo que necesites y conformar así tu propio mundo. Construye una casa, un fuerte o incluso un castillo. La gente se mudará a vivir ahí e incluso quizás te vendan diferentes mercancías que te ayuden en tu viaje. Pero ten cuidado, aún te aguardan más desafíos... ¿Estás preparado para la tarea?",
    genres: ["Acción", "Aventura", "Indie", "RPG"],
  },
  {
    id: 1000020,
    name: "Thronebreaker: The Witcher Tales",
    author: "CD Project Red",
    plot: "Descubre un nuevo RPG de los creadores de The Witcher 3: Wild Hunt. Meve, la reina de Lyria y Rivia curtida en mil batallas, ante una inminente invasión, se ve obligada una vez más a iniciar una campaña bélica y partir en una siniestra travesía de destrucción y venganza.",
    genres: ["Aventura", "RPG"],
  },
  {
    id: 1000021,
    name: "The Witcher 2: Assassins of Kings",
    author: "CD Project Red",
    plot: "Ha llegado una época de caos sin precedentes. Fuerzas poderosas se enfrentan entre bastidores en una lucha por el poder y la influencia. Los Reinos del Norte se movilizan para la guerra. Pero los ejércitos desplegados no son suficientes para detener una sanguinaria conspiración...",
    genres: ["RPG", "Aventura"],
  },
  {
    id: 1000022,
    name: "Wandersong",
    author: "Greg Lobanov y otros",
    plot: "Una aventura de plataformas musicales con una historia emotiva. Juega como un bardo tonto y usa la música para interactuar con todo en un viaje alrededor del mundo. ¡A lo largo del camino explorarás, resolverás acertijos y conocerás a un enorme elenco de personajes!",
    genres: ["Aventura", "Indie"],
  },
  {
    id: 1000023,
    name: "Yakuza Kiwami",
    author: "Ryu Ga Gotoku Studio",
    plot: "El aclamado juego de SEGA que dio pie a una leyenda de los videojuegos. Conviértete en Kazuma Kiryu, un integrante de la yakuza que asume la culpa por el asesinato de un jefe del crimen organizado. 10 años después, sale de la trena y se encuentra un mundo muy distinto al que dejó.",
    genres: ["Acción", "Aventura", "RPG"],
  },
];

export default pendingGames;