# ARENA — Website (multi-pagină)

Site-ul de prezentare ARENA. Acum are **mai multe pagini**, fiecare cu conținutul ei:

| Fișier | Pagină |
|---|---|
| `index.html` | Acasă |
| `ce-este.html` | Ce este ARENA |
| `niveluri.html` | Nivelurile (+ personaje) |
| `cum-functioneaza.html` | Cum funcționează (+ mockup-uri din aplicație) |
| `pentru-cine.html` | Pentru cine |
| `pentru-agentii.html` | Pentru agenții (panoul de manager) |
| `etica-si-siguranta.html` | Etică și siguranță |
| `contact.html` | Contact (+ întrebări frecvente) |
| `style.css` | Design-ul comun (toate paginile) |
| `app.js` | Anul din footer + linkul „Intră în arenă" |

Design-ul e comun (un singur `style.css`), așa că toate paginile arată la fel și se modifică dintr-un loc.

## Ce e deja setat
- **Butoanele „Intră în arenă"** duc în aplicație (`https://arena-orpin-two.vercel.app`). Când setezi `app.arenaforagents.com`, schimbi **o singură linie** în `app.js` (`APP_URL`).
- **Email:** `contact@arenaforagents.com`
- **Social în footer:** Instagram `@arena_training` și Facebook (pagina ARENA Training).
  - Notă: linkul de Facebook folosește ID-ul paginii. Dacă îți setezi un nume scurt (ex. `facebook.com/ARENATraining`), înlocuiește-l în footer pentru un link mai curat.
- **Poze din aplicație:** sunt recreate în design (conversații, coach, turul camerelor, verdictul) — nu depind de fișiere externe. Dacă vrei capturi reale, putem înlocui mockup-urile cu screenshot-uri.

## Cum îl pui online (înlocuiește site-ul actual)

Site-ul e pe Vercel, din repo-ul GitHub `arena-website`.

1. Intră în repo-ul `arena-website` pe GitHub → **Add file → Upload files**.
2. Trage **toate** fișierele din acest folder (index.html, ce-este.html, niveluri.html, cum-functioneaza.html, pentru-cine.html, contact.html, style.css, app.js, README.md). Confirmă înlocuirea vechiului `index.html`.
3. **Commit**. Vercel redeployează automat în ~1 minut. Gata — `arenaforagents.com` arată noul site.

⚠️ Important: încarcă **toate** fișierele, nu doar `index.html` — altfel lipsește design-ul (`style.css`).
