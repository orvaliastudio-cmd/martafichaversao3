/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Radio, 
  Eye, 
  Mic, 
  Heart, 
  Sun, 
  Waves, 
  Flower2, 
  Printer, 
  FileText,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-secondary-container selection:text-primary">
      {/* TopAppBar */}
      <header className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 shadow-ambient no-print">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="tracking-[0.1em] font-extrabold uppercase text-primary text-xl">
              Therapeutic Editorial
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrint}
              className="px-5 py-2 text-primary border border-primary/20 hover:bg-primary/5 transition-colors rounded-xl text-sm font-bold uppercase tracking-wider flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              Gerar PDF em Branco
            </button>
            <button className="px-5 py-2 bg-gradient-to-br from-primary to-primary-container text-white shadow-md hover:opacity-90 transition-all rounded-xl text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Gerar PDF Preenchido
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-12 px-4 space-y-12">
        {/* PAGE 1: CLIENTE & NUMEROLOGIA */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="assessment-page bg-surface-container-lowest p-12 shadow-ambient min-h-[1100px] flex flex-col page-break rounded-sm"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <img 
              alt="Marta Ana Chiconato - Terapia Integrativa" 
              className="h-24 mx-auto object-contain mb-4" 
              src="https://lh3.googleusercontent.com/aida/ADBb0ujSQuuqBdb9oCSyu0hRUD-s50Zt_OzkrnrZZQfrfflPo4vQxXhP9kVJrhZv_O9OuvgXbgh1XR_ET0J4JinTNlHledHf_F4gkofNZey_pppAmo0UJlolb7qy3StXXSMVvP5eaDTZgv1oxNMJJehf1IkKj5X0NNW4IuOtDx5Tt2dXWBH7erc7AxzUGvKpo8PGF9HJfSktcIWnZaGIBx4UH4B3RSN02FYpGxQGoB8uH4T_Ptf8N_9b-PUKj4Cc-DwgOxloq9tA659meZo"
              referrerPolicy="no-referrer"
            />
            <div className="w-24 h-[1px] bg-outline-variant mx-auto mt-2"></div>
          </div>

          {/* Section 1: CLIENTE */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-light text-primary/20">01</span>
              <h2 className="text-primary font-bold text-sm tracking-[0.15em] uppercase">Cliente</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="space-y-1">
                <label className="text-[10px] text-outline font-bold uppercase tracking-widest">Nome de Batismo</label>
                <textarea 
                  className="w-full border-0 border-b-2 border-outline-variant bg-transparent px-0 py-2 focus:ring-0 focus:border-primary transition-colors text-on-surface writing-lines resize-none overflow-hidden" 
                  rows={4}
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-8 self-start">
                <div className="space-y-1">
                  <label className="text-[10px] text-outline font-bold uppercase tracking-widest">Data do Atendimento</label>
                  <input 
                    className="w-full border-0 border-b-2 border-outline-variant bg-transparent px-0 py-2 focus:ring-0 focus:border-primary transition-colors text-on-surface" 
                    placeholder="DD/MM/AAAA" 
                    type="text"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-outline font-bold uppercase tracking-widest">Data de Nascimento</label>
                  <input 
                    className="w-full border-0 border-b-2 border-outline-variant bg-transparent px-0 py-2 focus:ring-0 focus:border-primary transition-colors text-on-surface" 
                    placeholder="DD/MM/AAAA" 
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: NUMEROLOGIA */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-light text-primary/20">02</span>
              <h2 className="text-primary font-bold text-sm tracking-[0.15em] uppercase">Numerologia</h2>
            </div>
            <div className="grid grid-cols-3 gap-12">
              <div className="flex flex-col">
                <label className="text-[10px] text-outline font-bold uppercase tracking-widest mb-1">Alma</label>
                <input className="border-0 border-b-2 border-outline-variant bg-transparent px-0 py-2 focus:ring-0 focus:border-primary text-center text-lg font-medium" type="text" />
              </div>
              <div className="flex flex-col">
                <label className="text-[10px] text-outline font-bold uppercase tracking-widest mb-1">Personalidade</label>
                <input className="border-0 border-b-2 border-outline-variant bg-transparent px-0 py-2 focus:ring-0 focus:border-primary text-center text-lg font-medium" type="text" />
              </div>
              <div className="flex flex-col">
                <label className="text-[10px] text-outline font-bold uppercase tracking-widest mb-1">Destino</label>
                <input className="border-0 border-b-2 border-outline-variant bg-transparent px-0 py-2 focus:ring-0 focus:border-primary text-center text-lg font-medium" type="text" />
              </div>
            </div>
          </div>

          {/* Section 3: LEITURA */}
          <div className="flex-grow">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-light text-primary/20">03</span>
              <h2 className="text-primary font-bold text-sm tracking-[0.15em] uppercase">Leitura</h2>
            </div>
            <div className="space-y-10">
              <div className="space-y-3">
                <label className="text-[10px] text-outline font-bold uppercase tracking-widest flex justify-between">
                  <span>Lição de Vida</span>
                  <span className="text-primary/40 italic lowercase">observações detalhadas</span>
                </label>
                <textarea className="w-full bg-surface-container-low/50 border border-outline-variant/15 rounded-lg p-4 focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none" rows={6}></textarea>
              </div>
              <div className="w-1/3 space-y-3">
                <label className="text-[10px] text-outline font-bold uppercase tracking-widest">Ano Pessoal</label>
                <input className="w-full border-0 border-b-2 border-outline-variant bg-transparent px-0 py-2 focus:ring-0 focus:border-primary text-lg" type="text" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* PAGE 2: CONSCIÊNCIA, KARMA & PINÁCULOS */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="assessment-page bg-surface-container-lowest p-12 shadow-ambient min-h-[1100px] flex flex-col page-break rounded-sm"
        >
          {/* Section 4: PLANOS DE CONSCIÊNCIA */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-4xl font-light text-primary/20">04</span>
              <h2 className="text-primary font-bold text-sm tracking-[0.15em] uppercase">Planos de Consciência</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Mental [1, 8]', id: 'mental' },
                { label: 'Emocional [2, 3, 6]', id: 'emocional' },
                { label: 'Físico [4, 5]', id: 'fisico' },
                { label: 'Espiritual [7, 9]', id: 'espiritual' }
              ].map((item) => (
                <div key={item.id} className="bg-surface-container-low p-6 rounded-xl space-y-4">
                  <p className="text-[10px] text-primary font-black tracking-widest uppercase">{item.label}</p>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-outline-variant rounded-md checked:bg-primary checked:border-primary transition-all" />
                      <Check className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-xs font-medium text-on-surface-variant group-hover:text-primary transition-colors">Ativo</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: KARMA E DARMA */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-light text-primary/20">05</span>
              <h2 className="text-primary font-bold text-sm tracking-[0.15em] uppercase">Karma e Darma</h2>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] text-outline font-bold uppercase tracking-widest">Karma</label>
                <textarea className="w-full bg-surface-container-low/30 border border-outline-variant/15 rounded-lg p-4 focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none" rows={4}></textarea>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] text-outline font-bold uppercase tracking-widest">Darma</label>
                <textarea className="w-full bg-surface-container-low/30 border border-outline-variant/15 rounded-lg p-4 focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none" rows={4}></textarea>
              </div>
            </div>
          </div>

          {/* Section 6: PINÁCULOS */}
          <div className="flex-grow">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-4xl font-light text-primary/20">06</span>
              <h2 className="text-primary font-bold text-sm tracking-[0.15em] uppercase">Pináculos - Ciclos de Vida</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="border border-outline-variant/20 rounded-xl p-8 flex flex-col gap-6">
                  <span className="text-[10px] text-outline font-bold uppercase tracking-[0.2em]">{num}º Pináculo</span>
                  <textarea 
                    className="w-full border-0 bg-transparent p-0 focus:ring-0 font-medium text-lg text-primary writing-lines resize-none overflow-hidden" 
                    rows={8}
                  ></textarea>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* PAGE 3: ANÁLISE ENERGÉTICA CHAKRAS */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="assessment-page bg-surface-container-lowest p-12 shadow-ambient min-h-[1100px] flex flex-col rounded-sm"
        >
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold text-xl tracking-[0.3em] uppercase">Análise Energética — Chakras</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent mx-auto mt-4"></div>
          </div>

          <div className="space-y-6 flex-grow">
            {[
              { name: 'Coronário', icon: Radio, id: 'coronario' },
              { name: 'Frontal', icon: Eye, id: 'frontal' },
              { name: 'Laríngeo', icon: Mic, id: 'laringeo' },
              { name: 'Cardíaco', icon: Heart, id: 'cardiaco' },
              { name: 'Plexo Solar', icon: Sun, id: 'plexo' },
              { name: 'Chakra Esplênico', icon: Waves, id: 'esplenico' },
              { name: 'Chakra Básico', icon: Flower2, id: 'basico' }
            ].map((chakra) => (
              <div key={chakra.id} className="group p-6 rounded-2xl bg-surface-container-low/40 hover:bg-surface-container-low transition-colors duration-300">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex items-center gap-4 w-full md:w-64 shrink-0">
                    <chakra.icon className="text-primary w-10 h-10 stroke-[1.5]" />
                    <span className="text-xs font-black tracking-widest uppercase text-primary">{chakra.name}</span>
                  </div>
                  <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['Equilibrado', 'Desequilíbrio', 'Em Desenv.'].map((status) => (
                      <label key={status} className="flex items-center gap-3 cursor-pointer group/chip">
                        <input className="hidden peer" type="radio" name={chakra.id} />
                        <div className="w-full py-2 px-4 rounded-full border border-outline-variant/30 text-[10px] font-bold uppercase tracking-tighter text-center peer-checked:bg-primary peer-checked:text-white transition-all hover:border-primary/50">
                          {status}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex gap-4 items-center">
                  <span className="text-[9px] font-bold uppercase text-outline shrink-0">Observações:</span>
                  <input 
                    className="flex-grow border-0 border-b border-outline-variant/40 bg-transparent py-1 focus:ring-0 focus:border-primary text-sm italic" 
                    type="text" 
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-outline-variant/10">
            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-outline">
              <span>Formulário de Análise Energética — Confidencial</span>
              <span>Página 3 de 3</span>
            </div>
          </footer>
        </motion.section>
      </main>

      {/* Side Decoration (Hidden on small screens/print) */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-12 no-print opacity-20 pointer-events-none">
        <div className="[writing-mode:vertical-rl] text-[10px] font-bold tracking-[0.5em] uppercase text-primary">Marta Ana Chiconato</div>
        <div className="w-[1px] h-32 bg-primary mx-auto"></div>
        <div className="[writing-mode:vertical-rl] text-[10px] font-bold tracking-[0.5em] uppercase text-primary">Edição Terapêutica</div>
      </div>
    </div>
  );
}
