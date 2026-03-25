import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { Sobre } from '@/sections/Sobre';
import { AreasAtuacao } from '@/sections/AreasAtuacao';
import { CasosSucesso } from '@/sections/CasosSucesso';
import { Clientes } from '@/sections/Clientes';
import { Rodape } from '@/sections/Rodape';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Sobre />
        <AreasAtuacao />
        <CasosSucesso />
        <Clientes />
        <Rodape />
      </main>
    </div>
  );
}

export default App;
