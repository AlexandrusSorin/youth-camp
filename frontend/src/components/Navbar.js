import { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo stânga */}
        <h1 className="text-2xl font-bold text-[#1A0F0A]">
          Tabăra Crinul Din Vale
        </h1>

        {/* Lista link-uri */}
        <ul className="hidden md:flex space-x-8 font-medium tracking-wide text-[#1A0F0A]">
          {['Informații', 'Reguli', 'Bagaj', 'Plată', 'Locație','Donații' , 'Înscriere'].map(
            (item, idx) => (
              <li key={idx}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-yellow-500 transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            )
          )}
        </ul>

        {/* Buton meniu mobile */}
        <button
          className="md:hidden p-2 text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Meniu mobile */}
    {isMobileMenuOpen && (
    <div className="md:hidden bg-white shadow-lg">
        <div className="flex flex-col items-center px-6 py-6 space-y-6">
        {['Informații', 'Reguli', 'Bagaj', 'Plată', 'Locație', 'Donații' ,'Înscriere'].map(
            (item, idx) => (
            <a
                key={idx}
                href={`#${item.toLowerCase()}`}
                className="group relative text-gray-900 hover:text-yellow-500 transition-colors text-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            )
        )}
        </div>
    </div>
    )}

    </nav>
  );
}

export default Navbar;
