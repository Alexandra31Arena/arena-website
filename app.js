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

// Link catre Politica de confidentialitate - adaugat automat in footer pe toate paginile.
(function () {
  var foot = document.querySelector('.foot-nav');
  if (!foot) return;
  if (foot.querySelector('a[href="confidentialitate.html"]')) return;
  var a = document.createElement('a');
  a.href = 'confidentialitate.html';
  a.textContent = 'Confidențialitate';
  foot.appendChild(a);
})();
/* ===== Date structurate pentru Google (JSON-LD) ===== */
(function () {
  var BASE = 'https://www.arenaforagents.com/';
  var page = (location.pathname.split('/').pop() || '').toLowerCase();
  if (!page || page === 'index.html') page = 'index.html';

  var ORG_ID  = BASE + '#organizatie';
  var SITE_ID = BASE + '#website';
  var APP_ID  = BASE + '#aplicatie';

  var org = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'ARENA',
    alternateName: 'ARENA Training',
    url: BASE,
    description: 'Platformă de antrenament pentru agenți imobiliari: conversații simulate cu clienți, de la primul apel telefonic până la semnătura pe exclusivitate.',
    parentOrganization: { '@type': 'Organization', name: 'B-North' },
    email: 'contact@arenaforagents.com',
    telephone: '+40774004974',
    areaServed: { '@type': 'Country', name: 'România' },
    sameAs: [
      'https://www.instagram.com/arena_training/',
      'https://www.facebook.com/profile.php?id=1271777609354068'
    ],
    contactPoint: [{
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'contact@arenaforagents.com',
      telephone: '+40774004974',
      availableLanguage: ['ro']
    }]
  };

  var site = {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: BASE,
    name: 'ARENA',
    inLanguage: 'ro-RO',
    publisher: { '@id': ORG_ID }
  };

  var app = {
    '@type': 'SoftwareApplication',
    '@id': APP_ID,
    name: 'ARENA',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web — browser pe telefon și laptop',
    url: BASE,
    inLanguage: 'ro-RO',
    publisher: { '@id': ORG_ID },
    description: 'Simulator de conversații pentru agenți imobiliari. Exersezi apeluri și întâlniri cu clienți simulați, cu ghidare în timp real și verdict la final.',
    featureList: [
      'Coach în timp real, în timpul conversației',
      'Personaje realiste, cu emoții și obiecții',
      'Feedback și verdict după fiecare întâlnire',
      'Progres măsurabil: autoritate, descoperire, preț, închidere',
      'Conversații în limba română',
      'Funcționează pe telefon și pe laptop'
    ]
  };

  var pagini = {
    'index.html': { tip: 'WebPage', crumb: null,
      nume: 'ARENA · Antrenament pentru agenți imobiliari',
      desc: 'Platformă de antrenament pentru agenți imobiliari: exersezi conversații reale cu clienți, de la primul apel până la semnătura pe exclusivitate.' },
    'ce-este.html': { tip: 'WebPage', crumb: 'Ce este ARENA',
      nume: 'Ce este ARENA',
      desc: 'ARENA este un simulator de conversații pentru agenți imobiliari: exersezi întâlniri reale cu clienți simulați, într-un spațiu sigur, până când răspunsurile corecte devin reflex.' },
    'niveluri.html': { tip: 'WebPage', crumb: 'Niveluri',
      nume: 'Nivelurile ARENA',
      desc: 'Nivelul 1 — apelul telefonic cu 15 clienți. Nivelul 2 — întâlnirea față în față cu 9 personaje, de la turul casei la negocierea prețului și semnătura pe exclusivitate.' },
    'cum-functioneaza.html': { tip: 'WebPage', crumb: 'Cum funcționează',
      nume: 'Cum funcționează ARENA',
      desc: 'Alegi clientul, porți conversația liber, coach-ul te ghidează în timp real, iar la final primești un verdict onest — ce ai făcut bine și ce exersezi data viitoare.' },
    'pentru-cine.html': { tip: 'WebPage', crumb: 'Pentru cine',
      nume: 'Pentru cine este ARENA',
      desc: 'Pentru agenți la început de drum, agenți cu experiență, agenții și echipe care antrenează după un standard comun, și traineri care evaluează pe criterii clare.' },
    'pentru-agentii.html': { tip: 'WebPage', crumb: 'Pentru agenții',
      nume: 'Pentru agenții imobiliare · Panoul de manager',
      desc: 'Fiecare agent are un profil, iar managerul are un panou din care vede progresul echipei: scoruri pe competențe, cine e gata de teren și recomandări de antrenament.' },
    'etica-si-siguranta.html': { tip: 'WebPage', crumb: 'Etică și siguranță',
      nume: 'Etică și siguranță',
      desc: 'Respect pentru om, preț onest, transparență, confidențialitate și siguranța proprietarului. ARENA te antrenează să lucrezi corect, nu doar convingător.' },
    'contact.html': { tip: 'ContactPage', crumb: 'Contact',
      nume: 'Contact ARENA',
      desc: 'Email contact@arenaforagents.com, telefon +40 774 004 974, Instagram @arena_training și Facebook ARENA Training.' },
    'confidentialitate.html': { tip: 'WebPage', crumb: 'Confidențialitate',
      nume: 'Politica de confidențialitate',
      desc: 'Ce date personale colectăm, cum le folosim, cu cine le partajăm și ce drepturi ai conform GDPR.' },
    'blog.html': { tip: 'Blog', crumb: 'Blog',
      nume: 'Blog ARENA',
      desc: 'Ghiduri practice pentru agenți imobiliari: obiecții, exclusivitate, scriptul apelului, turul casei și comisionul — explicate pe pași, cu exemple.' },
    'blog-e-prea-scump.html': { tip: 'BlogPosting', crumb: 'Blog',
      nume: 'De ce „e prea scump” nu e despre preț — și ce să răspunzi',
      desc: '„E prea scump” e cea mai frecventă obiecție în imobiliare și aproape niciodată nu e despre preț. Cele patru înțelesuri ascunse și replicile exacte cu care răspunzi, fără să scazi comisionul.',
      data: '2026-08-10' },
    'blog-exclusivitate-3-straturi.html': { tip: 'BlogPosting', crumb: 'Blog',
      nume: 'Exclusivitatea în 3 straturi: cum răspunzi la „dau la mai multe agenții”',
      desc: '„Dau la mai multe agenții” pare o idee bună pentru proprietar, dar de fapt lucrează împotriva lui. Cum răspunzi în trei straturi, fără să pară că îți aperi doar comisionul.',
      data: '2026-08-10' },
    'blog-scriptul-apelului.html': { tip: 'BlogPosting', crumb: 'Blog',
      nume: 'Scriptul apelului: cum treci de primele 10 secunde',
      desc: 'Primele 10 secunde ale unui apel decid dacă proprietarul închide sau te ascultă. Nu contează pitch-ul, ci cum scazi tensiunea. Structura unui apel care ajunge la întâlnire.',
      data: '2026-08-18' },
    'blog-turul-casei.html': { tip: 'BlogPosting', crumb: 'Blog',
      nume: 'Turul casei: ce observi în tăcere și ce spui cu voce tare',
      desc: 'În turul casei aduni informația care îți dă putere la preț. Ce observi în tăcere, ce spui cu voce tare și de ce complimentele te costă la negociere.',
      data: '2026-08-22' }
  };

  var p = pagini[page];
  if (!p) return;

  var url = BASE + (page === 'index.html' ? '' : page);
  var graph = [org, site, app];

  if (p.tip === 'BlogPosting') {
    graph.push({
      '@type': 'BlogPosting',
      '@id': url + '#articol',
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      url: url,
      headline: p.nume,
      description: p.desc,
      inLanguage: 'ro-RO',
      datePublished: p.data,
      dateModified: p.data,
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      isPartOf: { '@type': 'Blog', '@id': BASE + 'blog.html#blog', name: 'Blog ARENA' },
      about: { '@id': APP_ID }
    });
  } else {
    graph.push({
      '@type': p.tip,
      '@id': url + '#pagina',
      url: url,
      name: p.nume,
      description: p.desc,
      inLanguage: 'ro-RO',
      isPartOf: { '@id': SITE_ID },
      about: { '@id': APP_ID }
    });
  }

  var crumbs = [{ '@type': 'ListItem', position: 1, name: 'ARENA', item: BASE }];
  if (p.crumb) {
    if (p.tip === 'BlogPosting') {
      crumbs.push({ '@type': 'ListItem', position: 2, name: 'Blog', item: BASE + 'blog.html' });
      crumbs.push({ '@type': 'ListItem', position: 3, name: p.nume, item: url });
    } else {
      crumbs.push({ '@type': 'ListItem', position: 2, name: p.crumb, item: url });
    }
  }
  graph.push({ '@type': 'BreadcrumbList', '@id': url + '#breadcrumb', itemListElement: crumbs });

  if (page === 'niveluri.html') {
    var curs = function (nume, desc) {
      return {
        '@type': 'Course',
        name: nume,
        description: desc,
        url: url,
        inLanguage: 'ro-RO',
        provider: { '@id': ORG_ID },
        teaches: desc,
        hasCourseInstance: [{ '@type': 'CourseInstance', courseMode: 'online', inLanguage: 'ro-RO' }]
      };
    };
    graph.push({
      '@type': 'ItemList',
      '@id': url + '#niveluri',
      name: 'Nivelurile ARENA',
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: curs('Nivel 1 · Apelul telefonic', 'Exersezi apelul telefonic cu 15 clienți simulați, de la cel mai ușor până la cel mai dificil, până obții întâlnirea.') },
        { '@type': 'ListItem', position: 2, item: curs('Nivel 2 · Întâlnirea față în față', 'Exersezi turul casei, negocierea prețului și semnătura pe exclusivitate cu 9 personaje, fiecare cu povestea și obiecțiile lui.') }
      ]
    });
  }

  if (page === 'contact.html') {
    var intrebari = [
      ['Am nevoie de experiență ca să încep?', 'Nu. ARENA e construită tocmai pentru a te aduce de la zero la prima întâlnire reală cu încredere. Nivelul 1 pornește de la cele mai simple apeluri.'],
      ['Pe ce dispozitiv funcționează?', 'Pe telefon și pe laptop, direct din browser. Te antrenezi oricând ai 10 minute libere.'],
      ['E în limba română?', 'Da. Toate conversațiile, coach-ul și feedback-ul sunt în română — limba în care lucrezi cu clienții tăi.'],
      ['Pot antrena o echipă întreagă?', 'Da. Scrie-ne la contact@arenaforagents.com și îți arătăm cum funcționează pentru agenții și echipe.']
    ];
    graph.push({
      '@type': 'FAQPage',
      '@id': url + '#faq',
      mainEntity: intrebari.map(function (q) {
        return { '@type': 'Question', name: q[0], acceptedAnswer: { '@type': 'Answer', text: q[1] } };
      })
    });
  }

  var s = document.createElement('script');
  s.type = 'application/ld+json';
  s.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
  document.head.appendChild(s);
})();

/* ===== SEO meta injection (canonical, OG image, Twitter, favicon, theme) ===== */
(function () {
  try {
    var head = document.head;
    var origin = 'https://www.arenaforagents.com';
    var url = origin + location.pathname;
    var img = origin + '/og-image.jpg';
    function ensureMeta(attr, key, val) {
      if (head.querySelector('meta[' + attr + '="' + key + '"]')) return;
      var m = document.createElement('meta');
      m.setAttribute(attr, key);
      m.setAttribute('content', val);
      head.appendChild(m);
    }
    if (!head.querySelector('link[rel="canonical"]')) {
      var c = document.createElement('link'); c.rel = 'canonical'; c.href = url; head.appendChild(c);
    }
    if (!head.querySelector('link[rel~="icon"]')) {
      var f = document.createElement('link'); f.rel = 'icon'; f.type = 'image/svg+xml'; f.href = '/favicon.svg'; head.appendChild(f);
    }
    var title = document.title;
    var desc = (head.querySelector('meta[name="description"]') || {}).content || '';
    ensureMeta('property', 'og:url', url);
    ensureMeta('property', 'og:site_name', 'ARENA');
    ensureMeta('property', 'og:image', img);
    ensureMeta('name', 'theme-color', '#0e1626');
    ensureMeta('name', 'twitter:card', 'summary_large_image');
    ensureMeta('name', 'twitter:title', title);
    ensureMeta('name', 'twitter:description', desc);
    ensureMeta('name', 'twitter:image', img);
  } catch (e) {}
})();

