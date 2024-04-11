let db ={
    usuario:
        {   
            usuario: 'Gerónimo',
            mail: 'geroa2004@gmail.com',
            contraseña: 'gero123',
            nacimiento: '2004-12-01',
            dni: '45892149',
            foto_de_perfil: '/public/users/nachi.png',
        },
    productos: [
        {
            nombre: "Casio deportivo",
            descripcion: "El reloj deportivo Casio es duradero y funcional, ideal para actividades físicas. Con características como cronómetro y resistencia al agua, es perfecto para entrenamientos intensos.",
            precio: 65.000,
            comentarios: [
                {
                    nombreUsuario: "Gerónimo",
                    texto: "Muy buena calidad, es tal cual se ve en la foto, muy lindo para el uso diario y para hacer deporte",
                    imagenPerfil: "/images/products/default-image.png" 
                },
            ]
        },
        {
            nombre: "Seiko 5",
            descripcion: "El reloj Seiko 5 es una combinación perfecta de estilo y funcionalidad. Con su diseño clásico y detalles elegantes, es adecuado para cualquier ocasión. Además, su movimiento automático, resistencia al agua y durabilidad lo convierten en una opción fiable y versátil para el día a día.",
            precio: 99.999,
            comentarios: [
                {
                    nombreUsuario: "Gerónimo",
                    texto: "El Seiko 5 es un reloj impresionante. Su estilo atemporal y la precisión de su movimiento automático hacen que sea mi elección diaria. ¡Es simplemente genial!",
                    imagenPerfil: "/images/products/default-image.png" 
                },
            ]
        },
        {
            nombre: "Casio G-Shock",
            descripcion: "El Casio G-Shock es un reloj resistente diseñado para soportar condiciones extremas. Con su construcción robusta y funciones como resistencia a impactos, resistencia al agua y diversas características de cronometraje, es el compañero perfecto para aventuras al aire libre y actividades deportivas intensas.",
            precio: 85.000,
            comentarios: [
                {
                    nombreUsuario: "Gerónimo",
                    texto: "¡Mi Casio G-Shock es un tanque! Lo llevo a todas partes, desde caminatas en la montaña hasta surf en el océano. Es increíble cómo puede resistir golpes y mantenerse en perfecto estado. Definitivamente, el mejor reloj para alguien como yo que vive una vida activa y aventurera.",
                    imagenPerfil: "/images/products/default-image.png" 
                },
            ]
        },
        {
            nombre: "Omega Seamaster",
            descripcion: "El Omega Seamaster es un símbolo de elegancia y rendimiento. Diseñado originalmente para profesionales del buceo, su resistencia al agua y su precisión lo convierten en una opción popular tanto bajo el agua como en tierra firme. Con un diseño sofisticado y una artesanía excepcional, el Seamaster es una pieza atemporal que combina estilo y funcionalidad de manera impecable.",
            precio: 138.000,
            comentarios: [
                {
                    nombreUsuario: "Gerónimo",
                    texto: "El Omega Seamaster es simplemente magnífico. Su diseño clásico y la calidad de su construcción son impresionantes",
                    imagenPerfil: "/images/products/default-image.png" 
                },
            ]
        },
        {
            nombre: "Rolex Submariner",
            descripcion: "El Rolex Submariner es un ícono de la relojería deportiva de lujo. Reconocido por su diseño atemporal y su resistencia al agua, este reloj ha sido durante décadas la elección preferida de los buceadores profesionales y entusiastas del deporte acuático. Con su robusta caja de acero inoxidable, bisel giratorio unidireccional y movimiento mecánico de alta precisión, el Submariner combina elegancia y rendimiento de manera excepcional.",
            precio: '980.350',
            comentarios: [
                {
                    nombreUsuario: "Gerónimo",
                    texto: "El Rolex Submariner es simplemente legendario. No solo es un símbolo de estatus, sino también un reloj confiable y resistente que puede soportar cualquier aventura.",
                    imagenPerfil: "/images/products/default-image.png" 
                },
            ]
        },
        {
            nombre: "TAG Heuer Carrera",
            descripcion: "El TAG Heuer Carrera es un reloj deportivo de lujo que encarna la elegancia y la precisión. Inspirado en las carreras de automóviles, su diseño dinámico y sofisticado refleja la pasión por la velocidad y la excelencia técnica. Con su distintivo bisel taquimétrico, cronógrafo preciso y detalles de alta gama, el Carrera es una declaración de estilo para aquellos que buscan un reloj que combine rendimiento y elegancia.",
            precio: 850.000,
            comentarios: [
                {
                    nombreUsuario: "Gerónimo",
                    texto: "El TAG Heuer Carrera es simplemente impresionante. Su diseño deportivo y elegante a la vez es perfecto para cualquier ocasión.",
                    imagenPerfil: "/images/products/default-image.png" 
                },
            ]
        },
        {
            nombre: "Breitling Chronomat",
            descripcion: "El Breitling Chronomat es un símbolo de la excelencia en la relojería de aviación. Con su diseño robusto y su estética elegante, este reloj combina el rendimiento de un cronógrafo de precisión con la sofisticación de un reloj de lujo. Creado para pilotos profesionales y entusiastas de la aviación, el Chronomat ofrece una combinación perfecta de estilo y funcionalidad, con características como un bisel giratorio unidireccional, resistencia al agua y cronógrafo de alta precisión.",
            precio: 699.000,
            comentarios: [
                {
                    nombreUsuario: "Gerónimo",
                    texto: "El Breitling Chronomat es simplemente excepcional. Su diseño audaz y su rendimiento impecable hacen que sea mi compañero ideal tanto en la cabina del avión como en tierra firme. Además, su estética elegante y su artesanía excepcional lo convierten en una pieza imprescindible en mi colección de relojes. Definitivamente, un reloj que destaca por encima de los demás.",
                    imagenPerfil: "/images/products/default-image.png" 
                },
            ]
        },
        {
            nombre: "Patek Philippe Nautilus",
            descripcion: "El Patek Philippe Nautilus combina elegancia y deportividad en un diseño distintivo de caja octogonal. Es un símbolo de lujo discreto y artesanía excepcional.",
            precio: 250.000,
            comentarios: [
                {
                    nombreUsuario: "Gerónimo",
                    texto: "El Nautilus de Patek Philippe es simplemente sublime. Su diseño icónico y su calidad insuperable lo hacen mi opción favorita para cualquier ocasión",
                    imagenPerfil: "/images/products/default-image.png" 
                },
            ]
        },
        {
            nombre: "IWC Portuguese",
            descripcion: "El IWC Portuguese es un clásico de la relojería con su diseño elegante y atemporal. Con su esfera limpia y legible, este reloj captura la esencia del estilo vintage con un toque de modernidad. Su movimiento mecánico de alta precisión y su artesanía excepcional lo convierten en una joya para cualquier coleccionista de relojes.",
            precio: 170.000,
            comentarios: [
                {
                    nombreUsuario: "Gerónimo",
                    texto: "El IWC Portuguese es simplemente magnífico. Su elegancia y su diseño clásico lo hacen perfecto para cualquier ocasión, ya sea formal o informal. Es un reloj que destaca por su calidad y su estilo impecable",
                    imagenPerfil: "/images/products/default-image.png" 
                },
            ]
        },
        {
            nombre: "Audemars Piguet Royal Oak",
            descripcion: "El Audemars Piguet Royal Oak es un ícono de la relojería de lujo, reconocido por su diseño vanguardista y su artesanía excepcional. Con su distintiva caja octogonal y su brazalete integrado, el Royal Oak es un equilibrio perfecto entre elegancia y deportividad. Equipado con un movimiento mecánico de alta precisión, este reloj es una expresión de sofisticación y estilo sin igual.",
            precio: 140.000,
            comentarios: [
                {
                    nombreUsuario: "Gerónimo",
                    texto: "El Audemars Piguet Royal Oak es simplemente sublime. Su diseño innovador y su calidad insuperable lo convierten en un verdadero tesoro. Cada vez que lo llevo puesto, siento una sensación de exclusividad y elegancia incomparables. Definitivamente, un reloj que hace una declaración de estilo",
                    imagenPerfil: "/images/products/default-image.png" 
                },
            ]
        }
    ]    
};

module.exports = db;
