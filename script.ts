interface IPartecipante{
    nome:string,
    cognome:string,
    paeseOriginario:string,
    livelloIstruzione:string,
    competenzeLinguistiche:string,
    AmbitoFormazioneInteresse:string,

    iscrivitiCorso(corso:ICorso):void
}

interface ICorso{

    titoloCorso:string,
    descrizione:string,
    settoreProfessionale:string,        
    durata:string,
    elencoIscritti:IPartecipante[],

    aggiungiPartecipante(partecipante:IPartecipante):void
}

interface IAzienda{
    nomeAzienda:string,
    settoreAttivita:string,
    descrizione:string,
    posizioniAperte:string[],
    offriPosizione(partecipante:IPartecipante, posizione:string):void
}

class Partecipante implements IPartecipante{
 
    nome:string;
    cognome:string;
    paeseOriginario:string;
    livelloIstruzione:string;
    competenzeLinguistiche:string;
    AmbitoFormazioneInteresse:string;
    elencoIscritti: any;
    constructor(nome:string, cognome:string, paeseOriginario:string, livelloIstruzione:string, competenzeLinguistiche:string, AmbitoFormazioneInteresse:string){
        this.nome = nome;
        this.cognome = cognome;
        this.paeseOriginario = paeseOriginario;
        this.livelloIstruzione = livelloIstruzione;
        this.competenzeLinguistiche = competenzeLinguistiche;
        this.AmbitoFormazioneInteresse = AmbitoFormazioneInteresse;
    }
   
   
    iscrivitiCorso(corso: ICorso): void {if (corso.settoreProfessionale.toLowerCase===this.AmbitoFormazioneInteresse.toLowerCase)
        {corso.elencoIscritti.push(this);}
}}

class Corso implements ICorso{
    titoloCorso:string;
    descrizione:string;
    settoreProfessionale:string;        
    durata:string;
    elencoIscritti:IPartecipante[];
    constructor(titoloCorso:string, descrizione:string, settoreProfessionale:string, durata:string){
        this.titoloCorso = titoloCorso;
        this.descrizione = descrizione;
        this.settoreProfessionale = settoreProfessionale;
        this.durata = durata;
        this.elencoIscritti = [];
    }    
    aggiungiPartecipante(partecipante: IPartecipante): void {partecipante.iscrivitiCorso(this);}
   
}

class Azienda implements IAzienda{
    nomeAzienda:string;
    settoreAttivita:string;
    descrizione:string;
    posizioniAperte:string[];
    constructor(nomeAzienda:string, settoreAttivita:string, descrizione:string, posizioniAperte:string[]){
        this.nomeAzienda = nomeAzienda;
        this.settoreAttivita = settoreAttivita;
        this.descrizione = descrizione;
        this.posizioniAperte = posizioniAperte;
    }
    offriPosizione(partecipante: IPartecipante, posizione: string): void {if (this.posizioniAperte.includes(posizione)) 
        {console.log(`Posizione offerta a ${partecipante.nome} per la posizione di ${posizione} .`);} 
        else {console.log(`La posizione di ${posizione} non è disponibile .`);}}
}


const partecipante1 = new Partecipante("Mario", "Rossi", "Italia", "Laurea", "Italiano, Inglese", "informatica");    
const partecipante2 = new Partecipante("ali","verdi","senegal","elementare","francese, italiano","falegnameria");
const partecipante3 = new Partecipante("mohamed","muntari","congo","media","francese, italiano","muratore");
const partecipante4 = new Partecipante("ahmed","hassan","egitto","superiore","arabo, italiano","elettricista");

const corso1 = new Corso("muratore", "Corso di formazione per muratori", "Edilizia", "3 mesi");
const corso2 = new Corso("falegnameria", "Corso di formazione per falegnami", "Artigianato", "4 mesi");
const corso3 = new Corso("elettricista", "Corso di formazione per elettricisti", "Elettronica", "5 mesi");  
const corso4 = new Corso("informatica", "Corso di formazione per informatici", "Tecnologia", "6 mesi");

const azienda1 = new Azienda("tech company", "Tecnologia", "Azienda specializzata in soluzioni tecnologiche", ["sviluppatore", "designer"]);
const azienda2 = new Azienda("edilizia srl", "Edilizia", "Azienda specializzata in costruzioni edili", ["muratore", "elettricista"]);
const azienda3 = new Azienda("falegnameria spa", "falegnameria", "Azienda specializzatta nel lavorare il legno", ["falegname"]); 
const azienda4 = new Azienda("impianti sas", "Elettronica", "Azienda specializzata in impianti elettrici", ["elettricista"]); 

azienda1.offriPosizione(partecipante1, "informatica");
azienda2.offriPosizione(partecipante3, "muratore");
azienda3.offriPosizione(partecipante2, "falegname");
azienda4.offriPosizione(partecipante4, "elettricista");        



partecipante1.iscrivitiCorso(corso4);
partecipante2.iscrivitiCorso(corso2);
partecipante3.iscrivitiCorso(corso1);
partecipante4.iscrivitiCorso(corso3);


console.log(corso1.elencoIscritti);
console.log(corso2.elencoIscritti);
console.log(corso3.elencoIscritti);
console.log(corso4.elencoIscritti);




