CREATE SCHEMA db_integrador;
USE db_integrador;

-- Creación de la tabla de usuarios
CREATE TABLE tabla_usuarios (
    id             INT           UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email          VARCHAR(250)  NOT NULL,
    usuario        VARCHAR(250)  NOT NULL,
    password     VARCHAR(250)  NOT NULL,
    nacimiento     DATE          NOT NULL,
	dni            INT           NOT NULL,
	foto_de_perfil VARCHAR(250)  NOT NULL,
    created_at      TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP     DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at      TIMESTAMP     ON UPDATE CURRENT_TIMESTAMP NULL
);

-- Creación de la tabla de productos
CREATE TABLE productos (
    id                    INT           UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    usuario_id            INT           UNSIGNED,
    nombre_archivo_imagen VARCHAR(255)  NOT NULL,
    nombre_producto       VARCHAR(255)  NOT NULL,
    descripcion           TEXT          NOT NULL,
    created_at             TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    updated_at             TIMESTAMP     DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at             TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES tabla_usuarios(id)
);

-- Creación de la tabla de comentarios
CREATE TABLE comentarios (
    id               INT       UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    producto_id      INT       UNSIGNED,
    usuario_id       INT       UNSIGNED,
    texto_comentario TEXT      NOT NULL,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (producto_id) REFERENCES productos(id),
	FOREIGN KEY (usuario_id) REFERENCES tabla_usuarios(id)
);

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
VALUES (DEFAULT, 'nachito345@gmail.com', 'Nacho', 'nachota123', '2007-12-01', 50892149, 'https://as2.ftcdn.net/v2/jpg/02/13/59/51/1000_F_213595138_QiDlxrtSWGBSj3q5JsjGohaNsF9vdtft.jpg', '2024-02-29 23:59:59', '2024-02-29 23:59:59', '2024-02-29 23:59:59');

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

SELECT * FROM db_integrador.comentarios;

INSERT INTO comentarios
VALUES (DEFAULT, 13, 10, 'Muy alta calidad, las oilas duran poco, pero te viste muy formal', '2024-02-29 23:59:59', '2024-02-29 23:59:59', NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 13, 10, 'Muy alta calidad, las oilas duran poco, pero te viste muy formal', '2024-02-29 23:59:59', '2024-02-29 23:59:59', NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 13, 11, 'Buena relación calidad-precio. Es muy elegante y cómodo de llevar.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', '2024-02-29 23:59:59');

INSERT INTO comentarios
VALUES (DEFAULT, 14, 12, 'Me encanta el diseño y la funcionalidad. Lo uso a diario y no he tenido problemas.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', '2024-02-29 23:59:59');

INSERT INTO comentarios
VALUES (DEFAULT, 14, 13, 'No es resistente al agua como se indica. Decepcionado con la calidad.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 14, 14, 'Mala calidad. La correa se rompió después de un mes de uso.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', '2024-02-29 23:59:59');

INSERT INTO comentarios
VALUES (DEFAULT, 15, 10, 'Excelente producto. Cumple con todas mis expectativas.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 15, 11, 'El color no coincide con la imagen. No lo recomendaría.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 15, 12, 'Buen reloj, pero la correa es un poco incómoda.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 16, 13, 'Me gustó mucho. Es ligero y se ajusta bien a la muñeca.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 16, 14, 'No he recibido el producto. El servicio de entrega es muy lento.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 16, 10, 'Muy buen reloj. Lo recomiendo.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', '2024-02-29 23:59:59');

INSERT INTO comentarios
VALUES (DEFAULT, 17, 11, 'El diseño es elegante pero la correa es un poco rígida.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', '2024-02-29 23:59:59');

INSERT INTO comentarios
VALUES (DEFAULT, 17, 12, 'Excelente calidad. El reloj es resistente y funciona perfectamente.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 17, 13, 'No estoy contento con el producto. No funciona correctamente.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', '2024-02-29 23:59:59');

INSERT INTO comentarios
VALUES (DEFAULT, 18, 14, 'Me encanta. Es elegante y cómodo de llevar.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 18, 10, 'Buena relación calidad-precio. Lo uso todos los días y estoy satisfecho.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 18, 11, 'El reloj es bonito pero la correa es un poco frágil.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 19, 12, 'No era lo que esperaba. La calidad no es la mejor.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', '2024-02-29 23:59:59');

INSERT INTO comentarios
VALUES (DEFAULT, 19, 13, 'El producto llegó en mal estado. No lo recomendaría.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 19, 14, 'Excelente reloj. Funciona perfectamente y tiene un diseño elegante.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 20, 10, 'Me gusta mucho. Es elegante y cómodo de llevar.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 20, 11, 'Buena calidad. Funciona perfectamente.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', '2024-02-29 23:59:59');

INSERT INTO comentarios
VALUES (DEFAULT, 20, 12, 'No cumple mis expectativas. La calidad no es la esperada.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 21, 13, 'El diseño es bonito pero la correa es un poco incómoda.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 21, 14, 'Me encanta. Es exactamente lo que estaba buscando.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', '2024-02-29 23:59:59');

INSERT INTO comentarios
VALUES (DEFAULT, 21, 10, 'El reloj es elegante y funcional. Lo recomendaría.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 22, 11, 'No estoy contento con la calidad del producto. No lo recomendaría.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', '2024-02-29 23:59:59');

INSERT INTO comentarios
VALUES (DEFAULT, 22, 12, 'Me gusta mucho el diseño. Es ligero y cómodo de llevar.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 22, 13, 'El producto no funciona correctamente. No estoy satisfecho con la compra.', '2024-02-29 23:59:59', '2024-02-29 23:59:59', '2024-02-29 23:59:59');