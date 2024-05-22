// start id with 1000000000001
let completedPlays = [
  {
    id: 1000000000001,
    name: "La Trágica Historia del Doctor Fausto",
    author: "Christopher Marlowe / Rubén Szuchmacher",
    plot: `Estrenada en 1592, La Trágica Historia del Doctor Fausto es la obra fundamental de Christopher Marlowe, el gran autor del teatro isabelino predecesor de Shakespeare. Fausto es el primer gran personaje de la historia del teatro inglés que, descontento en su lucha incansable e insatisfecha por el Conocimiento, pacta con el Diablo la entrega de su alma a cambio de contar con 24 años de los servicios ilimitados de Mefistófeles.`,
    review: ``,
    genres: ["Comedia Nacional", "Teatro Solis", "2023"],
    favourite: false,
    score: 7,
  },
  {
    id: 1000000000002,
    name: "Esperando la Carroza",
    author: "Jacobo Langsner / Jimena Márquez",
    plot: `Mama Cora se acerca a los 80 años y vive con el más pobre de sus hijos. La familia decide reunirse para hablar sobre quien será el próximo en cuidar la madre y todo el mundo intenta esquivar la responsabilidad. Las discusiones se terminan cuando reciben la noticia que Mama Cora ha desaparecido. Ahora todo serán lamentaciones.`,
    review: `Un clásico. Tal vez a esta altura sea más famosa la película que la obra, pero uno no puede perderse de verla. Excelentes actuaciones y muy vigente aún. `,
    genres: ["Comedia Nacional", "Sala Verdi", "2022", "2023"],
    favourite: true,
    score: 9,
  },
  {
    id: 1000000000003,
    name: "Constante",
    author: "Pedro Calderón de la Barca / Gabriel Calderón",
    plot: `Constante es una obra escrita por el chileno Guillermo Calderón y el uruguayo Gabriel Calderón, en base a El Príncipe Constante, de Pedro Calderón de la Barca. Es un clásico reversionado en el cual, los autores han decidido "quemar la biblioteca –parafraseando a Borges-" y “trabajar con el texto como si estuviese perdido, como si ya no se pudiera acceder a él, como si lo soñáramos mal, tradujéramos peor, tal vez traicionando a Calderón, pero siendo fieles al Teatro”, explica su director.
    Esta obra que toma como base un clásico de Calderón de la Barca atraviesa la guerra, los sueños, el arte y el teatro del tiempo, para llegar hasta aquí, donde los espectadores del hoy y mañana seguirán juzgándolo con su comprometida mirada.`,
    review: `Es una versión que se separa bastante del original y eso lo hace interesante e entretenido.`,
    genres: ["Comedia Nacional", "Sala Verdi", "2023"],
    favourite: true,
    score: 7,
  },
  {
    id: 1000000000004,
    name: "Edipo Rey",
    author: "Sófocles / Andrés Lima",
    plot: `Para Aristóteles, Edipo era el ejemplo ideal de tragedia. Esta obra clásica del teatro griego sigue representándose hasta hoy en los teatros del mundo, porque sus temas conmueven, más allá de las épocas. Edipo Rey representa varios de los conflictos humanos y arquetipos psicológicos y sociológicos: poder, violencia, superstición, fe, amor, incesto, crimen, castigo y compasión. Todo es cuestionado en esta obra.
    “Edipo se parece demasiado a cada uno de nosotros y refleja lo mejor y lo peor de lo que hacemos o somos capaces de hacer. ¿Cuánto es el dolor por la verdad que hace que te arranques los ojos para no verla?”, cuestiona Andrés Lima, uno de los directores españoles más importante de la escena actual, quien dirigirá este espectáculo en la sala principal del Teatro Solís.`,
    review: `Muy buena actuación y producción en esta nueva interpretación de la obra. ¡Se disfruta un montón!`,
    genres: ["Comedia Nacional", "Teatro Solis", "2023"],
    favourite: false,
    score: 8,
  },
  {
    id: 1000000000005,
    name: "Frankenstein",
    author: "Mary Shelly / Andrea Arobba",
    plot: `¿Qué ocurre cuando se traspasan los límites de lo humano? ¿Podemos generar sin desaparecer una inteligencia que nos supere? Esas preguntas premonitorias, hoy más contemporáneas que nunca, estaban presentes en “Frankenstein o el moderno Prometeo”, una novela escrita al inicio del siglo XIX por una mujer de dieciocho años, Mary Shelley.
    Esa obra visionaria inauguró la ciencia ficción como género y enfrentó al colectivo a las posibles consecuencias de la revolución científica y tecnológica. Su texto nace del dolor del duelo y del deseo subyacente de cruzar la barrera que separa lo inanimado de lo vivo, pero trasciende lo metafísico, abriendo preguntas en torno al derecho de una entidad artificial a considerarse un ser viviente y a aspirar a la felicidad.     
    Para la realización de Frankenstein, la Comedia Nacional invitó a la bailarina y coreógrafa Andrea Arobba para dirigir al elenco y versionar la obra junto a Pablo Casacuberta y a Gabriela Escobar de GEN. Este Frankenstein es un Nuevo Clásico que, en palabras de Arobba, se encuentra “en las fronteras entre el teatro y la danza contemporánea, explora esa tensión y reivindica el ámbito que nunca dejará de ser el centro de la experiencia y la interacción humana: el cuerpo y la vivencia sensorial de estar vivos, compartiendo un tiempo y un espacio”.`,
    review: `Una serie de escenas sin mucha conexión. Tiene una inspiración en el texto original en el mensaje, pero si esperabas ver Frankenstein te vas a ir insatisfecho`,
    genres: ["Comedia Nacional", "2023"],
    favourite: false,
    score: 4,
  },
  {
    id: 1000000000006,
    name: "Macondo",
    author: "Gabriel Garcia Marquez / Varios",
    plot: `Macondo es un acontecimiento cultural de Montevideo; una plataforma para homenajear al escritor colombiano Gabriel García Márquez y para mostrar la potencia y riqueza expresiva del arte latinoamericano contemporáneo.
    Compuesto por un espectáculo central y varias actividades artísticas, el acontecimiento se desarrollará de martes a domingos de octubre en salas y espacios del Teatro Solís. 
    El Teatro Solís y la Comedia Nacional, junto a la Banda Sinfónica y la Orquesta Filarmónica de Montevideo, con dirección de Marianella Morena y Paula Villalba llevarán adelante el espectáculo Macondo, a realizarse en la sala principal del teatro.  
    En paralelo, y a lo largo de cada día, se realizarán talleres, conciertos, exposiciones, conferencias, slams de poesía y freestyle, periodismo performático, entre otras propuestas.`,
    review: `La producción fue espectacular, no solo de la obra, sino también de todas las actividades relacionadas y el acondicionamiento que se realizó en el Teatro Solis. Lastima que es una destrucción total del material original y no se llega a algo bueno como con otras reinterpretaciones de la temporada. Por suerte la obra es consciente y, como nos dice esta misma en una parte, ¡Que vuelvan las obras con sentido ya!`,
    genres: ["Comedia Nacional", "Teatro Solis", "2023"],
    favourite: false,
    score: 6,
  },
  {
    id: 1000000000007,
    name: "Díptico",
    author: "Carla Zúñiga",
    plot: `La dramaturga chilena Carla Zúñiga propone un díptico con dos obras reflexivas, pero con tonos distintos. Por un lado, “Un montón de brujas volando por el cielo", una comedia negra que reflexiona sobre el dolor y sobre cómo nos podemos hacer cargo de él, a la vez que nos interpela sobre la posibilidad de resignificar la emocionalidad y la posibilidad de desarticular el concepto de “bruja”. Por otro lado, "La violación de una actriz de teatro”, que habla de la importancia de nombrar, de hablar de las experiencias de abuso, de que como sociedad seamos capaces de hablar del dolor; de la importancia de creer en los testimonios de las víctimas y de reflexionar sobre la complejidad del abuso.`,
    review: `Buena obra en general que nos ayuda a reflexionar sobre como lidiamos con las emociones, principalmente el dolor. La segunda parte nos hace cuestionarnos como muchas veces como sociedad cuestionamos los relatos de las víctimas y hacemos más difícil una situación que ya de por si es difícil.`,
    genres: ["Comedia Nacional", "Sala Verdi", "2024"],
    favourite: false,
    score: 8,
  },
  {
    id: 1000000000008,
    name: "La Gayina",
    author: "Horacio Quiroga / Israel Adrián Caetano",
    plot: `La Gallina Degollada de Horacio Quiroga es el cuento que da origen a esta obra y se encuentra en el libro Cuentos de amor de locura y de muerte (1917) que cuenta la historia de una familia con cuatro hijos con discapacidad, una hija neurotípica y el horror de la discriminación y el maltrato.
    Entre silencios, violencia y culpas transcurre el misterio de este clásico de Quiroga que será llevado a escena en versión del cineasta Israel Adrián Caetano.`,
    review: `Interesante y fiel adaptación del cuento original.`,
    genres: ["Comedia Nacional", "Teatro Solis", "2024"],
    favourite: false,
    score: 8,
  },
  {
    id: 1000000000009,
    name: "Finlandia",
    author: "Pascal Rambert",
    plot: `Una pareja que se amó apasionadamente, ahora se destroza con el fin de lograr la custodia de su hija. Sobre el resentimiento y dolor escondido en cada humano, va este drama escrito por el francés Pascal Rambert, una de las figuras más destacadas de la escena internacional en la actualidad. Pascal es director, autor y realizador, y se encuentra en Montevideo especialmente para dirigir al elenco.`,
    review: `Buena obra en la que el conflicto se siente real. Más allá del daño que se hacen los protagonistas entre ellos uno al final se pregunta por todo el daño que indirectamente le están haciendo a su hija.`,
    genres: ["Comedia Nacional", "Sala Verdi", "2024"],
    favourite: false,
    score: 8,
  },
  {
    id: 1000000000010,
    name: "Tiempo Slavaje",
    author: "Josep Maria Miró",
    plot: `La obra transcurre en una tranquila urbanización fronteriza donde se organizará una celebración, cerca de una zona donde transitan personas extranjeras de manera irregular. Con la aparición de provocativas pintadas, la paz del pueblo se altera y tras el miedo aparecen las suposiciones y la violencia para trastocar la rutina y la vida interior de esos habitantes.
    Josep Maria Miró es el autor catalán de mayor proyección internacional. En nuestro país se han estrenado con éxito varias de sus obras entre las que figura La Travesía con la Comedia Nacional en 2017, con dirección de Jorge Denevi.  En esta oportunidad, la Comedia decide festejar su 75 aniversario invitando al propio Miró a dirigir al elenco en Tiempo Salvaje.`,
    review: `Excelente obra. Si algo destacó principalmente es la escenografía que, hasta donde recuerdo, nunca vía una mejor. Un block de apartamentos completo que puede trasladarse para adelante y para atrás para ingresar por los costados las gradas y elementos típicos de una cancha de basquetbol o traer desde arriba los elementos necesarios para simular un bosque. Tres escenas que se van intercambiando a lo largo de la obra de forma fluida y crea una ambientación perfecta. Además, tenemos unas buenas actuaciones que hacen que la historia cobre vida y estemos expectantes por lo que sucederá a continuación. Excelente trabajo por todos los implicados en esta producción.`,
    genres: ["Comedia Nacional", "Teatro Solis", "2022"],
    favourite: true,
    score: 9,
  },
  {
    id: 1000000000011,
    name: "Las Actas",
    author: "Margarita Musto",
    plot: `En octubre de 2005 la justicia argentina pide la extradición de militares uruguayos para juzgarlos por el secuestro en Buenos Aires y el traslado ilegal a Montevideo de María Claudia García de Gelman. La muchacha estaba embarazada y dio a luz en el Hospital Militar. La bebé fue entregada a un comisario de Policía. La madre hasta hoy sigue desaparecida.
    \n\
    El coronel Gilberto Vázquez está entre los militares que serán extraditados.
    \n\  
    En mayo de 2006 huye al norte del país para evitar su detención mientras la justicia uruguaya resuelve el pedido. A fin de mayo se presenta en la División de Ejército I, ante la promesa de que él y sus compañeros pasarían unos días retenidos y luego serían puestos en libertad mientras se espera la resolución de la justicia.
    \n\  
    El 3 de julio finge un problema de salud y lo llevan al Hospital Militar de donde se fuga. Tres días más tarde lo captura Interpol. El 26 de julio de 2006 en una sala de la Jefatura de Policía de Montevideo donde Vázquez está preso, tienen lugar las sesiones del Tribunal de Honor ordenado por el Comandante en Jefe del Ejército para juzgar su conducta según los principios y el reglamento que rige el honor militar.
    \n\    
    Sus declaraciones dieron lugar a una serie de impactantes actas que circularon públicamente y son la base de esta obra de dramaturgia y dirección de la directora uruguaya Margarita Musto.`,
    review: `Buena obra que representa una parte muy importante de nustra historia reciente`,
    genres: ["Comedia Nacional", "Teatro Circular", "2022"],
    favourite: false,
    score: 8,
  },
  {
    id: 1000000000012,
    name: "El Salto de Darwin",
    author: "Sergio Blanco / Roxana Blanco",
    plot: `El segundo fin de semana de junio del año 1982 se libra la última batalla de la Guerra de las Malvinas que culmina con la rendición del 14 de junio. Toda la acción se desarrolla en la Ruta Nacional N°40, que desciende la Argentina desde el Norte hacia el Sur, en torno a un Ford Falcon del año 1971 en el cual una familia atraviesa el país para esparcir las cenizas del hijo asesinado recientemente en la batalla que ha tenido lugar en la localidad de Puerto Darwin.`,
    review: `Buena obra pero tampoco me pareció que tuviera algo a destacar.`,
    genres: ["Comedia Nacional", "Teatro Solis", "2022"],
    favourite: false,
    score: 7,
  },
  {
    id: 1000000000013,
    name: "Todo su asco del mundo",
    author: "Thomas Bernhard",
    plot: `En los años 80 Thomas Bernhard escribe una serie de piezas cortas: sus emblemáticos dramolette. Teatro y política, asuntos omnipresentes en la obra completa del autor austríaco aparecen también aquí condensados en un conjunto de entremeses feroces que se nutren de la realidad.
    TODO SU ASCO DEL MUNDO  reúne siete piezas de esa serie de teatro breve. Cuatro de ellas versan sobre asuntos políticos y ponen el acento en algunas de las obsesiones del autor: el resurgimiento del nazismo, de la extrema derecha radical, del odio. Las otras tres tienen como tema otra de sus obsesiones: el teatro. Así ,y tomando como eje el derrotero del célebre director alemán Claus Peymann cuando asume la dirección artística del Teatro Nacional de Viena, ironiza sobre el mundillo de la gente de teatro. Conversaciones banales en la vida de gente común con sustrato mordaz, el teatro como metáfora de la vida y su ausencia de respuestas, la alerta del fascismo enraizado, sinuoso, entre nosotros, dentro de nosotros.`,
    review: `Una temática interesante, pero sin mucho más que decir. De todas formas, sirve para reflexionar sobre diversas temáticas como puede ser el autoritarismo y las secuelas del nazismo, aplicable a cualquier régimen autoritario`,
    genres: ["Comedia Nacional", "Sala Verdi", "2022"],
    favourite: false,
    score: 7,
  },
  {
    id: 1000000000014,
    name: "Cuando deje de llover",
    author: "Andrew Bovell / Fernando Toja",
    plot: `La obra nos cuenta la historia de cuatro generaciones de una misma familia donde se repiten una serie de patrones sin que ellos sean conscientes de ello. A través de mostrarnos el presente y el pasado vamos conociendo la historia de una forma no lineal. Una historia contada como un puzzle en el que al final todo encaja
    “Cuando deje de llover”  es un potente drama que viaja al corazón de los lazos familiares y a la esencia misma de su naturaleza, contado desde la empatía hacia el ser humano y su complejidad, con sorprendentes toques de humor, poesía y esperanza.`,
    review: `Muy buena obra en la que uno va uniendo las escenas como un rompecabezas para armar un panorama global de los acontecimientos. 4 generaciones de una familia que repiten los mismo errores o comportamientos. Estos comportamientos repetidos se encuentran representados por la constante lluvia que acompaña la vida de estas cuatro generaciones. Finalmente, este ciclo de comportamientos repetidos logra romperse y vislumbramos la posibilidad de un cambio, el cual viene acompañado con el fin de la lluvia.`,
    genres: ["Comedia Nacional", "Teatro Solis", "2021"],
    favourite: true,
    score: 9,
  },
  {
    id: 1000000000015,
    name: "Historias de amputación a la hora del té",
    author: "Carla Zúñiga / Vladimir Bondiuk Petruk",
    plot: `Historias de amputación a la hora del té es una comedia negra que nos sumerge en la última semana de vida de Laurita, una joven que cumple 20 años y sueña con conocer a su padre.
    Ella vive con su abuela Laura quien lucha día a día contra la enfermedad de su nieta e intenta protegerla de todo lo que pueda hacerle daño. Siete mujeres emergerán por las grietas del pasado para ayudarlas a contar esta historia que propone un gran alejamiento a cualquier tipo de realismo y nos adentra a un universo grotesco. El lenguaje corporal es reflejo de la vibración intensa e interna de los personajes.  
    La acción transcurre en el sótano de la casa, que es el cuarto de Laurita. Su privacidad es invadida al máximo y el lugar se transforma en un aquelarre de mujeres feas, rotas y amputadas, condenadas por un mundo patriarcal que las estruja y modela a su antojo.  
    Relatamos este tema trágico como una comedia, para permitirnos reír y llorar al mismo tiempo.`,
    review: `Muy buena obra que a la vez es divertida y muy triste. La vi varias veces y podría seguir viéndola porque cada vez me hizo sentir algo a pesar de saber lo que sucedía.`,
    genres: ["Teatrol el Galpon", "2022", "2023"],
    favourite: true,
    score: 8,
  },
  {
    id: 1000000000016,
    name: "Esa relación tan delicada",
    author: "Loleh Bellon / Sergio Dotta",
    plot: `La relación entre madre e hija da lugar a la autora francesa a indagar en el universo íntimo de padres e hijos: conflictos, amores, rencores y frustraciones emergen a la superficie de esta comedia dramática donde todo es lo que parece ser y donde los sentimientos humanos están interpretados de acuerdo a la mirada de quien proviene. El humor asordinado, el dolor de los desencuentros, el amor profundo y las rivalidades eternas están contados con ternura y una mirada humana a través de la cual todos podemos vernos reflejados.`,
    review: `No recuedo bien esta obra por lo qie prefiero no dar una opinión`,
    genres: ["Teatrol el Galpon", "2022"],
    favourite: false,
    score: 0,
  },
  {
    id: 1000000000017,
    name: "Pequeños actos pedagógicos revolucionarios",
    author: "Micaela Fraga / Nicolás Tapia",
    plot: `La obra comienza con la inquietante situación de un grupo de docentes de arte que en marzo aún están esperando poder elegir horas para empezar a trabajar. Frente a este conflicto se van develando personalidades, deseos y convicciones. En un principio, docentes y funcionarios del sistema parecen ser enemigos irreconciliables.
    Con la llegada de un enigmático personaje del pasado, se propone una elección virtual y es la tecnología la que les juega una mala pasada. Los docentes se organizan para manifestarse y surge allí un plan de sabotaje de la elección de horas por una parte del grupo. . El plan tiene un giro inesperado y la funcionaria nueva tomará las riendas de la situación secuestrando a los docentes. Varela, las ceibalitas y un plan hilarante desatan el caos en la oficina pública.`,
    review: `Obra que se basa en la realidad de los docentes, aunque exagerado para hacerlo más entretenido. Maravillosa la parte en la que aparece Varela… ¿o no era ?`,
    genres: ["2023"],
    favourite: false,
    score: 7,
  },
  {
    id: 1000000000018,
    name: "Consentimiento",
    author: "Nina Raine / Lucio Hernández",
    plot: `¿Por qué se dice que la Justicia es ciega? ¿Es por su imparcialidad? ¿O por su estrechez de miras?
    Eduardo y Tomás son abogados. La vida los enfrenta en un caso de violación en el cual uno defiende y el otro acusa a la víctima. La testigo es una mujer cuya vida parece muy lejana a la realidad de ambos. Pero en sus respectivas casas y en sus respectivas vidas, la verdad empieza a desafiar todas las versiones que se construyeron sobre ella, imponiéndose sin medir costos ni consecuencias.
    Consentimiento es una obra potente, dolorosa y cómica a la vez. Nina Raine pasa la evidencia por el colador de la justicia, y es la propia Justicia quien termina sentada en el banco de los acusados.`,
    review: `Muy buena obra para reflexionar sobre la justicia y su funcionamiento`,
    genres: ["Teatrol el Galpon", "2023"],
    favourite: false,
    score: 8,
  },
  {
    id: 1000000000019,
    name: "Esta Gaviota no es de Chéjov",
    author: "Felipe Ipar",
    plot: `En el camarín de un teatro destruido por la guerra, Treplev, fascinado por la destrucción, se pregunta para qué seguir viniendo a hacer función. Siente que todas las formas de teatro están viejas, que ya no tiene en qué creer.
    La pregunta es una: ¿cómo hacer Chéjov, si este escritor nos hundió cada vez que lo intentamos?…   
    El tiempo se comporta extraño y los personajes de “La Gaviota” se preparan para una nueva temporada de funciones, al mismo tiempo que les cuesta entender que Esta gaviota no es de Chéjov.   
    ¿Será que a alguien le interesa esta obra que estamos intentando?`,
    review: `Sin mucho que decir la verdad. En lo personal no siento que destaque en nada en particular y su temática no me resulto interesante.`,
    genres: ["Teatrol el Galpon", "2023"],
    favourite: false,
    score: 5,
  },
  {
    id: 1000000000020,
    name: "Tres versiones de la vida",
    author: "Yasmina Reza / Juan Antonio Saraví",
    plot: `El plan es perfecto: si agasajamos al Jefe y su Señora con una linda cena en la paz del hogar, todo va a salir bien y aún podrá mejorar… en varios sentidos.
    Pero el Jefe y su Señora se equivocan y aparecen un día antes, el niño se pone cargoso, y en tres diferentes versiones del mismo zafarrancho, Yasmina Reza nos muestra lo más terrible y risible de nuestras pequeñas existencias.`,
    review: `Obra interesante que nos muestra, a través de tres versiones de una misma situación, como la forma en que encaramos las cosas cambian el resultado.`,
    genres: ["Teatrol el Galpon", "2023"],
    favourite: false,
    score: 8,
  },
  {
    id: 1000000000021,
    name: "Todo bien mientras nos muramos por orden de ascendencia",
    author: "Ivor Martinić / Leonel Schmidt",
    plot: `Una noche la ciudad es azotada por una terrible  tormenta, las calles se inundan, la ciudad es un caos. Casi que refugiados en su restaurante, la familia de Paolo, que migra esta misma noche hacia Estados Unidos, lo espera ansiosamente para despedirse. Janko, padre de Paolo, lidia con sus frustraciones, Elza, la exmujer de Janko, se resiste a asumir el fracaso de la familia. Lucija, exnovia de Paolo, se niega a creer que un amor joven pueda morir tan rápido. Y Nikolina, la actual pareja de Janko, no quiere darse cuenta que no hay un futuro para su relación. `,
    review: `Muy interesante las relaciones entre los personajes de la obra, el fracaso de una familia y el final de una relación. Paolo nunca aparece en escena, pero creo que es el único que entiende que con o sin su partida, las relaciones que tiene (familiares y por fuera de esta) están terminadas.`,
    genres: ["Teatro Circular", "2023"],
    favourite: false,
    score: 8,
  },
  {
    id: 1000000000022,
    name: "Los lugares intermedios",
    author: "María Eugenia Puyol / Soledad Lacassy",
    plot: `Elisa se niega a hablar del dolor que atraviesa. Como ella, cinco jóvenes lidian con sus duelos y con el peso de sus decisiones.
    La obra presenta situaciones en las que los personajes, al habitar estos lugares de paso, se ven enfrentados a sí mismos en la realidad que les toca vivir.   
    Una historia hecha retazos, entre lo que fue y lo que está por llegar, que nos habla de la posibilidad de recuperarse de las heridas, de subsanar la injusticia y del poder de la amistad y el amor`,
    review: `Obra que nos muestra el duelo y cómo enfrentan la perdida los diferentes personajes. La historia está bien pero no destaca.`,
    genres: ["Teatro el Galpón", "2023"],
    favourite: false,
    score: 5,
  },
  {
    id: 1000000000023,
    name: "El árbol de Elisa",
    author: "Cecilia Baranda",
    plot: `El árbol de Elisa es una metáfora de la sociedad.
    Una mujer mayor vive bajo un árbol y disfruta de hacerlo.   
    El mundo real, el del recuerdo y el de la fantasía se enlazan en las escenas que desde el humor, lo absurdo y el grotesco, nos cuentan su historia y relación familiar.   
    Cada personaje es un símbolo de los seres humanos de la sociedad en que vivimos.`,
    review: `A veces no queremos ver la realidad por lo que es, este es el caso de Elisa. ¿Podrá ver lo que trata de evitar? Interesante obra en la que vemos como Elisa trata de maquillar la realidad en la que vive y su lucha por no ver lo que hay por detrás del cuento que ella se inventó.`,
    genres: ["Teatro Circular", "2022 y 2023"],
    favourite: false,
    score: 6,
  },
  {
    id: 1000000000024,
    name: "María",
    author: "Noelia Herrera Luzardo",
    plot: `Una ciudad, un edificio, dos microapartamentos linderos. En cada uno de ellos vive una mujer.
    Como espectadores, somos testigos de la convivencia que se produce a través de esa pared que separa los dos hogares.`,
    review: `Interesante la escenografía en la que podíamos ver las dos protagonistas desarrollar su vida en sus departamentos. Una pared las separa, pero tienen muchas cosas en común por el simple hecho de ser mujeres. `,
    genres: ["Sala Verdi", "2023"],
    favourite: false,
    score: 7,
  },
  {
    id: 1000000000025,
    name: "Zombi Manifiesto",
    author: "Santiago Sanguinetti",
    plot: `Dos jóvenes descubren que los soldados enterrados en el Panteón Militar del cementerio local cobran vida convertidos en zombis cuando alguien recita fragmentos del Manifiesto Comunista. Así, despiertan y secuestran a un teniente del Ejército Nacional para encerrarlo en un sótano y obligarlo a aprender filosofía marxista. Él aún recuerda al responsable de su muerte y la búsqueda de justicia post mortem lo hace escapar, complicando las cosas en un pueblo en el que pocas veces sucede algo extraño. Una comedia sobre una traición y una venganza, marcada por los alcances de la conciencia de clase.`,
    review: `Obra con una temática original que, en lo personal, me lleva a pensar sobre como muchas cosas quedan enterradas sin respuesta. En esta extraña y entretenida obra vamos a poder ver como un zombi va por venganza para poder descansar finalmente en paz. La actuación de Rogelio Gracia como zombi excelente. `,
    genres: ["Sala Verdi", "2023"],
    favourite: true,
    score: 9,
  },
  {
    id: 1000000000026,
    name: "Demos Kratos",
    author: "Andrea Arobba",
    plot: `La democracia es la administración del disenso, pero también la denodada búsqueda de coincidencia y encuentro. En un momento en el que la región parece cada vez más sumida en la polarización y la degradación del otro, el arte permite recordar que la información, los mensajes y los relatos constituyen una trama compleja, ante la cual nada debe considerarse una verdad absoluta y excluyente.
    Demos Kratos nos remite a la formulación más originaria de la democracia: la asamblea, y nos invita a considerar de un modo lúdico, lleno de ironía, al dictador y al humano solidario que todos llevamos dentro. Se trata de una celebración, sí, pero también de una invitación a mirar dentro de cada una de nuestras intenciones con sentido crítico.`,
    review: `La danza muy buena, la reflexión profunda que uno esperaría luego de ver la tremenda descripción que tiene, inexistente. Como espectáculo de danza es complejo e interesante, pero es un robo querer vender que vamos a tener un poco mas que un viaje revelador luego de ver la obra. Si te gusta la danza muy recomendable, si querías “considerar de un modo lúdico, lleno de ironía, al dictador y al humano solidario que todos llevamos dentro”, como nos dice la sinopsis, te vas decepcionado. Una representación más de como el arte moderno nos vende una cosa con palabras lindas para darnos otra muy diferente.`,
    genres: ["Sala Verdi", "2023"],
    favourite: false,
    score: 3,
  },
  {
    id: 1000000000027,
    name: "Ante la jubilación",
    author: "Thomas Bernhard / Margarita Musto y Levón",
    plot: `La obra nos enfrenta a una familia intoxicada por el nazismo. Una muestra del amplio espectro de síntomas que vive aún hoy una buena parte de la humanidad. No se trata simplemente de una ideología, de un monstruo histórico, sino de una enfermedad espiritual que supervive en la oscuridad y en muchos rincones de la sociedad actual. Unos hermanos afectados por el virus de la mutación actual del nazismo, encerrados en una existencia familiar falsa, en una prisión estrecha y asfixiante, creada y custodiada por ellos mismos en el que se respira el odio, el miedo y la imposibilidad de ser feliz.`,
    review: `Muy buena obra que, de una forma un poco humorística, nos hace reflexionar sobre el impacto del nazismo y como a pesar de terminar la guerra sus raíces siguieron en la sociedad. ¿Volveremos a algo así en algún momento?  El personaje principal de esta obra nos responde un rotundo si a la pregunta. `,
    genres: ["Teatro el Galpón", "2023", "2024"],
    favourite: true,
    score: 9,
  },
  {
    id: 1000000000028,
    name: "Burn, baby burn",
    author: "Carine Lacroix / Fernando Toja",
    plot: `El encuentro de dos jóvenes en un desértico espacio, una vieja estación de
    servicio en el medio de la nada, junto a un dispensador de gasolina, enmarca
    la historia de dos soledades, dos universos, dos jóvenes que desconocidas
    en primera instancia buscan una comunicación a través de las historias
    imaginadas por Noserí y el mundo de imaginación apagada de Violeta. Un “no
    lugar” para poder entender “un lugar” posible en un mundo que las excluye.
    Jóvenes adolescentes que adolecen de sentido en sus existencias, en donde
    las circunstancias de este encuentro, desencadenan en ellas la unión de sus soledades hacia un camino por el desierto.`,
    review: `Está bien pero sin mucho que destacar`,
    genres: ["Teatro el Galpón", "2024"],
    favourite: false,
    score: 6,
  },
  {
    id: 1000000000029,
    name: "El río",
    author: "Dino Armas / Lila García",
    plot: `Descarnado relato de un drama familiar. Allí, donde acontece lo terrible, nace la resiliencia y surge la empatía. Allí, la crueldad fue vencida por el amor. Tres mujeres, tres vidas, una historia.`,
    review: `La vida de tres mujeres marcadas por los mismos acontecimientos. Una obra bien hecha en la que vemos como lidian estas mujeres con sus pasados. `,
    genres: ["Teatro el Galpón", "2024"],
    favourite: false,
    score: 7,
  },
  {
    id: 1000000000030,
    name: "De dioses, personitas y policías",
    author: "Humberto Costantini / Marina Rodríguez",
    plot: `Humberto Costantini comenzó la escritura de esta historia de amor, de humor y de poesía bajo la pavorosa amenaza de la muerte en 1975. La fue escribiendo a los saltos, escondido, perseguido. Consciente del peligro que corría su vida tras el golpe militar del 24 de marzo de 1976, tomó sus recaudos para salvar la obra: hacía cuatro copias del texto: una para él y las otras repartidas para su resguardo entre sus familiares.
    Con mucho humor y situaciones disparatadas e hilarantes el autor denuncia el terrorismo de Estado y el modus operandi de los organismos policiales y parapoliciales y se venga de ellos ridiculizándolos`,
    review: `Una forma un tanto curiosa de contar una parte de nuestra historia. En esta obra, aunque la intervención de los dioses es la que da inicio a los acontecimientos, el final trágico es culpa de los seres humanos y su capacidad de hacer cosas terribles.`,
    genres: ["Teatro el Galpón", "2024"],
    favourite: false,
    score: 7,
  },
  {
    id: 1000000000031,
    name: "El Disparo",
    author: "Estela Golovchenko / Graciela Escuder",
    plot: `En esta obra la autora enfoca la relación entre una mujer madura y un joven que ha entrado a su casa. Jugando en diversos planos de realidad, aborda temas como la justicia, la culpa, la venganza y el perdón, que no son categorías éticas abstractas, sino una presencia en nuestra vida y en nuestra sociedad.`,
    review: ``,
    genres: ["Teatro el Galpón", "2024"],
    favourite: false,
    score: 7,
  },
  {
    id: 1000000000032,
    name: "Agosto",
    author: "Trecy Letts / Héctor Guido",
    plot: `«Agosto: Condado Osage» trata de una familia disfuncional, con problemas típicos de la familia contemporánea, aparentemente normal hasta que surge un hecho clave que motiva un desenlace inesperado, mostrando el lado oscuro de ese núcleo social. Una madre que consume todo tipo de pastillas, una narcodependiente, ácidamente mordaz; un padre bebedor que desaparece; hijas abandonadas, con verdades reprimidas y secretos.`,
    review: `Muy buena obra en la que de a poco vamos viendo las cosas que hay enterradas detrás de la fachada de una familia normal. Son interesantes las relaciones entre los integrantes de la familia y cualquier parecido con la realidad no es pura coincidencia. La escenografía representa la totalidad de la cosa familiar y ayuda a que se pueda apreciar tanto de las interacciones de los personajes como de las diferencias entre las habitaciones donde se van dando estas. `,
    genres: ["Teatro el Galpón", "2024"],
    favourite: false,
    score: 8,
  },
  {
    id: 1000000000033,
    name: "Ushuaia",
    author: "Alberto Conejero / Sergio Luján",
    plot: `La llegada de Nina a Ushuaia como asistenta del anciano Mateo, pronto generará que los secretos guardados de un pasado terrible emerjan a la luz. La búsqueda de memoria, verdad, y justicia se abre paso en la trama, como las raíces de los árboles añosos de esa Tierra del Fuego, que el viento austral arrasa incansablemente. La historia de un genocidio es la historia de todos los genocidios`,
    review: `Con esta obra siento que hay algo más profundo que no termine de comprender o al menos a mí no me llegó. No saco en claro lo que nos quería decir el autor.`,
    genres: ["Teatro Solis", "2024"],
    favourite: false,
    score: 6,
  },
  {
    id: 1000000000034,
    name: "Angélica",
    author: "Pablo Albarello",
    plot: `Esta comedia fue escrita ajustándose a situaciones y realidades actuales, tomando como relatores a dos hombres de campo, enfrentados a una situación compleja e hilarante.
    La verosimilitud de estos personajes Merino y Areco , interpretados por Roberto Meneses y Massimo Tenuta, enfrentados a un hecho absurdo pero a su vez creíble , (porque ellos lo son y no las circunstancias) hacen el deleite de la platea con sus gags y gestualidad.   
    La soledad del campo adormece la vida de estos dos gauchos. La seca atormenta la quietud. Pero esa parsimoniosa y osca relación  se verá turbada por la llegada de manera misteriosa  por la cautivante Angelica.     
    El drama del deseo , la angustia de la monotonía quebrada, los celos, la traición y el aporte del humor increíble, transitan el desarrollo escénico hasta la inesperada resolución.`,
    review: `Entretenida obra con un final inesperado`,
    genres: ["Teatro Circular", "2024"],
    favourite: false,
    score: 7,
  },
  {
    id: 1000000000035,
    name: "Dos hemisferios",
    author:
      "Coreografía : Gemma Bond y Iñaka Urlezaga / Música: Tchaikovsky y Piazzolla",
    plot: `Dos nuevas creaciones coreográficas tendrán su estreno mundial en Montevideo. En escena se conjugará el virtuosismo, la energía y el desafío. La compañía nacional de danza ofrecerá al público una muestra más de versatilidad donde nadie quedará indiferente al finalizar cada función.`,
    review: ``,
    genres: ["Ballet Nacional", "2023"],
    favourite: false,
    score: 8,
  },
  {
    id: 1000000000036,
    name: "El Cascanueces",
    author: "Coreografía: Silvia Bazilis / Música: Tchaikovsky",
    plot: `El ballet de Tchaikovsky, El cascanueces, está basado en una historia de la autora alemana ETA Hoffmann. Este popular cuento navideño, recrea, durante la celebración de la Nochebuena, la historia de Clarita, quien recibe como obsequio un cascanueces con figura de soldado, el cual cobra vida como un apuesto príncipe y, después de derrotar al Rey Ratón en una dura batalla, la lleva a un viaje a países maravillosos, lleno de encanto y fantasía.`,
    review: ``,
    genres: ["Ballet Nacional", "2017"],
    favourite: false,
    score: 9,
  },
  {
    id: 1000000000037,
    name: "Mirame que nos miran",
    author: "Julieta Lucena / Soledad Lacassy",
    plot: `En un intento por salvar el vínculo de una cotidianidad de cartón, ella le propone a él escribir una obra sobre su relación, que atraviese los diferentes momentos de su vida juntos, siempre volviendo al presente. Un recorrido ágil y no lineal que combina recursos escénicos para transitar la complicidad agónica de una relación que habla de todas las relaciones; un amor que es, que fue, que podría haber sido. La historia que los protagonistas tan verdaderos como ficticios, eligen contarse a sí mismos.`,
    review: `Muy entretenida, la vi varias veces y la volvería a ver muchas más. `,
    genres: ["Teatro Circular", "2022", "2023", "2024"],
    favourite: true,
    score: 8,
  },
  {
    id: 1000000000038,
    name: "Vaciar chat",
    author: "Soledad Lacassy / Julieta Lucena",
    plot: `Una generación atravesada por la virtualidad, la comunicación fácil e inmediata y la hiperconectividad. Pero a su vez una generación que decide dejar de sostener, testificar e ignorar la violencia, el abuso, el machismo y la opresión.
    La dimensión de un post compartido al instante de público acceso puede ser tremendamente destructivo como profundamente reparador.  
    ¿Cuáles son nuestras herramientas hoy para acceder a la justicia? ¿Cómo accede la justicia a las herramientas de hoy?`,
    review: `Deja mucho que pensar y sin duda muestra la realidad en la que vivimos.`,
    genres: ["Teatro Circular", "2022", "2023"],
    favourite: true,
    score: 8,
  },
  {
    id: 1000000000039,
    name: "El prisionero de la Segunda Avenida",
    author: "Neil Simon / Jorge Denevi",
    plot: `¿Por qué una comedia escrita y estrenada en Broadway en el año 1971 se ha convertido en su obra más vigente, que más risas obtiene y también, con el tiempo, la que más entradas ha vendido en todo el mundo? La respuesta podría estar en que reflexiona, entre risas, sobre la sociedad de consumo, la imperiosa necesidad del éxito económico como logro personal y el miedo a perderlo. ¿Se puede hacer una gran comedia sobre temas tan serios, a veces tan dramáticos? Neil Simon lo demuestra. Tal vez porque esos temas se han convertido en más y más preocupantes para el hombre moderno, y aquí el autor se ha convertido sin proponérselo en una especie de profeta moderno.`,
    review: `Excelente obra que a la que es vez divertida y nos lleva a pensar sobre la sociedad en la que vivimos`,
    genres: ["Teatro el Galpón", "2022"],
    favourite: false,
    score: 8,
  },
  {
    id: 1000000000040,
    name: "La forma de las cosas",
    author: "Neil Labute / Fabio Zidan y Gustavo Bianchi",
    plot: `“La forma de las cosas” nos plantea una historia de amor, donde la entrega genuina, pero también la estrategia extrema de manipulación nos abre un interrogante de  qué cosa es cierta, y cual otra no lo es,  ¿Dónde está la verdad?  ¿Cuáles son los límites y las fronteras, tanto en el arte como en la vida?
    La búsqueda de esa verdad tiene su precio, ¿Pero acaso justifica el fin todos los medios?`,
    review: `Muy bueno el giro final de esta historia, la transforma completamente`,
    genres: ["Teatro el Galpón", "2022"],
    favourite: true,
    score: 8,
  },
  {
    id: 1000000000041,
    name: "Los días de la fragilidad",
    author: "",
    plot: `Los días de la fragilidad es un poema dramático que entrama dos amores, el de la pasión futbolera, y el amor entre la goleadora del Club Atlético Palermo de Rocha con un barrabrava de su hinchada conocido cómo el Mudo. Una historia que parece tener la simplicidad de lo cotidiano pero que construye un relato íntimo en un espacio utópico donde los cuerpos se transfiguran para dar inicio al juego de las pasiones. Ella dentro, él afuera, se miden entre miradas y palabras no dichas.
    La poesía, el fútbol, el amor, el deseo, las pasiones se dan cita en esta obra, todo puede acontecer cuando dos cuerpos se encuentran para disputar un partido.`,
    review: `Nada que decir, no le encontre la gracia.`,
    genres: ["Teatro Circular", "2023"],
    favourite: false,
    score: 4,
  },
  {
    id: 1000000000042,
    name: "Una noche en el tablado",
    author: "Varios",
    plot: `“Una noche de tablado” es un espectáculo musical, de humor absurdo, que tiene ante todo un carácter sumamente festivo.
    El personaje central es el Tablado,  tomado éste como ese lugar donde la gente se reunía para ver a esos artistas populares que por un mes son parte de una de las expresiones culturales más importantes del Uruguay, el Carnaval.   
    “Una noche de tablado”, lejos de ser un ejercicio nostálgico, pretende ser un tributo a un fenómeno cultural y una expresión popular que atraviesa varias generaciones. Los personajes son los típicos de todo barrio, que aún podemos encontrar si sabemos mirar y escuchar.  
    El comediante que no sabe que es comediante, el humorista que no sabe que es humorista. El tipo que tiene la salida clásica, la repentización, la ironía y la acidez a flor de piel. Que no se las sabe todas pero que vivió mucho y, por eso, habla desde un lugar que ya ni juzga, solo se limita a reírse de ellas y punto.`,
    review: `Nada de interés que ver por aquí, sigan circulando`,
    genres: ["Teatro el Galpón", "2023"],
    favourite: false,
    score: 5,
  },
];

export default completedPlays;
