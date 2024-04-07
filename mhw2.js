function TestoIniziale(){    
    //Questa funzione crea dinamicamente degli elementi h2,p e img, ovvero dei figli che vengono poi aggiunti al padre, cioè un div creato all'inizio della sezione.

    const new_h2=document.createElement('h2');
    new_h2.textContent='Javascript';
    const new_p=document.createElement('p');
    new_p.textContent='in questo homework si mostrano alcune funzionalità ottenute tramite javascript'
    const new_img=document.createElement('img');
    new_img.src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png";
    new_img.classList.add('img_javascript');

    const container=document.querySelector('.div_section'); /*selezionerà il primo div con classe .div_section*/
    


    if(flag===0){
        container.appendChild(new_h2);
        container.appendChild(new_p);
        container.appendChild(new_img);
        flag=1;
    }
    else{
        container.innerHTML='';
        flag=0;
    }
}
let flag=0; //ho utilizzato una variabile flag (settata ad 1 quando i figli vengono aggiunti al padre) per eliminare il contenuto del div quando è gia presente.

//Sia l'aggiunta degli elementi, sia lo svuotamento del div, vengono attivati dallo stesso pulsante con id="mostra_introduzione".
const mostra_testo=document.querySelector('#mostra_introduzione');   
mostra_testo.addEventListener('click', TestoIniziale);



function mostraFooter(event){
    
    /*Questa funzione permette di mostrare il footer del sito, inizialmente nascosto, in quanto gli è stato attribuita la classe hidden con display:none;
    La funzione, infatti, consiste nella rimozione della classe hidden dal footer , agendo sulla proprietà classList, mentre, invece, tale classe verrà aggiunta
    al pulsante iniziale usato per attivare l'evento. */


    const object=document.querySelector('footer');
    object.classList.remove('hidden');
    const botton=document.querySelector('#mostra_footer');
    botton.classList.add('hidden');
}
const innesco=document.querySelector('#mostra_footer');
innesco.addEventListener('click', mostraFooter);


function cambiaImmagine(event){

    /*Questa funzione consente di modificare dinamicamente l’URL di un’immagine tramite l’attributo src, quando si passa con il cursore sopra l'immagine
    Quest'immagine, in particolar modo, è l'immagine con id="img_ballerina".*/

    const image=event.currentTarget;
    image.src="https://www.gedistatic.it/content/gnn/img/lastampa/2021/12/23/192101954-3bb22ae6-e1fb-43cd-95c9-b9166b1953d8.jpg";

}

function ritornaImmagine(event){

    //questa funzione consente di ritornare all'url originale quando il cursore non è più sull'immagine 

    const image=event.currentTarget;
    image.src="mhw2/img007.png";
}

const image=document.querySelector('#img_ballerina');
image.addEventListener('mouseover', cambiaImmagine);

const image_original=document.querySelector('#img_ballerina');
image_original.addEventListener('mouseout', ritornaImmagine);

function Colazione(){

    //Si desidera modificare dinamicamente gli oggetti img e p del div con id="div_ingresso".

    const container_img=document.querySelector('#div_ingresso img');
    container_img.src="https://www.mulinobianco.it/origin0/v3/upl/entities/consumptionMomentTimeSlot/momentodiconsumo_01_colazione.png";
    const container_p=document.querySelector('#div_ingresso p');
    container_p.textContent='Ecco alcune idee per la tua colazione';

    /* con questi due cicli for si fa si che, se in precedenza sono stati mostrati altri div con le varie funzioni Pranzo(), Merenda() e Cena(), essi possano
    essere nascosti*/

    const divs = document.querySelectorAll('#div_2 [data-prodotto]');
    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.add('hidden');
    }

    const divs_s = document.querySelectorAll('#div_2 [data-social]');
    for (let i = 0; i < divs_s.length; i++) {
        divs_s[i].classList.add('hidden');
    }

    //si desidera rimuovere la classe hidden ai div relativi alla colazione, i quali hanno tutti data-prodotto=1. Lo stesso discorso vale per i div con data-social=1

    const prodotto=document.querySelector('#div_2 [data-prodotto="1"]');
    prodotto.classList.remove('hidden');
    prodotto.classList.add('container-biscotti');
    const social=document.querySelector('#div_2 [data-social="1"]');
    social.classList.remove('hidden');
    social.classList.add('container-biscotti');
    
}

/*l'evento viene attivato quando si clicca sul pulsante con data-index=1. Sono presenti, in particolare, quattro data-index per i 4 pulsanti rappresentanti
4 orari diversi*/

const innesco_colazione=document.querySelector('#pulsanti_orari [data-index="1"]');  
innesco_colazione.addEventListener('click', Colazione);

function Pranzo(){
    const container_img=document.querySelector('#div_ingresso img');
    container_img.src="https://static.mulinobianco.it/v3/upl/entities/consumptionMomentTimeSlot/momentodiconsumo_03_pranzo.png";
    const container_p=document.querySelector('#div_ingresso p');
    container_p.textContent='Ecco alcune idee per il tuo pranzo';
    
    const divs = document.querySelectorAll('#div_2 [data-prodotto]');
    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.add('hidden');
    }

    const divs_s = document.querySelectorAll('#div_2 [data-social]');
    for (let i = 0; i < divs_s.length; i++) {
        divs_s[i].classList.add('hidden');
    }

    const prodotto=document.querySelector('#div_2 [data-prodotto="2"]');
    prodotto.classList.remove('hidden');
    prodotto.classList.add('container-biscotti');
    const social=document.querySelector('#div_2 [data-social="2"]');
    social.classList.remove('hidden');
    social.classList.add('container-biscotti');
}
const innesco_pranzo=document.querySelector('#pulsanti_orari [data-index="2"]');
innesco_pranzo.addEventListener('click', Pranzo);


function Merenda(){
    const container_img=document.querySelector('#div_ingresso img');
    container_img.src="https://static.mulinobianco.it/v3/upl/entities/consumptionMomentTimeSlot/momentodiconsumo_04_merenda.png";
    const container_p=document.querySelector('#div_ingresso p');
    container_p.textContent='Ecco alcune idee per la tua merenda';
    
    const divs = document.querySelectorAll('#div_2 [data-prodotto]');
    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.add('hidden');
    }

    const divs_s = document.querySelectorAll('#div_2 [data-social]');
    for (let i = 0; i < divs_s.length; i++) {
        divs_s[i].classList.add('hidden');
    }

    const prodotto=document.querySelector('#div_2 [data-prodotto="3"]');
    prodotto.classList.remove('hidden');
    prodotto.classList.add('container-biscotti');
    const social=document.querySelector('#div_2 [data-social="3"]');
    social.classList.remove('hidden');
    social.classList.add('container-biscotti');



}
const innesco_merenda=document.querySelector('#pulsanti_orari [data-index="3"]');
innesco_merenda.addEventListener('click', Merenda);

function Cena(){
    const container_img=document.querySelector('#div_ingresso img');
    container_img.src="https://static.mulinobianco.it/v3/upl/entities/consumptionMomentTimeSlot/momentodiconsumo_06_cena%20-%20Copy%20(1).png";
    const container_p=document.querySelector('#div_ingresso p');
    container_p.textContent='Ecco alcune idee per la tua cena';
    
    const divs = document.querySelectorAll('#div_2 [data-prodotto]');
    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.add('hidden');
    }

    const divs_s = document.querySelectorAll('#div_2 [data-social]');
    for (let i = 0; i < divs_s.length; i++) {
        divs_s[i].classList.add('hidden');
    }

    const prodotto=document.querySelector('#div_2 [data-prodotto="4"]');
    prodotto.classList.remove('hidden');
    prodotto.classList.add('container-biscotti');
    const social=document.querySelector('#div_2 [data-social="4"]');
    social.classList.remove('hidden');
    social.classList.add('container-biscotti');


}
const innesco_cena=document.querySelector('#pulsanti_orari [data-index="4"]');
innesco_cena.addEventListener('click', Cena);