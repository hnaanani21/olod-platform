import Navigation from '@/components/Navigation';
import DreamPageCard from '@/components/DreamPageCard';
import { mockDreamPages, dreamNations } from '@/lib/data';
import { formatNumber } from '@/lib/utils';

export default function DreamGraphPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 pb-12 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="dream-badge">V1 — Liste & Filtres</span>
              <span className="text-slate-600 text-xs">Constellation 3D en V2</span>
            </div>
            <h1 className="text-2xl font-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Dream Graph™
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Explorez toutes les Dream Pages — recherche sémantique RAG
            </p>
          </div>

          {/* Search bar */}
          <div className="relative mb-6">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">🔍</div>
            <input
              type="text"
              placeholder="Recherche sémantique — ex: projet IA agriculture Afrique…"
              className="w-full pl-10 pr-4 py-3.5 glass-card border border-white/8 rounded-xl text-slate-200 placeholder-slate-600 text-sm bg-transparent focus:outline-none focus:border-indigo-500/40 transition-colors"
              readOnly
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <span className="dream-badge">RAG Sémantique</span>
            </div>
          </div>

          {/* Nation filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
              Tous
            </button>
            {dreamNations.map((n) => (
              <button
                key={n.id}
                className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-all hover:scale-105"
                style={{
                  borderColor: `${n.color}30`,
                  color: n.color,
                  background: `${n.color}10`,
                }}
              >
                {n.emoji} {n.label.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Stage filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['Tous les stades', 'Idée', 'Prototype', 'MVP', 'Croissance', 'Impact prouvé'].map((s) => (
              <button
                key={s}
                className="px-3 py-1 rounded-lg text-xs text-slate-400 border border-white/8 hover:border-white/20 hover:text-white transition-all"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Results info */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-slate-500 text-sm">
              <span className="text-white font-semibold">{mockDreamPages.length}</span> Dream Pages affichées
              <span className="text-slate-600 ml-2">sur 15 678 publiées</span>
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Trier par :</span>
              <select className="bg-transparent text-slate-400 border border-white/8 rounded px-2 py-1">
                <option>Score IA</option>
                <option>Plus récent</option>
                <option>Health Score</option>
                <option>OIP Points</option>
              </select>
            </div>
          </div>

          {/* V2 constellation teaser */}
          <div className="glass-card p-6 mb-8 border border-purple-500/15 relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none">
              {/* Decorative dots simulating a constellation */}
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {[
                  [30, 40], [80, 20], [150, 60], [120, 100], [60, 130], [170, 140], [40, 170], [100, 160]
                ].map(([cx, cy], i) => (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r={3 + (i % 3)} fill="#8b5cf6" opacity={0.8} />
                    {i < 7 && (
                      <line
                        x1={cx} y1={cy}
                        x2={[80, 150, 120, 60, 170, 40, 100][i]} y2={[20, 60, 100, 130, 140, 170, 160][i]}
                        stroke="#6366f1" strokeWidth="0.5" opacity={0.3}
                      />
                    )}
                  </g>
                ))}
              </svg>
            </div>
            <div className="relative">
              <span className="dream-badge mb-2 inline-block">Bientôt — V2</span>
              <h3 className="text-white font-bold mb-1">Dream Constellation 3D ✨</h3>
              <p className="text-slate-400 text-sm max-w-lg">
                Visualisation spatiale interactive de tous les projets — Graph Neural Network pour le clustering,
                navigation 3D immersive, signaux de chaleur en temps réel.
              </p>
            </div>
          </div>

          {/* Dream Pages grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mockDreamPages.map((page) => (
              <DreamPageCard key={page.id} page={page} />
            ))}
          </div>

          {/* Load more */}
          <div className="text-center mt-8">
            <button className="px-8 py-3 glass-card rounded-xl text-indigo-300 hover:text-white hover:bg-indigo-500/10 transition-all border border-indigo-500/20 text-sm font-semibold">
              Charger plus de Dream Pages (15 672 restantes)
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
