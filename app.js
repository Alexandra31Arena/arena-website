// Anul din footer
var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

// Adresa aplicației — toate butoanele „Intră în arenă" duc în aplicație.
// Când setezi app.arenaforagents.com, schimbă doar linia de mai jos.
var APP_URL = "https://arena-orpin-two.vercel.app";
document.querySelectorAll('.app-link').forEach(function(el){ el.setAttribute('href', APP_URL); });
