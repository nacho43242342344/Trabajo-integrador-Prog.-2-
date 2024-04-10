CREATE SCHEMA db_integrador;
USE db_integrador;

-- Creación de la tabla de usuarios
CREATE TABLE tabla_usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(250) NOT NULL,
    usuario VARCHAR(250),
	producto VARCHAR(250),
    contraseña VARCHAR(250) NOT NULL,
    nacimiento DATE,
	dni INT,
	foto_de_perfil VARCHAR(250),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NULL
);

-- Creación de la tabla de productos
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    nombre_archivo_imagen VARCHAR(255),
    nombre_producto VARCHAR(255),
    descripcion TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Creación de la tabla de comentarios
CREATE TABLE comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT,
    usuario_id INT,
    texto_comentario TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL,
    FOREIGN KEY (post_id) REFERENCES productos(id),
	FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);


--Inserción de los usuarios
SELECT * FROM db_integrador.tabla_usuarios;

INSERT INTO tabla_usuarios
VALUES (DEFAULT, 'geroa2004@gmail.com',	'Gerónimo',	'gero123',	'2004-12-01', 45892149,	'https://as2.ftcdn.net/v2/jpg/02/13/59/51/1000_F_213595138_QiDlxrtSWGBSj3q5JsjGohaNsF9vdtft.jpg', '2024-04-10 08:30:00', '2024-04-10 09:15:30', NULL);

INSERT INTO tabla_usuarios
VALUES (DEFAULT, 'nachox.998@gmail.com', 'Ignacio',	'nachi123', '2005-06-27', 46795529, 'https://as2.ftcdn.net/v2/jpg/02/13/59/51/1000_F_213595138_QiDlxrtSWGBSj3q5JsjGohaNsF9vdtft.jpg',	'2024-01-20 18:20:55', '2024-03-15 15:00:00', '2024-04-10 10:00:00');

INSERT INTO tabla_usuarios
VALUES (DEFAULT, 'facundo@gmail.com', 'Facundo', 'facu123', '2000-01-01', 43892149, 'https://as2.ftcdn.net/v2/jpg/02/13/59/51/1000_F_213595138_QiDlxrtSWGBSj3q5JsjGohaNsF9vdtft.jpg', '2024-03-15 14:45:23', '2023-12-01 12:30:45','2024-03-15 16:30:00');

INSERT INTO tabla_usuarios
VALUES (DEFAULT, 'gactis@udesa.edu.com', 'Actis', 'gerito123', '2004-05-28', 49892149, 'https://as2.ftcdn.net/v2/jpg/02/13/59/51/1000_F_213595138_QiDlxrtSWGBSj3q5JsjGohaNsF9vdtft.jpg', '2023-12-01 10:00:00',	'2024-01-20 19:00:00', NULL);

INSERT INTO tabla_usuarios
VALUES (DEFAULT, 'nachito345@gmail.com', 'Nacho', 'nachota123', '2007-12-01', 50892149, 'https://as2.ftcdn.net/v2/jpg/02/13/59/51/1000_F_213595138_QiDlxrtSWGBSj3q5JsjGohaNsF9vdtft.jpg', '2024-02-29 23:59:59' '2024-02-29 23:59:59', '2024-02-29 23:59:59')

-- Inserción de los productos
SELECT * FROM db_integrador.productos;

INSERT INTO productos
VALUES (DEFAULT, 10, 'https://fridayshopping.vn/wp-content/uploads/2023/05/2-dong-ho-casio-w-800h-1avdf-chinh-hang-100.jpg', 'Casio deportivo', 'El Casio W-800H es un poco más grande que el Casio W-96H y tiene una gran ventaja sobre este modelo: su resistencia al agua es de hasta 100M, frente a 50 M del anterior. Su diseño es algo más clásico, con la caja de resina completamente en negro y con los botones redondos metálicos.', '2024-04-10 08:30:00', '2024-04-10 09:15:30', NULL);

INSERT INTO productos
VALUES (DEFAULT, 11, 'https://www.watchgecko.com/wp/wp-content/uploads/2018/02/Seiko-SARB-on-Highley-Leather.jpg', 'Seiko 5', 'Descripción del Seiko 5.', '2024-04-10 08:35:00', '2024-04-10 09:20:00', '2024-04-10 10:00:00');

INSERT INTO productos
VALUES (DEFAULT, 12, 'https://gouforit.com/wordpress/wp-content/uploads/2019/06/casio-rangeman-GPRB-1000-768x946.jpg', 'Casio G-Shock', 'Descripción del Casio G-Shock.', '2024-04-10 08:40:00', '2024-04-10 09:25:30', '2024-04-10 10:00:00');

INSERT INTO productos
VALUES (DEFAULT, 13, 'https://sansomwatches.com/wp-content/uploads/2019/01/IMG_1768.jpg', 'Omega Seamaster', 'Descripción del Omega Seamaster.', '2024-04-10 08:45:00', '2024-04-10 09:30:00', '2024-04-10 10:00:00');

INSERT INTO productos
VALUES (DEFAULT, 14, 'https://th.bing.com/th/id/OIP.XO_pqUc_0TgGs3RIOL6SwgHaHa?rs=1&pid=ImgDetMain', 'Rolex Submariner', 'Descripción del Rolex Submariner.', '2024-04-10 08:50:00', '2024-04-10 09:35:30', '2024-04-10 10:00:00');

INSERT INTO productos
VALUES (DEFAULT, 10,'https://th.bing.com/th/id/R.d42713fecb802754e1f736008eb49bea?rik=OyxFh3lRBSCVdQ&riu=http%3a%2f%2fablogtowatch.com%2fwp-content%2fuploads%2f2016%2f01%2fTAG-Heuer-Carrera-Heuer-02T-aBlogtoWatch-6.jpg&ehk=VPqWhy8iDRvWyOIGSTeJOAhmJeewgr9RVqmylww9NTM%3d&risl=&pid=ImgRaw&r=0', 'TAG Heuer Carrera', 'Descripción del TAG Heuer Carrera.', '2024-04-10 08:55:00', '2024-04-10 09:40:00', NULL);

INSERT INTO productos
VALUES (DEFAULT, 14,'https://th.bing.com/th/id/OIP.H_ZSDcJNnuqLI6d0JsqnIAHaIp?rs=1&pid=ImgDetMain', 'Breitling Chronomat', 'Descripción del Breitling Chronomat.', '2024-04-10 09:00:00', '2024-04-10 09:45:30', '2024-04-10 10:00:00');

INSERT INTO productos
VALUES (DEFAULT, 11,'https://th.bing.com/th/id/OIP.NKxFNfTabs6cbh9Uh_rSvwHaDt?rs=1&pid=ImgDetMain', 'Patek Philippe Nautilus', 'Descripción del Patek Philippe Nautilus.', '2024-04-10 09:05:00', '2024-04-10 09:50:00', '2024-04-10 10:00:00');

INSERT INTO productos
VALUES (DEFAULT, 13,'https://th.bing.com/th/id/OIP.HwhqlfwLV2ktMBtD2oBMrQHaF7?rs=1&pid=ImgDetMain', 'IWC Portuguese', 'Descripción del IWC Portuguese.', '2024-04-10 09:10:00', '2024-04-10 09:55:30', '2024-04-10 10:00:00');

INSERT INTO productos
VALUES (DEFAULT, 12,'https://th.bing.com/th/id/OIP.-jbutvN_IP_okpTSgGux5wHaE7?rs=1&pid=ImgDetMain', 'Audemars Piguet Royal Oak', 'Descripción del Audemars Piguet Royal Oak.', '2024-04-10 09:15:00', '2024-04-10 10:00:00', NULL);
