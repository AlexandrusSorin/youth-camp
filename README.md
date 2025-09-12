# Tabăra Crinul Din Vale – Modificare Proiect și Adăugare pe GitHub

**1️⃣ Clonare proiect de pe GitHub**
Deschizi terminalul din Windows.

Scrii comanda: **git clone https://github.com/username/youth-camp.git**

⚠️ Înlocuiește https://github.com/username/youth-camp.git cu link-ul tău de GitHub.

Intră în folderul proiectului folosind comanda: **cd youth-camp**

Deschide proiectul în VSCode folosind comanda: **code .**

**2️⃣ Structura proiectului**

Proiectul arată așa:

youth-camp/

│

├─ frontend/      ← aplicația React (interfața site-ului)

├─ backend/       ← server.js (logica backend și API-uri)

În folderul **frontend/src/components** găsești componentele site-ului. Fiecare componentă corespunde unei secțiuni din site (ex: Hero, Navbar, Footer).


**3️⃣ Testare locală a aplicației**

Deschide un terminal în VSCode

Intră în folderul frontend: **cd frontend**

Pornește aplicația: **npm start**

Aplicația va fi disponibilă la **http://localhost:3000**

Notă: backend-ul nu va funcționa local pentru trimiterea formularelor, deoarece acestea folosesc variabile din Render.com.

Poți testa doar interfața vizuală și conținutul site-ului.

**4️⃣ Exportarea modificărilor pe GitHub**

După ce ai făcut modificările în componentele din frontend/src/components sau alte fișiere:

1. **Inițializare GitHub - Folosește următoarea comandă într-un terminal din VsCode**

**⚠️ ATENȚIE:** Trebuie să fii în folderul principal **youth-camp**, nu în frontend sau backend!

Dacă terminalul tău curent e în frontend, deschide un nou terminal sau navighează înapoi cu cd .. până ajungi în directorul principal. 

Apoi în folderul principal poți utiliza comanda:

**git init**

**2. Verifică dacă există repository remote setat**

**git remote -v**

Dacă vezi o adresă de GitHub, e in regulă.

Dacă nu există, trebuie să-l adaugi.


**3. Adaugă repository-ul GitHub (dacă nu e setat)**

**git remote add origin https://github.com/username/youth-camp.git**

⚠️ Înlocuiește link-ul cu repository-ul tău real de GitHub.


**4. Verifică statusul modificărilor**

**git status**

Vezi ce fișiere au fost modificate sau adăugate.


**5. Adaugă modificările la commit**

**git add .**

⚠️ . înseamnă „toate fișierele modificate”. Pentru fișiere specifice, înlocuiește cu numele fișierului.


**6. Creează un commit cu mesaj descriptiv**

**git commit -m "Modificări text și componente"**

💡 Sfat: mesajul să fie scurt și descriptiv (ex: „Actualizare text Hero și InfoSection”).


**7. Trimite modificările pe GitHub**

**git push -u origin main**

Dacă folosești alt branch decât main, înlocuiește main cu numele branch-ului.

Opțiunea -u setează origin/main ca branch implicit pentru push-urile viitoare.



**8. Verifică pe GitHub**

Deschide repository-ul pe GitHub.

Confirmă că apare commit-ul tău și modificările sunt vizibile. 

Ar trebui în câteva minute să se actualizeze automat și pe Vercel.



**5️⃣ Modificări ale componentelor**

1. **Navbar.js - Această componentă definește bara de navigare principală a aplicației.**  

Componenta `Navbar` conține:

**- Logo-ul:** textul "Tabăra Crinul Din Vale" (se poate modifica în `<h1>`).

**- Lista de link-uri:** definită într-un array din cod.

**- Meniu mobil**


**2. Hero.js - Partea de header a site-ului**

**3. InfoSection.js - Secțiunea cu notă pentru participanți**

**4. Rules.js - Secțiunea cu reguli**

**5. PackingList.js - Secțiunea cu lista de bagaje**

**6. Payment.js - Secțiunea cu metodele de plată acceptate**

**7. Location.js - Secțiunea cu locația**

**8. Donations.js - Secțiunea cu donații**

**9. RegistrationForm.js - Secțiunea pentru formular**

**10. Footer.js - Partea de jos a site-ului**

