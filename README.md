# incluDO

## Gestione Corsi, Partecipanti e Aziende

Questo progetto prevede lo sviluppo di un sistema in TypeScript che modella la struttura operativa di una scuola di formazione professionale per migranti,
concentrandosi sulle interazioni tra migranti, corsi di formazione e aziende partner

## Classi e Interfacce

### Partecipante
- **Proprietà:** nome, cognome, paeseOriginario, livelloIstruzione, competenzeLinguistiche, AmbitoFormazioneInteresse
- **Metodi:** 
  - `iscrivitiCorso(corso: Corso)` – iscrive il partecipante a un corso

### Corso
- **Proprietà:** titoloCorso, descrizione, settoreProfessionale, durata
- **Metodi:** 
  - Chiama il metodo iscrivitiCorso

### Azienda
- **Proprietà:** nomeAzienda, settoreAttivita, descrizion, posizioniAperte
- **Metodi:** 
  - `offriPosizione(partecipante: Partecipante, posizione: string)` – offre una posizione a un partecipante dopo aver controllato se è disponibile


in fondo al progetto c'è un esempio di utilizzo con instanziamenti di oggetti evari console.log per testare il funzionamento


