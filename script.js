var Partecipante = /** @class */ (function () {
    function Partecipante(nome, cognome, paeseOriginario, livelloIstruzione, competenzeLinguistiche, AmbitoFormazioneInteresse) {
        this.nome = nome;
        this.cognome = cognome;
        this.paeseOriginario = paeseOriginario;
        this.livelloIstruzione = livelloIstruzione;
        this.competenzeLinguistiche = competenzeLinguistiche;
        this.AmbitoFormazioneInteresse = AmbitoFormazioneInteresse;
    }
    Partecipante.prototype.iscrivitiCorso = function (corso) {
        if (corso.settoreProfessionale.toLowerCase === this.AmbitoFormazioneInteresse.toLowerCase) {
            corso.elencoIscritti.push(this);
        }
    };
    return Partecipante;
}());
var Corso = /** @class */ (function () {
    function Corso(titoloCorso, descrizione, settoreProfessionale, durata) {
        this.titoloCorso = titoloCorso;
        this.descrizione = descrizione;
        this.settoreProfessionale = settoreProfessionale;
        this.durata = durata;
        this.elencoIscritti = [];
    }
    Corso.prototype.aggiungiPartecipante = function (partecipante) { partecipante.iscrivitiCorso(this); };
    return Corso;
}());
var Azienda = /** @class */ (function () {
    function Azienda(nomeAzienda, settoreAttivita, descrizione, posizioniAperte) {
        this.nomeAzienda = nomeAzienda;
        this.settoreAttivita = settoreAttivita;
        this.descrizione = descrizione;
        this.posizioniAperte = posizioniAperte;
    }
    Azienda.prototype.offriPosizione = function (partecipante, posizione) {
        if (this.posizioniAperte.includes(posizione)) {
            console.log("Posizione offerta a ".concat(partecipante.nome, " per la posizione di ").concat(posizione, " ."));
        }
        else {
            console.log("La posizione di ".concat(posizione, " non \u00E8 disponibile ."));
        }
    };
    return Azienda;
}());
var partecipante1 = new Partecipante("Mario", "Rossi", "Italia", "Laurea", "Italiano, Inglese", "informatica");
var partecipante2 = new Partecipante("ali", "verdi", "senegal", "elementare", "francese, italiano", "falegnameria");
var partecipante3 = new Partecipante("mohamed", "muntari", "congo", "media", "francese, italiano", "muratore");
var partecipante4 = new Partecipante("ahmed", "hassan", "egitto", "superiore", "arabo, italiano", "elettricista");
var corso1 = new Corso("muratore", "Corso di formazione per muratori", "Edilizia", "3 mesi");
var corso2 = new Corso("falegnameria", "Corso di formazione per falegnami", "Artigianato", "4 mesi");
var corso3 = new Corso("elettricista", "Corso di formazione per elettricisti", "Elettronica", "5 mesi");
var corso4 = new Corso("informatica", "Corso di formazione per informatici", "Tecnologia", "6 mesi");
var azienda1 = new Azienda("tech company", "Tecnologia", "Azienda specializzata in soluzioni tecnologiche", ["sviluppatore", "designer"]);
var azienda2 = new Azienda("edilizia srl", "Edilizia", "Azienda specializzata in costruzioni edili", ["muratore", "elettricista"]);
var azienda3 = new Azienda("falegnameria spa", "falegnameria", "Azienda specializzatta nel lavorare il legno", ["falegname"]);
var azienda4 = new Azienda("impianti sas", "Elettronica", "Azienda specializzata in impianti elettrici", ["elettricista"]);
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
