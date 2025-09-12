function Location() {
  return (
    <section id="locație" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* === HEADER SECTIUNE === */}
        <div className="text-center mb-16">
          {/* Text mic de deasupra titlului */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-amber-200/30">
            <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>
            {/* AICI se schimbă subtitlul mic din header */}
            <span className="text-[#2C1810] font-semibold text-sm uppercase tracking-wider">Locație</span>
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse"></div>
          </div>

          {/* AICI se schimbă titlul principal */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-[#1A0F0A] bg-clip-text text-transparent leading-snug md:leading-snug">
            Locația Taberei
          </h2>

          {/* AICI se schimbă descrierea scurtă sub titlu */}
          <p className="text-lg text-[#2C1810] font-light max-w-2xl mx-auto leading-relaxed">
            Vino și descoperă frumusețea munților Apuseni într-un cadru perfect pentru creștere spirituală și comuniune creștină
          </p>
        </div>

        {/* === CARD PRINCIPAL LOCATIE === */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              
              {/* === DETALII LOCAȚIE (partea stângă) === */}
              <div className="space-y-8">
                <div className="space-y-6">
                  {/* Titlul secțiunii Detalii locație */}
                  <h4 className="text-2xl font-bold text-[#2C1810] border-b-2 border-[#8B4513] pb-3">
                    Detalii despre locație
                  </h4>

                  {/* AICI se schimbă numele campusului și locația */}
                  <div className="flex md:justify-start space-x-4 p-4 md:p-4 px-2 bg-[#fdf8f3] rounded-xl">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      {/* Iconița locație */}
                      <svg className="w-6 h-6 text-[#FE6D34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="text-[#2C1810]">
                      <h3 className="text-2xl font-bold">Campus Mărișel</h3>
                      <p className="text-[#8B4513] text-lg">Munții Apuseni, județul Cluj</p>
                    </div>
                  </div>

                  {/* AICI se schimbă textele despre cazare și mediu natural */}
                  <div className="space-y-4">
                    {/* Cazare */}
                    <div className="flex items-start space-x-4 p-4 rounded-xl">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#2C1810] mb-1">Cazare confortabilă</h5>
                        <p className="text-[#8B4513] text-sm">Camere moderne cu facilități complete pentru un sejur plăcut</p>
                      </div>
                    </div>

                    {/* Mediu natural */}
                    <div className="flex items-start space-x-4 p-4 rounded-xl">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C9 2 7 5 7 8c0 .9.2 1.7.6 2.4C6.1 11.1 5 12.9 5 15c0 2.8 2.2 5 5 5h1v2h2v-2h1c2.8 0 5-2.2 5-5 0-2.1-1.1-3.9-2.6-4.6.4-.7.6-1.5.6-2.4 0-3-2-6-5-6z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#2C1810] mb-1">Mediu natural</h5>
                        <p className="text-[#8B4513] text-sm">Înconjurat de peisaje spectaculoase ale Munților Apuseni</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* === TEXT IMPORTANT === */}
                <div className="rounded-2xl p-6 bg-red-50 border border-red-200 shadow-sm">
                  <h5 className="font-bold text-[#2C1810] mb-3 flex items-center">
                    <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Important
                  </h5>
                  {/* AICI se schimbă mesajul de atenționare */}
                  <p className="text-[#2C1810] text-sm leading-relaxed">
                    Participanții care călătoresc cu trenul sunt rugați să ne contacteze în prealabil.
                  </p>
                </div>
              </div>

              {/* === HARTA (partea dreaptă) === */}
              <div className="space-y-4">
                {/* Titlu secțiune hartă */}
                <h4 className="text-2xl font-bold text-[#1A0F0A] border-b-2 border-[#8B4513] pb-3">
                  Harta locației
                </h4>

                {/* AICI se schimbă harta Google Maps (link embed) */}
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <iframe
                    title="Locația Campusului Creștin Mărișel"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.1234567890123!2d23.1855882!3d46.699565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47491e408ad19e71%3A0x5ac3f5b1a6fb26a3!2zTcSDcmnImWVs!5e0!3m2!1sro!2sro!4v1234567890123"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>

                {/* AICI se schimbă textul mic de sub hartă */}
                <p className="text-xs text-gray-500 text-center">
                  Faceți clic pe hartă pentru a deschide Google Maps și a obține indicații de călătorie
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
