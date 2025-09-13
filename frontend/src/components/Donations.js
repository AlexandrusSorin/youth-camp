function Donations() {
  return (
    <section id="donații" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* === HEADER SECTIUNE === */}
        <div className="text-center mb-16">
          {/* Text mic de deasupra titlului */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-amber-200/30">
            <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>
            {/* AICI se schimbă subtitlul mic (ex: Donații) */}
            <span className="text-[#2C1810] font-semibold text-sm uppercase tracking-wider">Donații</span>
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse"></div>
          </div>

          {/* AICI se schimbă titlul mare al secțiunii */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-[#1A0F0A] bg-clip-text text-transparent leading-snug md:leading-snug">
            Susține Lucrarea 
          </h2>

          {/* AICI se schimbă descrierea scurtă sub titlu */}
          <p className="text-lg text-[#2C1810] font-light max-w-2xl mx-auto leading-relaxed">
            Dacă dorești să contribui la dezvoltarea și desfășurarea taberei, poți face o donație prin transfer bancar.
          </p>
        </div>

        {/* === CONTINUT PRINCIPAL === */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              
              {/* === DETALII DONATII (stânga) === */}
              <div className="space-y-8">
                <div className="space-y-6">
                  {/* Titlul secțiunii de detalii */}
                  <h4 className="text-2xl font-bold text-[#2C1810] border-b-2 border-[#8B4513] pb-3">
                    Detalii donație
                  </h4>

                  {/* Caseta cu informațiile bancare */}
                  <div className="flex flex-col space-y-4 p-6 bg-[#fdf8f3] rounded-xl">
                    {/* AICI se poate modifica textul introductiv */}
                    <p className="text-[#2C1810] text-lg">
                      Cont bancar pentru donații:
                    </p>

                    {/* AICI se completează datele bancare */}
                    <ul className="text-[#8B4513] text-sm space-y-1">
                      <li><strong>Banca:</strong> Banca Transilvania</li>
                      <li><strong>IBAN:</strong> RO77BTRLRONCRT0CL5228201</li>
                      <li><strong>Titular cont:</strong> Droc Alexandru</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* === IMAGINE (dreapta) === */}
              <div className="flex items-center justify-center">
                <div className="w-full h-68 bg-orange-100 rounded-2xl flex items-center justify-center shadow-inner overflow-hidden">
                  {/* AICI se schimbă imaginea (src + alt) */}
                  <img 
                    src="/header.png" 
                    alt="Tabăra de Tineret" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Donations;
