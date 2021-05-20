------------------------------------Java-----------------------------------------------------------------
asenna oraclelta uusin jdk esim programfiles/java
tarkasta terminaalista että toimii 			#java -version .Jos ei toimi niin voi joutua sääteleen
							#ympäristömuuttujia/path hommia. Tätä kirjoittaessa ei tarttenu
							#niihin kuitenkaan koskea ainakaan tälläkertaa.
--vsc
asenna microsoftin Java Extension Pack			#ja kovaa koodia
java tiedostonnimi					#ajaa tiedoston (shortcuttia ei ilmeisesti ole)

--sekalaista
generate constructors,getters & setters			#hiiren oikea-> source action
autoimport						                #tuplaklikkaus hiirella ja ctrl+space

--------------
public class Testi {					#luokka Testi vastattava tiedostonnimeä Testi.java
    public static void main(String[] args) {		#main metodi
							            #voit luoda automaattisesti constructorin, getterit ja setterit
    }							        #vsc-> hiirenoikea->source action ja sieltä halutut
}
----------scanner--------------------
Scanner lukija = new Scanner(System.in);		#import java.util.Scanner;
System.out.println("Syötä viesti: ");
String viesti = lukija.nextLine();			    #luetaan viesti, odottaa käyttäjän syötettä
System.out.println(viesti);
lukija.close();						            #scanneri pitää sulkea.
lukija.nextLine();					            #myös bufferin tyhjennys, jos luettu lukuja lukija.nextInt()
							#tai lukija.nextDouble(). Näiden jälkeen aina lukija.nextLine()
----------print----------------------
System.out.printf("Tilinumero: %11s\n", getTilinumero()); #11 tyhjää vasemmalle, s string ,\n= rivinvaihto
System.out.printf("Saldo: %16.2f €\n", getSaldo());	#16 tyhjää vasemmalle .2 desimaalin tarkkuuteen f floats
%d -integer
%s -string
%f -float
%c -char
String data = "%s %s".formatted(nimi, syntymaAika);	#voit myös takoa formatoidun stringin samaan tyyliin.
----operaattorit-----------------
+ - * / %						    #plus miinus kerto jako modulo
< > <= >= == !=						#perus
&& || ==						    #and or equals
int v = 100;
String sana = (v % 2 == 0) ? "Even" : "Odd";		#conditional operator, ternary operator.

----tyyppimuunnos----
int luku = Integer.valueOf("500");			#string to int
double luku = Double.valueOf("500");		#string to double (500.0)
Integer.toString(intluku, 2);				#muuttaa luvun binarystringiksi
Integer.toString(intluku, 8);				#oktaali
Integer.toString(intluku, 16);				#hex
Integer.toBinaryString(luku);				#em.(bin,okt,hex) löytyy myös omat funktiot 
int tunnit =2;						        #esim klo 02 halutessa etunollia
String tuntistr = String.format("%02d", tunnit);	#d=digit, s=string, 0=halutaan nollia eteen, 2=2kpl merkkejä -
							                #tarvittaessa täytetään nollilla
-------luvut ja laskut------------
Math.sqrt(luku);					        #ei vaadi importtia
    
-------string-------------
muuttuja.equals("merkkijono")				#string vertailu
String mjono = "dippa dappa dai";
String[] sanalista = mjono.split(" ");		#[dippa, dappa, dai]
mjono.contains("dai");					    #true
mjono.charAt(1);					        #i
int tunnit =2;						        #esim klo 02 halutessa etunollia
String tuntistr = String.format("%02d", tunnit);	#d=digit, s=string, 0=halutaan nollia eteen, 2=2kpl merkkejä -
							                #tarvittaessa täytetään nollilla

-------Arraylist------------
import java.util.ArrayList;
ArrayList<String> lista = new ArrayList<>();
lista.add("Eka");					        #lisää jonon jatkeeksi
lista.get(0);						        #hakee halutun indeksin
lista.size();						        #koko
System.out.println(lista);				    #voi tulostaa suoraan, ei tartte apuja niinku array

----------array----------------------
int[] luvut = new int[10];				    #tyyppi[] nimi = new tyyppi[koko];
int[] luvut = { 4, 5, 2, 6 };				#Koira [] koirat = new Koira[10];, koirat taulukko
System.out.println(Arrays.toString(luvut));	#tulostaa listan 
int pituus = luvut.length;				    #koko
Integer[] arr = { 4, 3, 2 };				#Huomaa tyyppi Integer (Collections min vaatii Integer)
int min = Collections.min(Arrays.asList(arr));		#import java.util.Arrays;
							                #import java.util.Collections;
-----------------multiclass--multifolder
import kansio.Henkilo;					#package.Class	eli importataan kansio nimisestä packagesta		
							            #Henkilo class
public class Testi {					#Testi main class
    public static void main(String[] args) {		#main method
        Henkilo jaska = new Henkilo();
        jaska.hello();
    }
}
--
package kansio;						#package nimi oltava sama kuin kansion nimi(kansio/Henkilo.java)

public class Henkilo {
    public void hello() {
        System.out.println("Hellooo");
    }
}
---------------näkyvyysmääritelmät-------
static							#luokkakohtainen. esim voit käyttää luokkamuuttujaa tai metodia
							    #luomatta yksittäistä oliota ensin. Luokkamuuttuja/metodi
							    #kaikilla luokan instanseilla yhteinen.
public							#näkyy kaikille
private							#muuttujat,metodit näkyvät vain luokan sisällä

--------------tiedoston lukeminen----------
File file = new File(tiedostonnimi);
try {
Scanner lukija = new Scanner(file);
while (lukija.hasNextLine()) {
String sana = lukija.nextLine();
System.out.println(sana);
}
lukija.close();
} catch (Exception e) {
System.out.println("you have failed");
}

---------------random------------------------
Random rnd = new Random();
int numba = rnd.nextInt(3);				#luku 0-2

