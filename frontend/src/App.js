import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Rules from "./components/Rules";
import PackingList from "./components/PackingList";
import Payment from "./components/Payment";
import Location from "./components/Location";
import Donations from "./components/Donations";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <InfoSection />
      <Rules />
      <PackingList />
      <Payment />
      <Location />
      <Donations/>
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;