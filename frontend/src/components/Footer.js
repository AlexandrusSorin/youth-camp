function Footer() { 
  return (
    <footer className="bg-[#1A0F0A] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Contact */}
        <div className="text-center mb-6">
          <p className="text-[#F5E6D3]">
            Contact: <a href="mailto:alexdroc74@gmail.com" className=" hover:text-orange-400">
              0754854845
            </a>
          </p>
        </div>

        <div className="border-t border-[#F5E6D3] pt-8 text-center">
          <p className="text-[#F5E6D3]">
            © 2025 Tabăra Crinul Din Vale. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
