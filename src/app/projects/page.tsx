'use client';

import { useState } from 'react';
import { AppShell } from '@/components/AppShell';

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
    <AppShell topBarTitle="Projets OLOD" topBarSubtitle="Découvrez et rejoignez des projets à impact">
      <div className="max-w-7xl mx-auto p-6">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="relative flex-1 min-w-48">
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher un projet..."
              className="w-full border rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none"
              style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }} />
          </div>
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setCategory(c)}
                className="px-3 py-2 rounded-lg text-xs border transition-all"
                style={category === c
                  ? { background: 'rgba(99,102,241,0.2)', borderColor: 'rgba(99,102,241,0.4)', color: '#a5b4fc' }
                  : { background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
                {c}
              </button>
            ))}
          </div>
          <div className="flex gap-1 rounded-lg p-1" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <button onClick={() => setView('grid')} className="px-2.5 py-1 rounded text-xs transition-all"
              style={{ background: view === 'grid' ? 'rgba(255,255,255,0.1)' : 'transparent', color: view === 'grid' ? 'white' : 'rgba(255,255,255,0.4)' }}>⊞</button>
            <button onClick={() => setView('list')} className="px-2.5 py-1 rounded text-xs transition-all"
              style={{ background: view === 'list' ? 'rgba(255,255,255,0.1)' : 'transparent', color: view === 'list' ? 'white' : 'rgba(255,255,255,0.4)' }}>≡</button>
          </div>
          <button className="px-4 py-2 rounded-xl font-medium text-sm transition-all text-white"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
            + Créer un projet
          </button>
        </div>

        {/* Grid */}
        <div className={view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-3'}>
          {filtered.map(p => (
            <div key={p.id}
              className={`rounded-2xl p-5 cursor-pointer transition-all ${view === 'list' ? 'flex items-center gap-5' : ''}`}
              style={{ background: 'linear-gradient(145deg, #0e1628, #0a111e)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className={`flex items-start gap-3 ${view === 'list' ? 'flex-1' : 'mb-3'}`}>
                <div className="text-3xl">{p.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-bold text-white">{p.title}</h3>
                    <span className={`px-2 py-0.5 text-xs rounded-full border ${STATUS_COLORS[p.status] || 'text-white/50 bg-white/5 border-white/10'}`}>
                      {p.status}
                    </span>
                  </div>
                  <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{p.owner}</p>
                  {view === 'grid' && <p className="text-sm line-clamp-2" style={{ color: 'rgba(255,255,255,0.6)' }}>{p.desc}</p>}
                </div>
              </div>

              {view === 'list' && <p className="text-sm w-80 flex-shrink-0 line-clamp-1" style={{ color: 'rgba(255,255,255,0.6)' }}>{p.desc}</p>}

              <div className={view === 'grid' ? 'mt-4' : 'flex items-center gap-6 flex-shrink-0'}>
                {view === 'grid' && (
                  <>
                    <div className="flex gap-2 mb-3 flex-wrap">
                      {p.tags.map(t => (
                        <span key={t} className="px-2 py-0.5 rounded-full text-xs"
                          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>{t}</span>
                      ))}
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between text-xs mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        <span>Avancement</span>
                        <span>{p.progress}%</span>
                      </div>
                      <div className="w-full rounded-full h-1.5" style={{ background: 'rgba(255,255,255,0.1)' }}>
                        <div className="h-1.5 rounded-full" style={{ width: `${p.progress}%`, background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }} />
                      </div>
                    </div>
                  </>
                )}
                <div className={`flex items-center ${view === 'grid' ? 'justify-between' : 'gap-4'} text-xs`} style={{ color: 'rgba(255,255,255,0.4)' }}>
                  <span>👥 {p.collaborators}</span>
                  <span>❤️ {p.votes}</span>
                  <span style={{ color: '#c4b5fd' }}>🏳️ {p.nation}</span>
                  {view === 'grid' && (
                    <button className="text-xs transition-colors" style={{ color: '#818cf8' }}>Voir →</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <p className="text-4xl mb-3">🔍</p>
            <p>Aucun projet trouvé pour &quot;{search}&quot;</p>
          </div>
        )}
      </div>
    </AppShell>
  );
}
