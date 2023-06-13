
import food from '../assets/videos/food.mp4'
import coffe from '../assets/videos/coffe.mp4'
import curationCoffe from '../assets/videos/curation-coffe.mp4'
import space from '../assets/videos/space.mp4'

import contactImg from '../assets/photos/contactImg.jpg'

import variedades1 from '../assets/videos/variedades1.mp4'
import variedades2 from '../assets/photos/variedades2.jpg'
import variedades3 from '../assets/photos/variedades3.jpg'
import variedades4 from '../assets/videos/variedades4.mp4'

import locacion1 from '../assets/photos/locacion1.jpg'
import locacion2 from '../assets/photos/locacion2.jpg'




  const aboutData = [{ id: 1, name: "Alimentos",media:food, mediaType:'mp4', text1:'Nuestro menú se centra principalmente en alimentos saludables y de la mejor calidad, preparados con las mejores prácticas y mucho amor.',text2:'Creemos que nuestros clientes merecen los mejores sabores y cuidados en sus alimentos. Nos esforzamos por respetar sus preferencias, contamos con menús aptos para todo público.',button:'Menus' },

{ id: 2, name: "Instalaciones",media:space, mediaType:'mp4', text1:'Nos encontramos en Bahías de Huatulco frente al parque central de este hermoso destino turístico. Ven a visitarnos y disfruta de los grandiosos sabores de nuestra diversidad de café, además de una maravillosa vista de la Iglesía principal.',text2:'También contamos con una mini cafetería rodante que se encuentra principalmente en la bahía de Santa Cruz.',button:'Locaciones' },

{ id: 3, name: "Esencia",media:curationCoffe, mediaType:'mp4', text1:'Uno de los principales distintivos de Oaxaca es la calidad de nuestras personas. Este mismo caracter se hace presente a la hora de resivirte en nuestro local.',text2:'El café ha representado una forma especial de aterrizar nuestras ideas en la realidad, esta idea nos ha llevado a aterrizar nuestra cafetería y volver realidad lo que comenzó como un sueño.',button:'' },

{ id: 4, name: "Nuestro Café",media:coffe, mediaType:'mp4', text1:'El café servido en SeaSoul es 100% oaxaqueño, cosechado principalmente en la comunidad de Loxicha y el municipio de Pluma Hidalgo.',text2:'Nuestro café es arábigo de altura. También contamos con café molido y en grano para que puedas disfrutar en tu casa.',button:'Variedades' }
];


 const variedades = [{id:1, name:'Vanquetes', media:variedades1, mediaType:'mp4',text1:'SeaSoul no solo se trata de una cafetería. También contamos servicio de vanquetes, preparando desayunos para convenciones y congresos. ', text2:'También suministramos del mejor café de la región a hoteles y restaurantes locales.'},
{id:2, name:'Productos', media:variedades2, mediaType:'jpg',text1:'Vísitanos y además de probar el sabor de nuestro café también podrás llevarlo a casa para prepararlo cuando más lo necesites.', text2:'Contamos con café en diferentes presentaciones, diferentes tostados y tipos de molidos. Atrévete a llevar a tus seres queridos un recuerdo diferente, dejandoles probar una parte importante de Oaxaca.'},
{id:3, name:'Tienda en Línea', media:variedades3, mediaType:'jpg',text1:'Otro servicio con el que contamos es nuestra tienda virtual, en la cual podrás encontrar todos los productos que hayas consumido en tu visita a nuestra cafetería.', text2:'Además podrás adquirir diversos recuerdos como tasas, separadores de libros, presas francesas, playeras, hoodies entre otras cosas. Sin olvidar tu café molido o en grano con diferentes tipos de tostado aptos para todo el público.'},
{id:4, name:'Conoce más', media:variedades4, mediaType:'mp4',text1:'Si quieres vivir la experiencia completa y conocer el proceso del café, también contamos con un recorrido especializado a las principales fincas cafetaleras con las que trabajamos.', text2:' En este tour conoceras los diferentes procesos a los que se somete el café para llegar a tu paladar. Tendrás una degustación especial de diferentes variadades de café y conoceras otros productos de la región como lo son el chocolate y el mezcal.'}];

const contacto = [{id:1, name:'Contacto', media:contactImg, mediaType:'jpg',text1:'seaSoulCafe@gmail.com', text2:'Instagram: seaSoulCafé'}];

const locaciones = [{id:1, name:'La crucecita', media:locacion1, mediaType:'jpg',text1:'Nos encontramos ubicados en el parque central de la crucecita, Bahías de Huatulco Oaxaca. Estamos a un lado de la iglesia principal y frente al quiosco principal.', text2:''},
{id:2, name:'Café Ambulante', media:locacion2, mediaType:'jpg',text1:'También contamos con una mini cafetería ambulante la cual se encuentra en su mayoría en la bahía de Santa Cruz.', text2:'También contamos con cervicio a domicilio dentro de Bahías de Huatulco, realiza tu pedido al 9583671324.'}];


export {aboutData,variedades,locaciones,contacto}