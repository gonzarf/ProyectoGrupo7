create database if not exists teamsphere;

drop table if exists followers;
drop table if exists likes;
drop table if exists sales;
drop table if exists products;
drop table if exists users;
drop table if exists posts;


create table if not exists posts(
	id varchar(255) primary key,
    title varchar(100) not null,
    description varchar(800) not null,
    type varchar(20) not null,
    image varchar(2000)
);

create table if not exists users(
	id varchar(255) primary key,
    name varchar(50) not null,
    last_name varchar(150) not null,
    email varchar(50) not null,
    phone varchar(500),
    image varchar(2000) not null,
    password varchar(50) not null,
    roles enum("Administrador","Usuario") not null,
    fk_idPost varchar(255),
    foreign key (fk_idPost) references posts(id)

);

create table if not exists products(
	id varchar(255) primary key,
    name varchar(100) not null,
    description varchar(500) not null,
    price double not null,
    image varchar(2000) not null,
    date date not null,
    fk_idBuyer varchar(255),
    foreign key (fk_idBuyer) references users(id),
    fk_idSeller varchar(255) not null,
    foreign key (fk_idSeller) references users(id)

);

create table if not exists sales(
	idUserProduct varchar(255) primary key,
    fk_idUser varchar(255) not null,
    foreign key (fk_idUser) references users(id),
    fk_idProduct varchar(255) not null,
    foreign key (fk_idProduct) references products(idProduct)

);

create table if not exists followers (
	idFollowerFollowed varchar(255) primary key,
    fk_idFollower varchar(255) not null,
    foreign key (fk_idFollower) references users(id),
    fk_idFollowed varchar(255) not null,
    foreign key (fk_idFollowed) references users(id)
);

create table if not exists likes (
	id varchar(255) primary key,
    fk_idUser varchar(255) not null,
    foreign key (fk_idUser) references users(id),
    fk_idPost varchar(255) not null,
    foreign key (fk_idPost) references posts(id)
);

/*Inserción de datos en la tabla de posts*/
-- Inserciones aleatorias
INSERT INTO posts (id, title, description, type, image)
VALUES
  ('76534786795', 'Increíble Aventura', 'Explorando las montañas', 'Aventura', 'aventura1.jpg'),
  ('45476874344', 'Receta del Día', 'Delicioso pastel de chocolate', 'Receta', 'receta2.jpg'),
  ('53465874876', 'Noticias Tecnológicas', 'Últimas novedades en gadgets', 'Tecnología', 'tecnologia3.jpg'),
  ('43768746356', 'Fotografía de Viaje', 'Atardecer en la playa', 'Viaje', 'viaje4.jpg'),
  ('56475675656', 'Reflexiones Filosóficas', 'El sentido de la vida', 'Filosofía', 'filosofia5.jpg'),
  ('35467336647', 'Evento Cultural', 'Concierto de jazz en el parque', 'Cultura', 'cultura6.jpg'),
  ('98765435676', 'Receta Saludable', 'Ensalada fresca de verano', 'Receta', 'receta7.jpg'),
  ('12345665323', 'Noticias Deportivas', 'Resultados del campeonato de tenis', 'Deporte', 'deporte8.jpg'),
  ('09890908765', 'Fotografía de Naturaleza', 'Cascada en el bosque', 'Naturaleza', 'naturaleza9.jpg'),
  ('56765789008', 'Reflexiones Literarias', 'El poder de las palabras', 'Literatura', 'literatura10.jpg'),
  ('56743636789', 'Recuerdo Familiar', 'Celebrando el cumpleaños de abuelo', 'Familia', 'familia11.jpg'),
  ('98778998765', 'Noticias Políticas', 'Debate sobre el cambio climático', 'Política', 'politica12.jpg'),
  ('45678756790', 'Fotografía Urbana', 'Rascacielos al atardecer', 'Ciudad', 'ciudad13.jpg'),
  ('87657476898', 'Reflexiones Espirituales', 'Meditación en la montaña', 'Espiritualidad', 'espiritualidad14.jpg'),
  ('87654457876', 'Evento Gastronómico', 'Festival de comida callejera', 'Gastronomía', 'gastronomia15.jpg'),
  ('34566535666', 'Noticias Científicas', 'Descubrimiento de nueva especie', 'Ciencia', 'ciencia16.jpg'),
  ('34567887654', 'Fotografía de Mascotas', 'Gatito jugando con una bola', 'Mascotas', 'mascotas17.jpg'),
  ('76545678788', 'Reflexiones Creativas', 'El arte de la improvisación', 'Creatividad', 'creatividad18.jpg'),
  ('98765678987', 'Evento Deportivo', 'Maratón benéfico', 'Deporte', 'deporte19.jpg'),
  ('34567658785', 'Noticias Económicas', 'Crecimiento del mercado de criptomonedas', 'Economía', 'economia20.jpg'),
  ('96876950485', 'Fotografía de Playa', 'Surf al amanecer', 'Playa', 'playa21.jpg'),
  ('98576584987', 'Reflexiones Históricas', 'Lecciones del pasado', 'Historia', 'historia22.jpg'),
  ('98765748399', 'Evento Solidario', 'Recaudación de fondos para refugio de animales', 'Solidaridad', 'solidaridad23.jpg'),
  ('87658498754', 'Noticias Artísticas', 'Exposición de pintura contemporánea', 'Arte', 'arte24.jpg'),
  ('98765675675', 'Fotografía de Montaña', 'Cumbre nevada', 'Montaña', 'montana25.jpg'),
  ('98677631234', 'Reflexiones Sociales', 'Desafíos de la diversidad', 'Sociedad', 'sociedad26.jpg');


/*Fin de la inserción de datos en la tabla de posts*/

/*Insercción de datos en la tabla de users*/

insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('5602239313583507', 'Judd', 'Treneman', 'jtreneman0@paginegialle.it', '982-284-7076', 'http://dummyimage.com/100x100.png/dddddd/000000', '$2a$04$O.qJ3gRNbZS', 'Administrador', '76534786795');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3582175376667242', 'Afton', 'Headan', 'aheadan1@gmpg.org', '548-172-6876', 'http://dummyimage.com/132x100.png/dddddd/000000', '$2a$04$CLug', 'Administrador', '45476874344');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3549964939774724', 'Lorianna', 'Standbridge', 'lstandbridge2@macromedia.com', '159-431-3697', 'http://dummyimage.com/127x100.png/dddddd/000000', '$2a$04$Z0etzLlYoHx4Y', 'Administrador', '53465874876');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('490523857348485594', 'Ryley', 'Cello', 'rcello3@reference.com', '963-565-6699', 'http://dummyimage.com/211x100.png/cc0000/ffffff', '$2a$04$1KDLx9x', 'Usuario', '43768746356');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3576067482801898', 'Orville', 'Gudge', 'ogudge4@dell.com', '996-833-1846', 'http://dummyimage.com/156x100.png/cc0000/ffffff', '$2a$04$ccpXYJ', 'Usuario', '56475675656');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('5048376965973164', 'Dolley', 'Guterson', 'dguterson5@so-net.ne.jp', '236-646-9585', 'http://dummyimage.com/123x100.png/cc0000/ffffff', '$2a$04$6mbc', 'Administrador', '45678756790');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3567299352186651', 'Ingeberg', 'Penwell', 'ipenwell6@go.com', '879-975-0972', 'http://dummyimage.com/245x100.png/ff4444/ffffff', '$2a$04$Sf', 'Usuario', '45678756790');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('30178414427268', 'Marla', 'Angrave', 'mangrave7@histats.com', '187-201-0243', 'http://dummyimage.com/115x100.png/ff4444/ffffff', '6dk.ctXAXooxbat0wCI6dbr6YHX9Ne', 'Usuario', '45678756790');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3542515100018007', 'Devondra', 'Woodvine', 'dwoodvine8@craigslist.org', '978-974-9340', 'http://dummyimage.com/162x100.png/ff4444/ffffff', 'sM1IAnG/JuOU8hY0nzS/.IKyFzyG', 'Usuario', '45678756790');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('493665191164054322', 'Traver', 'Ishak', 'tishak9@gov.uk', '465-289-5030', 'http://dummyimage.com/209x100.png/cc0000/ffffff', 'x.yNm26cUBIKIKQMsc64N6j/rAZieO2cK', 'Usuario', '45678756790');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('4017959831829114', 'Jamie', 'Arni', 'jarnia@yolasite.com', '241-846-4709', 'http://dummyimage.com/105x100.png/dddddd/000000', 'enxKrmIliGrH6SX1y', 'Usuario', '45678756790');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('4453690355778', 'Devon', 'Zouch', 'dzouchb@weebly.com', '288-392-5824', 'http://dummyimage.com/120x100.png/ff4444/ffffff', 'pRoUedUPpAwJvYGWK', 'Usuario', '87657476898');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3587601882069511', 'Ingram', 'Le Houx', 'ilehouxc@dagondesign.com', '336-409-6578', 'http://dummyimage.com/235x100.png/dddddd/000000', 'g2FD3b/Ww1sMc8OmOa', 'Usuario', '87657476898');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('201647735166048', 'Gerry', 'D''orsay', 'gdorsayd@lycos.com', '766-467-4028', 'http://dummyimage.com/221x100.png/cc0000/ffffff', 'zdNNKoTK0SGS', 'Usuario', '87657476898');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3551218910915144', 'Blinny', 'Andri', 'bandrie@dyndns.org', '379-801-7012', 'http://dummyimage.com/178x100.png/cc0000/ffffff', '8B9NSoh0RS', 'Usuario', '87657476898');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('490507955496919750', 'Christie', 'Takos', 'ctakosf@arizona.edu', '980-180-9455', 'http://dummyimage.com/240x100.png/ff4444/ffffff', 'u2Ym42ouH2pVo6C.S', 'Usuario', '87657476898');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('5610841396857805', 'Veradis', 'Philippon', 'vphilippong@jimdo.com', '613-924-5446', 'http://dummyimage.com/173x100.png/dddddd/000000', '.34eGnXG4/4k7F86', 'Usuario', '87657476898');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3552703487415528', 'Gill', 'Cotte', 'gcotteh@amazon.co.jp', '131-871-0315', 'http://dummyimage.com/204x100.png/dddddd/000000', 'P0R2anqsXxWVSdKR2uV6', 'Usuario', '34567887654');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('372301567722568', 'Janeczka', 'Reddy', 'jreddyi@ebay.com', '940-681-0349', 'http://dummyimage.com/106x100.png/5fa2dd/ffffff', 'QGYmaP6QtMt.p/7Ie', 'Usuario', '34567887654');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3578225688976637', 'Haywood', 'Prestney', 'hprestneyj@businessweek.com', '240-226-7105', 'http://dummyimage.com/209x100.png/ff4444/ffffff', 'bSDtwM.cxz8AHS', 'Usuario', '34567887654');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('5010127209864030', 'Padraig', 'Bromidge', 'pbromidgek@blinklist.com', '428-989-9607', 'http://dummyimage.com/108x100.png/dddddd/000000', 'tY.GnA3au', 'Usuario', '34567887654');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('5139909162533199', 'Scarface', 'Sandiland', 'ssandilandl@aol.com', '753-294-3884', 'http://dummyimage.com/180x100.png/5fa2dd/ffffff', 'iivxUsCFzS', 'Usuario', '34567887654');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3580394167027969', 'Conchita', 'Squirrell', 'csquirrellm@timesonline.co.uk', '629-265-6252', 'http://dummyimage.com/218x100.png/dddddd/000000', 'uVdU/qh8UQDomm', 'Usuario', '34567887654');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3544722075850392', 'Farlie', 'Daviot', 'fdaviotn@wunderground.com', '669-872-4095', 'http://dummyimage.com/232x100.png/cc0000/ffffff', 'SOGHfw9dAR7j0lTyO', 'Usuario', '34567887654');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('201889668360475', 'Albie', 'Crackett', 'acracketto@comsenz.com', '133-141-7966', 'http://dummyimage.com/128x100.png/ff4444/ffffff', '$2O6Cn7G', 'Usuario', '34567887654');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3588940963131033', 'Thekla', 'Beadnall', 'tbeadnallp@pen.io', '984-202-6897', 'http://dummyimage.com/208x100.png/cc0000/ffffff', '$2sIe', 'Usuario', '34567887654');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('6377791692245042', 'Paola', 'Scolts', 'pscoltsq@arizona.edu', '272-779-7396', 'http://dummyimage.com/237x100.png/ff4444/ffffff', '$.', 'Usuario', '34567887654');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('30103976533022', 'Fedora', 'Maxwaile', 'fmaxwailer@istockphoto.com', '672-693-0645', 'http://dummyimage.com/109x100.png/5fa2dd/ffffff', 'gxKw23KQ2', 'Usuario', '34567887654');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('5007666590078150', 'Carly', 'Havesides', 'chavesidess@cloudflare.com', '299-579-2954', 'http://dummyimage.com/221x100.png/dddddd/000000', 'aWzu', 'Usuario', '34567887654');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('201533868951374', 'Cirilo', 'Hannen', 'channent@jigsy.com', '182-337-4128', 'http://dummyimage.com/195x100.png/5fa2dd/ffffff', 'eHGwi', 'Usuario', '34567887654');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3575676618529412', 'Florian', 'Keeltagh', 'fkeeltaghu@reference.com', '971-777-9939', 'http://dummyimage.com/148x100.png/dddddd/000000', '7ZvAnCFlC8jvDC7O', 'Usuario', '98677631234');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3562454596525074', 'Danny', 'Scorah', 'dscorahv@typepad.com', '933-886-0047', 'http://dummyimage.com/162x100.png/ff4444/ffffff', '0DlaOPRr4DOi', 'Usuario', '98677631234');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('5100178471935470', 'Herculie', 'Windridge', 'hwindridgew@woothemes.com', '714-602-2865', 'http://dummyimage.com/102x100.png/dddddd/000000', '$2n/.sdnnLC', 'Usuario', '98677631234');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3550135765979432', 'Bink', 'Frear', 'bfrearx@w3.org', '440-372-4786', 'http://dummyimage.com/135x100.png/ff4444/ffffff', '$2d2', 'Usuario', '98677631234');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('374288623836961', 'Erik', 'Thickett', 'ethicketty@skype.com', '250-568-4873', 'http://dummyimage.com/197x100.png/cc0000/ffffff', 'y/X4jPFsCB2OXm4PzWeUhm', 'Usuario', '98677631234');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3533912460585082', 'Yorker', 'Dechelette', 'ydechelettez@ycombinator.com', '150-440-5440', 'http://dummyimage.com/189x100.png/cc0000/ffffff', 'kcXRB9O', 'Usuario', '98677631234');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3582346285972177', 'Benoit', 'Emburey', 'bemburey10@cnn.com', '593-770-3754', 'http://dummyimage.com/208x100.png/dddddd/000000', 'B13cNi', 'Usuario', '98677631234');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('5018786070228278', 'Loreen', 'Fairbanks', 'lfairbanks11@senate.gov', '829-884-9513', 'http://dummyimage.com/119x100.png/ff4444/ffffff', 'd/PchK', 'Usuario', '98677631234');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3551637426201386', 'Cherry', 'Kornousek', 'ckornousek12@mozilla.org', '960-700-2403', 'http://dummyimage.com/133x100.png/5fa2dd/ffffff', 'cpvjOua', 'Usuario', '98677631234');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3572940925080011', 'Sherman', 'Pech', 'spech13@istockphoto.com', '301-655-9660', 'http://dummyimage.com/186x100.png/ff4444/ffffff', 'WLlc/pQ6u', 'Usuario', '98677631234');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3534417924756781', 'Maxim', 'Kitson', 'mkitson14@kickstarter.com', '247-235-6583', 'http://dummyimage.com/190x100.png/ff4444/ffffff', 'jdZsBar2', 'Administrador', '98677631234');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('30021827129818', 'Marlow', 'Kramer', 'mkramer15@wufoo.com', '550-355-2179', 'http://dummyimage.com/192x100.png/5fa2dd/ffffff', '7bzC3q3VtuZXFGS', 'Administrador', '98677631234');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('201884448373385', 'Innis', 'Amiss', 'iamiss16@mtv.com', '956-725-3263', 'http://dummyimage.com/132x100.png/dddddd/000000', 'VcV/Dm1cid.', 'Administrador', '98677631234');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3581331654933183', 'Malinda', 'Haxbie', 'mhaxbie17@sun.com', '217-950-7717', 'http://dummyimage.com/161x100.png/cc0000/ffffff', '9u5tbyUS', 'Administrador', '98677631234');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('4844010316873026', 'Paula', 'Petrushanko', 'ppetrushanko18@boston.com', '317-929-5516', 'http://dummyimage.com/166x100.png/cc0000/ffffff', 'O8YIECdGEZSZSm', 'Usuario', '98677631234');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('4041592712293', 'See', 'Grinvalds', 'sgrinvalds19@blogtalkradio.com', '353-420-6222', 'http://dummyimage.com/212x100.png/dddddd/000000', 'shbHO.nm', 'Usuario', '98677631234');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('501823284164512073', 'Shanna', 'Dahlborg', 'sdahlborg1a@gov.uk', '679-894-5248', 'http://dummyimage.com/134x100.png/dddddd/000000', 'y13mBRhgoMO', 'Usuario', '98677631234');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('344261311833225', 'Homere', 'Wilcott', 'hwilcott1b@theatlantic.com', '750-567-0916', 'http://dummyimage.com/153x100.png/5fa2dd/ffffff', 'QYMmO.sPctS', 'Usuario', '98677631234');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('201871619586978', 'Helaina', 'Natwick', 'hnatwick1c@tripadvisor.com', '319-259-9319', 'http://dummyimage.com/215x100.png/ff4444/ffffff', 'pONo042qVRi', 'Usuario', '98765675675');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3538173561641465', 'Tiebold', 'Hilary', 'thilary1d@newsvine.com', '706-692-2459', 'http://dummyimage.com/141x100.png/ff4444/ffffff', 'iSy02zc7O', 'Usuario', '98765675675');
insert into users (id, name, last_name, email, phone, image, password, roles, fk_idPost) values ('3588890444128845', 'Kenna', 'Wallentin', 'kwallentin1e@techcrunch.com', '654-752-8607', 'http://dummyimage.com/190x100.png/dddddd/000000', 'Hvm5QOi', 'Usuario', '98765675675');

/*Fin de la insercción de datos en la tabla de users*/





/*Insercción de datos en la tabla de products*/

insert into products (id, name, description, price, image, fecha, fk_idBuyer, fk_idSeller) values ('374283244721841', 'Wiberg Super Cure', 'Sugar - Individual Portions', '8792', 'http://dummyimage.com/189x100.png/dddddd/000000', '2023-07-05', '374288623836961', '5139909162533199');
insert into products (id, name, description, price, image, fecha, fk_idBuyer, fk_idSeller) values ('372958401270888', 'Sprouts - Onion', 'Tuna - Fresh', '0', 'http://dummyimage.com/203x100.png/dddddd/000000', '2022-02-01', '5139909162533199', '374288623836961');
insert into products (id, name, description, price, image, fecha, fk_idBuyer, fk_idSeller) values ('337941128958930', 'Ostrich - Prime Cut', 'Cheese - Montery Jack', '51887', 'http://dummyimage.com/225x100.png/dddddd/000000', '2022-05-21', '374288623836961', '5139909162533199');
insert into products (id, name, description, price, image, fecha, fk_idBuyer, fk_idSeller) values ('374288425482907', 'Wine - Baroleso Fontanafredda', 'Placemat - Scallop, White', '2536', 'http://dummyimage.com/166x100.png/cc0000/ffffff', '2022-04-01', '374288623836961', '5139909162533199');
insert into products (id, name, description, price, image, fecha, fk_idBuyer, fk_idSeller) values ('374288039221709', 'Glass Clear 8 Oz', 'Wiberg Cure', '9', 'http://dummyimage.com/111x100.png/ff4444/ffffff', '2020-10-12', '374288623836961', '5139909162533199');
insert into products (id, name, description, price, image, fecha, fk_idBuyer, fk_idSeller) values ('372301093792473', 'Seedlings - Buckwheat, Organic', 'Pickle - Dill', '4', 'http://dummyimage.com/146x100.png/cc0000/ffffff', '2022-09-09', '374288623836961', '5139909162533199');
insert into products (id, name, description, price, image, fecha, fk_idBuyer, fk_idSeller) values ('372301818720692', 'Milk - 2%', 'Coffee Decaf Colombian', '6', 'http://dummyimage.com/131x100.png/5fa2dd/ffffff', '2021-03-08', '374288623836961', '5139909162533199');
insert into products (id, name, description, price, image, fecha, fk_idBuyer, fk_idSeller) values ('374283726552136', 'Juice - Tomato, 48 Oz', 'Wine - Sake', '6241', 'http://dummyimage.com/154x100.png/dddddd/000000', '2022-02-12', '374288623836961', '5139909162533199');
insert into products (id, name, description, price, image, fecha, fk_idBuyer, fk_idSeller) values ('378809278721772', 'Soho Lychee Liqueur', 'Carbonated Water - Peach', '9157', 'http://dummyimage.com/194x100.png/ff4444/ffffff', '2021-01-08', '374288623836961', '5139909162533199');
insert into products (id, name, description, price, image, fecha, fk_idBuyer, fk_idSeller) values ('374622513643238', 'Red Currant Jelly', 'Eggrolesl', '737', 'http://dummyimage.com/190x100.png/dddddd/000000', '2022-09-30', '374288623836961', '5139909162533199');
insert into products (id, name, description, price, image, fecha, fk_idBuyer, fk_idSeller) values ('337941274009744', 'Beef - Montreal Smoked Brisket', 'Flax Seed', '4', 'http://dummyimage.com/115x100.png/cc0000/ffffff', '2021-07-21', null, '3582175376667242');
insert into products (id, name, description, price, image, fecha, fk_idBuyer, fk_idSeller) values ('337941752451756', 'Beef - Bones, Cut - Up', 'Lobster - Base', '9280', 'http://dummyimage.com/144x100.png/5fa2dd/ffffff', '2022-12-13', null, '3582175376667242');
insert into products (id, name, description, price, image, fecha, fk_idBuyer, fk_idSeller) values ('340729197622759', 'Bread - Hot Dog Buns', 'Beef Wellington', '330', 'http://dummyimage.com/175x100.png/ff4444/ffffff', '2022-02-21', null, '3582175376667242');
insert into products (id, name, description, price, image, fecha, fk_idBuyer, fk_idSeller) values ('337941610532045', 'Pasta - Elbows, Macaroni, Dry', 'Hagen Daza - Dk Choocolate', '4', 'http://dummyimage.com/132x100.png/ff4444/ffffff', '2022-05-02', null, '3582175376667242');
insert into products (id, name, description, price, image, fecha, fk_idBuyer, fk_idSeller) values ('337941304516056', 'Lemonade - Pineapple Passion', 'Wine - Alicanca Vinho Verde', '58558', 'http://dummyimage.com/217x100.png/cc0000/ffffff', '2022-05-09', null, '3582175376667242');
insert into products (id, name, description, price, image, fecha, fk_idBuyer, fk_idSeller) values ('374283433022423', 'Wine - Valpolicella Masi', 'Pancetta', '0658', 'http://dummyimage.com/154x100.png/ff4444/ffffff', '2020-10-09', null, '3582175376667242');
insert into products (id, name, description, price, image, fecha, fk_idBuyer, fk_idSeller) values ('337941102193892', 'Figs', 'Schnappes Peppermint - Walker', '63603', 'http://dummyimage.com/136x100.png/cc0000/ffffff', '2021-01-15', null, '3582175376667242');
insert into products (id, name, description, price, image, fecha, fk_idBuyer, fk_idSeller) values ('337941954073242', 'Foam Espresso Cup Plain White', 'Stock - Veal, Brown', '437', 'http://dummyimage.com/168x100.png/dddddd/000000', '2021-07-03', '5139909162533199', '493665191164054322');
insert into products (id, name, description, price, image, fecha, fk_idBuyer, fk_idSeller) values ('371053544662745', 'Carrots - Mini, Stem On', 'Bread - Rolesl, Italian', '8016', 'http://dummyimage.com/134x100.png/dddddd/000000', '2023-08-25', '5139909162533199', '493665191164054322');
insert into products (id, name, description, price, image, fecha, fk_idBuyer, fk_idSeller) values ('374283453980633', 'Chocolate - Dark', 'Alize Sunset', '0', 'http://dummyimage.com/169x100.png/ff4444/ffffff', '2023-08-29', '5139909162533199', '493665191164054322');



/*Fin de la insercción de datos en la tabla de productos*/

/*Insercción de datos en la tabla de sales*/


insert into sales(idUserProduct,fk_idUser,fk_idProduct) values('343',' ','374283244721841');
insert into sales(idUserProduct,fk_idUser,fk_idProduct) values('344','5139909162533199','337941128958930');
insert into sales(idUserProduct,fk_idUser,fk_idProduct) values('345','5139909162533199','374288425482907');
insert into sales(idUserProduct,fk_idUser,fk_idProduct) values('346','5139909162533199','374283244721841');
insert into sales(idUserProduct,fk_idUser,fk_idProduct) values('347','5139909162533199','374288039221709');
insert into sales(idUserProduct,fk_idUser,fk_idProduct) values('348','5139909162533199','374622513643238');
insert into sales(idUserProduct,fk_idUser,fk_idProduct) values('349','5139909162533199','374622513643238');
insert into sales(idUserProduct,fk_idUser,fk_idProduct) values('350','5139909162533199','372301818720692');


/*Fin de la insercción de datos en la tabla de sales*/

/*Insercción de datos en la tabla de likes*/

insert into likes(idLike,fk_idUser,fk_idPost) values
('352626','5139909162533199','45678756790'),
('436748','4844010316873026','45678756790'),
('865865','5100178471935470','45678756790'),
('345678','5100178471935470','45476874344'),
('987655','3551637426201386','45476874344'),
('346787','5139909162533199','87654457876'),
('234675','5139909162533199','98765678987'),
('436277','3551637426201386','45678756790'),
('777753','4844010316873026','98677631234'),
('366663','3551637426201386','98765678987'),
('346663','30178414427268','45678756790'),
('373888','30178414427268','45476874344'),
('347889','5100178471935470','98765678987'),
('253255','30178414427268','98765678987'),
('273784','5602239313583507','98765678987'),
('568438','372301567722568','98765678987'),
('456753','3582175376667242','98765678987'),
('379043','3549964939774724','98765678987'),
('346788','5602239313583507','45476874344'),
('346784','3549964939774724','45476874344');

/*Fin de la insercción de datos en la tabla de seguidores*/

insert into followers(idFollowerFollowed,fk_idFollower,fk_idFollowed) values
('235678','5139909162533199','3588890444128845'),
('843267','5139909162533199','3551637426201386'),
('346378','5139909162533199','3544722075850392'),
('438096','5139909162533199','5010127209864030'),
('222356','3588890444128845','5139909162533199'),
('253627','3588890444128845','3551637426201386'),
('433327','3588890444128845','3544722075850392'),
('256780','3588890444128845','5010127209864030'),
('985444','3588890444128845','6377791692245042'),
('234793','3588890444128845','4844010316873026'),
('098743','3551637426201386','5139909162533199'),
('345377','3551637426201386','3588890444128845'),
('964333','3551637426201386','3551637426201386'),
('378836','201871619586978','5139909162533199'),
('364678','201871619586978','3588890444128845'),
('488944','3544722075850392','5139909162533199'),
('557899','3544722075850392','3588890444128845'),
('333229','3544722075850392','3551637426201386'),
('080776','3544722075850392','5010127209864030'),
('098765','3544722075850392','6377791692245042');

/*Fin de la insercción de datos en la tabla de seguidores*/
