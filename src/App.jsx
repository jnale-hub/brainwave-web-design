import ButtonGradient from './assets/svg/ButtonGradient';
import Benefits from "./components/Benefits";
import Colaborations from "./components/Colaborations";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Colaborations />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
