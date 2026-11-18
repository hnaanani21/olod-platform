'use client';

import { useState } from 'react';
import Link from 'next/link';

const NATIONS = [
  { id: 'batisseurs', name: 'Dream Nation Bâtisseurs', icon: '🏗️', color: '#10b981', members: 1247, projects: 89, joined: true, main: true,
    desc: 'Pour ceux qui construisent, développent et créent des solutions concrètes. Entrepreneurs, développeurs, ingénieurs.',
    tags: ['Entrepreneuriat', 'Tech', 'Innovation'], growth: '+23 ce mois' },
  { id: 'explorateurs', name: 'Dream Nation Explorateurs', icon: '🔭', color: '#6366f1', members: 865, projects: 54, joined: true, main: false,
    desc: 'Curieux, voyageurs et chercheurs de sens. Ceux qui explorent de nouveaux territoires, physiques ou intellectuels.',
    tags: ['Voyage', 'Recherche', 'Curiosité'], growth: '+15 ce mois' },
  { id: 'innovateurs', name: 'Dream Nation Innovateurs', icon: '⚡', color: '#3b82f6', members: 934, projects: 71, joined: true, main: false,
    desc: 'Scientifiques, chercheurs et technologues qui repoussent les limites du possible.',
    tags: ['Science', 'R&D', 'Technologies'], growth: '+31 ce mois' },
  { id: 'regeneration', name: 'Dream Nation Régénération', icon: '🌿', color: '#22c55e', members: 723, projects: 48, joined: false, main: false,
    desc: 'Champions de l\'environnement, de la durabilité et des systèmes régénératifs.',
    tags: ['Écologie', 'Durabilité', 'Impact'], growth: '+42 ce mois' },
  { id: 'creative', name: 'Dream Nation Créative', icon: '🎨', color: '#ec4899', members: 1089, projects: 112, joined: false, main: false,
    desc: 'Artistes, designers et créateurs de tous horizons. L\'expression sous toutes ses formes.',
    tags: ['Art', 'Design', 'Culture'], growth: '+28 ce mois' },
  { id: 'connect', name: 'Dream Nation Connect', icon: '🕸️', color: '#f59e0b', members: 678, projects: 35, joined: false, main: false,
    desc: 'Connecteurs et facilitateurs. Ceux qui créent des ponts entre les communautés et les projets.',
    tags: ['Réseau', 'Communication', 'Facilitation'], growth: '+19 ce mois' },
];

export default function NationsPage() {
  const [selected, setSelected] = useState<typeof NATIONS[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <div className="border-b border-white/5 px-6 py-4 flex items-center gap-4">
        <Link href="/dashboard" className="text-white/40 hover:text-white/80 text-sm">← Dashboard</Link>
        <div>
          <h1 className="text-2xl font-bold">Dream Nations</h1>
          <p className="text-sm text-white/40">Rejoignez des communautés partageant votre vision</p>
        </div>
      </div>

      <div className="p-6">
        {/* My nations */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">Mes Nations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {NATIONS.filter(n => n.joined).map(n => (
              <div key={n.id} onClick={() => setSelected(n)}
                className="relative bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl p-5 cursor-pointer transition-all"
                style={{ borderColor: n.main ? `${n.color}44` : undefined }}>
                {n.main && (
                  <span className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: `${n.color}22`, color: n.color, border: `1px solid ${n.color}44` }}>
                    Principale
                  </span>
                )}
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">{n.icon}</div>
                  <div>
                    <h3 className="font-bold text-white text-sm">{n.name.replace('Dream Nation ', '')}</h3>
                    <p className="text-xs text-white/40">{n.members.toLocaleString()} membres</p>
                  </div>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1 mb-2">
                  <div className="h-1 rounded-full" style={{ width: `${Math.min(100, n.members / 15)}%`, backgroundColor: n.color }} />
                </div>
                <div className="flex justify-between text-xs text-white/40">
                  <span>📋 {n.projects} projets</span>
                  <span style={{ color: n.color }}>↑ {n.growth}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All nations */}
        <h2 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">Toutes les Nations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {NATIONS.map(n => (
            <div key={n.id} onClick={() => setSelected(n)}
              className="bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl p-5 cursor-pointer transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ backgroundColor: `${n.color}20` }}>
                  {n.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-sm">{n.name.replace('Dream Nation ', '')}</h3>
                  <p className="text-xs text-white/40">{n.members.toLocaleString()} membres · {n.projects} projets</p>
                </div>
                {n.joined && (
                  <span className="text-xs px-2 py-0.5 rounded-full text-green-400 bg-green-400/10 border border-green-400/20">Membre</span>
                )}
              </div>
              <p className="text-sm text-white/60 mb-3 line-clamp-2">{n.desc}</p>
              <div className="flex gap-2 flex-wrap mb-3">
                {n.tags.map(t => (
                  <span key={t} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/50">{t}</span>
                ))}
              </div>
              {!n.joined && (
                <button className="w-full py-2 text-sm font-medium rounded-xl border transition-all hover:opacity-90"
                  style={{ backgroundColor: `${n.color}15`, borderColor: `${n.color}40`, color: n.color }}>
                  Rejoindre
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelected(null)}>
          <div className="bg-[#0d1225] border border-white/10 rounded-2xl p-6 max-w-lg w-full" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl">{selected.icon}</div>
              <div>
                <h2 className="text-xl font-bold text-white">{selected.name}</h2>
                <p className="text-sm text-white/50">{selected.members.toLocaleString()} membres · {selected.projects} projets actifs</p>
              </div>
              <button onClick={() => setSelected(null)} className="ml-auto text-white/30 hover:text-white/60">✕</button>
            </div>
            <p className="text-white/70 mb-4">{selected.desc}</p>
            <div className="flex gap-2 flex-wrap mb-6">
              {selected.tags.map(t => (
                <span key={t} className="px-3 py-1 rounded-full text-sm border" style={{ backgroundColor: `${selected.color}15`, borderColor: `${selected.color}30`, color: selected.color }}>
                  {t}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3 mb-6 text-center">
              <div className="bg-white/5 rounded-xl p-3">
                <p className="text-xl font-bold text-white">{selected.members.toLocaleString()}</p>
                <p className="text-xs text-white/40">Membres</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3">
                <p className="text-xl font-bold text-white">{selected.projects}</p>
                <p className="text-xs text-white/40">Projets</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3">
                <p className="text-xl font-bold" style={{ color: selected.color }}>{selected.growth}</p>
                <p className="text-xs text-white/40">Croissance</p>
              </div>
            </div>
            {selected.joined ? (
              <div className="text-center py-2 text-green-400 text-sm">✅ Vous êtes membre de cette Nation</div>
            ) : (
              <button className="w-full py-3 font-bold rounded-xl transition-all hover:opacity-90 text-white"
                style={{ background: `linear-gradient(135deg, ${selected.color}, ${selected.color}88)` }}>
                🏳️ Rejoindre la Nation
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
