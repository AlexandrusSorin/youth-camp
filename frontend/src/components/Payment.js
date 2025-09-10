import { Users, CalendarDays, CreditCard, Landmark, Smartphone, Wallet } from "lucide-react";

function Payment() {
  return (
    <section id="plată" className="py-24 px-6 bg-gradient-to-br from-white to-yellow-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-amber-200/30">
            <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>
            <span className="text-[#2C1810] font-semibold text-sm uppercase tracking-wider">Informații Financiare</span>
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-[#1A0F0A] bg-clip-text text-transparent leading-snug md:leading-snug">
            Taxa de participare
          </h2>
          <p className="text-xl text-[#2C1810] font-light max-w-2xl mx-auto leading-relaxed">
            Contribuția financiară pentru experiența completă de tabără
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          {/* Header with price */}
          <div className="bg-gradient-to-br from-[#FF6B3D] to-orange-400 px-8 py-8 text-center text-white">
            <div className="text-5xl md:text-6xl font-bold mb-4">
              320 <span className="text-4xl">lei</span>
            </div>
            <p className="text-xl opacity-90">Taxa completă de participare</p>
          </div>
          
          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Important notices */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {/* Locuri limitate */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                    <Users className="text-amber-600 w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-amber-800">Locuri limitate</h4>
                </div>
                <p className="text-amber-700 leading-relaxed">
                  Rezervările se fac conform principiului „primul sosit, primul servit". 
                  Vă recomandăm să vă înregistrați cât mai curând posibil.
                </p>
              </div>
              
              {/* Politica de rambursare */}
              <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-6 border border-red-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                    <CalendarDays className="text-red-600 w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-red-800">Politica de rambursare</h4>
                </div>
                <p className="text-red-700 leading-relaxed">
                  Nu se acordă rambursări după data de <span className="font-semibold">31 octombrie</span>.
                </p>
              </div>
            </div>
            
            {/* Payment methods */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                  <CreditCard className="text-blue-600 w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold text-slate-800">Modalități de plată acceptate</h4>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Transfer bancar */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <Landmark className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800">Transfer bancar</h5>
                      <p className="text-sm text-slate-600">IBAN</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-slate-600 text-sm font-mono">[De completat]</p>
                  </div>
                </div>
                
                {/* Revolut */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                      <Smartphone className="text-purple-600 w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800">Revolut</h5>
                      <p className="text-sm text-slate-600">Plată digitală</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-slate-600 text-sm font-mono">[De completat]</p>
                  </div>
                </div>
                
                {/* BT Pay */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                      <Wallet className="text-green-600 w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800">BT Pay</h5>
                      <p className="text-sm text-slate-600">Plată mobilă</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-slate-600 text-sm font-mono">[De completat]</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact info */}
            <div className="mt-10 p-6  ">
              <div className="flex items-start">
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Suport și asistență</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Pentru întrebări privind înregistrarea, plata sau anularea participării, 
                    vă rugăm să ne contactați la adresa:
                  </p>
                  <a 
                    href="mailto:alexdroc74@gmail.com" 
                    className="inline-flex items-center mt-3 px-4 py-2 bg-gradient-to-br from-[#FF6B3D] to-orange-400  hover:from-[[#FF6B3D] hover:to-orange-600  text-white rounded-lg font-medium  transition-colors"
                  >
                    alexdroc74@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payment;
