let db ={
    usuario:
        {   
            usuario: 'Nacho',
            producto: 'Reloj',
            mail: 'nacho@gmail.com',
            contraseña: '123',
            nacimiento: '27/06/05',
            dni: '46795529',
            foto_de_perfil: '/public/users/nachi.png',
        },
    productos: [
        {
            nombre: "Producto 1",
            descripcion: "Descripción del producto 1",
            precio: 10.99,

            comentarios: [
                {
                    nombreUsuario: "Usuario1",
                    texto: "Comentario sobre el producto 1",
                    imagenPerfil: "/images/products/default-image.png" 
                },
            ]
        },
        {
            nombre: "Producto 2",
            descripcion: "Descripción del producto 2",
            precio: 15.99,

            comentarios: [
                {
                    nombreUsuario: "Usuario2",
                    texto: "Comentario sobre el producto 2",
                    imagenPerfil: "/images/products/default-image.png"
                },
            ]
        },
    ]
};

module.exports = db;
