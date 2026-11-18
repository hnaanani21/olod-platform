'use client';

import { useState } from 'react';
import Link from 'next/link';

const CATEGORIES = ['Tous', 'Tech', 'Art', 'Science', 'Impact', 'Éducation', 'Environnement', 'Santé', 'Finance', 'Culture'];
const STAGES = ['Tous les stades', 'Idée', 'Prototype', 'MVP', 'Croissance', 'Impact prouvé'];
const SORT_OPTIONS = ['Score IA', 'Plus récent', 'Plus populaire', 'Compatibilité'];

const DREAM_PAGES = [
  {
    id: 1, title: 'GreenIAfrica', subtitle: 'IA au service de l\'agriculture africaine',
    category: 'Tech', stage: 'MVP', stageColor: '#6366f1',
    desc: 'Plateforme d\'IA qui analyse les sols et prédit les rendements pour 50M de petits agriculteurs africa...',
    tags: ['IA', 'Agriculture', 'Afrique'], match: 82, links: 34, views: '1.2K',
    owner: 'YE', ownerColor: '#6366f1', updated: 'Il y a 1sem', accent: '#10b981',
  },
  {
    id: 2, title: 'EduVerse Morocco', subtitle: 'L\'université virtuelle du Maghreb',
    category: 'Éducation', stage: 'Prototype', stageColor: '#f59e0b',
    desc: 'Plateforme d\'éducation immersive VR/AR pour démocratiser l\'accès à l\'enseignement supérieur au Maroc...',
    tags: ['VR', 'Education', 'Maghreb'], match: 76, links: 28, views: '890',
    owner: 'FA', ownerColor: '#ec4899', updated: 'Il y a 1sem', accent: '#8b5cf6',
  },
  {
    id: 3, title: 'SolarMini Grid', subtitle: 'Électricité solaire pour villages isolés',
    category: 'Environnement', stage: 'Croissance', stageColor: '#10b981',
    desc: 'Mini-réseaux solaires intelligents pour 500 villages sans électricité en Afrique subsaharienne.',
    tags: ['Solaire', 'Énergie', 'Afrique'], match: 91, links: 67, views: '2.1K',
    owner: 'AD', ownerColor: '#f59e0b', updated: 'Il y a 3j', accent: '#f59e0b',
  },
  {
    id: 4, title: 'ArtChain', subtitle: 'NFTs pour artistes africains',
    category: 'Art', stage: 'MVP', stageColor: '#6366f1',
    desc: 'Marketplace décentralisé permettant aux artistes africains de monétiser leur art via NFTs et royalties automatiques.',
    tags: ['NFT', 'Art', 'Web3'], match: 71, links: 19, views: '654',
    owner: 'MB', ownerColor: '#06b6d4', updated: 'Il y a 2sem', accent: '#ec4899',
  },
  {
    id: 5, title: 'MedConnect Africa', subtitle: 'Télémédecine pour l\'Afrique rurale',
    category: 'Santé', stage: 'Prototype', stageColor: '#f59e0b',
    desc: 'Plateforme de téléconsultation médicale adaptée aux zones à faible connectivité, avec IA de diagnostic.',
    tags: ['Santé', 'IA', 'Rural'], match: 68, links: 41, views: '1.5K',
    owner: 'KA', ownerColor: '#10b981', updated: 'Il y a 4j', accent: '#3b82f6',
  },
  {
    id: 6, title: 'WaterDAO', subtitle: 'Gouvernance décentralisée de l\'eau',
    category: 'Impact', stage: 'Prototype', stageColor: '#f59e0b',
    desc: 'DAO pour la gestion collective et transparente des ressources en eau dans les communautés rurales.',
    tags: ['DAO', 'Eau', 'Impact Social'], match: 79, links: 23, views: '789',
    owner: 'SB', ownerColor: '#8b5cf6', updated: 'Il y a 1sem', accent: '#06b6d4',
  },
  {
    id: 7, title: 'OLOD Platform', subtitle: 'Le réseau social des rêves',
    category: 'Tech', stage: 'Croissance', stageColor: '#10b981',
    desc: 'Réseau social collaboratif qui transforme les rêves en réalisations via l\'intelligence collective.',
    tags: ['Next.js', 'IA', 'Communauté'], match: 97, links: 128, views: '5.4K',
    owner: 'HN', ownerColor: '#6366f1', updated: 'Il y a 1j', accent: '#6366f1',
  },
  {
    id: 8, title: 'Digital Twin H₂', subtitle: 'Stockage hydrogène thermochimique',
    category: 'Science', stage: 'MVP', stageColor: '#6366f1',
    desc: 'Jumeau numérique d\'un système de stockage thermochimique de l\'hydrogène à base de phosphogypse.',
    tags: ['Digital Twins', 'Hydrogène', 'UM6P'], match: 94, links: 15, views: '342',
    owner: 'HN', ownerColor: '#6366f1', updated: 'Il y a 3j', accent: '#06b6d4',
  },
];

const STAGE_COLORS: Record<string, string> = {
  'Idée': '#94a3b8',
  'Prototype': '#f59e0b',
  'MVP': '#6366f1',
  'Croissance': '#10b981',
  'Impact prouvé': '#ec4899',
};

export default function DreamGraphPage() {
  const [category, setCategory] = useState('Tous');
  const [stage, setStage] = useState('Tous les stades');
  const [sort, setSort] = useState('Score IA');
  const [search, setSearch] = useState('');

  const filtered = DREAM_PAGES.filter(p =>
    (category === 'Tous' || p.category === category) &&
    (stage === 'Tous les stades' || p.stage === stage) &&
    (search === '' || p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(search.toLowerCase())))
  ).sort((a, b) => {
    if (sort === 'Score IA' || sort === 'Compatibilité') return b.match - a.match;
    if (sort === 'Plus populaire') return parseInt(b.views.replace('K', '000').replace('.', '')) - parseInt(a.views.replace('K', '000').replace('.', ''));
    return 0;
  });

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#0d0f1f' }}>
      {/* Top nav */}
      <nav className="border-b border-white/5 px-6 py-3 flex items-center gap-6" style={{ backgroundColor: '#0d0f1f' }}>
        <div className="flex items-center gap-2 mr-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
            <span className="font-black text-white text-sm">OL</span>
          </div>
          <div>
            <div className="font-bold text-white text-sm leading-none">OLOD</div>
            <div className="text-xs text-white/40 leading-none">One Life One Dream</div>
          </div>
        </div>
        <div className="flex items-center gap-5 text-sm text-white/60">
          <Link href="/dashboard" className="hover:text-white transition-colors flex items-center gap-1.5">
            <span>📊</span> Dashboard
          </Link>
          <span className="text-white flex items-center gap-1.5 border-b-2 border-purple-500 pb-0.5">
            <span>🕸️</span> Dream Graph
          </span>
          <Link href="/opportunities" className="hover:text-white transition-colors flex items-center gap-1.5">
            <span>✨</span> Matching
          </Link>
          <Link href="/projects" className="hover:text-white transition-colors flex items-center gap-1.5">
            <span>🚀</span> Missions
          </Link>
          <Link href="/nations" className="hover:text-white transition-colors flex items-center gap-1.5">
            <span>🌍</span> Nations
          </Link>
          <span className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer">
            <span>🏅</span> OIP Points
          </span>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-3 py-1.5">
            <span className="text-orange-400 text-sm">🔥</span>
            <span className="font-bold text-white">2 840</span>
            <span className="text-xs text-amber-400 font-semibold">OIP</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center font-bold text-sm">
            HN
          </div>
        </div>
      </nav>

      <div className="px-6 py-6">
        {/* Breadcrumb + V2 banner */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs bg-purple-500/20 border border-purple-500/40 text-purple-300 rounded-full px-3 py-1 font-medium">
            V1 — LISTE &amp; FILTRES
          </span>
          <span className="text-xs text-white/30">Constellation 3D en V2</span>
        </div>

        <h1 className="text-3xl font-black text-white mb-1">Dream Graph™</h1>
        <p className="text-white/50 mb-6">Explorez toutes les Dream Pages — recherche sémantique RAG</p>

        {/* Search */}
        <div className="flex gap-3 mb-5">
          <div className="flex-1 relative">
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Recherche sémantique — ex: projet IA agriculture Afrique..."
              className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-purple-500 border border-white/10"
              style={{ backgroundColor: '#1a1f35' }}
            />
          </div>
          <button className="px-5 py-3 rounded-xl text-sm font-semibold text-white border border-white/20 hover:border-purple-500/60 transition-all"
            style={{ backgroundColor: '#1a1f35' }}>
            RAG SÉMANTIQUE
          </button>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-3">
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setCategory(c)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
                category === c
                  ? 'bg-white text-black border-white font-medium'
                  : 'border-white/20 text-white/60 hover:border-white/40'
              }`}
              style={category !== c ? { backgroundColor: '#1a1f35' } : {}}>
              {c === 'Tous' ? c : `${
                c === 'Tech' ? '🚀' : c === 'Art' ? '🎨' : c === 'Science' ? '⚗️' :
                c === 'Impact' ? '💛' : c === 'Éducation' ? '📚' : c === 'Environnement' ? '🌿' :
                c === 'Santé' ? '❤️' : c === 'Finance' ? '💎' : '🌐'
              } ${c}`}
            </button>
          ))}
        </div>

        {/* Stage filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {STAGES.map(s => (
            <button key={s} onClick={() => setStage(s)}
              className={`px-3 py-1 rounded-full text-xs border transition-all ${
                stage === s
                  ? 'bg-white/20 border-white/40 text-white font-medium'
                  : 'border-white/10 text-white/50 hover:border-white/25'
              }`}
              style={{ backgroundColor: stage === s ? undefined : '#1a1f35' }}>
              {s}
            </button>
          ))}
        </div>

        {/* Count + sort */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-white/60">
            <span className="font-semibold text-white">{filtered.length}</span> Dream Pages affichées{' '}
            <span className="text-white/30">sur 15 678 publiées</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-white/40">Trier par :</span>
            <select value={sort} onChange={e => setSort(e.target.value)}
              className="text-sm text-white border border-white/20 rounded-lg px-3 py-1.5 focus:outline-none"
              style={{ backgroundColor: '#1a1f35' }}>
              {SORT_OPTIONS.map(o => <option key={o} value={o} className="bg-[#1a1f35]">{o}</option>)}
            </select>
          </div>
        </div>

        {/* V2 teaser card */}
        <div className="mb-5 rounded-2xl border border-white/10 p-5 relative overflow-hidden"
          style={{ backgroundColor: '#12162a' }}>
          <div className="absolute inset-0 opacity-20"
            style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(99,102,241,0.4) 0%, transparent 60%)' }} />
          <div className="relative">
            <span className="text-xs bg-white/10 border border-white/20 text-white/60 rounded-full px-3 py-1 font-medium">BIENTÔT — V2</span>
            <h3 className="text-xl font-bold text-white mt-2 mb-1">Dream Constellation 3D ✨</h3>
            <p className="text-sm text-white/60 max-w-md">
              Visualisation spatiale interactive de tous les projets — Graph Neural Network pour le clustering, navigation 3D immersive, signaux de chaleur en temps réel.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(p => (
            <div key={p.id}
              className="rounded-2xl border border-white/10 hover:border-white/20 p-5 cursor-pointer transition-all group"
              style={{ backgroundColor: '#12162a' }}>
              {/* Category + stage */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 rounded-full" style={{ backgroundColor: p.accent }} />
                  <span className="text-xs text-white/50">{p.category}</span>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                  style={{ backgroundColor: `${STAGE_COLORS[p.stage]}20`, color: STAGE_COLORS[p.stage], border: `1px solid ${STAGE_COLORS[p.stage]}40` }}>
                  {p.stage.toUpperCase()}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-white text-lg mb-1 group-hover:text-purple-300 transition-colors">{p.title}</h3>
              <p className="text-sm font-medium mb-2" style={{ color: p.accent }}>{p.subtitle}</p>
              <p className="text-sm text-white/50 mb-3 line-clamp-2">{p.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2.5 py-0.5 rounded-full border border-white/10 text-white/50"
                    style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between text-xs text-white/40">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.match >= 85 ? '#10b981' : p.match >= 70 ? '#f59e0b' : '#94a3b8' }} />
                    {p.match}%
                  </span>
                  <span>🔗 {p.links}</span>
                  <span>👁️ {p.views}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: `${p.ownerColor}33`, color: p.ownerColor }}>
                    {p.owner}
                  </div>
                  <span>{p.updated}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-white/40">
            <p className="text-4xl mb-3">🔍</p>
            <p>Aucune Dream Page trouvée</p>
          </div>
        )}
      </div>
    </div>
  );
}
