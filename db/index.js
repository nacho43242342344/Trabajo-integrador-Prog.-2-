let db ={
    usuario:
        {   
            usuario: 'Gerónimo',
            mail: 'geroa2004@gmail.com',
            contraseña: 'gero123',
            nacimiento: '2004-12-01',
            dni: '45892149',
            foto_de_perfil: '/images/users/nachi.png',
        },
    productos: [
        {
            nombre: "Casio deportivo",
            descripcion: "El reloj deportivo Casio es duradero y funcional, ideal para actividades físicas. Con características como cronómetro y resistencia al agua, es perfecto para entrenamientos intensos.",
            imagen: '/images/products/casio-deportivo.jpg',
            estado: 1,
            comentarios: [
                {
                    nombreUsuario: "CR7",
                    texto: "Muy buena calidad, es tal cual se ve en la foto, muy lindo para el uso diario y para hacer deporte. SIUUUUUUUUUUUU!!!!",
                    imagenPerfil: "/images/users/CR7.jpg" 
                },
                {
                    nombreUsuario: "Tu amigable vecino",
                    texto: "Muy lindo me compre uno para mi, ahora Mary Jane quiere uno",
                    imagenPerfil: "/images/users/peter.jpg" 
                },
                {
                    nombreUsuario: "Walter",
                    texto: "Muy buena calidad, es tal cual se ve en la foto, muy lindo para el uso diario y para calcular el tiempo de cocción",
                    imagenPerfil: "/images/users/walter.jpg" 
                },
            ]
        },
        {
            nombre: "Seiko 5",
            descripcion: "El reloj Seiko 5 es una combinación perfecta de estilo y funcionalidad. Con su diseño clásico y detalles elegantes, es adecuado para cualquier ocasión. Además, su movimiento automático, resistencia al agua y durabilidad lo convierten en una opción fiable y versátil para el día a día.",
            imagen: '/images/products/Seiko-5.jpg',
            estado: 1, 
            comentarios: [
                {
                    nombreUsuario: "Justin Bieber",
                    texto: "En los conciertos brilla mas que yo!!",
                    imagenPerfil: "/images/users/Justin.jpg" 
                },
                {
                    nombreUsuario: "Michael Jackson",
                    texto: "Lo que mas me gusta de este reloj es que hace que la gente me siga recordando en lo mas alto",
                    imagenPerfil: "/images/users/michael.jpg" 
                },
                {
                    nombreUsuario: "Lionel",
                    texto: "Le compre uno a los nenes, y ahora Antonella no me deja jugar al fulbo",
                    imagenPerfil: "/images/users/messi.jpg" 
                },
            ]
        },
        {
            nombre: "Casio G-Shock",
            descripcion: "El Casio G-Shock es un reloj resistente diseñado para soportar condiciones extremas. Con su construcción robusta y funciones como resistencia a impactos, resistencia al agua y diversas características de cronometraje, es el compañero perfecto para aventuras al aire libre y actividades deportivas intensas.",
            imagen: '/images/products/Casio-G-Shock.jpg',
            estado: 1, 
            comentarios: [
                {
                    nombreUsuario: "Batman",
                    texto: "Lo mejor de esta nave es que combina con todos mis vehiculos y no me deja a pata nunca cuando de defender la ciudad hablamos",
                    imagenPerfil: "/images/users/batman.jpg" 
                },
                {
                    nombreUsuario: "Milei",
                    texto: "Osea digamos, me compre uno de estos y ahora no veo la hora de arreglar la economia y hacer a Argentina prospera de nuevo",
                    imagenPerfil: "/images/users/milei.jpg" 
                },
                {
                    nombreUsuario: "Duki",
                    texto: "Desde que me compre este reloj se puede decir que soy un verdadero rockstar",
                    imagenPerfil: "/images/users/duki.jpg" 
                },
            ]
        },
        {
            nombre: "Omega Seamaster",
            descripcion: "El Omega Seamaster es un símbolo de elegancia y rendimiento. Diseñado originalmente para profesionales del buceo, su resistencia al agua y su precisión lo convierten en una opción popular tanto bajo el agua como en tierra firme. Con un diseño sofisticado y una artesanía excepcional, el Seamaster es una pieza atemporal que combina estilo y funcionalidad de manera impecable.",
            imagen: '/images/products/Omega-Seamaster.jpg',
            estado: 1,
            comentarios: [
                {
                    nombreUsuario: "Anuel",
                    texto: "Me compre este reloj y lo unico que veo son las 5.3 millones pm BRRRRRR",
                    imagenPerfil: "/images/users/anuel.jpg" 
                },
                {
                    nombreUsuario: "Elon Musk",
                    texto: "Debo de reconocer que hasta antes de comprar este reloj no podia parar de trabajar. Pero ahora mido mejor mis tiempos de descanso",
                    imagenPerfil: "/images/users/elon.jpg" 
                },
                {
                    nombreUsuario: "Robert Downey",
                    texto: "Antes no veia la hora de salvar al universo. Ahora que me retire de esa vida me gusta comprar relojes. Sin duda alguna este es el mejor de mi coleccion",
                    imagenPerfil: "/images/users/iro.jpg" 
                },
            ]
        },
        {
            nombre: "Rolex Submariner",
            descripcion: "El Rolex Submariner es un ícono de la relojería deportiva de lujo. Reconocido por su diseño atemporal y su resistencia al agua, este reloj ha sido durante décadas la elección preferida de los buceadores profesionales y entusiastas del deporte acuático. Con su robusta caja de acero inoxidable, bisel giratorio unidireccional y movimiento mecánico de alta precisión, el Submariner combina elegancia y rendimiento de manera excepcional.",
            precio: '980.350',
            imagen: '/images/products/Rolex-Submariner.jpg',
            estado: 1, 
            comentarios: [
                {
                    nombreUsuario: "Llados",
                    texto: "Es como fuck bro sabes. Miro mi muñeca y tengo un fucking rolex de oro que vale mas que tu lamborghini huracan sabes. Fijate con quien te rodeas bro, no pueden juntarte con fucking perdedores sabes",
                    imagenPerfil: "/images/users/llados.jpg" 
                },
                {
                    nombreUsuario: "Bad Bunny",
                    texto: "En una de mis canciones dije 'no me vuelvo a enamorar no' pero desde que tengo este rolex creo que me enamore de el",
                    imagenPerfil: "/images/users/bunny.jpg" 
                },
                {
                    nombreUsuario: "Capitan America",
                    texto: "Este rolex combina muy bien con mi traje, ademas demuestra que soy el mejor super heroe",
                    imagenPerfil: "/images/users/america.jpg" 
                },
            ]
        },
        {
            nombre: "TAG Heuer Carrera",
            descripcion: "El TAG Heuer Carrera es un reloj deportivo de lujo que encarna la elegancia y la precisión. Inspirado en las carreras de automóviles, su diseño dinámico y sofisticado refleja la pasión por la velocidad y la excelencia técnica. Con su distintivo bisel taquimétrico, cronógrafo preciso y detalles de alta gama, el Carrera es una declaración de estilo para aquellos que buscan un reloj que combine rendimiento y elegancia.",
            imagen: '/images/products/Tag-Heuer-Carrera.jpg',
            estado: 2, 
            comentarios: [
                {
                    nombreUsuario: "Mauricio Macri",
                    texto: "Este rolex combina muy bien con mi traje, ademas demuestra que soy el mejor super heroe",
                    imagenPerfil: "/images/users/Mauricio-Macri.jpg" 
                },
                {
                    nombreUsuario: "CFK",
                    texto: "Este reloj lo usaba Nestor como president, que recuedos, muy elegante",
                    imagenPerfil: "/images/users/CFK.jpg" 
                },
                {
                    nombreUsuario: "Carlos Menem",
                    texto: "Que ganas de estar vivo para usar relojes como este nuevamente",
                    imagenPerfil: "/images/users/Menem.jpg" 
                },
            ]
        },
        {
            nombre: "Breitling Chronomat",
            descripcion: "El Breitling Chronomat es un símbolo de la excelencia en la relojería de aviación. Con su diseño robusto y su estética elegante, este reloj combina el rendimiento de un cronógrafo de precisión con la sofisticación de un reloj de lujo. Creado para pilotos profesionales y entusiastas de la aviación, el Chronomat ofrece una combinación perfecta de estilo y funcionalidad, con características como un bisel giratorio unidireccional, resistencia al agua y cronógrafo de alta precisión.",
            imagen: '/images/products/Breitling-Chronomat.jpg',
            estado: 2,
            comentarios: [
                {
                    nombreUsuario: "Trump",
                    texto: "Con un reloj como este podria hacer que cualqioer nacion sea grande, es una finura, una excelencia ",
                    imagenPerfil: "/images/users/Trump.jpg"  
                },
                {
                    nombreUsuario: "Julian Alvarez",
                    texto: "Este es un reloj con mucha clase, pero no lo suficiente para mi, jugador del MC",
                    imagenPerfil: "/images/users/julian-alvarez.jpg"  
                },
                {
                    nombreUsuario: "Pep",
                    texto: "La verdad  mucho de relojes no se pero es bastante lindo, me gustaria saber que hace Julian comentando esto.",
                    imagenPerfil: "/images/users/Pep-Guardiola.jpg"  
                }
            ]
        },
        {
            nombre: "Patek Philippe Nautilus",
            descripcion: "El Patek Philippe Nautilus combina elegancia y deportividad en un diseño distintivo de caja octogonal. Es un símbolo de lujo discreto y artesanía excepcional.",
            imagen: '/images/products/Patek-Philippe-Nautilus.jpg',
            estado: 2,
            comentarios: [
                {
                    nombreUsuario: "Mike Tyson",
                    texto: "Teniendo una muñeca como la mia debo usar un reloj que se asemeje a la grandeza, no llo estaba encontrando hasta que me cruce con esta belleza.",
                    imagenPerfil: "/images/users/Tyson.jpg"   
                },
                {
                    nombreUsuario: "Miley Cirus",
                    texto: "Tanto en la quiebre como en mi mejor momento Patek siempre me apoyo, y hoy con esta marabilla me siento de nuevo en lo mas alto.",
                    imagenPerfil: "/images/users/miley.jpg"   
                },
                {
                    nombreUsuario: "Pity",
                    texto: "Teri ble reloj, men cantaria podre tenerlo hoy en dia, porque me siento solo.",
                    imagenPerfil: "/images/users/pity.jpg"   
                }
            ]
        },
        {
            nombre: "IWC Portuguese",
            descripcion: "El IWC Portuguese es un clásico de la relojería con su diseño elegante y atemporal. Con su esfera limpia y legible, este reloj captura la esencia del estilo vintage con un toque de modernidad. Su movimiento mecánico de alta precisión y su artesanía excepcional lo convierten en una joya para cualquier coleccionista de relojes.",
            imagen: '/images/products/IWC-Portuguese.jpg',
            estado: 2,
            comentarios: [
                {
                    nombreUsuario: "Gary Genseler",
                    texto: "El IWC Portuguese es simplemente magnífico. Su elegancia y su diseño clásico lo hacen perfecto para cualquier ocasión, ya sea formal o informal. Es un reloj que destaca por su calidad y su estilo impecable",
                    imagenPerfil: "/images/users/Gary_Gensler.jpg"     
                },
                {
                    nombreUsuario: "Mirtha",
                    texto: "Siempre me gutaron los hombres que venian a almorzar con un relog con malla de cuero, esto es una perfeccion. ",
                    imagenPerfil: "/images/users/MirthaLegrand.jpg"   
                },
                {
                    nombreUsuario: "Maslaton",
                    texto: "Fascinante reloj, me acomoda el dia, lo usaria una y otra vez, yo argentino",
                    imagenPerfil: "/images/users/Maslaton.jpg"   
                }
            ]
        },
        {
            nombre: "Audemars Piguet Royal Oak",
            descripcion: "El Audemars Piguet Royal Oak es un ícono de la relojería de lujo, reconocido por su diseño vanguardista y su artesanía excepcional. Con su distintiva caja octogonal y su brazalete integrado, el Royal Oak es un equilibrio perfecto entre elegancia y deportividad. Equipado con un movimiento mecánico de alta precisión, este reloj es una expresión de sofisticación y estilo sin igual.",
            imagen: '/images/products/Audemars-Piguet-Royal-Oak.jpg',
            estado: 2,
            comentarios: [
                {
                    nombreUsuario: "Ricardo Fort",
                    texto: "El Audemars Piguet Royal Oak es simplemente sublime. Su diseño innovador y su calidad insuperable lo convierten en un verdadero tesoro. Cada vez que lo llevo puesto, siento una sensación de exclusividad y elegancia incomparables. Definitivamente, un reloj que hace una declaración de estilo",
                    imagenPerfil: "/images/users/RicardoFort.jpg"   
                },
                {
                    nombreUsuario: "Lewis Hamilton",
                    texto: "As a 7 world champion, I always wanto to be in time to my races, so I highly recommend this watch.",
                    imagenPerfil: "/images/users/lewis-hamilton.jpg"   
                },
                {
                    nombreUsuario: "Gerad Depardieu",
                    texto: "Je recommend fortement acheter cette montre, c`est merveuilleuse.",
                    imagenPerfil: "/images/users/Gerad-Depardieu.jpg"   
                }
            ]
        }
    ]    
};

module.exports = db;
