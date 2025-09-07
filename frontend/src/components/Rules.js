function Rules() {
  const rules = [
    "Trebuie să ai minimum 13 ani împliniți – nu se vor face excepții.",
    "Vârsta maximă admisă este de 33 de ani.",
    "Fiecare participant la tabără trebuie să fie preînregistrat și să aibă taxa achitată în avans.",
    "Oricine părăsește terenul taberei are obligația de a anunța directorii taberei.",
    "Participanții trebuie să păstreze dormitoarele curate și îngrijite și sunt responsabili pentru orice daună. (Nu ne asumăm răspunderea pentru obiectele uitate.)",
    "Toți trebuie să meargă în dormitoarele repartizate atunci când directorul dă semnalul „Stingerea!”.",
    "Toți sunt obligați să participe la toate serviciile și activitățile.",
    "Nu sunt permise negative (soundtrack-uri) pentru cântări, iar toate cântările speciale trebuie aprobate în prealabil.",
    "Participanții, fie tineri, fie adulți, trebuie să se îmbrace modest, în conformitate cu învățăturile fratelui Branham. Codul vestimentar va fi aplicat strict.",
    "Nu sunt acceptate următoarele articole: maiouri, bluze care lasă buricul la vedere, pantaloni scurți, fuste despicate sau cu tăieturi, precum și orice fel de tutun, etc."
  ];

  return (
    <section id="reguli" className="py-20 px-6 bg-gradient-to-br from-[#F5E6D3] via-white to-[orange-50] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-yellow-200/30 to-amber-200/30 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-amber-200/30">
            <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>
            <span className="text-[#2C1810] font-semibold text-sm uppercase tracking-wider">Regulament Tabără</span>
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-[#1A0F0A] bg-clip-text text-transparent leading-snug md:leading-snug">
            Regulile Noastre
          </h2>
          
          <p className="text-xl text-[#2C1810] font-light max-w-2xl mx-auto leading-relaxed">
            Pentru o experiență frumoasă și binecuvântată în tabără, vă rugăm să respectați aceste principii importante
          </p>
        </div>

     
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 cursor-pointer">
          {rules.map((rule, index) => (
            <div 
              key={index} 
              className="group relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-200/50 hover:border-amber-300/80 transform hover:-translate-y-2 hover:scale-[1.02]">
             
              {/* Content */}
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-[#FF6B3D] to-orange-500 text-white text-sm font-bold rounded-full flex-shrink-0 mt-1">
                  {index + 1}
                </span>
                <p className="text-[#2C1810] text-md leading-relaxed font-medium group-hover:text-amber-900 transition-colors duration-300">
                  {rule}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
}

export default Rules;