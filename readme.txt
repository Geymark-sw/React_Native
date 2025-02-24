testnative è un'applicazione mobile sviluppata con React Native utilizzando Expo per la gestione e il deployment. L'app include navigazione tra schermate, gestione delle chiamate API tramite Axios e utilizza alcune librerie avanzate per la gestione dell'interfaccia utente e delle animazioni.

Tecnologie Utilizzate

React Native: Framework per lo sviluppo di applicazioni mobile.

Expo: Strumento per semplificare lo sviluppo e la distribuzione.

React Navigation: Gestione della navigazione tra schermate.

Axios: Effettuare richieste HTTP verso API esterne.

React Native Gesture Handler & Reanimated: Per migliorare le animazioni e la gestione dei gesti.

Installazione

Per eseguire il progetto in locale, assicurati di avere Node.js installato e poi esegui:

npm install

Avvio del progetto

Per avviare l'applicazione su Expo:

npm start

Oppure, per eseguire su una piattaforma specifica:

npm run android   # Per Android
npm run ios       # Per iOS
npm run web       # Per il Web

Struttura del Progetto

App.js: Punto di ingresso principale dell'app.

index.js: File di inizializzazione dell'app.

package.json: Gestione delle dipendenze e degli script.

assets/: Contiene immagini e icone dell'app.

.gitignore: File per escludere determinati file dal repository.