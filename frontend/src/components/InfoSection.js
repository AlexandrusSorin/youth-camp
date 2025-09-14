function InfoSection() {
  return (
    // Secțiunea "Informații" (id-ul este folosit pentru linkurile din Navbar: href="#informații")
    <section id="informații" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header-ul secțiunii */}
        <div className="text-center mb-16">
          
          {/* Badge mic deasupra titlului (poți schimba textul "Despre Tabără") */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-amber-200/30">
            <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>
            <span className="text-[#2C1810] font-semibold text-sm uppercase tracking-wider">
              Despre Tabără
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse"></div>
          </div>
          
          {/* Titlu principal al secțiunii (poți schimba textul "Notă pentru participanți") */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-[#1A0F0A] bg-clip-text text-transparent leading-snug md:leading-snug">
            Mesaj pentru participanți
          </h2>
        </div>
        
        {/* Conținutul secțiunii */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 p-8 md:p-14 relative overflow-hidden">
            
            {/* Background decorativ cu blur (bule colorate) */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/8 to-indigo-400/8 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/8 to-blue-400/8 rounded-full blur-2xl"></div>
            
            {/* Text principal */}
            <div className="relative z-10 text-left">
              
              {/* Primul paragraf (poți schimba mesajul liber) */}
              <p className="text-lg md:text-xl text-justify text-[#2C1810] leading-relaxed mb-8">
                Suntem bucuroși să organizăm din nou o tabără de tineret. Este răspunsul rugăciunilor și dorințelor voastre. Dumnezeu a pus o povară în inimile noastre pentru tineretul din România. Voi sunteți noua generație care trebuie să ducă acest Mesaj mai departe. Desigur, timpurile ne spun că plecarea Miresei este foarte aproape, dar, dacă Domnul zăbovește, vrem ca „generația născută în pustie” să țină Mesajul sus și să cucerească țara promisă.
              </p>
              
              {/* Al doilea paragraf */}
              <p className="text-lg md:text-xl text-justify text-[#2C1810] leading-relaxed mb-8">
                Vă mulțumim pentru tot sprijinul acordat și vă rugăm să țineți această tabără și pe toți participanții în rugăciune.
              </p>
              
              {/* Caseta de avertisment (IMPORTANT) */}
              <div className="mt-12 text-center">
                <div className="inline-block bg-red-50/80 backdrop-blur-sm rounded-2xl p-6 border border-red-200/60 shadow-lg relative overflow-hidden">
                  
                  {/* Linia colorată de sus */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-500 rounded-t-2xl"></div>
                  
                  {/* Conținutul casetei de avertisment */}
                  <div className="flex items-start gap-3 text-left">
                    
                    {/* Icon cu semnul "!" */}
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">!</span>
                    </div>
                    
                    {/* Textul IMPORTANT (poți modifica mesajul din <p>) */}
                    <div>
                      <p className="text-red-700 font-bold mb-1">Important</p>
                      <p className="text-red-600 font-medium leading-relaxed">
                        NU VOM PUTEA FACE RESTITUIRI ALE TAXEI DE TABĂRĂ DUPĂ 31 OCTOMBRIE.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sfârșit casetă IMPORTANT */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default InfoSection;
