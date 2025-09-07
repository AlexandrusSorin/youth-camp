import { useState, useEffect } from 'react';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-[65vh] mt-16 overflow-hidden">
       <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{ backgroundImage: "url('/header-3.png')" }}></div>

        <div className="absolute inset-0 bg-black/80"></div>
    


      <div className="relative z-10 h-full flex items-center justify-center text-white text-center px-6">
        <div className={`max-w-5xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          

          <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-10 shadow-2xl">
            <span className="text-sm font-medium bg-white bg-clip-text text-transparent">
              Ediția 2025 • Înscrieri Deschise
            </span>
          </div>
          
       
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-black mb-4 leading-none">
              <span className="block bg-gradient-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent drop-shadow-2xl">
                Tabără de
              </span>
              <span className="block bg-gradient-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent  transform ">
                Tineret
              </span>
            </h1>
          </div>
          
       
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl"></div>
            <p className="relative text-xl md:text-2xl font-light text-gray-100 italic">
              „Generația care duce mesajul mai departe"
            </p>
          </div>
          
        
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
           <a href="#înscriere" className="group relative overflow-hidden bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-600 hover:to-yellow-600 text-white font-medium tracking-wide text-md px-7 py-5 rounded-2xl transition-all duration-500 transform hover:scale-105 ">
              <span className="relative flex items-center space-x-3">
                <span>Înscrie-te acum</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>

            
            <a href="#informații" className="group px-7 py-5 border-2 border-white/20 hover:border-white/40 text-white rounded-2xl hover:bg-white/5 transition-all duration-300 backdrop-blur-xl font-medium tracking-wide text-md">
              <span className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Află mai multe</span>
              </span>
            </a>

          </div>
        </div>
      </div>


    </section>
  );
}

export default Hero;