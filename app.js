// Anul din footer
var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

// Adresa aplicației — toate butoanele „Intră în arenă" duc în aplicație.
// Când setezi app.arenaforagents.com, schimbă doar linia de mai jos.
var APP_URL = "https://arena-arena19.vercel.app";
document.querySelectorAll('.app-link').forEach(function(el){ el.setAttribute('href', APP_URL); });

// Link către Blog — adăugat automat în meniu și footer pe toate paginile.
(function () {
  var here = (location.pathname.split('/').pop() || '').toLowerCase();
  var onBlog = here.indexOf('blog') === 0;
  function addBlogLink(container, active) {
    if (!container) return;
    if (container.querySelector('a[href="blog.html"]')) return; // deja există (paginile de blog îl au deja)
    var a = document.createElement('a');
    a.href = 'blog.html';
    a.textContent = 'Blog';
    if (active) a.className = 'active';
    var contact = container.querySelector('a[href="contact.html"]');
    if (contact) container.insertBefore(a, contact); else container.appendChild(a);
  }
  addBlogLink(document.querySelector('.nav-links'), onBlog);
  addBlogLink(document.querySelector('.foot-nav'), false);
})();
