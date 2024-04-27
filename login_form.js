document.addEventListener('DOMContentLoaded', function() {
    // Aggiungi un listener per l'evento di submit al form
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Impedisci al form di sottomettersi
  
      // Recupera i valori inseriti nei campi username, password e nome
      const username = document.querySelector('#username').value;
      const password = document.querySelector('#password').value;
  
      // Simula la validazione del login (sostituiscila con la tua logica di autenticazione)
      if (username === 'luca' && password === 'password') {
        // Se il login è riuscito, reindirizza l'utente alla homepage
        window.location.href = './index.html'; // Sostituisci 'homepage.html' con l'URL della tua homepage
  
        // Mostra un alert di conferma con il messaggio di benvenuto
        alert('Buongiorno signor ' + username + ', benvenuto nel BasketWorld!');
      } else {
        // Se il login non è riuscito, mostra un messaggio di errore
        alert('Incorrect username or password.');
      }
    });
  });
  