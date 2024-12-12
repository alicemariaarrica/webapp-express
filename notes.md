Esercizio Ciao è ora di mettere alla prova le vostre conoscenze iniziando a costruire la vostra prima app completa! Il nostro obbiettivo é creare una semplice app gestionale per inserire film e recensioni pubbliche. Ecco i primi step: Pensate alla struttura del database che vorreste creare e disegnate il diagramma ER Utilizzando il file in allegato, creiamo un database con MySQL Workbench (importandolo dal file) Creiamo una nuova applicazione Express Colleghiamo l’app al db e verifichiamo che tutto funzioni Prepariamo una rotta index per ottenere la lista dei film Prepariamo una rotta show per ottenere i dettagli di un singolo film e le sue recensioni Bonus Inserire i dati di connessione al database come variabili d’ambiente Inserire le vostre API in controller Inserire le vostre rotte in un router Inserire un middleware per le rotte inesistenti Inserire un middleware per la gestione errori

movies table
id int(11) NOT NULL AUTO_INCREMENT,
title varchar(255) NOT NULL,
director varchar(255) NOT NULL,
genre varchar(255) DEFAULT NULL,
release_year year(4) DEFAULT NULL,
abstract text DEFAULT NULL,
image varchar(255) DEFAULT NULL,
created_at timestamp NOT NULL DEFAULT current_timestamp(),
updated_at timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE


reviews table
id int(11) NOT NULL AUTO_INCREMENT,
movie_id int(11) NOT NULL,
name varchar(255) NOT NULL,
vote tinyint(4) NOT NULL CHECK (vote between 1 and 5),
text text DEFAULT NULL,
created_at timestamp NOT NULL DEFAULT current_timestamp(),
updated_at timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE