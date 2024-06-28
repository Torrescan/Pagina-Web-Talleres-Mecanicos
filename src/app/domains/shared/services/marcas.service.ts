import { Injectable, inject, signal } from '@angular/core';
import { modelos } from '../models/car.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MarcasService {
  models = signal<modelos[]>([]);
  modelsnotsignal : modelos [] = ([]);
 
  //private http = inject(HttpClient)
  
  
  constructor() { 
    const InitModels =[
      {id: 1,
       name:'Chevrolet',
       image: 'https://static.vecteezy.com/system/resources/previews/020/498/757/non_2x/chevrolet-brand-logo-car-symbol-with-name-white-design-usa-automobile-illustration-with-black-background-free-vector.jpg',
       description: 'Chevrolet es un fabricante estadounidense de automóviles y camiones con sede en Detroit, perteneciente al grupo General Motors. Nació de la alianza de Louis Chevrolet y William Crapo Durant el 3 de noviembre de 1911. Actualmente, Chevrolet incrementó su participación en el mercado mundial a partir de la implementación del nuevo concepto de diseño global llamado GPix o Global Pix, con el cual comenzó a presentar sus primeros vehículos denominados "globales", los cuales comenzaron a ser vendidos en Asia, Europa y América junto a los Estados Unidos.',
       url:'https://www.chevrolet.com.mx/',
     },
     {
       id: 2,
       name:'KIA',
       image: 'https://static.vecteezy.com/system/resources/previews/020/502/964/non_2x/kia-logo-brand-symbol-white-design-south-korean-car-automobile-illustration-with-black-background-free-vector.jpg',
       description:'Kia Corporation, comúnmente conocido como Kia ((en hangul, 기아; en hanja, 起亞; romanización revisada del coreano, Gia; McCune-Reischauer, Kia); anteriormente conocido como Kyungsung Precision Industry (en coreano: 경성정밀공) y Kia Motors Corporation), es un fabricante de automóviles multinacional de Corea del Sur, con sede central ubicada en Yangjae-dong, Seocho-gu, Seúl. Es el más antiguo​ y segundo más grande fabricante de automóviles de Corea del Sur, después de su empresa matriz, Hyundai Motor Company, con ventas de más de 2,8 millones de vehículos en 2019. A partir de 2015, Kia Corporation es propiedad minoritaria de Hyundai, que posee una participación del 33,88% valorada en solo más de 6 mil millones de dólares. Kia, a su vez, es propietario minoritario de más de veinte subsidiarias de Hyundai que van desde el 4,9% hasta el 45,37%, por un total de más de 8.300 millones de dólares. ',
       url:'https://www.kia.com/es/todo-sobre-kia/empresa/'
      },
     {
       id: 3,
       name:'NISSAN',
       image: 'https://static.vecteezy.com/system/resources/previews/020/336/133/original/nissan-logo-nissan-icon-free-free-vector.jpg',
       description:'El nombre de Nissan comenzó en Japón cuando su fundador, Yoshisuke Aikawa, se convirtió en presidente de la firma Nihon Sangyo en 1928. Nihon Sangyo, una firma dedicada principalmente al negocio de fundiciones y repuestos para automóviles, debutó en la Bolsa de valores de Tokio con el nombre NISSAN en 1933. Nissan creció más allá de sus raíces japonesas, llegando oficialmente a USA como Datsun en 1958. Los Datsun no son sólo los primeros vehículos japoneses producidos en serie, sino que su estilo automotriz único generó un gran impacto en el mercado de EE. UU. cuando se importaron por primera vez los sedanes y camionetas Datsun a finales de los años cincuenta.',
       url:'https://es.nissanusa.com/',
      },
     {
       id: 4,
       name:'FORD',
       image: 'https://st5.depositphotos.com/38540216/64112/v/450/depositphotos_641129812-stock-illustration-ford-brand-logo-car-symbol.jpg',
       description:' Henry Ford transformó la vida de muchas personas con su visión de hacer accesible un automóvil que fuera tan práctico como asequible. Su desarrollo de la cadena de ensamblaje móvil y las técnicas de producción en masa, marcaron un estándar mundial durante la primera mitad del siglo XX. La empresa Ford Motor Company, es una organización multinacional fundada en Estados Unidos la cual se dedica a la construcción de automóviles con base en Michigan, Estados Unidos. Fue constituida el 16 de junio de 1903 por Henry Ford en Detroit, Míchigan.  ',
       url:'https://www.dimasaford.com/',
      },
     {
       id: 5,
       name:'volkswagen',
       image: 'https://static.vecteezy.com/system/resources/previews/020/927/515/non_2x/volkswagen-brand-logo-car-symbol-white-design-german-automobile-illustration-with-black-background-free-vector.jpg',
       description:'La historia de Volkswagen se remonta hace varias décadas y se materializa en el deseo de crear un vehículo accesible para todas las personas. El primer automóvil Volkswagen nació como parte de un concurso donde empresarios presentaron sus mejores ideas para crear el “automóvil del pueblo” (Volkswagen). Finalmente Ferdinand Porsche fue quien se encargó de realizar el proyecto en el que se debía construir un vehículo sencillo y accesible para las familias alemanas de los años 1930. El nombre que se eligió para el primer automóvil Volkswagen fue Kdf-Wagen (Kraft durch Freude: “fuerza a través de la alegría”). Sin embargo, en Alemania todo mundo comenzó a llamar al auto como “Käfer”, “Beetle” o “Escarabajo”, dejando el nombre Kdf-Wagen para los catálogos y usos oficiales.',
       url:'https://www.vw.com.mx/es.html',
      },
     {
       id: 6,
       name:'Lexus',
       image: 'https://static.vecteezy.com/system/resources/previews/020/500/686/non_2x/lexus-brand-logo-car-symbol-with-name-white-design-japan-automobile-illustration-with-black-background-free-vector.jpg',
       description:'Lexus es un fabricante de vehículos de lujo que fue fundado en 1989 por el entonces presidente de Toyota, Eiji Toyoda. Él historia de Lexus comenzó en 1983 cuando un equipo de técnicos, ingenieros y diseñadores se involucraron en un secreto proyecto a premium un nuevo sedán de lujo.Toyota es el único dueño del Lexus marca, pero mientras que Toyota tiene su sede en Toyota City, Lexus tiene una sede japonesa separada en Nagoya. Las dos empresas se separaron formalmente en 2005, momento en el que Lexus comenzó a operar su propia premium, ingeniería, formación e instalaciones de fabricación.El grado en que Lexus se diferencia de Toyota también varía de una región a otra y está influenciado por varios marca, premiumy estructuras de ventas',
       url:'https://www.lexus.mx/',
     },
     
     
     
     ];
     this.models.set(InitModels);
     this.modelsnotsignal = (InitModels)
  }
  getOneMarca(id: string){
    const models = [this.models];
    const num = parseInt(id);
    console.log(models.slice(num));
    //const result= this.models.find(({ id }) => id === id)
    
  
  }
  obtainMarc(marca: modelos)
  {
    //return this.http.get<modelos>(this.models)
    //const marc = this.models().values;
    //return marca.update(marc);
    this.models.update(state =>[...state])
    

  }
}
