'use client';

import { useState } from 'react';
import Link from 'next/link';

const OPPORTUNITIES = [
  { id: 1, title: 'Expert Digital Twins industriels', org: 'OCP Group', location: 'Benguerir, Maroc', type: 'Mission', match: 97, salary: '15–25k MAD/mois', tags: ['Digital Twins', 'IoT', 'Industrie 4.0'], icon: '🏭', urgent: true,
    desc: 'OCP Group recherche un expert Digital Twins pour accompagner la transformation numérique de ses sites miniers au Maroc.' },
  { id: 2, title: 'CTO Startup EnerTech', org: 'GreenEnergy Casablanca', location: 'Casablanca, Maroc', type: 'Startup', match: 93, salary: 'Equity + salaire', tags: ['Énergie', 'IA', 'Leadership'], icon: '⚡', urgent: false,
    desc: 'Startup cleantech Series A recherche son CTO pour développer une plateforme IA de gestion énergétique intelligente.' },
  { id: 3, title: 'Data Engineer / MLOps', org: 'IRESEN', location: 'Rabat, Maroc', type: 'CDI', match: 88, salary: '12–18k MAD/mois', tags: ['Python', 'ML', 'Azure'], icon: '📊', urgent: false,
    desc: 'Institut de Recherche en Énergie Solaire et Énergies Nouvelles cherche profil MLOps pour ses projets de modélisation.' },
  { id: 4, title: 'Investisseur Green H₂ Project', org: 'Impact Investor Network', location: 'Remote', type: 'Financement', match: 82, salary: '500k–2M MAD', tags: ['Hydrogène', 'Financement', 'Impact'], icon: '💰', urgent: false,
    desc: 'Réseau d\'investisseurs impact cherche des projets hydrogène vert innovants pour financement et accompagnement.' },
  { id: 5, title: 'Formateur Python & ML', org: 'UM6P / OCP School of Business', location: 'Benguerir, Maroc', type: 'Formation', match: 95, salary: '5–8k MAD/session', tags: ['Formation', 'Python', 'ML'], icon: '🎓', urgent: true,
    desc: 'UM6P School of Business recherche des formateurs pour animer des sessions Python & Machine Learning pour managers.' },
  { id: 6, title: 'Co-fondateur plateforme EdTech', org: 'Projet OLOD Nation', location: 'Remote/Maroc', type: 'Co-founding', match: 79, salary: 'Equity', tags: ['Éducation', 'Tech', 'Communauté'], icon: '🤝', urgent: false,
    desc: 'Membre de la Nation Bâtisseurs cherche co-fondateur tech pour une plateforme d\'apprentissage adaptatif.' },
];

const TYPES = ['Tous', 'Mission', 'CDI', 'Startup', 'Financement', 'Formation', 'Co-founding'];

export default function OpportunitiesPage() {
  const [type, setType] = useState('Tous');
  const [search, setSearch] = useState('');

  const filtered = OPPORTUNITIES.filter(o =>
    (type === 'Tous' || o.type === type) &&
    (search === '' || o.title.toLowerCase().includes(search.toLowerCase()) || o.tags.some(t => t.toLowerCase().includes(search.toLowerCase())))
  );

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <div className="border-b border-white/5 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-white/40 hover:text-white/80 text-sm">← Dashboard</Link>
            <div>
              <h1 className="text-2xl font-bold">Opportunités</h1>
              <p className="text-sm text-white/40">Matchées à votre Dream Genome™ — 85% de compatibilité</p>
            </div>
          </div>
          <div className="text-sm text-green-400 bg-green-400/10 border border-green-400/20 rounded-full px-3 py-1">
            🧬 {filtered.length} opportunités trouvées
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher..."
            className="flex-1 min-w-48 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-purple-500" />
          <div className="flex gap-2 flex-wrap">
            {TYPES.map(t => (
              <button key={t} onClick={() => setType(t)}
                className={`px-3 py-2 rounded-lg text-xs border transition-all ${type === t ? 'bg-blue-500/20 border-blue-500/40 text-blue-300' : 'bg-white/5 border-white/10 text-white/50 hover:border-white/20'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map(o => (
            <div key={o.id} className="bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl p-5 transition-all cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-3xl mt-1">{o.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="font-bold text-white">{o.title}</h3>
                    {o.urgent && (
                      <span className="text-xs px-2 py-0.5 rounded-full text-orange-400 bg-orange-400/10 border border-orange-400/20">Urgent</span>
                    )}
                    <span className="text-xs px-2 py-0.5 rounded-full text-purple-300 bg-purple-500/10 border border-purple-500/20">{o.type}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/50 mb-2 flex-wrap">
                    <span>🏢 {o.org}</span>
                    <span>📍 {o.location}</span>
                    <span>💵 {o.salary}</span>
                  </div>
                  <p className="text-sm text-white/60 mb-3">{o.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {o.tags.map(t => (
                      <span key={t} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/50">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 text-right">
                  <div className="text-2xl font-black" style={{ color: o.match >= 90 ? '#10b981' : o.match >= 80 ? '#3b82f6' : '#f59e0b' }}>
                    {o.match}%
                  </div>
                  <div className="text-xs text-white/40 mb-3">compatibilité</div>
                  <div className="w-16 bg-white/10 rounded-full h-1 mb-4">
                    <div className="h-1 rounded-full" style={{ width: `${o.match}%`, backgroundColor: o.match >= 90 ? '#10b981' : '#3b82f6' }} />
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 rounded-lg text-sm font-medium transition-all">
                    Postuler
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-white/40">
            <p className="text-4xl mb-3">🔍</p>
            <p>Aucune opportunité trouvée</p>
          </div>
        )}
      </div>
    </div>
  );
}
