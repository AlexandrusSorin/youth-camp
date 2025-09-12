import { LucideShirt, Bath, Book, PenTool, LucideFootprints } from "lucide-react";
import { RiToothLine } from "react-icons/ri";

function PackingList() {
  // Lista de obiecte esențiale pentru bagaj
  // Pentru a adăuga un item nou: adaugă un obiect în array cu { item, icon, description }
  // Pentru a șterge un item: elimină obiectul respectiv din array
  // Pentru a modifica: editează textul sau iconița direct, iconițele sunt preluate din lucide-react, se poate verifica documentatia oficiala
  const essentialItems = [
    { 
      item: "Îmbrăcăminte adecvată vremii", 
      icon: <LucideShirt className="w-8 h-8 text-[#FE6D34]" />,
      description: "Haine specifice pentru condițiile meteorologice"
    },
    { 
      item: "Articole de igienă personală", 
      icon: <RiToothLine className="w-8 h-8 text-[#FE6D34]" />,
      description: "Săpun, șampon, pastă de dinți, periuță, etc."
    },
    { 
      item: "Prosoape", 
      icon: <Bath className="w-8 h-8 text-[#FE6D34]" />,
      description: "Pentru uzul personal zilnic"
    },
    { 
      item: "Sfânta Scriptură", 
      icon: <Book className="w-8 h-8 text-[#FE6D34]" />,
      description: "Biblia pentru studiul biblic și devoțional"
    },
    { 
      item: "Materiale pentru studiu", 
      icon: <PenTool className="w-8 h-8 text-[#FE6D34]" />,
      description: "Caiet, stilouri, evidențiator"
    },
    { 
      item: "Încălțăminte confortabilă", 
      icon: <LucideFootprints className="w-8 h-8 text-[#FE6D34]" />,
      description: "Pentru activități sportive și drumeții"
    }
  ];

  return (
    // Secțiunea "Bagaj" (link din Navbar: href="#bagaj")
    <section id="bagaj" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header-ul secțiunii */}
        <div className="text-center mb-20">
          {/* Badge-ul mic deasupra titlului (poți modifica textul "Pregătire Pentru Tabără") */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-amber-200/30">
            <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>
            <span className="text-[#2C1810] font-semibold text-sm uppercase tracking-wider">
              Pregătire Pentru Tabără
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse"></div>
          </div>

          {/* Titlu secțiune */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-[#1A0F0A] bg-clip-text text-transparent leading-snug md:leading-snug">
            Lista de bagaj esențial
          </h2>

          {/* Subtitlu / descriere */}
          <p className="text-xl text-[#2C1810] font-light max-w-3xl mx-auto leading-relaxed">
            Pentru o experiență completă și confortabilă la tabăra de tineret, 
            vă rugăm să vă pregătiți conform listei de mai jos
          </p>
        </div>
        
        {/* Lista de iteme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {essentialItems.map((item, index) => (
            <div key={index} className="group h-full">
              <div className="bg-white rounded-3xl cursor-pointer p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-amber-50 hover:border-amber-400 transform hover:-translate-y-3 h-full flex flex-col">
                
                {/* Conținut item */}
                <div className="text-center mb-6">
                  {/* Iconița itemului (poți înlocui cu alta din lucide-react sau react-icons) */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F5E6D3] to-orange-100 rounded-2xl mb-4">
                    {item.icon}
                  </div>

                  {/* Titlul itemului */}
                  <h3 className="text-xl font-bold text-[#1A0F0A] mb-3 leading-snug">
                    {item.item}
                  </h3>

                  {/* Descrierea itemului */}
                  <p className="text-[#2C1810] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PackingList;
