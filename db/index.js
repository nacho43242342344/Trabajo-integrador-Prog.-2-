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
            imagen: '/images/products/casio-deportivo.jpg',
            comentarios: [
                {
                    nombreUsuario: "Mauricio Macri",
                    texto: "Este rolex combina muy bien con mi traje, ademas demuestra que soy el mejor super heroe",
                    imagenPerfil: "/images/users/america.jpg" 
                },
                {
                    nombreUsuario: "Capitan America",
                    texto: "Este rolex combina muy bien con mi traje, ademas demuestra que soy el mejor super heroe",
                    imagenPerfil: "/images/users/america.jpg" 
                },
                {
                    nombreUsuario: "Capitan America",
                    texto: "Este rolex combina muy bien con mi traje, ademas demuestra que soy el mejor super heroe",
                    imagenPerfil: "/images/users/america.jpg" 
                },
            ]
        },
        {
            nombre: "Breitling Chronomat",
            descripcion: "El Breitling Chronomat es un símbolo de la excelencia en la relojería de aviación. Con su diseño robusto y su estética elegante, este reloj combina el rendimiento de un cronógrafo de precisión con la sofisticación de un reloj de lujo. Creado para pilotos profesionales y entusiastas de la aviación, el Chronomat ofrece una combinación perfecta de estilo y funcionalidad, con características como un bisel giratorio unidireccional, resistencia al agua y cronógrafo de alta precisión.",
            imagen: '/images/products/casio-deportivo.jpg',
            comentarios: [
                {
                    nombreUsuario: "Gerónimo",
                    texto: "El Breitling Chronomat es simplemente excepcional. Su diseño audaz y su rendimiento impecable hacen que sea mi compañero ideal tanto en la cabina del avión como en tierra firme. Además, su estética elegante y su artesanía excepcional lo convierten en una pieza imprescindible en mi colección de relojes. Definitivamente, un reloj que destaca por encima de los demás.",
                    imagenPerfil: "/images/users/nachi.png"  
                },
            ]
        },
        {
            nombre: "Patek Philippe Nautilus",
            descripcion: "El Patek Philippe Nautilus combina elegancia y deportividad en un diseño distintivo de caja octogonal. Es un símbolo de lujo discreto y artesanía excepcional.",
            imagen: '/images/products/casio-deportivo.jpg',
            comentarios: [
                {
                    nombreUsuario: "Gerónimo",
                    texto: "El Nautilus de Patek Philippe es simplemente sublime. Su diseño icónico y su calidad insuperable lo hacen mi opción favorita para cualquier ocasión",
                    imagenPerfil: "/images/users/nachi.png"   
                },
            ]
        },
        {
            nombre: "IWC Portuguese",
            descripcion: "El IWC Portuguese es un clásico de la relojería con su diseño elegante y atemporal. Con su esfera limpia y legible, este reloj captura la esencia del estilo vintage con un toque de modernidad. Su movimiento mecánico de alta precisión y su artesanía excepcional lo convierten en una joya para cualquier coleccionista de relojes.",
            imagen: '/images/products/casio-deportivo.jpg',
            comentarios: [
                {
                    nombreUsuario: "Gerónimo",
                    texto: "El IWC Portuguese es simplemente magnífico. Su elegancia y su diseño clásico lo hacen perfecto para cualquier ocasión, ya sea formal o informal. Es un reloj que destaca por su calidad y su estilo impecable",
                    imagenPerfil: "/images/users/nachi.png"     
                },
            ]
        },
        {
            nombre: "Audemars Piguet Royal Oak",
            descripcion: "El Audemars Piguet Royal Oak es un ícono de la relojería de lujo, reconocido por su diseño vanguardista y su artesanía excepcional. Con su distintiva caja octogonal y su brazalete integrado, el Royal Oak es un equilibrio perfecto entre elegancia y deportividad. Equipado con un movimiento mecánico de alta precisión, este reloj es una expresión de sofisticación y estilo sin igual.",
            imagen: '/images/products/casio-deportivo.jpg',
            comentarios: [
                {
                    nombreUsuario: "Gerónimo",
                    texto: "El Audemars Piguet Royal Oak es simplemente sublime. Su diseño innovador y su calidad insuperable lo convierten en un verdadero tesoro. Cada vez que lo llevo puesto, siento una sensación de exclusividad y elegancia incomparables. Definitivamente, un reloj que hace una declaración de estilo",
                    imagenPerfil: "/images/users/nachi.png"   
                },
            ]
        }
    ]    
};

module.exports = db;
