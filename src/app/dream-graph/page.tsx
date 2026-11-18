'use client';

import { AppShell } from '@/components/AppShell';
import DreamPageCard from '@/components/DreamPageCard';
import { mockDreamPages, dreamNations } from '@/lib/data';

export default function DreamGraphPage() {
  return (
    <AppShell topBarTitle="Dream Graph™" topBarSubtitle="Exploration sémantique RAG des Dream Pages">
      <div className="max-w-7xl mx-auto p-6">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold text-indigo-300 border border-indigo-500/30" style={{ background: 'rgba(99,102,241,0.1)' }}>V1 — Liste & Filtres</span>
            <span className="text-slate-600 text-xs">Constellation 3D en V2</span>
          </div>
          <h1 className="text-2xl font-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Dream Graph™</h1>
          <p className="text-slate-400 text-sm mt-1">Explorez toutes les Dream Pages — recherche sémantique RAG</p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">🔍</div>
          <input
            type="text"
            placeholder="Recherche sémantique — ex: projet IA agriculture Afrique…"
            className="w-full pl-10 pr-4 py-3.5 rounded-xl text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/40 transition-colors"
            style={{ background: 'linear-gradient(145deg, #0e1628, #0a111e)', border: '1px solid rgba(255,255,255,0.08)' }}
            readOnly
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold text-indigo-300 border border-indigo-500/30" style={{ background: 'rgba(99,102,241,0.1)' }}>RAG Sémantique</span>
          </div>
        </div>

        {/* Nation filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button className="px-3 py-1.5 rounded-lg text-xs font-semibold" style={{ background: 'rgba(99,102,241,0.15)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.2)' }}>
            Tous
          </button>
          {dreamNations.map((n) => (
            <button key={n.id} className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-all hover:scale-105"
              style={{ borderColor: `${n.color}30`, color: n.color, background: `${n.color}10` }}>
              {n.emoji} {n.label.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Stage filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['Tous les stades', 'Idée', 'Prototype', 'MVP', 'Croissance', 'Impact prouvé'].map((s) => (
            <button key={s} className="px-3 py-1 rounded-lg text-xs text-slate-400 border border-white/8 hover:border-white/20 hover:text-white transition-all">
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
            <select className="text-slate-400 rounded px-2 py-1" style={{ background: 'linear-gradient(145deg, #0e1628, #0a111e)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <option>Score IA</option>
              <option>Plus récent</option>
              <option>Health Score</option>
              <option>OIP Points</option>
            </select>
          </div>
        </div>

        {/* V2 constellation teaser */}
        <div className="p-6 mb-8 rounded-2xl relative overflow-hidden" style={{ background: 'linear-gradient(145deg, #0e1628, #0a111e)', border: '1px solid rgba(139,92,246,0.15)' }}>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {[[30,40],[80,20],[150,60],[120,100],[60,130],[170,140],[40,170],[100,160]].map(([cx,cy],i) => (
                <g key={i}>
                  <circle cx={cx} cy={cy} r={3+(i%3)} fill="#8b5cf6" opacity={0.8} />
                  {i < 7 && <line x1={cx} y1={cy} x2={[80,150,120,60,170,40,100][i]} y2={[20,60,100,130,140,170,160][i]} stroke="#6366f1" strokeWidth="0.5" opacity={0.3} />}
                </g>
              ))}
            </svg>
          </div>
          <div className="relative">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold text-purple-300 border border-purple-500/30 mb-2" style={{ background: 'rgba(139,92,246,0.1)' }}>Bientôt — V2</span>
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

        <div className="text-center mt-8">
          <button className="px-8 py-3 rounded-xl text-indigo-300 hover:text-white hover:bg-indigo-500/10 transition-all border border-indigo-500/20 text-sm font-semibold" style={{ background: 'linear-gradient(145deg, #0e1628, #0a111e)' }}>
            Charger plus (15 672 restantes)
          </button>
        </div>
      </div>
    </AppShell>
  );
}
