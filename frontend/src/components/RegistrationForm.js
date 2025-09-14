import { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    nume: '',
    varsta: '',
    dataNasterii: '',
    email: '',
    telefon: '',
    localitate: '',
    detalii: ''
  });

  const [modalOpen, setModalOpen] = useState(false); 
  const [isLoading, setIsLoading] = useState(false);

  // === DE MODIFICAT PENTRU ÎNSCRIERI EPUIZATE ===
  const inscrieriEpuizate = false; // pune true când vrei să oprești înscrierile

  // URL-ul backend-ului - se adaptează automat pentru producție
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  // === FUNCȚIA DE TRIMITERE A FORMULARULUI ===
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      if (result.success) {
        setModalOpen(true); // deschide modalul de succes
        // resetează formularul
        setFormData({
          nume: '',
          varsta: '',
          dataNasterii: '',
          email: '',
          telefon: '',
          localitate: '',
          detalii: ''
        }); 
      } else {
        alert("A apărut o eroare. Încearcă din nou.");
      }
    } catch (error) {
      console.error('Eroare:', error);
      alert(`Eroare de conexiune cu serverul: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // === FUNCȚIA PENTRU ACTUALIZAREA FORMULARULUI ===
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="înscriere" className="py-20 px-6">
      <div className="max-w-xl mx-auto">

        {/* === HEADER SECȚIUNE === */}
        <div className="text-center mb-16">
          {/* Text mic de deasupra titlului */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-amber-200/30">
            <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>
            {/* Subtitlu mic */}
            <span className="text-[#2C1810] font-semibold text-sm uppercase tracking-wider">Înscriere</span>
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse"></div>
          </div>

          {/* Titlul mare */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-[#1A0F0A] bg-clip-text text-transparent">
            Formular de Înscriere
          </h2>

          {/* Descriere scurtă */}
          <p className="text-xl text-[#2C1810] font-light">
            Inscrierea este finalizata in momentul in care efectuati plata si primiti un SMS de confirmare de la administrator!
          </p>
        </div>

        {/* === CONTAINER FORMULAR === */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-50 relative overflow-hidden">

          {/* Daca înscrierile sunt epuizate */}
          {inscrieriEpuizate ? (
            <p className="text-center text-lg text-red-600 font-semibold">
              Înscrierile pentru această tabără sunt momentan epuizate.
            </p>
          ) : (
            // === FORMULAR ===
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              
              {/* Nume și vârstă */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nume complet */}
                <div className="group">
                  <label className="block text-sm font-medium text-[#2C1810] mb-2">Nume complet</label>
                  <input 
                    type="text" 
                    name="nume"
                    placeholder="Introdu numele complet" 
                    className="w-full p-4 border-2 border-orange-100 rounded-xl transition-colors group-hover:border-[#D4A574]" 
                    required 
                    value={formData.nume}
                    onChange={handleChange}
                  />
                </div>

                {/* Vârstă */}
                <div className="group">
                  <label className="block text-sm font-medium text-[#2C1810] mb-2">Vârstă</label>
                  <input 
                    type="number" 
                    name="varsta"
                    placeholder="Vârsta ta" 
                    min="13"
                    max="33"
                    className="w-full p-4 border-2 border-orange-100 rounded-xl transition-colors group-hover:border-[#D4A574]" 
                    required 
                    value={formData.varsta}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Data nașterii */}
              <div className="group">
                <label className="block text-sm font-medium text-[#2C1810] mb-2">Data nașterii</label>
                <input 
                  type="date" 
                  name="dataNasterii"
                  className="w-full p-4 border-2 border-orange-100 rounded-xl transition-colors group-hover:border-[#D4A574]" 
                  required 
                  value={formData.dataNasterii}
                  onChange={handleChange}
                />
              </div>

              {/* Email și telefon */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium text-[#2C1810] mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="exemplu@email.com" 
                    className="w-full p-4 border-2 border-orange-100 rounded-xl transition-colors group-hover:border-[#D4A574]" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-[#2C1810] mb-2">Telefon</label>
                  <input 
                    type="tel" 
                    name="telefon"
                    placeholder="07XX XXX XXX" 
                    className="w-full p-4 border-2 border-orange-100 rounded-xl transition-colors group-hover:border-[#D4A574]" 
                    required 
                    value={formData.telefon}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* Localitate */}
              <div className="group">
                <label className="block text-sm font-medium text-[#2C1810] mb-2">Localitate</label>
                <input 
                  type="text" 
                  name="localitate"
                  placeholder="Introdu localitatea" 
                  className="w-full p-4 border-2 border-orange-100 rounded-xl transition-colors group-hover:border-[#D4A574]" 
                  required 
                  value={formData.localitate}
                  onChange={handleChange}
                />
              </div>


              {/* Alte detalii */}
              <div className="group">
                <label className="block text-sm font-medium text-[#2C1810] mb-2">Alte detalii (opțional)</label>
                <textarea 
                  name="detalii"
                  placeholder="Menționează orice informații suplimentare..." 
                  rows="4"
                  className="w-full p-4 border-2 border-orange-100 rounded-xl transition-colors group-hover:border-[#D4A574]" 
                  value={formData.detalii}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Buton submit */}
              <div className="pt-4 text-center">
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-[200px] bg-gradient-to-r from-[#FF6B3D] to-orange-500 hover:from-[#FF6B3D] hover:to-orange-600 text-white font-semibold p-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl mx-auto flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <>
                      {/* Spinner */}
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      <span>Se trimite...</span>
                    </>
                  ) : (
                    <span>Trimite</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* === MODAL SUCCES === */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl p-8 max-w-sm text-center shadow-lg relative">
            {/* Titlu modal */}
            <h3 className="text-xl font-bold mb-4">Înscriere reușită!</h3>
            {/* Mesaj modal */}
            <p className="mb-6">Formularul a fost trimis cu succes. Vei primi un email de confirmare pentru înscriere.</p>
            {/* Buton închidere modal */}
            <button 
              onClick={() => setModalOpen(false)}
              className="bg-gradient-to-r from-[#FF6B3D] to-orange-500 text-white font-semibold px-6 py-2 rounded-xl hover:from-[#FF6B3D] hover:to-orange-600"
            >
              Închide
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default RegistrationForm;
