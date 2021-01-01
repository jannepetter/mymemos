-----------------------------------------------MatLab---------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------
---doc
voit aukaista dokumentit funktioista editorissa
doc funktionnimi				-esim doc randi


----lasku operaattorit:
+,-,*,/ 

----vertailu operaattorit:
<,>,<=,>=,==,~=					-~= not equal to

taulu=[1 2 3 4 5]
x=taulu < 3					-vertailu kerralla koko taulukon elementtijoukkoja haluttuun arvoon.
						 x=[1 1 0 0 0] , josta arvo 1 on true ja 0 false.
uus=taulu(taulu > 2)				-uus=[3 4 5] logical indexing toimii myös erillisillä taulukoilla
						 uus=toinentaulu(taulu >3), Kun alkio taulun indx >3 ottaa vastaavan
						 indx alkion toinentaulu:sta uus vektoriin.
taulu(taulu >4)=50				-taulu=[1 2 3 4 50]

----loogiset operaattorit:
& , |						-and , or

taulu=[1 2 3 4 5]
uus=taulu(taulu >2 & taulu<5)			-uus=[3 4]

----ehtolauseet:
if ehto						
  teejotain()
elseif ehto
  teejotain2()
else
  jotainmuuta()
end

----loopit:
for i=1:5
  disp(i)
end

----muuttujien talletus ja lataus:
save filename.mat				-tallettaa workspacen muuttujat filename.mat tiedostoon
load filename.mat				-lataa muuttujat tiedostosta workspaceen
load filename muuttuja				-lataa tiedostosta vain muuttujan
save filename muuttuja				-tallettaa muuttujan filename nimiseen tiedostoon

----sälää:

clear						-tyhjentää workspacen
clc						-tyhjentää vain ikkunan, vähän kuin terminaalin clearaus
muuttuja+enter					-voit tutkia workspacen muuttujia
format long					-näyttää desimaaliluvut suuremmalla tarkkuudella
format short					-desimaaliluvut 4 desimaalin tarkkuuteen. Sisäisesti tarkempi ilmeisesti

------------built-in functions and constants-----
a=pi						-pi tarkoittaa tietenkin piin arvoa. On tarkempi kuin ne näkyvät 4 arvoa
b=abs(-10)					-itseisarvo
c=sin(1)					-muita lisäksi esim: sqrt,max,sum,size

x=rand(2)					-luo 2*2 matriisin randomluvuista (0-1)
x=rand(5)					-5*5
x=rand(5,2)					-luo 5riviä * 2pylvästä matriisin

x=randi(20,5,7)					-randomluvut 1-20, matriisi 5*7
y=randi(3)					-randomluku 1-3

x = ones(2,3)					-matriisi ykkösiä 2*3
x=zeros(3,2)					-matriisi nollia  3*2

x=numel(array)					-elementtien määrä arrayssa.

----------------------array----------------------
----luominen
x=[1 3]	 tai x=[1,3]				-taulukko tai rivivektori
x=[1;3]						-pylväsvektori, ilmeisesti vähän kuin matriisin pystyrivi
x=[5,6,7;8 9 10]				-vähänkuin [[5,6,7],[8,9,10]] js
x=1:4						-[1,2,3,4]	(default spacing 1)
x=5:8						-[5,6,7,8]
x=20:2:26					-[20 22 24 26]	(halutulla spacingillä)
x = linspace(0,1,5)				-[0, 0.250, 0.500, 0.750, 1.000] eli(ensimmäinen,viimenen,montakolukua)
x=x'						-linspace ja : tekevät rowvectorin (') eli transpose operaattorilla 
						 voi muuttaa pysty/pylväsvektoriksi.
x=(5:2:9)'					-voi castata suoraan pylväsvektoriksi '

----haku
matlabissa indeksointi alkaa 1
g=joku*joku matriisi
[rivit,sarakkeet]=size(g)			-destrukturoimalla saat suoraan matriisin rivien ja sarakkeiden määrän
						 etkä sitä mystistä yhtä arvoa. Sama toimii vektoreilla.
x=g(6,3)					-muuttuja x on g matriisin arvo riviltä 6 sarakkeelta/pylväästä 3
x=g(end,3)					-viimesen rivin kolmas sarake g matriisista
x=g(end-1,3)					-myös laskutoimitukset toimii normaalisti
x=g(1,:)					-ensimmäisen rivin kaikki sarakkeet, eli vaakavektori
x=g(:,2)					-toisen pylvään kaikki rivit, eli pystyvektori
x=g(1:3,:)					-ensimmäisestä,toisesta ja kolmannesta rivistä kaikki sarakkeet
x=g(3)						-jos g-array on pysty tai vaakavektori ts. normaali array, kaikki 
						 toimii normaalisti. Jos g on matriisi lähtee etsimään oikeaa indeksiä
						 suunnassa alaspäin.
taulu=[1 2 3 4 5]
x=taulu < 3					-vertailu kerralla koko taulukon elementtijoukkoja haluttuun arvoon.
						 x=[1 1 0 0 0] , josta arvo 1 on true ja 0 false.
uus=taulu(taulu > 2)				-uus=[3 4 5] logical indexing toimii myös erillisillä taulukoilla
						 uus=toinentaulu(taulu >3), Kun alkio taulun indx >3 ottaa vastaavan
						 indx alkion toinentaulu:sta uus vektoriin.
taulu(taulu >4)=50				-taulu=[1 2 3 4 50]

---
y=[1 2 3]
x=y +1						-x= [2 3 4] , lisää jokaiseen alkioon luvun 1
z=x+y						-z= [3 5 7] , ei yhdistä taulukkoja vaan summaa alkiot yhteen
g=sqrt(x)					-g on uusi taulukko koostuen x:n alkioista, joista otettu neliöjuuri.
g=round(x)					-pyöristää jokaisen x:n alkion(jos olisi jotain pyöristettävää) 
suurin=max(x)					-suurin=4 , normisettiä
[suurin,indeksi]=max(x)				-suurin=4 ja indeksi=3
[~,indx]=max(x)					-Jos tarvit vain indeksin missä max arvo, tildellä peitä ei haluttu.
z=y*x						-koska molemmat on vektoreita y*x tarkoittaa vektoreiden pistetuloa.
						 Jos y ja x olisivat matriiseja, olisi kyseessä matriisitulo. Tästä
						Seuraa kuitenkin virhe koska molemmat ovat vaakavektoreita 1*3 ja 1*3
						Jotta pistetulo onnistuisi pystyvektorissa on oltavayhtä monta riviä
						kuin vaakavektorissa on sarakkeita esim 1*3 ja 3*1 esim.
						z=x*y' ,jolloin transpose operaattorilla muutetaan y pystyvektoriksi.
z= y.*x						-[2 6 12]   elementwise multiplication, kertoo alkiot keskenään
------------------kuvaajien piirtely------------
plot(vektori1,vektori2)				-piirtelee käppyröitä vektoreiden perusteella esim
						 plot(vuosiluvut,väestömäärä) perus viivadiagrammi mistä näkyy väestön
						 määrä tiettynä vuonna.
loglog(vektori1,vektori2)			-melkein sama kuin plotti.
plot(v1,v2,'r--o')				-voi antaa kolmannenkin parametrin. Eka kirjain = väri r=red, 
						 -- tarkoittaa katkoviivaa viimeinen kirjain tarkoittaa mitä piirretään
						 alkioiden arvojen kohdille käppyröihin esim s= neliö tai *=*
hold on						-Jos haluat useamman käppyrän piirretyksi samaan boksiin hold on 
						 komennolla matlabbi vääntää sen ja seuraavat samaan boksiin.
hold off					-Seuraava plotti tulee nyt omaan boksiinsa
plot(vektori)					-jos yksi vektori parametrina, piirtyy alkioiden arvot y-akselille ja
						 x-akselin arvona toimii vektorin indeksiluku, perus viivadiagrammi.
doc plot					-viivojen tyylittelyt voi katsoa docista
title("Otsikko plotille")			-laittaa otsikon piirroksen yläpuolelle
ylabel("kyltti")				-infoa y-akselille
legend("info A","info B")			-piirrokselle tulee infonurkkaus mitä merkit tarkottaa esim * info A
						 jossa legendin eka param on ensiksi piirretty käppyrä. Param kelpaa
						 myös array.
xlim([1 1000])					-voit valita plottiin miltä alueelta esim x-akselin arvot halutaan.
						 Jos arvot ovat vaikka 0-10000 ja kaikkia ei haluta näyttää.

-----------------csv/exel taulukot----------------
matlab tunnistaa csv tiedoston ensimmäisen rivin otsikkoriviksi ja kun importtaat tiedoston workspaceen, voit suoraan
viitata otsikkosarakkeisiin esim jokutaulu.Tämäsarake joka siis viittaa otsikon alla olevaan pystyvektoriin. Näitä
sarakkeita voi kertoa keskenään .* elemetwise operaattorilla ja luoda tauluun uusia sarakkeita esim:
jokutaulu.Uusisarake=jokutaulu.Tämäsarake .* jokutaulu.Toinensarake 























