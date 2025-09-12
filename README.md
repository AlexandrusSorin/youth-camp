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





7\. Trimite modificările pe GitHub



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



// Importăm hooks din React

// useState -> pentru a gestiona starea (true/false dacă secțiunea e vizibilă)

// useEffect -> pentru a rula o acțiune când componenta e montată (animăm secțiunea la încărcare)

import { useState, useEffect } from 'react';



function Hero() {

&nbsp; // Definim o stare: inițial secțiunea NU e vizibilă

&nbsp; const \[isVisible, setIsVisible] = useState(false);



&nbsp; // Când componenta se încarcă, setăm isVisible = true pentru a porni animația

&nbsp; useEffect(() => {

&nbsp;   setIsVisible(true);

&nbsp; }, \[]);



&nbsp; return (

&nbsp;   <section className="relative h-\[75vh] md:h-\[65vh] mt-16 overflow-hidden">

&nbsp;     

&nbsp;     {/\* Imaginea de fundal (modifică URL-ul pentru altă poză) \*/}

&nbsp;     <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"

&nbsp;           style={{ backgroundImage: "url('/header-3.png')" }}></div>



&nbsp;     {/\* Overlay negru semi-transparent peste imagine \*/}

&nbsp;     <div className="absolute inset-0 bg-black/80"></div>

&nbsp;   



&nbsp;     {/\* Conținutul principal \*/}

&nbsp;     <div className="relative z-10 h-full flex items-center justify-center text-white text-center px-6">

&nbsp;       

&nbsp;       {/\* Wrapper cu animație: devine vizibil doar după ce pagina se încarcă \*/}

&nbsp;       <div className={`max-w-5xl transition-all duration-1000 ${

&nbsp;         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'

&nbsp;       }`}>

&nbsp;         

&nbsp;         {/\* Badge mic deasupra titlului (poți schimba textul aici) \*/}

&nbsp;         <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-10 shadow-2xl">

&nbsp;           <span className="text-sm font-medium bg-white bg-clip-text text-transparent">

&nbsp;             Ediția 2025 • Înscrieri Deschise

&nbsp;           </span>

&nbsp;         </div>

&nbsp;         

&nbsp;         {/\* Titlu principal (poți schimba textul "Tabără de Tineret") \*/}

&nbsp;         <div className="mb-8">

&nbsp;           <h1 className="text-6xl md:text-7xl font-black mb-4 leading-none">

&nbsp;             <span className="block bg-gradient-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent drop-shadow-2xl">

&nbsp;               Tabără de

&nbsp;             </span>

&nbsp;             <span className="block bg-gradient-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent">

&nbsp;               Tineret

&nbsp;             </span>

&nbsp;           </h1>

&nbsp;         </div>

&nbsp;         

&nbsp;         {/\* Subtitlu / motto (modifică textul din <p>) \*/}

&nbsp;         <div className="relative mb-12">

&nbsp;           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl"></div>

&nbsp;           <p className="relative text-xl md:text-2xl font-light text-gray-100 italic">

&nbsp;             „Generația care duce mesajul mai departe"

&nbsp;           </p>

&nbsp;         </div>

&nbsp;         

&nbsp;         {/\* Butoane principale \*/}

&nbsp;         <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

&nbsp;           

&nbsp;           {/\* Buton pentru înscriere (poți schimba textul și linkul din href) \*/}

&nbsp;           <a href="#înscriere" className="group relative overflow-hidden bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-600 hover:to-yellow-600 text-white font-medium tracking-wide text-md px-7 py-5 rounded-2xl transition-all duration-500 transform hover:scale-105 ">

&nbsp;             <span className="relative flex items-center space-x-3">

&nbsp;               <span>Înscrie-te acum</span>

&nbsp;               <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">

&nbsp;                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />

&nbsp;               </svg>

&nbsp;             </span>

&nbsp;           </a>



&nbsp;           {/\* Buton pentru informații (poți schimba textul și linkul din href) \*/}

&nbsp;           <a href="#informații" className="group px-7 py-5 border-2 border-white/20 hover:border-white/40 text-white rounded-2xl hover:bg-white/5 transition-all duration-300 backdrop-blur-xl font-medium tracking-wide text-md">

&nbsp;             <span className="flex items-center space-x-2">

&nbsp;               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">

&nbsp;                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />

&nbsp;               </svg>

&nbsp;               <span>Află mai multe</span>

&nbsp;             </span>

&nbsp;           </a>



&nbsp;         </div>

&nbsp;       </div>

&nbsp;     </div>

&nbsp;   </section>

&nbsp; );

}



export default Hero;





**3. InfoSection.js - Secțiunea cu notă pentru participanți**



function InfoSection() {

&nbsp; return (

&nbsp;   // Secțiunea "Informații" (id-ul este folosit pentru linkurile din Navbar: href="#informații")

&nbsp;   <section id="informații" className="py-20 px-6">

&nbsp;     <div className="max-w-6xl mx-auto">

&nbsp;       

&nbsp;       {/\* Header-ul secțiunii \*/}

&nbsp;       <div className="text-center mb-16">

&nbsp;         

&nbsp;         {/\* Badge mic deasupra titlului (poți schimba textul "Despre Tabără") \*/}

&nbsp;         <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-amber-200/30">

&nbsp;           <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>

&nbsp;           <span className="text-\[#2C1810] font-semibold text-sm uppercase tracking-wider">

&nbsp;             Despre Tabără

&nbsp;           </span>

&nbsp;           <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse"></div>

&nbsp;         </div>

&nbsp;         

&nbsp;         {/\* Titlu principal al secțiunii (poți schimba textul "Notă pentru participanți") \*/}

&nbsp;         <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-\[#1A0F0A] bg-clip-text text-transparent leading-snug md:leading-snug">

&nbsp;           Notă pentru participanți

&nbsp;         </h2>

&nbsp;       </div>

&nbsp;       

&nbsp;       {/\* Conținutul secțiunii \*/}

&nbsp;       <div className="text-center">

&nbsp;         <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 p-8 md:p-14 relative overflow-hidden">

&nbsp;           

&nbsp;           {/\* Background decorativ cu blur (bule colorate) \*/}

&nbsp;           <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/8 to-indigo-400/8 rounded-full blur-3xl"></div>

&nbsp;           <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/8 to-blue-400/8 rounded-full blur-2xl"></div>

&nbsp;           

&nbsp;           {/\* Text principal \*/}

&nbsp;           <div className="relative z-10 text-left">

&nbsp;             

&nbsp;             {/\* Primul paragraf (poți schimba mesajul liber) \*/}

&nbsp;             <p className="text-lg md:text-xl text-justify text-\[#2C1810] leading-relaxed mb-8">

&nbsp;               Suntem bucuroși să organizăm din nou tabăra de tineret. Este răspunsul rugăciunilor și dorințelor voastre. Dumnezeu a pus o povară în inimile noastre pentru tineretul din România. Voi sunteți noua generație care trebuie să ducă acest mesaj mai departe. Desigur, timpurile ne spun că plecarea Miresei este foarte aproape, dar, dacă cumva Domnul zăbovește, vrem ca „generația născută în pustie” să țină mesajul sus și să cucerească țara promisă.

&nbsp;             </p>

&nbsp;             

&nbsp;             {/\* Al doilea paragraf \*/}

&nbsp;             <p className="text-lg md:text-xl text-justify text-\[#2C1810] leading-relaxed mb-8">

&nbsp;               Vă mulțumim pentru tot sprijinul acordat și vă rugăm să țineți această tabără și pe toți participanții în rugăciune.

&nbsp;             </p>

&nbsp;             

&nbsp;             {/\* Caseta de avertisment (IMPORTANT) \*/}

&nbsp;             <div className="mt-12 text-center">

&nbsp;               <div className="inline-block bg-red-50/80 backdrop-blur-sm rounded-2xl p-6 border border-red-200/60 shadow-lg relative overflow-hidden">

&nbsp;                 

&nbsp;                 {/\* Linia colorată de sus \*/}

&nbsp;                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-500 rounded-t-2xl"></div>

&nbsp;                 

&nbsp;                 {/\* Conținutul casetei de avertisment \*/}

&nbsp;                 <div className="flex items-start gap-3 text-left">

&nbsp;                   

&nbsp;                   {/\* Icon cu semnul "!" \*/}

&nbsp;                   <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">

&nbsp;                     <span className="text-white text-sm font-bold">!</span>

&nbsp;                   </div>

&nbsp;                   

&nbsp;                   {/\* Textul IMPORTANT (poți modifica mesajul din <p>) \*/}

&nbsp;                   <div>

&nbsp;                     <p className="text-red-700 font-bold mb-1">Important</p>

&nbsp;                     <p className="text-red-600 font-medium leading-relaxed">

&nbsp;                       NU VOM PUTEA FACE RESTITUIRI ALE TAXEI DE TABĂRĂ DUPĂ 31 OCTOMBRIE.

&nbsp;                     </p>

&nbsp;                   </div>

&nbsp;                 </div>

&nbsp;               </div>

&nbsp;             </div>

&nbsp;             {/\* Sfârșit casetă IMPORTANT \*/}

&nbsp;           </div>

&nbsp;         </div>

&nbsp;       </div>



&nbsp;     </div>

&nbsp;   </section>

&nbsp; );

}



export default InfoSection;





**4. Rules.js - Secțiunea cu reguli**

function Rules() {

&nbsp; // Lista de reguli afișate în secțiune

&nbsp; // 👉 Pentru a adăuga o regulă nouă: adaugă un string în array

&nbsp; // 👉 Pentru a șterge o regulă: elimină stringul dorit

&nbsp; // 👉 Pentru a modifica: editează textul direct

&nbsp; const rules = \[

&nbsp;   "Trebuie să ai minimum 13 ani împliniți – nu se vor face excepții.",

&nbsp;   "Vârsta maximă admisă este de 33 de ani.",

&nbsp;   "Fiecare participant la tabără trebuie să fie preînregistrat și să aibă taxa achitată în avans.",

&nbsp;   "Oricine părăsește terenul taberei are obligația de a anunța directorii taberei.",

&nbsp;   "Participanții trebuie să păstreze dormitoarele curate și îngrijite și sunt responsabili pentru orice daună. (Nu ne asumăm răspunderea pentru obiectele uitate.)",

&nbsp;   "Toți trebuie să meargă în dormitoarele repartizate atunci când directorul dă semnalul „Stingerea!”.",

&nbsp;   "Toți sunt obligați să participe la toate serviciile și activitățile.",

&nbsp;   "Nu sunt permise negative (soundtrack-uri) pentru cântări, iar toate cântările speciale trebuie aprobate în prealabil.",

&nbsp;   "Participanții, fie tineri, fie adulți, trebuie să se îmbrace modest, în conformitate cu învățăturile fratelui Branham. Codul vestimentar va fi aplicat strict.",

&nbsp;   "Nu sunt acceptate următoarele articole: maiouri, bluze care lasă buricul la vedere, pantaloni scurți, fuste despicate sau cu tăieturi, precum și orice fel de tutun, etc."

&nbsp; ];



&nbsp; return (

&nbsp;   // Secțiunea "Reguli" (link din Navbar: href="#reguli")

&nbsp;   <section

&nbsp;     id="reguli"

&nbsp;     className="py-20 px-6 bg-gradient-to-br from-\[#F5E6D3] via-white to-\[orange-50] relative overflow-hidden"

&nbsp;   >

&nbsp;     {/\* Elemente decorative cu blur (bule colorate de fundal) \*/}

&nbsp;     <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl -translate-x-36 -translate-y-36"></div>

&nbsp;     <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-yellow-200/30 to-amber-200/30 rounded-full blur-3xl translate-x-48 translate-y-48"></div>

&nbsp;     

&nbsp;     <div className="max-w-6xl mx-auto relative z-10">

&nbsp;       

&nbsp;       {/\* Header-ul secțiunii \*/}

&nbsp;       <div className="text-center mb-16">

&nbsp;         

&nbsp;         {/\* Badge mic deasupra titlului (poți modifica textul "Regulament Tabără") \*/}

&nbsp;         <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-amber-200/30">

&nbsp;           <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>

&nbsp;           <span className="text-\[#2C1810] font-semibold text-sm uppercase tracking-wider">

&nbsp;             Regulament Tabără

&nbsp;           </span>

&nbsp;           <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse"></div>

&nbsp;         </div>

&nbsp;         

&nbsp;         {/\* Titlu secțiune (poți schimba textul "Regulile Noastre") \*/}

&nbsp;         <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-\[#1A0F0A] bg-clip-text text-transparent leading-snug md:leading-snug">

&nbsp;           Regulile Noastre

&nbsp;         </h2>

&nbsp;         

&nbsp;         {/\* Subtitlu / descriere \*/}

&nbsp;         <p className="text-xl text-\[#2C1810] font-light max-w-2xl mx-auto leading-relaxed">

&nbsp;           Pentru o experiență frumoasă și binecuvântată în tabără, vă rugăm să respectați aceste principii importante

&nbsp;         </p>

&nbsp;       </div>



&nbsp;       {/\* Lista de reguli afișate în grid \*/}

&nbsp;       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 cursor-pointer">

&nbsp;         {rules.map((rule, index) => (

&nbsp;           <div 

&nbsp;             key={index} 

&nbsp;             className="group relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-200/50 hover:border-amber-300/80 transform hover:-translate-y-2 hover:scale-\[1.02]"

&nbsp;           >

&nbsp;             {/\* Conținut regulă \*/}

&nbsp;             <div className="flex items-start gap-4">

&nbsp;               {/\* Numărul regulii (automat din index + 1) \*/}

&nbsp;               <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-\[#FF6B3D] to-orange-500 text-white text-sm font-bold rounded-full flex-shrink-0 mt-1">

&nbsp;                 {index + 1}

&nbsp;               </span>

&nbsp;               

&nbsp;               {/\* Textul regulii (modifică direct din array-ul de mai sus) \*/}

&nbsp;               <p className="text-\[#2C1810] text-md leading-relaxed font-medium group-hover:text-amber-900 transition-colors duration-300">

&nbsp;                 {rule}

&nbsp;               </p>

&nbsp;             </div>

&nbsp;             

&nbsp;             {/\* Linie decorativă sub regulă (vizibilă doar la hover) \*/}

&nbsp;             <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

&nbsp;           </div>

&nbsp;         ))}

&nbsp;       </div>

&nbsp;     </div>

&nbsp;   </section>

&nbsp; );

}



export default Rules;





**5. PackingList.js - Secțiunea cu lista de bagaje**

import { LucideShirt, Bath, Book, PenTool, LucideFootprints } from "lucide-react";

import { RiToothLine } from "react-icons/ri";



function PackingList() {

&nbsp; // Lista de obiecte esențiale pentru bagaj

&nbsp; // 👉 Pentru a adăuga un item nou: adaugă un obiect în array cu { item, icon, description }

&nbsp; // 👉 Pentru a șterge un item: elimină obiectul respectiv din array

&nbsp; // 👉 Pentru a modifica: editează textul sau iconița direct

&nbsp; const essentialItems = \[

&nbsp;   { 

&nbsp;     item: "Îmbrăcăminte adecvată vremii", 

&nbsp;     icon: <LucideShirt className="w-8 h-8 text-\[#FE6D34]" />,

&nbsp;     description: "Haine specifice pentru condițiile meteorologice"

&nbsp;   },

&nbsp;   { 

&nbsp;     item: "Articole de igienă personală", 

&nbsp;     icon: <RiToothLine className="w-8 h-8 text-\[#FE6D34]" />,

&nbsp;     description: "Săpun, șampon, pastă de dinți, periuță, etc."

&nbsp;   },

&nbsp;   { 

&nbsp;     item: "Prosoape", 

&nbsp;     icon: <Bath className="w-8 h-8 text-\[#FE6D34]" />,

&nbsp;     description: "Pentru uzul personal zilnic"

&nbsp;   },

&nbsp;   { 

&nbsp;     item: "Sfânta Scriptură", 

&nbsp;     icon: <Book className="w-8 h-8 text-\[#FE6D34]" />,

&nbsp;     description: "Biblia pentru studiul biblic și devoțional"

&nbsp;   },

&nbsp;   { 

&nbsp;     item: "Materiale pentru studiu", 

&nbsp;     icon: <PenTool className="w-8 h-8 text-\[#FE6D34]" />,

&nbsp;     description: "Caiet, stilouri, evidențiator"

&nbsp;   },

&nbsp;   { 

&nbsp;     item: "Încălțăminte confortabilă", 

&nbsp;     icon: <LucideFootprints className="w-8 h-8 text-\[#FE6D34]" />,

&nbsp;     description: "Pentru activități sportive și drumeții"

&nbsp;   }

&nbsp; ];



&nbsp; return (

&nbsp;   // Secțiunea "Bagaj" (link din Navbar: href="#bagaj")

&nbsp;   <section id="bagaj" className="py-24 px-6">

&nbsp;     <div className="max-w-6xl mx-auto">

&nbsp;       

&nbsp;       {/\* Header-ul secțiunii \*/}

&nbsp;       <div className="text-center mb-20">

&nbsp;         {/\* Badge-ul mic deasupra titlului (poți modifica textul "Pregătire Pentru Tabără") \*/}

&nbsp;         <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-amber-200/30">

&nbsp;           <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>

&nbsp;           <span className="text-\[#2C1810] font-semibold text-sm uppercase tracking-wider">

&nbsp;             Pregătire Pentru Tabără

&nbsp;           </span>

&nbsp;           <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse"></div>

&nbsp;         </div>



&nbsp;         {/\* Titlu secțiune \*/}

&nbsp;         <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-\[#1A0F0A] bg-clip-text text-transparent leading-snug md:leading-snug">

&nbsp;           Lista de bagaj esențial

&nbsp;         </h2>



&nbsp;         {/\* Subtitlu / descriere \*/}

&nbsp;         <p className="text-xl text-\[#2C1810] font-light max-w-3xl mx-auto leading-relaxed">

&nbsp;           Pentru o experiență completă și confortabilă la tabăra de tineret, 

&nbsp;           vă rugăm să vă pregătiți conform listei de mai jos

&nbsp;         </p>

&nbsp;       </div>

&nbsp;       

&nbsp;       {/\* Lista de iteme \*/}

&nbsp;       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

&nbsp;         {essentialItems.map((item, index) => (

&nbsp;           <div key={index} className="group h-full">

&nbsp;             <div className="bg-white rounded-3xl cursor-pointer p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-amber-50 hover:border-amber-400 transform hover:-translate-y-3 h-full flex flex-col">

&nbsp;               

&nbsp;               {/\* Conținut item \*/}

&nbsp;               <div className="text-center mb-6">

&nbsp;                 {/\* Iconița itemului (poți înlocui cu alta din lucide-react sau react-icons) \*/}

&nbsp;                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-\[#F5E6D3] to-orange-100 rounded-2xl mb-4">

&nbsp;                   {item.icon}

&nbsp;                 </div>



&nbsp;                 {/\* Titlul itemului \*/}

&nbsp;                 <h3 className="text-xl font-bold text-\[#1A0F0A] mb-3 leading-snug">

&nbsp;                   {item.item}

&nbsp;                 </h3>



&nbsp;                 {/\* Descrierea itemului \*/}

&nbsp;                 <p className="text-\[#2C1810] text-sm leading-relaxed">

&nbsp;                   {item.description}

&nbsp;                 </p>

&nbsp;               </div>



&nbsp;             </div>

&nbsp;           </div>

&nbsp;         ))}

&nbsp;       </div>

&nbsp;     </div>

&nbsp;   </section>

&nbsp; );

}



export default PackingList;





**6. Payment.js - Secțiunea cu metodele de plată acceptate**

import { Users, CalendarDays, CreditCard, Landmark, Smartphone, Wallet } from "lucide-react";



function Payment() {

&nbsp; return (

&nbsp;   // Secțiunea "Plată" (link: href="#plată")

&nbsp;   <section id="plată" className="py-24 px-6 bg-gradient-to-br from-white to-yellow-50">

&nbsp;     <div className="max-w-4xl mx-auto">

&nbsp;       

&nbsp;       {/\* Header \*/}

&nbsp;       <div className="text-center mb-16">

&nbsp;         {/\* Badge mic deasupra titlului \*/}

&nbsp;         <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-amber-200/30">

&nbsp;           <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>

&nbsp;           <span className="text-\[#2C1810] font-semibold text-sm uppercase tracking-wider">

&nbsp;             Informații Financiare

&nbsp;           </span>

&nbsp;           <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse"></div>

&nbsp;         </div>



&nbsp;         {/\* Titlu secțiune \*/}

&nbsp;         <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-\[#1A0F0A] bg-clip-text text-transparent leading-snug md:leading-snug">

&nbsp;           Taxa de participare

&nbsp;         </h2>



&nbsp;         {/\* Subtitlu \*/}

&nbsp;         <p className="text-xl text-\[#2C1810] font-light max-w-2xl mx-auto leading-relaxed">

&nbsp;           Contribuția financiară pentru experiența completă de tabără

&nbsp;         </p>

&nbsp;       </div>

&nbsp;       

&nbsp;       {/\* Card principal cu detalii plată \*/}

&nbsp;       <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">

&nbsp;         

&nbsp;         {/\* Header cu prețul \*/}

&nbsp;         {/\* 👉 aici modifici taxa (320 lei) \*/}

&nbsp;         <div className="bg-gradient-to-br from-\[#FF6B3D] to-orange-400 px-8 py-8 text-center text-white">

&nbsp;           <div className="text-5xl md:text-6xl font-bold mb-4">

&nbsp;             320 <span className="text-4xl">lei</span>

&nbsp;           </div>

&nbsp;           <p className="text-xl opacity-90">Taxa completă de participare</p>

&nbsp;         </div>

&nbsp;         

&nbsp;         {/\* Conținut card \*/}

&nbsp;         <div className="p-8 md:p-12">



&nbsp;           {/\* Secțiunea cu atenționări importante \*/}

&nbsp;           <div className="grid md:grid-cols-2 gap-6 mb-10">



&nbsp;             {/\* Locuri limitate \*/}

&nbsp;             <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">

&nbsp;               <div className="flex items-center mb-4">

&nbsp;                 <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mr-4">

&nbsp;                   <Users className="text-amber-600 w-6 h-6" />

&nbsp;                 </div>

&nbsp;                 <h4 className="font-bold text-amber-800">Locuri limitate</h4>

&nbsp;               </div>

&nbsp;               <p className="text-amber-700 leading-relaxed">

&nbsp;                 Rezervările se fac conform principiului „primul sosit, primul servit". 

&nbsp;                 Vă recomandăm să vă înregistrați cât mai curând posibil.

&nbsp;               </p>

&nbsp;             </div>

&nbsp;             

&nbsp;             {/\* Politica de rambursare \*/}

&nbsp;             {/\* 👉 dacă se schimbă data (31 octombrie), modific-o aici \*/}

&nbsp;             <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-6 border border-red-200">

&nbsp;               <div className="flex items-center mb-4">

&nbsp;                 <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mr-4">

&nbsp;                   <CalendarDays className="text-red-600 w-6 h-6" />

&nbsp;                 </div>

&nbsp;                 <h4 className="font-bold text-red-800">Politica de rambursare</h4>

&nbsp;               </div>

&nbsp;               <p className="text-red-700 leading-relaxed">

&nbsp;                 Nu se acordă rambursări după data de <span className="font-semibold">31 octombrie</span>.

&nbsp;               </p>

&nbsp;             </div>

&nbsp;           </div>

&nbsp;           

&nbsp;           {/\* Modalități de plată \*/}

&nbsp;           <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">

&nbsp;             <div className="flex items-center mb-6">

&nbsp;               <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">

&nbsp;                 <CreditCard className="text-blue-600 w-7 h-7" />

&nbsp;               </div>

&nbsp;               <h4 className="text-2xl font-bold text-slate-800">Modalități de plată acceptate</h4>

&nbsp;             </div>

&nbsp;             

&nbsp;             <div className="grid md:grid-cols-3 gap-6">

&nbsp;               

&nbsp;               {/\* Transfer bancar \*/}

&nbsp;               {/\* 👉 completează IBAN-ul în loc de \[De completat] \*/}

&nbsp;               <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">

&nbsp;                 <div className="flex items-center mb-4">

&nbsp;                   <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">

&nbsp;                     <Landmark className="text-blue-600 w-6 h-6" />

&nbsp;                   </div>

&nbsp;                   <div>

&nbsp;                     <h5 className="font-semibold text-slate-800">Transfer bancar</h5>

&nbsp;                     <p className="text-sm text-slate-600">IBAN</p>

&nbsp;                   </div>

&nbsp;                 </div>

&nbsp;                 <div className="bg-slate-50 rounded-lg p-3">

&nbsp;                   <p className="text-slate-600 text-sm font-mono">\[De completat]</p>

&nbsp;                 </div>

&nbsp;               </div>

&nbsp;               

&nbsp;               {/\* Revolut \*/}

&nbsp;               {/\* 👉 completează numărul de telefon sau user Revolut \*/}

&nbsp;               <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">

&nbsp;                 <div className="flex items-center mb-4">

&nbsp;                   <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">

&nbsp;                     <Smartphone className="text-purple-600 w-6 h-6" />

&nbsp;                   </div>

&nbsp;                   <div>

&nbsp;                     <h5 className="font-semibold text-slate-800">Revolut</h5>

&nbsp;                     <p className="text-sm text-slate-600">Plată digitală</p>

&nbsp;                   </div>

&nbsp;                 </div>

&nbsp;                 <div className="bg-slate-50 rounded-lg p-3">

&nbsp;                   <p className="text-slate-600 text-sm font-mono">\[De completat]</p>

&nbsp;                 </div>

&nbsp;               </div>

&nbsp;               

&nbsp;               {/\* BT Pay \*/}

&nbsp;               {/\* 👉 completează datele necesare pentru BT Pay \*/}

&nbsp;               <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">

&nbsp;                 <div className="flex items-center mb-4">

&nbsp;                   <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">

&nbsp;                     <Wallet className="text-green-600 w-6 h-6" />

&nbsp;                   </div>

&nbsp;                   <div>

&nbsp;                     <h5 className="font-semibold text-slate-800">BT Pay</h5>

&nbsp;                     <p className="text-sm text-slate-600">Plată mobilă</p>

&nbsp;                   </div>

&nbsp;                 </div>

&nbsp;                 <div className="bg-slate-50 rounded-lg p-3">

&nbsp;                   <p className="text-slate-600 text-sm font-mono">\[De completat]</p>

&nbsp;                 </div>

&nbsp;               </div>

&nbsp;             </div>

&nbsp;           </div>

&nbsp;           

&nbsp;           {/\* Contact info \*/}

&nbsp;           {/\* 👉 modifică adresa de email dacă se schimbă responsabilul \*/}

&nbsp;           <div className="mt-10 p-6">

&nbsp;             <div className="flex items-start">

&nbsp;               <div>

&nbsp;                 <h4 className="font-semibold text-gray-800 mb-2">Suport și asistență</h4>

&nbsp;                 <p className="text-gray-700 leading-relaxed">

&nbsp;                   Pentru întrebări privind înregistrarea, plata sau anularea participării, 

&nbsp;                   vă rugăm să ne contactați la adresa:

&nbsp;                 </p>

&nbsp;                 <a 

&nbsp;                   href="mailto:alexdroc74@gmail.com" 

&nbsp;                   className="inline-flex items-center mt-3 px-4 py-2 bg-gradient-to-br from-\[#FF6B3D] to-orange-400 hover:from-\[#FF6B3D] hover:to-orange-600 text-white rounded-lg font-medium transition-colors"

&nbsp;                 >

&nbsp;                   alexdroc74@gmail.com

&nbsp;                 </a>

&nbsp;               </div>

&nbsp;             </div>

&nbsp;           </div>



&nbsp;         </div>

&nbsp;       </div>

&nbsp;     </div>

&nbsp;   </section>

&nbsp; );

}



export default Payment;





**7. Location.js - Secțiunea cu locația**

function Location() {

&nbsp; return (

&nbsp;   <section id="locație" className="py-20 px-6">

&nbsp;     <div className="max-w-7xl mx-auto">

&nbsp;       {/\* === HEADER SECTIUNE === \*/}

&nbsp;       <div className="text-center mb-16">

&nbsp;         {/\* Text mic de deasupra titlului \*/}

&nbsp;         <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-amber-200/30">

&nbsp;           <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>

&nbsp;           {/\* AICI se schimbă subtitlul mic din header \*/}

&nbsp;           <span className="text-\[#2C1810] font-semibold text-sm uppercase tracking-wider">Locație</span>

&nbsp;           <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse"></div>

&nbsp;         </div>



&nbsp;         {/\* AICI se schimbă titlul principal \*/}

&nbsp;         <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-\[#1A0F0A] bg-clip-text text-transparent leading-snug md:leading-snug">

&nbsp;           Locația Taberei

&nbsp;         </h2>



&nbsp;         {/\* AICI se schimbă descrierea scurtă sub titlu \*/}

&nbsp;         <p className="text-lg text-\[#2C1810] font-light max-w-2xl mx-auto leading-relaxed">

&nbsp;           Vino și descoperă frumusețea munților Apuseni într-un cadru perfect pentru creștere spirituală și comuniune creștină

&nbsp;         </p>

&nbsp;       </div>



&nbsp;       {/\* === CARD PRINCIPAL LOCATIE === \*/}

&nbsp;       <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

&nbsp;         <div className="p-8 md:p-12">

&nbsp;           <div className="grid md:grid-cols-2 gap-12 items-start">

&nbsp;             

&nbsp;             {/\* === DETALII LOCAȚIE (partea stângă) === \*/}

&nbsp;             <div className="space-y-8">

&nbsp;               <div className="space-y-6">

&nbsp;                 {/\* Titlul secțiunii Detalii locație \*/}

&nbsp;                 <h4 className="text-2xl font-bold text-\[#2C1810] border-b-2 border-\[#8B4513] pb-3">

&nbsp;                   Detalii despre locație

&nbsp;                 </h4>



&nbsp;                 {/\* AICI se schimbă numele campusului și locația \*/}

&nbsp;                 <div className="flex md:justify-start space-x-4 p-4 md:p-4 px-2 bg-\[#fdf8f3] rounded-xl">

&nbsp;                   <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">

&nbsp;                     {/\* Iconița locație \*/}

&nbsp;                     <svg className="w-6 h-6 text-\[#FE6D34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">

&nbsp;                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />

&nbsp;                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />

&nbsp;                     </svg>

&nbsp;                   </div>

&nbsp;                   <div className="text-\[#2C1810]">

&nbsp;                     <h3 className="text-2xl font-bold">Campus Mărișel</h3>

&nbsp;                     <p className="text-\[#8B4513] text-lg">Munții Apuseni, județul Cluj</p>

&nbsp;                   </div>

&nbsp;                 </div>



&nbsp;                 {/\* AICI se schimbă textele despre cazare și mediu natural \*/}

&nbsp;                 <div className="space-y-4">

&nbsp;                   {/\* Cazare \*/}

&nbsp;                   <div className="flex items-start space-x-4 p-4 rounded-xl">

&nbsp;                     <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">

&nbsp;                       <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">

&nbsp;                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />

&nbsp;                       </svg>

&nbsp;                     </div>

&nbsp;                     <div>

&nbsp;                       <h5 className="font-semibold text-\[#2C1810] mb-1">Cazare confortabilă</h5>

&nbsp;                       <p className="text-\[#8B4513] text-sm">Camere moderne cu facilități complete pentru un sejur plăcut</p>

&nbsp;                     </div>

&nbsp;                   </div>



&nbsp;                   {/\* Mediu natural \*/}

&nbsp;                   <div className="flex items-start space-x-4 p-4 rounded-xl">

&nbsp;                     <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">

&nbsp;                       <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">

&nbsp;                         <path d="M12 2C9 2 7 5 7 8c0 .9.2 1.7.6 2.4C6.1 11.1 5 12.9 5 15c0 2.8 2.2 5 5 5h1v2h2v-2h1c2.8 0 5-2.2 5-5 0-2.1-1.1-3.9-2.6-4.6.4-.7.6-1.5.6-2.4 0-3-2-6-5-6z" />

&nbsp;                       </svg>

&nbsp;                     </div>

&nbsp;                     <div>

&nbsp;                       <h5 className="font-semibold text-\[#2C1810] mb-1">Mediu natural</h5>

&nbsp;                       <p className="text-\[#8B4513] text-sm">Înconjurat de peisaje spectaculoase ale Munților Apuseni</p>

&nbsp;                     </div>

&nbsp;                   </div>

&nbsp;                 </div>

&nbsp;               </div>



&nbsp;               {/\* === TEXT IMPORTANT === \*/}

&nbsp;               <div className="rounded-2xl p-6 bg-red-50 border border-red-200 shadow-sm">

&nbsp;                 <h5 className="font-bold text-\[#2C1810] mb-3 flex items-center">

&nbsp;                   <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">

&nbsp;                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />

&nbsp;                   </svg>

&nbsp;                   Important

&nbsp;                 </h5>

&nbsp;                 {/\* AICI se schimbă mesajul de atenționare \*/}

&nbsp;                 <p className="text-\[#2C1810] text-sm leading-relaxed">

&nbsp;                   Participanții care călătoresc cu trenul sunt rugați să ne contacteze în prealabil.

&nbsp;                 </p>

&nbsp;               </div>

&nbsp;             </div>



&nbsp;             {/\* === HARTA (partea dreaptă) === \*/}

&nbsp;             <div className="space-y-4">

&nbsp;               {/\* Titlu secțiune hartă \*/}

&nbsp;               <h4 className="text-2xl font-bold text-\[#1A0F0A] border-b-2 border-\[#8B4513] pb-3">

&nbsp;                 Harta locației

&nbsp;               </h4>



&nbsp;               {/\* AICI se schimbă harta Google Maps (link embed) \*/}

&nbsp;               <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">

&nbsp;                 <iframe

&nbsp;                   title="Locația Campusului Creștin Mărișel"

&nbsp;                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.1234567890123!2d23.1855882!3d46.699565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47491e408ad19e71%3A0x5ac3f5b1a6fb26a3!2zTcSDcmnImWVs!5e0!3m2!1sro!2sro!4v1234567890123"

&nbsp;                   width="100%"

&nbsp;                   height="400"

&nbsp;                   style={{ border: 0 }}

&nbsp;                   allowFullScreen

&nbsp;                   loading="lazy"

&nbsp;                 ></iframe>

&nbsp;               </div>



&nbsp;               {/\* AICI se schimbă textul mic de sub hartă \*/}

&nbsp;               <p className="text-xs text-gray-500 text-center">

&nbsp;                 Faceți clic pe hartă pentru a deschide Google Maps și a obține indicații de călătorie

&nbsp;               </p>

&nbsp;             </div>

&nbsp;           </div>

&nbsp;         </div>

&nbsp;       </div>

&nbsp;     </div>

&nbsp;   </section>

&nbsp; );

}



export default Location;





**8. Donations.js - Secțiunea cu donații**

function Donations() {

&nbsp; return (

&nbsp;   <section id="donații" className="py-20 px-6">

&nbsp;     <div className="max-w-7xl mx-auto">

&nbsp;       {/\* === HEADER SECTIUNE === \*/}

&nbsp;       <div className="text-center mb-16">

&nbsp;         {/\* Text mic de deasupra titlului \*/}

&nbsp;         <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-amber-200/30">

&nbsp;           <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>

&nbsp;           {/\* AICI se schimbă subtitlul mic (ex: Donații) \*/}

&nbsp;           <span className="text-\[#2C1810] font-semibold text-sm uppercase tracking-wider">Donații</span>

&nbsp;           <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse"></div>

&nbsp;         </div>



&nbsp;         {/\* AICI se schimbă titlul mare al secțiunii \*/}

&nbsp;         <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-\[#1A0F0A] bg-clip-text text-transparent leading-snug md:leading-snug">

&nbsp;           Susține Proiectul 

&nbsp;         </h2>



&nbsp;         {/\* AICI se schimbă descrierea scurtă sub titlu \*/}

&nbsp;         <p className="text-lg text-\[#2C1810] font-light max-w-2xl mx-auto leading-relaxed">

&nbsp;           Dacă dorești să contribui la dezvoltarea și desfășurarea Taberei de Tineret Crinul din Vale, poți face o donație prin transfer bancar.

&nbsp;         </p>

&nbsp;       </div>



&nbsp;       {/\* === CONTINUT PRINCIPAL === \*/}

&nbsp;       <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

&nbsp;         <div className="p-8 md:p-12">

&nbsp;           <div className="grid md:grid-cols-2 gap-12 items-start">

&nbsp;             

&nbsp;             {/\* === DETALII DONATII (stânga) === \*/}

&nbsp;             <div className="space-y-8">

&nbsp;               <div className="space-y-6">

&nbsp;                 {/\* Titlul secțiunii de detalii \*/}

&nbsp;                 <h4 className="text-2xl font-bold text-\[#2C1810] border-b-2 border-\[#8B4513] pb-3">

&nbsp;                   Detalii donație

&nbsp;                 </h4>



&nbsp;                 {/\* Caseta cu informațiile bancare \*/}

&nbsp;                 <div className="flex flex-col space-y-4 p-6 bg-\[#fdf8f3] rounded-xl">

&nbsp;                   {/\* AICI se poate modifica textul introductiv \*/}

&nbsp;                   <p className="text-\[#2C1810] text-lg">

&nbsp;                     Cont bancar pentru donații:

&nbsp;                   </p>



&nbsp;                   {/\* AICI se completează datele bancare \*/}

&nbsp;                   <ul className="text-\[#8B4513] text-sm space-y-1">

&nbsp;                     <li><strong>Banca:</strong> \[De completat]</li>

&nbsp;                     <li><strong>IBAN:</strong> \[De completat]</li>

&nbsp;                     <li><strong>Titular cont:</strong> \[De completat]</li>

&nbsp;                   </ul>

&nbsp;                 </div>

&nbsp;               </div>

&nbsp;             </div>



&nbsp;             {/\* === IMAGINE (dreapta) === \*/}

&nbsp;             <div className="flex items-center justify-center">

&nbsp;               <div className="w-full h-68 bg-orange-100 rounded-2xl flex items-center justify-center shadow-inner overflow-hidden">

&nbsp;                 {/\* AICI se schimbă imaginea (src + alt) \*/}

&nbsp;                 <img 

&nbsp;                   src="/header.png" 

&nbsp;                   alt="Tabăra de Tineret" 

&nbsp;                   className="w-full h-full object-cover rounded-2xl"

&nbsp;                 />

&nbsp;               </div>

&nbsp;             </div>



&nbsp;           </div>

&nbsp;         </div>

&nbsp;       </div>

&nbsp;     </div>

&nbsp;   </section>

&nbsp; );

}



export default Donations;





**9. RegistrationForm.js - Secțiunea pentru formular**

import { useState } from 'react';



function RegistrationForm() {

&nbsp; const \[formData, setFormData] = useState({

&nbsp;   nume: '',

&nbsp;   varsta: '',

&nbsp;   dataNasterii: '',

&nbsp;   email: '',

&nbsp;   telefon: '',

&nbsp;   detalii: ''

&nbsp; });



&nbsp; const \[modalOpen, setModalOpen] = useState(false); 

&nbsp; const \[isLoading, setIsLoading] = useState(false);



&nbsp; // === DE MODIFICAT PENTRU ÎNSCRIERI EPUIZATE ===

&nbsp; const inscrieriEpuizate = false; // pune true când vrei să oprești înscrierile



&nbsp; // URL-ul backend-ului - se adaptează automat pentru producție

&nbsp; const API\_URL = process.env.REACT\_APP\_API\_URL || 'http://localhost:5000';



&nbsp; // === FUNCȚIA DE TRIMITERE A FORMULARULUI ===

&nbsp; const handleSubmit = async (e) => {

&nbsp;   e.preventDefault();

&nbsp;   setIsLoading(true);



&nbsp;   try {

&nbsp;     const response = await fetch(`${API\_URL}/send-email`, {

&nbsp;       method: "POST",

&nbsp;       headers: { 

&nbsp;         "Content-Type": "application/json",

&nbsp;         "Accept": "application/json"

&nbsp;       },

&nbsp;       body: JSON.stringify(formData)

&nbsp;     });



&nbsp;     if (!response.ok) {

&nbsp;       throw new Error(`HTTP error! status: ${response.status}`);

&nbsp;     }



&nbsp;     const result = await response.json();

&nbsp;     if (result.success) {

&nbsp;       setModalOpen(true); // deschide modalul de succes

&nbsp;       // resetează formularul

&nbsp;       setFormData({

&nbsp;         nume: '',

&nbsp;         varsta: '',

&nbsp;         dataNasterii: '',

&nbsp;         email: '',

&nbsp;         telefon: '',

&nbsp;         detalii: ''

&nbsp;       }); 

&nbsp;     } else {

&nbsp;       alert("A apărut o eroare. Încearcă din nou.");

&nbsp;     }

&nbsp;   } catch (error) {

&nbsp;     console.error('Eroare:', error);

&nbsp;     alert(`Eroare de conexiune cu serverul: ${error.message}`);

&nbsp;   } finally {

&nbsp;     setIsLoading(false);

&nbsp;   }

&nbsp; };



&nbsp; // === FUNCȚIA PENTRU ACTUALIZAREA FORMULARULUI ===

&nbsp; const handleChange = (e) => {

&nbsp;   setFormData({

&nbsp;     ...formData,

&nbsp;     \[e.target.name]: e.target.value

&nbsp;   });

&nbsp; };



&nbsp; return (

&nbsp;   <section id="înscriere" className="py-20 px-6">

&nbsp;     <div className="max-w-xl mx-auto">



&nbsp;       {/\* === HEADER SECȚIUNE === \*/}

&nbsp;       <div className="text-center mb-16">

&nbsp;         {/\* Text mic de deasupra titlului \*/}

&nbsp;         <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-amber-200/30">

&nbsp;           <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>

&nbsp;           {/\* Subtitlu mic \*/}

&nbsp;           <span className="text-\[#2C1810] font-semibold text-sm uppercase tracking-wider">Înscriere</span>

&nbsp;           <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse"></div>

&nbsp;         </div>



&nbsp;         {/\* Titlul mare \*/}

&nbsp;         <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-\[#1A0F0A] bg-clip-text text-transparent">

&nbsp;           Formular de Înscriere

&nbsp;         </h2>



&nbsp;         {/\* Descriere scurtă \*/}

&nbsp;         <p className="text-xl text-\[#2C1810] font-light">Completează formularul pentru a te înscrie!</p>

&nbsp;       </div>



&nbsp;       {/\* === CONTAINER FORMULAR === \*/}

&nbsp;       <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-50 relative overflow-hidden">



&nbsp;         {/\* Daca înscrierile sunt epuizate \*/}

&nbsp;         {inscrieriEpuizate ? (

&nbsp;           <p className="text-center text-lg text-red-600 font-semibold">

&nbsp;             Înscrierile pentru această tabără sunt momentan epuizate.

&nbsp;           </p>

&nbsp;         ) : (

&nbsp;           // === FORMULAR ===

&nbsp;           <form onSubmit={handleSubmit} className="relative z-10 space-y-6">

&nbsp;             

&nbsp;             {/\* Nume și vârstă \*/}

&nbsp;             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

&nbsp;               {/\* Nume complet \*/}

&nbsp;               <div className="group">

&nbsp;                 <label className="block text-sm font-medium text-\[#2C1810] mb-2">Nume complet</label>

&nbsp;                 <input 

&nbsp;                   type="text" 

&nbsp;                   name="nume"

&nbsp;                   placeholder="Introdu numele complet" 

&nbsp;                   className="w-full p-4 border-2 border-orange-100 rounded-xl transition-colors group-hover:border-\[#D4A574]" 

&nbsp;                   required 

&nbsp;                   value={formData.nume}

&nbsp;                   onChange={handleChange}

&nbsp;                 />

&nbsp;               </div>



&nbsp;               {/\* Vârstă \*/}

&nbsp;               <div className="group">

&nbsp;                 <label className="block text-sm font-medium text-\[#2C1810] mb-2">Vârstă</label>

&nbsp;                 <input 

&nbsp;                   type="number" 

&nbsp;                   name="varsta"

&nbsp;                   placeholder="Vârsta ta" 

&nbsp;                   min="13"

&nbsp;                   max="33"

&nbsp;                   className="w-full p-4 border-2 border-orange-100 rounded-xl transition-colors group-hover:border-\[#D4A574]" 

&nbsp;                   required 

&nbsp;                   value={formData.varsta}

&nbsp;                   onChange={handleChange}

&nbsp;                 />

&nbsp;               </div>

&nbsp;             </div>



&nbsp;             {/\* Data nașterii \*/}

&nbsp;             <div className="group">

&nbsp;               <label className="block text-sm font-medium text-\[#2C1810] mb-2">Data nașterii</label>

&nbsp;               <input 

&nbsp;                 type="date" 

&nbsp;                 name="dataNasterii"

&nbsp;                 className="w-full p-4 border-2 border-orange-100 rounded-xl transition-colors group-hover:border-\[#D4A574]" 

&nbsp;                 required 

&nbsp;                 value={formData.dataNasterii}

&nbsp;                 onChange={handleChange}

&nbsp;               />

&nbsp;             </div>



&nbsp;             {/\* Email și telefon \*/}

&nbsp;             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

&nbsp;               <div className="group">

&nbsp;                 <label className="block text-sm font-medium text-\[#2C1810] mb-2">Email</label>

&nbsp;                 <input 

&nbsp;                   type="email" 

&nbsp;                   name="email"

&nbsp;                   placeholder="exemplu@email.com" 

&nbsp;                   className="w-full p-4 border-2 border-orange-100 rounded-xl transition-colors group-hover:border-\[#D4A574]" 

&nbsp;                   required 

&nbsp;                   value={formData.email}

&nbsp;                   onChange={handleChange}

&nbsp;                 />

&nbsp;               </div>



&nbsp;               <div className="group">

&nbsp;                 <label className="block text-sm font-medium text-\[#2C1810] mb-2">Telefon</label>

&nbsp;                 <input 

&nbsp;                   type="tel" 

&nbsp;                   name="telefon"

&nbsp;                   placeholder="07XX XXX XXX" 

&nbsp;                   className="w-full p-4 border-2 border-orange-100 rounded-xl transition-colors group-hover:border-\[#D4A574]" 

&nbsp;                   required 

&nbsp;                   value={formData.telefon}

&nbsp;                   onChange={handleChange}

&nbsp;                 />

&nbsp;               </div>

&nbsp;             </div>



&nbsp;             {/\* Alte detalii \*/}

&nbsp;             <div className="group">

&nbsp;               <label className="block text-sm font-medium text-\[#2C1810] mb-2">Alte detalii (opțional)</label>

&nbsp;               <textarea 

&nbsp;                 name="detalii"

&nbsp;                 placeholder="Menționează orice informații suplimentare..." 

&nbsp;                 rows="4"

&nbsp;                 className="w-full p-4 border-2 border-orange-100 rounded-xl transition-colors group-hover:border-\[#D4A574]" 

&nbsp;                 value={formData.detalii}

&nbsp;                 onChange={handleChange}

&nbsp;               ></textarea>

&nbsp;             </div>



&nbsp;             {/\* Buton submit \*/}

&nbsp;             <div className="pt-4 text-center">

&nbsp;               <button 

&nbsp;                 type="submit" 

&nbsp;                 disabled={isLoading}

&nbsp;                 className="w-\[200px] bg-gradient-to-r from-\[#FF6B3D] to-orange-500 hover:from-\[#FF6B3D] hover:to-orange-600 text-white font-semibold p-4 rounded-xl transition-all duration-300 transform hover:scale-\[1.02] hover:shadow-xl mx-auto flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"

&nbsp;               >

&nbsp;                 {isLoading ? (

&nbsp;                   <>

&nbsp;                     {/\* Spinner \*/}

&nbsp;                     <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>

&nbsp;                     <span>Se trimite...</span>

&nbsp;                   </>

&nbsp;                 ) : (

&nbsp;                   <span>Trimite</span>

&nbsp;                 )}

&nbsp;               </button>

&nbsp;             </div>

&nbsp;           </form>

&nbsp;         )}

&nbsp;       </div>

&nbsp;     </div>



&nbsp;     {/\* === MODAL SUCCES === \*/}

&nbsp;     {modalOpen \&\& (

&nbsp;       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

&nbsp;         <div className="bg-white rounded-xl p-8 max-w-sm text-center shadow-lg relative">

&nbsp;           {/\* Titlu modal \*/}

&nbsp;           <h3 className="text-xl font-bold mb-4">Înscriere reușită!</h3>

&nbsp;           {/\* Mesaj modal \*/}

&nbsp;           <p className="mb-6">Formularul a fost trimis cu succes. Vei primi un email de confirmare pentru înscriere.</p>

&nbsp;           {/\* Buton închidere modal \*/}

&nbsp;           <button 

&nbsp;             onClick={() => setModalOpen(false)}

&nbsp;             className="bg-gradient-to-r from-\[#FF6B3D] to-orange-500 text-white font-semibold px-6 py-2 rounded-xl hover:from-\[#FF6B3D] hover:to-orange-600"

&nbsp;           >

&nbsp;             Închide

&nbsp;           </button>

&nbsp;         </div>

&nbsp;       </div>

&nbsp;     )}

&nbsp;   </section>

&nbsp; );

}



export default RegistrationForm;





**10. Footer.js - Partea de jos a site-ului**

