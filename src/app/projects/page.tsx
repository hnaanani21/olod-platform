'use client';

import { useState } from 'react';
import Link from 'next/link';

const PROJECTS = [
  {
    id: 1, title: 'OLOD Platform', owner: 'Dr Hassan NAANANI', status: 'En cours', progress: 72,
    nation: 'Bâtisseurs', collaborators: 5, votes: 48, category: 'Tech & Digital',
    desc: 'Réseau social collaboratif pour transformer les rêves en réalisations. Intelligence collective au service des projets à impact.',
    tags: ['Next.js', 'IA', 'Communauté'], icon: '🌐',
  },
  {
    id: 2, title: 'Digital Twin H₂ Storage', owner: 'Dr Hassan NAANANI', status: 'En cours', progress: 55,
    nation: 'Innovateurs', collaborators: 3, votes: 31, category: 'Science & Technologies',
    desc: 'Jumeau numérique d\'un système de stockage d\'hydrogène par voie thermochimique (phosphogypse). Simulation physique haute-fidélité.',
    tags: ['Unity 3D', 'Python', 'Hydrogène'], icon: '⚗️',
  },
  {
    id: 3, title: 'COOPMARKET AI', owner: 'Dr Hassan NAANANI', status: 'Phase d\'idée', progress: 28,
    nation: 'Bâtisseurs', collaborators: 2, votes: 17, category: 'Entrepreneuriat',
    desc: 'Marketplace IA pour les coopératives et artisans marocains. Mise en relation intelligente producteurs–acheteurs à l\'international.',
    tags: ['IA', 'E-commerce', 'Impact Social'], icon: '🛒',
  },
  {
    id: 4, title: 'GreenH₂ Executive Platform', owner: 'Sarah K.', status: 'En cours', progress: 61,
    nation: 'Innovateurs', collaborators: 8, votes: 55, category: 'Écologie & Énergie',
    desc: 'Plateforme de formation et d\'évaluation d\'impact pour le Master Exécutif Hydrogène Vert de l\'UM6P.',
    tags: ['Éducation', 'Hydrogène', 'UM6P'], icon: '🌱',
  },
  {
    id: 5, title: 'SAWH Water Harvester', owner: 'Ali B.', status: 'Prototype', progress: 42,
    nation: 'Innovateurs', collaborators: 4, votes: 29, category: 'Développement Durable',
    desc: 'Capteur solaire d\'eau atmosphérique intelligent avec jumeau numérique temps réel pour les zones arides d\'Afrique.',
    tags: ['IoT', 'Blender', 'Azure'], icon: '💧',
  },
  {
    id: 6, title: 'OTOMOTO SaaS', owner: 'Sofia M.', status: 'En cours', progress: 38,
    nation: 'Bâtisseurs', collaborators: 3, votes: 22, category: 'Tech & Digital',
    desc: 'Agent IA pour la gestion des pièces détachées automobiles au Maroc. Catalogue intelligent, devis automatique, veille fournisseurs.',
    tags: ['IA', 'SaaS', 'Automobile'], icon: '🚗',
  },
];

const CATEGORIES = ['Tous', 'Tech & Digital', 'Science & Technologies', 'Entrepreneuriat', 'Écologie & Énergie', 'Développement Durable'];

const STATUS_COLORS: Record<string, string> = {
  'En cours': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  'Phase d\'idée': 'text-orange-400 bg-orange-400/10 border-orange-400/20',
  'Prototype': 'text-purple-400 bg-purple-400/10 border-purple-400/20',
};

export default function ProjectsPage() {
  const [category, setCategory] = useState('Tous');
  const [search, setSearch] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const filtered = PROJECTS.filter(p =>
    (category === 'Tous' || p.category === category) &&
    (search === '' || p.title.toLowerCase().includes(search.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(search.toLowerCase())))
  );

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Header */}
      <div className="border-b border-white/5 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-white/40 hover:text-white/80 text-sm">← Dashboard</Link>
            <div>
              <h1 className="text-2xl font-bold">Projets OLOD</h1>
              <p className="text-sm text-white/40">Découvrez et rejoignez des projets à impact</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 rounded-xl font-medium text-sm transition-all">
            + Créer un projet
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="relative flex-1 min-w-48">
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher un projet..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-purple-500" />
          </div>
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setCategory(c)}
                className={`px-3 py-2 rounded-lg text-xs border transition-all ${category === c ? 'bg-blue-500/20 border-blue-500/40 text-blue-300' : 'bg-white/5 border-white/10 text-white/50 hover:border-white/20'}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="flex gap-1 bg-white/5 border border-white/10 rounded-lg p-1">
            <button onClick={() => setView('grid')} className={`px-2.5 py-1 rounded text-xs transition-all ${view === 'grid' ? 'bg-white/10 text-white' : 'text-white/40'}`}>⊞</button>
            <button onClick={() => setView('list')} className={`px-2.5 py-1 rounded text-xs transition-all ${view === 'list' ? 'bg-white/10 text-white' : 'text-white/40'}`}>≡</button>
          </div>
        </div>

        {/* Grid */}
        <div className={view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-3'}>
          {filtered.map(p => (
            <div key={p.id}
              className={`bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl p-5 cursor-pointer transition-all hover:bg-white/8 ${view === 'list' ? 'flex items-center gap-5' : ''}`}>
              <div className={`flex items-start gap-3 ${view === 'list' ? 'flex-1' : 'mb-3'}`}>
                <div className="text-3xl">{p.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-bold text-white">{p.title}</h3>
                    <span className={`px-2 py-0.5 text-xs rounded-full border ${STATUS_COLORS[p.status] || 'text-white/50 bg-white/5 border-white/10'}`}>
                      {p.status}
                    </span>
                  </div>
                  <p className="text-xs text-white/50 mb-1">{p.owner}</p>
                  {view === 'grid' && <p className="text-sm text-white/60 line-clamp-2">{p.desc}</p>}
                </div>
              </div>

              {view === 'list' && <p className="text-sm text-white/60 w-80 flex-shrink-0 line-clamp-1">{p.desc}</p>}

              <div className={view === 'grid' ? 'mt-4' : 'flex items-center gap-6 flex-shrink-0'}>
                {view === 'grid' && (
                  <>
                    <div className="flex gap-2 mb-3 flex-wrap">
                      {p.tags.map(t => (
                        <span key={t} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/50">{t}</span>
                      ))}
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between text-xs text-white/50 mb-1">
                        <span>Avancement</span>
                        <span>{p.progress}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full" style={{ width: `${p.progress}%` }} />
                      </div>
                    </div>
                  </>
                )}
                <div className={`flex items-center ${view === 'grid' ? 'justify-between' : 'gap-4'} text-xs text-white/40`}>
                  <span>👥 {p.collaborators}</span>
                  <span>❤️ {p.votes}</span>
                  <span className="text-purple-300">🏳️ {p.nation}</span>
                  {view === 'grid' && (
                    <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">Voir →</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-white/40">
            <p className="text-4xl mb-3">🔍</p>
            <p>Aucun projet trouvé pour &quot;{search}&quot;</p>
          </div>
        )}
      </div>
    </div>
  );
}
