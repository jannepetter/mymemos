------------------------------------------------------------------------------------------------------------
---------------------Objects--------------------------------------------------------------------------------
const test={
a:1,
b:2,
c:3
}

for(let [k,v] of Object.entries(test)){		//iteroi kentät ja arvot ja tulostaa ne
console.log(k,v)
}  

for(let j in test){
console.log(j)					//tulostaa kentät
}

for(let j in test){
console.log(test[j])				//tulostaa arvot
}

const testarr=Object.keys(test)			//testarr on nyt array ja sisältää obj test kentät
const testarrvalues=Object.values(test)		//sama toisinpäi

---
const obj ={x:1}
Object.freeze(obj)				//tekee objectista immutablen, et voi lisätä propertiessejä etkä 
						//muuttaa olemassaolevien arvoja.

const obj2={y:2}			//voit vielä muuttaa arvoja, esim obj2.y=1. Mutta et voi lisätä tai poistaa
Object.seal(obj2)			//sen kenttiä.
delete obj2.y				// tai delete obj2['y'] ei nyt onnistu (ei myöskään freeze keisseissä)
					
------------------------------------------------------------------------------------------------------------
---------------------Array-------------------------------------------------------------------------------
for in looppeja ei kannata käyttää array iteroinneissa!

const testarr2=[6,7,8,9]

for(const [i,v] of testarr2.entries()){
console.log(i,v)
}

let numbers = [1,2,3,4,5]
numbers.forEach((number, index) => console.log(number+" "+ index))

for (let i = 0; i < testarr2.length; i++) {		//perussettiä
    console.log(testarr2[i])
}

jos haluat luoda tietynpituisen arrayn valmiina jollain arvolla, esim 0
const arr=Array(10).fill(0)		//arr joka sisältää 10 nollaa (ES6 koodia)

const arr=[
[1,2,3,4],
[5,6,7,8],
[9,10,11,12,[13,14,15,[16,17,18]]]
]
const n=arr.flat()			// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, Array(4)] 
					//flattens vaan yhden kerroksen kerrallaan, ei nää mitä syvemmällä sisällä

const moreflattening=n.flat().flat()	//mahdollista kaivautua syvemmälle ketjuttamalla, tehokkuutta en ole tutkinut.

const name='joulupukki'
const chararr=name.split('')		//["j", "o", "u", "l", "u", "p", "u", "k", "k", "i"]
const revarr=chararr.reverse()		//["i", "k", "k", "u", "p", "u", "l", "u", "o", "j"]
const revstring=revarr.join('')		//ikkupuluoj  (join() vastaus i,k,k,u,p,u,l,u,o,j)
const sorted=revarr.sort()		//["i", "j", "k", "k", "l", "o", "p", "u", "u", "u"] defaulttina sortilla
					//lexicografinen järjestys, esim:
let numbers = [1,2,3,4,5,22,14,33]
numbers.sort()				//[1, 14, 2, 22, 3, 33, 4, 5]
sort functio hyväksyy parametriksi cb funktion, joka vertailee taulukon kahta peräkkäistä arvoa esim.
numbers.sort((a,b)=>{return a-b})

--Math
const arr=[10,2,30,4,5]

const minmax=(ary)=>{
let min=Math.min(...ary)		//destructuring koko array argumenteiksi, ei tartte for looppia. Huom!
let max=Math.max(...ary)		//ei onnistu Math.max(ary) koska silloin se olisi Math.max([10,2,30,4,5])
return {min,max}			//{min: 2, max: 30}
}	

-----------------------------------------------------------------------------------------------------------------------
------------------------shallowcopy & deepcopy------------------------------------------------------------------------
const pizzas = {
   margherita: {
      prices: {
         small: '5.00',
      }
   },
   prosciutto: {
      prices: { 
         small: '6.50',  
      }
   }
};
let pizzasCopy= pizzas				//kummatkin viittavat samaan muistipaikkaan, muutat yhtä niin kumpikin
						//muuttuu
let pizzasCopy = {...pizzas};			//shallowcopy, 1 levelin syvyydelle kummallakin on omat viitteet
						//muistipaikkoihin.Syvemmälle mentäessä viittavat samaan muistipaikkaan
let pizzasCopy = Object.assign({}, pizzas);	//shallowcopy tuloksena, sama kuin spread operatorilla

let pizzasCopy =JSON.parse(JSON.stringify(pizzas)) //deepcopy, objektilla on kokonaisuudessaan oma muistipaikka

Array on yksi objektin muoto ja se viittaa kans tiettyyn muistipaikkaan. Array copy toimii samalla periaatteella.

Todella suurissa objekteissa kannattaa ehkä tutkia kirjastoja rfdc lupailee massiivisia nopeusparannuksia suurissa
objekteissa




-----------------------------------------------------------------------------------------------------------------------
----------------------Map----------------------------------------------------------------------------------------------
edut: 
-ei sisällä valmiiksi mitään avaimia, object map saattaa sisältää jotain perusjuttuja jotka saattaa
 aiheuttaa törmäyksiä.
-keys voi olla mitä vaan, primitiivejä, objecteja, funktioita. Object map key on string tai symbol
-mapin koko selviää size propertyllä
-iterable (myös object on mutta se pitää muuttaa ensin esim. const iteroitava=Object.keys(objektini)
-optimoitu jatkuviin avain-arvo parien poistoon/lisäykseen

haitat:
-kaikki ominaisuudet ei ole IE yhteensopivia (kuka käyttää IE?)

map vs object map:
-const myObj=Object.create(null) voi välttää default avainten mahdollisesti aiheuttamat törmäykset
-suorilta ilmeisesti object haku on nopeampi O(1) ( nopeudet oli jossain postauksessa luokkaa:
 object map 40ms ja map 200ms), mutta jos tarvii iteroida, lisätä, poistella, tai olla kärryllä sizestä niin
 map toimii kokonaisuudessaan nopeammin O(1).	

let myMap = new Map()
myMap.set(0, 'zero')			//ei näin!-> myMap[0]='zero' (toimii, mutta epänormaalisti)
myMap.set(1, 'one')

myMap.get(0)				// 'zero'
myMap.get(10)				//undefined
myMap.has(0)				//true

-----------------------iterointi:
for (let [key, value] of myMap) {	//for of loop
  console.log(key + ' = ' + value)
}
tai
for (let [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value)
}

for (let key of myMap.keys()) {		//pelkät avaimet, sama toimii myös arvoille-> myMap.values()
  console.log(key)
}

myMap.forEach((k,v)=>{			//forEach
console.log(k,v)
})
------------------------------------------------------------------------------------------------------------------------
----------------------------------string & numbers----------------------------------------------------------------------
let name='keksa'
name[1]					// e	(ei tartte muuttaa mitenkää voi heti tarkistaa kirjaimen indeksissä)

let number=10
number.toString(2)			// 1010 ,vastausbinaarilukuna
number.toString(16)			//heksadesimaalikäännös

let binarynum=0b101			//suoraan binaariksi decl.
let oktanum=0o100			//oktaali
let hexnum=0x100			//heksadesimaali

------------------------------------------------------------------------------------------------------------------------
--------------------------------prototype-------------------------------------------------------------------------------
---esim1:
[1,2].print()		//tulee error, arraylla ei kirjoittamisen hetkellä ainakaan ole print funtiota, mutta jos 
			//sellainen välttämättä halutaan(itse en lisäisi ohjelmaan base arraylle, prototyyppifuntioita)
Array.prototype.print=function(){	//nyt tulostus ylläolevasta 1,2 eli sama kuin toStringillä									
return this.toString()
}
lisäksi nyt muillakin ohjelmasi Array:llä on print metodi, koska muokkasit Array prototyyppiä.
----esim2:

function Person(first, last, age, eyecolor) {			//construktori FUNKTIO.
  this.firstName = first;					
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.name = function() {				//lisätään halutut funktiot prototyypeiksi. HUOM
  return this.firstName + " " + this.lastName;			//normaaleilla funktioilla, ei fättistä
};

const worker=new Person('jaska','jokunen',33,'keltanen')
Person.prototype.hello=function(){
return 'jelloo'
}
console.log(worker.name())					//nyt kaikilla Person construktoreilla luoduilla
console.log(worker.hello())					//on samat funktiot
const boss=new Person('keksa','boy',50,'musta')
console.log(boss.name())
console.log(boss.hello())

---esim3:
const protoRabbit = {
color: 'grey',
speak(line) {
console.log(`The ${this.type} rabbit says ${line}`);		
  }
};
const killerRabbit = Object.create(protoRabbit);		//luo uuden instanssin protoRabbitista ja sisältää
								//proton muuttujat valmiina.
killerRabbit.speak("SKREEEE!");					//The undefined rabbit says SKREEEE!
killerRabbit.type = "assassin";
killerRabbit.speak("SKREEEE!");					//The assassin rabbit says SKREEEE!

killerRabbit.age=40
console.log(killerRabbit.age)					//40
console.log(protoRabbit.age)					//undefined

------------------------------------------------------------------------------------------------------------------------
----------------------------------operators----------------------------------------------------------------------------
---es2020-- nullish coalescing operator ??	(tsekkaa browsersupport jos meinaat käyttää)
let x = {
  profile: {
    name: '',
    age: 0
  }
}
console.log(x.profile.name || 'john')		// john ,koska tulkitsee arvon undefined/null joka on falsy
console.log(x.profile.age || 25)		//25	,koska tulkitsee arvon undefined/null joka on falsy
console.log(x.profile.name ?? 'john')		// ''	toimii kuten || or operator mutta jos vasemmalla puolella
console.log(x.profile.age ?? 25)		// 0	on undefined/null arvo, niin katsotaan arvo ?? operaattorin
						// 	oikealta puolelta.

---es2020--- optional chaining operator ?.  (tsekkaa browsersupport jos meinaat käyttää)
let x = {}
console.log(x.profile.name)			// tulee erroria koska x:llä ei ole profile kenttää
console.log(x && x.profile && x.profile.name)	// vanha ratkaisu (undefined) eikä heitä erroria
console.log(x?.profile?.name)			// uusi ratkaisu, ei erroria (jos browsersupport)

-------------------------------------------
---conditional tai ternary operator
let x = {
 large:false,
 heavy:true
}
console.log(x.large? 'its truuu':'its falss')	//its falss
console.log(x.heavy? 'its truuu':'its falss')	//its truuu

--- bitshift operator
let a=1
a=a<<1			// 2 ,käsittelee lukua suoraan bitteinä ja siirtää niitä vasemmalle (tässä yhden pykälän)
a=a<<1			// 4
a=a>>1			// 2

------------------------------------------------------------------------------------------------------------------------
----------------------------------tricks-------------------------------------------------------------------------------
---IntersectionObserver
Jos halutaan animaatioita triggeroida kun käyttäjän ruutu pääsee kohdalle.
**esim elementti** huomaa css luokkanimien ketjutus. Pohjalle se mitä kaikilla on yhteistä. DRY
<div>
 <div className='skillbase skillitem js anim' data-anim='leftanim'>JavaScript</div>
</div>
**

   const items=document.querySelectorAll('.anim')	// valittee kaikki elementit joiden classNamessa on anim
    const options={}					//defaulttina on koko viewport jos et määritä mitää
    
    const obs=new IntersectionObserver(entries=>{		//määritellään mitä tapahtuu kun viewport risteää 
        entries.forEach(e=>{					//seurattavana olevan elementin kans.
            if(e.isIntersecting){
                e.target.classList.add(e.target.dataset.anim)	//dataset sisältää kaikki elementin data-jotain propsit
            }else{						//tässätapauksessa data-anim:in arvo leftanim lisätään
                e.target.classList.remove(e.target.dataset.anim)	//elementin classnameen
            }							//lopuksi otetaan vastaavan elementin lisätty classnimi          							
        });							//leftanim pois
    },options)
  

    items.forEach(item=>{			//lisätään itemit seurattavaksi,joko yksitellen tai iteroimalla koko
    obs.observe(item)				//lista kerralla kuten tässä.
    })

--------------------------------------------
document.body.contentEditable =true						//voit editoida sivuja

document.getElementById(location).scrollIntoView({behavior:'smooth'});		//scrollaus tietyn elementid:n kohalle

window.addEventListener('DOMContentLoaded', cb())	//callbackfunction suoritus kun documentti eli käytännössä
							//index.html on ladattu kokonaisuudessaan. Hyvä varsinkin
							// jos animaatiot pitää ajoittaa sivun aukasuun.
window.open(url, '_blank');				//aukasee uuden sivun urlissa
---
Varsinkin typescriptissä editori valittaa usein että elementillä ei ole jotain ominaisuutta. Johtuu kun et ole
tyypittänyt sitä oikein. Katso hoverilla valitsemasi elementin tyyppi ja lisää se haettassa as HTMLjokuElement tyyliin

const elem = document.getElementById('jee123') as HTMLTextAreaElement;
---
      
    




























