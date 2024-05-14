create database if not exists teamsphere;

drop table if exists followers;
drop table if exists likes;
drop table if exists sales;
drop table if exists products;
drop table if exists posts;
drop table if exists users;

create table if not exists users(
	id varchar(255) primary key,
    name varchar(50) not null,
    last_name varchar(150) not null,
    username varchar(255) not null,
    email varchar(50) not null,
    phone varchar(500),
    image varchar(2000) not null,
    password varchar(50) not null,
    roles enum("Administrador","Usuario") not null
);

create table if not exists posts(
	id varchar(255) primary key,
    title varchar(100) not null,
    description varchar(800) not null,
    type varchar(20) not null,
    image varchar(2000),
    fk_idUser varchar(255) not null,
    foreign key (fk_idUser) references users(id)
);

create table if not exists products(
	id varchar(255) primary key,
    name varchar(100) not null,
    description varchar(500) not null,
    price double not null,
    image varchar(2000) not null,
    date datetime not null,
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
    foreign key (fk_idProduct) references products(id)

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
    fk_id varchar(255) not null,
    foreign key (fk_id) references users(id),
    fk_idPost varchar(255) not null,
    foreign key (fk_idPost) references posts(id)
);


/*Insercción de datos en la tabla de usuarios*/

insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('00765tr4-5678-444f-rt45-345676541234', 'Judd', 'Treneman', 'juddT34', 'jtreneman0@paginegialle.it', '982-284-7076', 'http://dummyimage.com/100x100.png/dddddd/000000', '$2a$04$O.qJ3gRNbZS', 'Administrador');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('56t56676-45rt-43ed-ey5y-443112345674', 'Afton', 'Headan', 'AftHead', 'aheadan1@gmpg.org', '548-172-6876', 'http://dummyimage.com/132x100.png/dddddd/000000', '$2a$04$CLug', 'Administrador');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('456th567-443e-345t-tmf3-976543567899', 'Lorianna', 'Standbridge', 'LorStand23', 'lstandbridge2@macromedia.com', '159-431-3697', 'http://dummyimage.com/127x100.png/dddddd/000000', '$2a$04$Z0etzLlYoHx4Y', 'Administrador');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('500654r3-45gv-678u-td4t-345655554097', 'Ryley', 'Cello', 'Rylc7', 'rcello3@reference.com', '963-565-6699', 'http://dummyimage.com/211x100.png/cc0000/ffffff', '$2a$04$1KDLx9x', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('56075432-45tg-gae2-34rg-345600765423', 'Orville', 'Gudge', 'Gudge305rf456-34rt-445y-46t4-9856765123456', 'ogudge4@dell.com', '996-833-1846', 'http://dummyimage.com/156x100.png/cc0000/ffffff', '$2a$04$ccpXYJ', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('34954j3q-1e46-4596-3fgd-235607654312', 'Dolley', 'Guterson', 'Dolleyson', 'dguterson5@so-net.ne.jp', '236-646-9585', 'http://dummyimage.com/123x100.png/cc0000/ffffff', '$2a$04$6mbc', 'Administrador');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('56yh45t4-45tg-65rt-eee4-456788876666', 'Ingeberg', 'Penwell', 'Penwe', 'ipenwell6@go.com', '879-975-0972', 'http://dummyimage.com/245x100.png/ff4444/ffffff', '$2a$04$Sf', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('5678tr34-34ef-3ed5-rr45-567888890076', 'Marla', 'Angrave', 'Marla305rf456-34rt-445y-46t4-985676512345', 'mangrave7@histats.com', '187-201-0243', 'http://dummyimage.com/115x100.png/ff4444/ffffff', '6dk.ctXAXooxbat0wCI6dbr6YHX9Ne', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('45tg4556-45r4-3334-56yh-456666543211', 'Devondra', 'Woodvine', 'MRsWood', 'dwoodvine8@craigslist.org', '978-974-9340', 'http://dummyimage.com/162x100.png/ff4444/ffffff', 'sM1IAnG/JuOU8hY0nzS/.IKyFzyG', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('45tfg432-34er-34ww-3753-111223400976', 'Traver', 'Ishak', 'Ish26823', 'tishak9@gov.uk', '465-289-5030', 'http://dummyimage.com/209x100.png/cc0000/ffffff', 'x.yNm26cUBIKIKQMsc64N6j/rAZieO2cK', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('23io4324-34ec-csq1-1561-245006555519', 'Jamie', 'Arni', 'Jaimito94', 'jarnia@yolasite.com', '241-846-4709', 'http://dummyimage.com/105x100.png/dddddd/000000', 'enxKrmIliGrH6SX1y', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('3212kne3-2e45-45t5-443e-291111290867', 'Devon', 'Zouch', 'DevonZ', 'dzouchb@weebly.com', '288-392-5824', 'http://dummyimage.com/120x100.png/ff4444/ffffff', 'pRoUedUPpAwJvYGWK', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('45506tr4-34ed-221e-2333-345600765433', 'Ingram', 'Le Houx', 'ilh22577', 'ilehouxc@dagondesign.com', '336-409-6578', 'http://dummyimage.com/235x100.png/dddddd/000000', 'g2FD3b/Ww1sMc8OmOa', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('234rt432-4780-ty76-t60j-300543897654', 'Gerry', 'D''orsay', 'GerryDo383', 'gdorsayd@lycos.com', '766-467-4028', 'http://dummyimage.com/221x100.png/cc0000/ffffff', 'zdNNKoTK0SGS', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('456ooy55-5432-350t-4e4t-200543218965', 'Blinny', 'Andri', 'BAndri', 'bandrie@dyndns.org', '379-801-7012', 'http://dummyimage.com/178x100.png/cc0000/ffffff', '8B9NSoh0RS', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('4506r5y2-34er-t6j2-i31a-204399543195', 'Christie', 'Takos', 'Tacos29', 'ctakosf@arizona.edu', '980-180-9455', 'http://dummyimage.com/240x100.png/ff4444/ffffff', 'u2Ym42ouH2pVo6C.S', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('30543toy-34lh-h56h-230e-200434967779', 'Veradis', 'Philippon', 'vp36432', 'vphilippong@jimdo.com', '613-924-5446', 'http://dummyimage.com/173x100.png/dddddd/000000', '.34eGnXG4/4k7F86', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('3950643e-2084-rt32-d90f-209543009678', 'Gill', 'Cotte', 'gillC2367', 'gcotteh@amazon.co.jp', '131-871-0315', 'http://dummyimage.com/204x100.png/dddddd/000000', 'P0R2anqsXxWVSdKR2uV6', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('3095t56l-34eb-2095-3edc-209432139851', 'Janeczka', 'Reddy', 'JaneR', 'jreddyi@ebay.com', '940-681-0349', 'http://dummyimage.com/106x100.png/5fa2dd/ffffff', 'QGYmaP6QtMt.p/7Ie', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('4005432u-23rf-rgb4-376p-200043218956', 'Haywood', 'Prestney', 'HayPres', 'hprestneyj@businessweek.com', '240-226-7105', 'http://dummyimage.com/209x100.png/ff4444/ffffff', 'bSDtwM.cxz8AHS', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('4005432l-24rb-toy3-12ek-200432188875', 'Padraig', 'Bromidge', 'PadBrom268', 'pbromidgek@blinklist.com', '428-989-9607', 'http://dummyimage.com/108x100.png/dddddd/000000', 'tY.GnA3au', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('34rf3345-34rt-45yt-432e-344500654443', 'Scarface', 'Sandiland', 'SrScarface357', 'ssandilandl@aol.com', '753-294-3884', 'http://dummyimage.com/180x100.png/5fa2dd/ffffff', 'iivxUsCFzS', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('4065y43e-3478-y07v-8dh7-200434895322', 'Conchita', 'Squirrell', 'Conchi', 'csquirrellm@timesonline.co.uk', '629-265-6252', 'http://dummyimage.com/218x100.png/dddddd/000000', 'uVdU/qh8UQDomm', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('3005r523-23e4-rgq1-234d-300459658755', 'Farlie', 'Daviot', 'FarDav305rf456-34rt-445y-46t4-9856765123456', 'fdaviotn@wunderground.com', '669-872-4095', 'http://dummyimage.com/232x100.png/cc0000/ffffff', 'SOGHfw9dAR7j0lTyO', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('2ot59er1-23ec-s376-34y6-205996543333', 'Albie', 'Crackett', 'AlbCrack396', 'acracketto@comsenz.com', '133-141-7966', 'http://dummyimage.com/128x100.png/ff4444/ffffff', '$2O6Cn7G', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('006543r4-45rv-777u-567y-664432156799', 'Thekla', 'Beadnall', 'TheBeadnall374', 'tbeadnallp@pen.io', '984-202-6897', 'http://dummyimage.com/208x100.png/cc0000/ffffff', '$2sIe', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('3405tr34-290y-681e-2309-309562233907', 'Paola', 'Scolts', 'PaolaS3222', 'pscoltsq@arizona.edu', '272-779-7396', 'http://dummyimage.com/237x100.png/ff4444/ffffff', '$.', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('34rt4005-456u-43er-0986-300054199765', 'Fedora', 'Maxwaile', 'FedoraMax388', 'fmaxwailer@istockphoto.com', '672-693-0645', 'http://dummyimage.com/109x100.png/5fa2dd/ffffff', 'gxKw23KQ2', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('3rt40543-4rty-e348-d38f-200221114865', 'Carly', 'Havesides', 'iCarly', 'chavesidess@cloudflare.com', '299-579-2954', 'http://dummyimage.com/221x100.png/dddddd/000000', 'aWzu', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('9087yv6t-5rm3-w36t-200r-300567932166', 'Cirilo', 'Hannen', 'CirHann35', 'channent@jigsy.com', '182-337-4128', 'http://dummyimage.com/195x100.png/5fa2dd/ffffff', 'eHGwi', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('4500rg45-455d-f46g-332s-300054321232', 'Florian', 'Keeltagh', 'FlorKee', 'fkeeltaghu@reference.com', '971-777-9939', 'http://dummyimage.com/148x100.png/dddddd/000000', '7ZvAnCFlC8jvDC7O', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('90rf4445-rt41-58ju-609v-907643298773', 'Danny', 'Scorah', 'ElDanny', 'dscorahv@typepad.com', '933-886-0047', 'http://dummyimage.com/162x100.png/ff4444/ffffff', '0DlaOPRr4DOi', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('tg56700n-45yo-v28y-1fm8-300567789135', 'Herculie', 'Windridge', 'Hercules', 'hwindridgew@woothemes.com', '714-602-2865', 'http://dummyimage.com/102x100.png/dddddd/000000', '$2n/.sdnnLC', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('4506nd33-365g-4521-2dcv-500654321394', 'Bink', 'Frear', 'BTrear2373', 'bfrearx@w3.org', '440-372-4786', 'http://dummyimage.com/135x100.png/ff4444/ffffff', '$2d2', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('4tg53eft-45ty-68i5-ri2r-400965431235', 'Erik', 'Thickett', 'ErikThi456', 'ethicketty@skype.com', '250-568-4873', 'http://dummyimage.com/197x100.png/cc0000/ffffff', 'y/X4jPFsCB2OXm4PzWeUhm', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('300556yh-45rr-3efb-23r4-406077532119', 'Yorker', 'Dechelette', 'NewYorker', 'ydechelettez@ycombinator.com', '150-440-5440', 'http://dummyimage.com/189x100.png/cc0000/ffffff', 'kcXRB9O', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('rt433dc2-236y-568b-2d45-300543210984', 'Benoit', 'Emburey', 'BenBurey305rf456-34rt-445y-46t4-985676512345', 'bemburey10@cnn.com', '593-770-3754', 'http://dummyimage.com/208x100.png/dddddd/000000', 'B13cNi', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('4560r0f2-234r-23e2-r678-605555549037', 'Loreen', 'Fairbanks', 'Lorfair384', 'lfairbanks11@senate.gov', '829-884-9513', 'http://dummyimage.com/119x100.png/ff4444/ffffff', 'd/PchK', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('300605t4-3rt5-gh78-c357-300432109841', 'Cherry', 'Kornousek', 'CherryK4522', 'ckornousek12@mozilla.org', '960-700-2403', 'http://dummyimage.com/133x100.png/5fa2dd/ffffff', 'cpvjOua', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('4006tnm5-489o-776u-e34t-299995456023', 'Sherman', 'Pech', 'ShermanP262211', 'spech13@istockphoto.com', '301-655-9660', 'http://dummyimage.com/186x100.png/ff4444/ffffff', 'WLlc/pQ6u', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('440054t5-h456-667t-506j-500065431144', 'Maxim', 'Kitson', 'Max3267', 'mkitson14@kickstarter.com', '247-235-6583', 'http://dummyimage.com/190x100.png/ff4444/ffffff', 'jdZsBar2', 'Administrador');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('4500tgf3-ej65-e456-t67l-200009555542', 'Marlow', 'Kramer', 'Marlow2620987', 'mkramer15@wufoo.com', '550-355-2179', 'http://dummyimage.com/192x100.png/5fa2dd/ffffff', '7bzC3q3VtuZXFGS', 'Administrador');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('4rfg5985-34e3-34rt-445a-223340095412', 'Innis', 'Amiss', 'InAmiss', 'iamiss16@mtv.com', '956-725-3263', 'http://dummyimage.com/132x100.png/dddddd/000000', 'VcV/Dm1cid.', 'Administrador');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('0065rb43-346y-5667-54db-322100045677', 'Malinda', 'Haxbie', 'Malhax2776', 'mhaxbie17@sun.com', '217-950-7717', 'http://dummyimage.com/161x100.png/cc0000/ffffff', '9u5tbyUS', 'Administrador');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('9985on54-yh56-y68n-5jn7-500099988654', 'Paula', 'Petrushanko', 'PaulaPetrush2925', 'ppetrushanko18@boston.com', '317-929-5516', 'http://dummyimage.com/166x100.png/cc0000/ffffff', 'O8YIECdGEZSZSm', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('34095jm4-456y-5yhf-4tj6-300987654324', 'See', 'Grinvalds', 'SeeGrin', 'sgrinvalds19@blogtalkradio.com', '353-420-6222', 'http://dummyimage.com/212x100.png/dddddd/000000', 'shbHO.nm', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('gr96rt45-4s1e-34e8-eed1-231112309855', 'Shanna', 'Dahlborg', 'ShannaDa234', 'sdahlborg1a@gov.uk', '679-894-5248', 'http://dummyimage.com/134x100.png/dddddd/000000', 'y13mBRhgoMO', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('45tg4321-23wd-34r5-498y-567777087655', 'Homere', 'Wilcott', 'Homercott', 'hwilcott1b@theatlantic.com', '750-567-0916', 'http://dummyimage.com/153x100.png/5fa2dd/ffffff', 'QYMmO.sPctS', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('456784rt-432e-23f4-3fd3-345676550912', 'Helaina', 'Natwick', 'Helainanet478', 'hnatwick1c@tripadvisor.com', '319-259-9319', 'http://dummyimage.com/215x100.png/ff4444/ffffff', 'pONo042qVRi', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('5660t543-g45r-g545-4ww3-344445009765', 'Tiebold', 'Hilary', 'Tiery373', 'thilary1d@newsvine.com', '706-692-2459', 'http://dummyimage.com/141x100.png/ff4444/ffffff', 'iSy02zc7O', 'Usuario');
insert into users (id, name, last_name, username, email, phone, image, password, roles) values ('334r45hn-45rf-45rf-7oi8-344555670983', 'Kenna', 'Wallentin', 'Kennawall29293', 'kwallentin1e@techcrunch.com', '654-752-8607', 'http://dummyimage.com/190x100.png/dddddd/000000', 'Hvm5QOi', 'Usuario');

/*Fin de la insercción de datos en la tabla de usuarios*/


/*Inserción de datos en la tabla de posts*/
-- Inserciones aleatorias
INSERT INTO posts (id, title, description, type, image, fk_idUser)
VALUES
  ('550e8400-e29b-41d4-a716-446655440000', 'Increíble Aventura', 'Explorando las montañas', 'Aventura', 'aventura1.jpg', '00765tr4-5678-444f-rt45-345676541234'),
  ('3954rg45-45tf-356d-221e-400654321244', 'Receta del Día', 'Delicioso pastel de chocolate', 'Receta', 'receta2.jpg', '00765tr4-5678-444f-rt45-345676541234'),
  ('3ho69s23-23yf-455d-306g-238582842349', 'Noticias Tecnológicas', 'Últimas novedades en gadgets', 'Tecnología', 'tecnologia3.jpg', '56t56676-45rt-43ed-ey5y-443112345674'),
  ('7008g457-45tf-3ee5-we37-200432123333', 'Fotografía de Viaje', 'Atardecer en la playa', 'Viaje', 'viaje4.jpg', '30543toy-34lh-h56h-230e-200434967779'),
  ('385f9826-1fu4-ej23-294f-284934965412', 'Reflexiones Filosóficas', 'El sentido de la vida', 'Filosofía', 'filosofia5.jpg', '00765tr4-5678-444f-rt45-345676541234'),
  ('4506ty43-34e4-378y-55jm-400543212345', 'Evento Cultural', 'Concierto de jazz en el parque', 'Cultura', 'cultura6.jpg', '30543toy-34lh-h56h-230e-200434967779'),
  ('6007t545-43rf-332w-34gh-500654321234', 'Receta Saludable', 'Ensalada fresca de verano', 'Receta', 'receta7.jpg', '30543toy-34lh-h56h-230e-200434967779'),
  ('29394rf1-234d-rf12-wfg1-193495695312', 'Noticias Deportivas', 'Resultados del campeonato de tenis', 'Deporte', 'deporte8.jpg', '334r45hn-45rf-45rf-7oi8-344555670983'),
  ('184953hd-254e-293r-et12-194959391931', 'Fotografía de Naturaleza', 'Cascada en el bosque', 'Naturaleza', 'naturaleza9.jpg', '334r45hn-45rf-45rf-7oi8-344555670983'),
  ('45ty5006-er44-346y-467t-300543212345', 'Reflexiones Literarias', 'El poder de las palabras', 'Literatura', 'literatura10.jpg', 'gr96rt45-4s1e-34e8-eed1-231112309855'),
  ('0054rt43-345t-46gf-332q-340065554321', 'Recuerdo Familiar', 'Celebrando el cumpleaños de abuelo', 'Familia', 'familia11.jpg', 'gr96rt45-4s1e-34e8-eed1-231112309855'),
  ('34rf456y-455f-222r-34rt-344555643212', 'Noticias Políticas', 'Debate sobre el cambio climático', 'Política', 'politica12.jpg', 'gr96rt45-4s1e-34e8-eed1-231112309855'),
  ('400e6t55-rt45-45we-58t3-400565432123', 'Fotografía Urbana', 'Rascacielos al atardecer', 'Ciudad', 'ciudad13.jpg', '334r45hn-45rf-45rf-7oi8-344555670983'),
  ('5003r46t-43dc-31e7-45tg-005432123456', 'Reflexiones Espirituales', 'Meditación en la montaña', 'Espiritualidad', 'espiritualidad14.jpg', '0065rb43-346y-5667-54db-322100045677'),
  ('di9423j4-w3w3-f934-d943-123954321234', 'Evento Gastronómico', 'Festival de comida callejera', 'Gastronomía', 'gastronomia15.jpg', '00765tr4-5678-444f-rt45-345676541234'),
  ('2834rf23-2de2-477y-223u-299500512961', 'Noticias Científicas', 'Descubrimiento de nueva especie', 'Ciencia', 'ciencia16.jpg', '56t56676-45rt-43ed-ey5y-443112345674'),
  ('455th567-45tg-422e-345g-455607654323', 'Fotografía de Mascotas', 'Gatito jugando con una bola', 'Mascotas', 'mascotas17.jpg', '00765tr4-5678-444f-rt45-345676541234'),
  ('4506t54f-34rt-579g-5eer-456708665432', 'Reflexiones Creativas', 'El arte de la improvisación', 'Creatividad', 'creatividad18.jpg', '56t56676-45rt-43ed-ey5y-443112345674'),
  ('3445ttt4-456f-23er-e89v-344454321223', 'Evento Deportivo', 'Maratón benéfico', 'Deporte', 'deporte19.jpg', '56yh45t4-45tg-65rt-eee4-456788876666'),
  ('38t34d23-23ed-r45y-4t06-607543209532', 'Noticias Económicas', 'Crecimiento del mercado de criptomonedas', 'Economía', 'economia20.jpg', '56t56676-45rt-43ed-ey5y-443112345674'),
  ('455678lj-45r4-474u-678t-455006786666', 'Fotografía de Playa', 'Surf al amanecer', 'Playa', 'playa21.jpg', '56yh45t4-45tg-65rt-eee4-456788876666'),
  ('309543ef-39yt-567j-v09g-390543210534', 'Reflexiones Históricas', 'Lecciones del pasado', 'Historia', 'historia22.jpg', '456th567-443e-345t-tmf3-976543567899'),
  ('054934ut-04g4-450t-45iv-095833495189', 'Evento Solidario', 'Recaudación de fondos para refugio de animales', 'Solidaridad', 'solidaridad23.jpg', '0065rb43-346y-5667-54db-322100045677'),
  ('34fe29e3-hs12-n309-r456-390505441234', 'Noticias Artísticas', 'Exposición de pintura contemporánea', 'Arte', 'arte24.jpg', '456th567-443e-345t-tmf3-976543567899'),
  ('340u5321-rn45-h459-n212-204599654312', 'Fotografía de Montaña', 'Cumbre nevada', 'Montaña', 'montana25.jpg', '456th567-443e-345t-tmf3-976543567899'),
  ('56yh54rt-3rt5-390i-0876-700876543456', 'Reflexiones Sociales', 'Desafíos de la diversidad', 'Sociedad', 'sociedad26.jpg', '00765tr4-5678-444f-rt45-345676541234');


/*Fin de la inserción de datos en la tabla de posts*/


/*Insercción de datos en la tabla de productos*/

insert into products (id, name, description, price, image, date, fk_idBuyer, fk_idSeller) values ('54rf456u-56tg-42ef-34rt-333445006543', 'Wiberg Super Cure', 'Sugar - Individual Portions', '8792', 'http://dummyimage.com/189x100.png/dddddd/000000', '2023-07-05', '4tg53eft-45ty-68i5-ri2r-400965431235', '34rf3345-34rt-45yt-432e-344500654443');
insert into products (id, name, description, price, image, date, fk_idBuyer, fk_idSeller) values ('45065y54-r47o-44rt-6yj7-555006543256', 'Sprouts - Onion', 'Tuna - Fresh', '0', 'http://dummyimage.com/203x100.png/dddddd/000000', '2022-02-01', '34rf3345-34rt-45yt-432e-344500654443', '4tg53eft-45ty-68i5-ri2r-400965431235');
insert into products (id, name, description, price, image, date, fk_idBuyer, fk_idSeller) values ('6607y56t-4rt5-433e-345t-444560765432', 'Ostrich - Prime Cut', 'Cheese - Montery Jack', '51887', 'http://dummyimage.com/225x100.png/dddddd/000000', '2022-05-21', '4tg53eft-45ty-68i5-ri2r-400965431235', '34rf3345-34rt-45yt-432e-344500654443');
insert into products (id, name, description, price, image, date, fk_idBuyer, fk_idSeller) values ('340rrfg4-45gh-tr45-e456-200004569432', 'Wine - Baroleso Fontanafredda', 'Placemat - Scallop, White', '2536', 'http://dummyimage.com/166x100.png/cc0000/ffffff', '2022-04-01', '4tg53eft-45ty-68i5-ri2r-400965431235', '34rf3345-34rt-45yt-432e-344500654443');
insert into products (id, name, description, price, image, date, fk_idBuyer, fk_idSeller) values ('4tg445t9-309g-rry6-6678-400567898766', 'Glass Clear 8 Oz', 'Wiberg Cure', '9', 'http://dummyimage.com/111x100.png/ff4444/ffffff', '2020-10-12', '4tg53eft-45ty-68i5-ri2r-400965431235', '34rf3345-34rt-45yt-432e-344500654443');
insert into products (id, name, description, price, image, date, fk_idBuyer, fk_idSeller) values ('7890uy67-678y-65ef-332w-766543218994', 'Seedlings - Buckwheat, Organic', 'Pickle - Dill', '4', 'http://dummyimage.com/146x100.png/cc0000/ffffff', '2022-09-09', '4tg53eft-45ty-68i5-ri2r-400965431235', '34rf3345-34rt-45yt-432e-344500654443');
insert into products (id, name, description, price, image, date, fk_idBuyer, fk_idSeller) values ('4550065t-452d-222w-445f-300543211135', 'Milk - 2%', 'Coffee Decaf Colombian', '6', 'http://dummyimage.com/131x100.png/5fa2dd/ffffff', '2021-03-08', '4tg53eft-45ty-68i5-ri2r-400965431235', '34rf3345-34rt-45yt-432e-344500654443');
insert into products (id, name, description, price, image, date, fk_idBuyer, fk_idSeller) values ('455t4557-56t4-43ee-ert4-223400976543', 'Juice - Tomato, 48 Oz', 'Wine - Sake', '6241', 'http://dummyimage.com/154x100.png/dddddd/000000', '2022-02-12', '4tg53eft-45ty-68i5-ri2r-400965431235', '34rf3345-34rt-45yt-432e-344500654443');
insert into products (id, name, description, price, image, date, fk_idBuyer, fk_idSeller) values ('40tg34lt-395t-445t-506r-444006543213', 'Soho Lychee Liqueur', 'Carbonated Water - Peach', '9157', 'http://dummyimage.com/194x100.png/ff4444/ffffff', '2021-01-08', '4tg53eft-45ty-68i5-ri2r-400965431235', '34rf3345-34rt-45yt-432e-344500654443');
insert into products (id, name, description, price, image, date, fk_idBuyer, fk_idSeller) values ('3445tgv3-3467-34f5-34r3-233500965432', 'Red Currant Jelly', 'Eggrolesl', '737', 'http://dummyimage.com/190x100.png/dddddd/000000', '2022-09-30', '4tg53eft-45ty-68i5-ri2r-400965431235', '34rf3345-34rt-45yt-432e-344500654443');
insert into products (id, name, description, price, image, date, fk_idBuyer, fk_idSeller) values ('45560t45-4rv5-333r-36u7-666600765435', 'Beef - Montreal Smoked Brisket', 'Flax Seed', '4', 'http://dummyimage.com/115x100.png/cc0000/ffffff', '2021-07-21', null, '56t56676-45rt-43ed-ey5y-443112345674');
insert into products (id, name, description, price, image, date, fk_idBuyer, fk_idSeller) values ('406tght5-445e-f45h-689o-333500654348', 'Beef - Bones, Cut - Up', 'Lobster - Base', '9280', 'http://dummyimage.com/144x100.png/5fa2dd/ffffff', '2022-12-13', null, '56t56676-45rt-43ed-ey5y-443112345674');
insert into products (id, name, description, price, image, date, fk_idBuyer, fk_idSeller) values ('4fg65y67-53fv-31s3-457y-400543214567', 'Bread - Hot Dog Buns', 'Beef Wellington', '330', 'http://dummyimage.com/175x100.png/ff4444/ffffff', '2022-02-21', null, '56t56676-45rt-43ed-ey5y-443112345674');
insert into products (id, name, description, price, image, date, fk_idBuyer, fk_idSeller) values ('997654t4-4df5-r42r-2227-340065431222', 'Pasta - Elbows, Macaroni, Dry', 'Hagen Daza - Dk Choocolate', '4', 'http://dummyimage.com/132x100.png/ff4444/ffffff', '2022-05-02', null, '56t56676-45rt-43ed-ey5y-443112345674');
insert into products (id, name, description, price, image, date, fk_idBuyer, fk_idSeller) values ('009653r4-4d28-ty43-e678-299006543212', 'Lemonade - Pineapple Passion', 'Wine - Alicanca Vinho Verde', '58558', 'http://dummyimage.com/217x100.png/cc0000/ffffff', '2022-05-09', null, '56t56676-45rt-43ed-ey5y-443112345674');
insert into products (id, name, description, price, image, date, fk_idBuyer, fk_idSeller) values ('5667t567-r52d-e566-6uj3-334565432112', 'Wine - Valpolicella Masi', 'Pancetta', '0658', 'http://dummyimage.com/154x100.png/ff4444/ffffff', '2020-10-09', null, '56t56676-45rt-43ed-ey5y-443112345674');
insert into products (id, name, description, price, image, date, fk_idBuyer, fk_idSeller) values ('9965432r-tk67-u78n-ee49-300056221247', 'Figs', 'Schnappes Peppermint - Walker', '63603', 'http://dummyimage.com/136x100.png/cc0000/ffffff', '2021-01-15', null, '56t56676-45rt-43ed-ey5y-443112345674');
insert into products (id, name, description, price, image, date, fk_idBuyer, fk_idSeller) values ('4567y503-2dfe-45gj-56uk-708909876555', 'Foam Espresso Cup Plain White', 'Stock - Veal, Brown', '437', 'http://dummyimage.com/168x100.png/dddddd/000000', '2021-07-03', '34rf3345-34rt-45yt-432e-344500654443', '45tfg432-34er-34ww-3753-111223400976');
insert into products (id, name, description, price, image, date, fk_idBuyer, fk_idSeller) values ('456t543c-s39i-ty6l-330i-400543211234', 'Carrots - Mini, Stem On', 'Bread - rolesl, Italian', '8016', 'http://dummyimage.com/134x100.png/dddddd/000000', '2023-08-25', '34rf3345-34rt-45yt-432e-344500654443', '45tfg432-34er-34ww-3753-111223400976');
insert into products (id, name, description, price, image, date, fk_idBuyer, fk_idSeller) values ('450fg456-4rf4-ea39-we20-096787654322', 'Chocolate - Dark', 'Alize Sunset', '0', 'http://dummyimage.com/169x100.png/ff4444/ffffff', '2023-08-29', '34rf3345-34rt-45yt-432e-344500654443', '45tfg432-34er-34ww-3753-111223400976');



/*Fin de la insercción de datos en la tabla de productos*/

/*Insercción de datos en la tabla de ventas*/


insert into sales(idUserProduct,fk_idUser,fk_idProduct) values('456tf32e-345f-ds34-33d7-009654321232','34rf3345-34rt-45yt-432e-344500654443','54rf456u-56tg-42ef-34rt-333445006543');
insert into sales(idUserProduct,fk_idUser,fk_idProduct) values('5607t54r-321e-338i-754t-445006543123','34rf3345-34rt-45yt-432e-344500654443','6607y56t-4rt5-433e-345t-444560765432');
insert into sales(idUserProduct,fk_idUser,fk_idProduct) values('305rf456-34rt-445y-46t4-985676512345','34rf3345-34rt-45yt-432e-344500654443','340rrfg4-45gh-tr45-e456-200004569432');
insert into sales(idUserProduct,fk_idUser,fk_idProduct) values('345tg456-rty4-ewq2-456g-456009654312','34rf3345-34rt-45yt-432e-344500654443','54rf456u-56tg-42ef-34rt-333445006543');
insert into sales(idUserProduct,fk_idUser,fk_idProduct) values('567gt3s3-457d-2d49-f41c-112234565433','34rf3345-34rt-45yt-432e-344500654443','4tg445t9-309g-rry6-6678-400567898766');
insert into sales(idUserProduct,fk_idUser,fk_idProduct) values('6yu67o86-45gn-x41d-d098-234543219823','34rf3345-34rt-45yt-432e-344500654443','3445tgv3-3467-34f5-34r3-233500965432');
insert into sales(idUserProduct,fk_idUser,fk_idProduct) values('450rfza2-x319-d98v-2r4r-899765432123','34rf3345-34rt-45yt-432e-344500654443','3445tgv3-3467-34f5-34r3-233500965432');
insert into sales(idUserProduct,fk_idUser,fk_idProduct) values('ty56432c-48f5-rt78-dds3-765488654321','34rf3345-34rt-45yt-432e-344500654443','4550065t-452d-222w-445f-300543211135');


/*Fin de la insercción de datos en la tabla de ventas*/

/*Insercción de datos en la tabla de likes*/

insert into likes(id,fk_id,fk_idPost) values
('23er560v-456v-e456-56yn-345996543212','34rf3345-34rt-45yt-432e-344500654443','400e6t55-rt45-45we-58t3-400565432123'),
('450654v3-eet4-w349-g50o-340095654346','9985on54-yh56-y68n-5jn7-500099988654','400e6t55-rt45-45we-58t3-400565432123'),
('450tb540-37cs-cf11-e34n-400543211778','tg56700n-45yo-v28y-1fm8-300567789135','400e6t55-rt45-45we-58t3-400565432123'),
('5006vf43-345g-5500-76vj-600765432111','tg56700n-45yo-v28y-1fm8-300567789135','3954rg45-45tf-356d-221e-400654321244'),
('567gtr34-347h-553x-www4-455005433456','300605t4-3rt5-gh78-c357-300432109841','3954rg45-45tf-356d-221e-400654321244'),
('5996v31d-45fr-356g-311d-345670087644','34rf3345-34rt-45yt-432e-344500654443','di9423j4-w3w3-f934-d943-123954321234'),
('567g5432-458v-rrr5-766y-222096543212','34rf3345-34rt-45yt-432e-344500654443','3445ttt4-456f-23er-e89v-344454321223'),
('560vds23-236f-gj72-23sc-600765411234','300605t4-3rt5-gh78-c357-300432109841','400e6t55-rt45-45we-58t3-400565432123'),
('6007vf45-456c-s4g7-09bs-512345096543','9985on54-yh56-y68n-5jn7-500099988654','56yh54rt-3rt5-390i-0876-700876543456'),
('5006vd23-58cd-32s4-5vd0-120965431234','300605t4-3rt5-gh78-c357-300432109841','3445ttt4-456f-23er-e89v-344454321223'),
('ee543213-456t-42df-35s4-134543212341','5678tr34-34ef-3ed5-rr45-567888890076','400e6t55-rt45-45we-58t3-400565432123'),
('5006vd34-4re1-11sd-556x-023454332112','5678tr34-34ef-3ed5-rr45-567888890076','3954rg45-45tf-356d-221e-400654321244'),
('r543ec32-2123-fr31-09vf-560077765432','tg56700n-45yo-v28y-1fm8-300567789135','3445ttt4-456f-23er-e89v-344454321223'),
('9vf45r69-23e5-32sc-56y7-445006543121','5678tr34-34ef-3ed5-rr45-567888890076','3445ttt4-456f-23er-e89v-344454321223'),
('8ttr4312-34ve-45ho-iyl7-666123456066','00765tr4-5678-444f-rt45-345676541234','3445ttt4-456f-23er-e89v-344454321223'),
('98r43212-3ev4-32ee-35u7-560075432111','3095t56l-34eb-2095-3edc-209432139851','3445ttt4-456f-23er-e89v-344454321223'),
('56007rt4-233t-2223-45v2-112009345424','56t56676-45rt-43ed-ey5y-443112345674','3445ttt4-456f-23er-e89v-344454321223'),
('6rf00965-45r3-3121-245r-333298543212','456th567-443e-345t-tmf3-976543567899','3445ttt4-456f-23er-e89v-344454321223'),
('95rf321d-34fv-3212-20b4-456321123454','00765tr4-5678-444f-rt45-345676541234','3954rg45-45tf-356d-221e-400654321244'),
('34fv443v-23c9-887y-ery5-400556665412','456th567-443e-345t-tmf3-976543567899','3954rg45-45tf-356d-221e-400654321244');

/*Fin de la insercción de datos en la tabla de seguidores*/

insert into followers(idFollowerFollowed,fk_idFollower,fk_idFollowed) values
('34005rv3-321d-dg43-235r-009654321123','34rf3345-34rt-45yt-432e-344500654443','334r45hn-45rf-45rf-7oi8-344555670983'),
('y560654c-31d5-fvv3-112d-123009654321','34rf3345-34rt-45yt-432e-344500654443','300605t4-3rt5-gh78-c357-300432109841'),
('600gvf23-3334-5rf1-23d4-465600006542','34rf3345-34rt-45yt-432e-344500654443','3005r523-23e4-rgq1-234d-300459658755'),
('34tv45rt-34rv-33e1-133c-300543212234','34rf3345-34rt-45yt-432e-344500654443','4005432l-24rb-toy3-12ek-200432188875'),
('5667tb54-42c2-ry78-57t1-230099543212','334r45hn-45rf-45rf-7oi8-344555670983','34rf3345-34rt-45yt-432e-344500654443'),
('4005vf34-34rg-4t45-422e-300544421124','334r45hn-45rf-45rf-7oi8-344555670983','300605t4-3rt5-gh78-c357-300432109841'),
('6tg4506g-421x-567u-o865-600764322435','334r45hn-45rf-45rf-7oi8-344555670983','3005r523-23e4-rgq1-234d-300459658755'),
('yy4t565c-34b3-w0c3-ef54-234543321222','334r45hn-45rf-45rf-7oi8-344555670983','4005432l-24rb-toy3-12ek-200432188875'),
('506r45r5-45t5-096r-4221-400542123444','334r45hn-45rf-45rf-7oi8-344555670983','3405tr34-290y-681e-2309-309562233907'),
('45yh413f-568u-76rt-42e3-900654321234','334r45hn-45rf-45rf-7oi8-344555670983','9985on54-yh56-y68n-5jn7-500099988654'),
('009r455v-17tv-c41c-333t-345554321099','300605t4-3rt5-gh78-c357-300432109841','34rf3345-34rt-45yt-432e-344500654443'),
('4005vao6-733y-55dv-eqq2-400543212333','300605t4-3rt5-gh78-c357-300432109841','334r45hn-45rf-45rf-7oi8-344555670983'),
('3005fr32-23r4-45fe-112e-200432123333','300605t4-3rt5-gh78-c357-300432109841','300605t4-3rt5-gh78-c357-300432109841'),
('0054rf42-212d-345e-ed34-342345632111','456784rt-432e-23f4-3fd3-345676550912','34rf3345-34rt-45yt-432e-344500654443'),
('6007rf32-23fv-46t7-31e5-223009654321','456784rt-432e-23f4-3fd3-345676550912','334r45hn-45rf-45rf-7oi8-344555670983'),
('5006rfv3-12e4-235f-450g-400543216712','3005r523-23e4-rgq1-234d-300459658755','34rf3345-34rt-45yt-432e-344500654443'),
('700gr341-124e-33f5-25rr-009654322211','3005r523-23e4-rgq1-234d-300459658755','334r45hn-45rf-45rf-7oi8-344555670983'),
('904tg432-233r-46h5-33fr-985600543212','3005r523-23e4-rgq1-234d-300459658755','300605t4-3rt5-gh78-c357-300432109841'),
('9tt5063r-334t-45y5-554r-096665432111','3005r523-23e4-rgq1-234d-300459658755','4005432l-24rb-toy3-12ek-200432188875'),
('905rf43d-2f56-445t-56ac-900543212345','3005r523-23e4-rgq1-234d-300459658755','3405tr34-290y-681e-2309-309562233907');

/*Fin de la insercción de datos en la tabla de seguidores*/
