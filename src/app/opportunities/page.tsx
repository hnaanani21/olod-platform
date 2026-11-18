'use client';

import { useState } from 'react';
import { AppShell } from '@/components/AppShell';

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
    <AppShell topBarTitle="Opportunités" topBarSubtitle={`Matchées à votre Dream Genome™ — ${filtered.length} trouvées`}>
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher..."
            className="flex-1 min-w-48 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }} />
          <div className="flex gap-2 flex-wrap">
            {TYPES.map(t => (
              <button key={t} onClick={() => setType(t)}
                className="px-3 py-2 rounded-lg text-xs border transition-all"
                style={type === t
                  ? { background: 'rgba(99,102,241,0.2)', borderColor: 'rgba(99,102,241,0.4)', color: '#a5b4fc' }
                  : { background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map(o => (
            <div key={o.id} className="rounded-2xl p-5 transition-all cursor-pointer"
              style={{ background: 'linear-gradient(145deg, #0e1628, #0a111e)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="flex items-start gap-4">
                <div className="text-3xl mt-1">{o.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="font-bold text-white">{o.title}</h3>
                    {o.urgent && (
                      <span className="text-xs px-2 py-0.5 rounded-full text-orange-400 bg-orange-400/10 border border-orange-400/20">Urgent</span>
                    )}
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ color: '#c4b5fd', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}>{o.type}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm mb-2 flex-wrap" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    <span>🏢 {o.org}</span>
                    <span>📍 {o.location}</span>
                    <span>💵 {o.salary}</span>
                  </div>
                  <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>{o.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {o.tags.map(t => (
                      <span key={t} className="px-2 py-0.5 rounded-full text-xs"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 text-right">
                  <div className="text-2xl font-black" style={{ color: o.match >= 90 ? '#10b981' : o.match >= 80 ? '#6366f1' : '#f59e0b' }}>
                    {o.match}%
                  </div>
                  <div className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>compatibilité</div>
                  <div className="w-16 rounded-full h-1 mb-4" style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <div className="h-1 rounded-full" style={{ width: `${o.match}%`, backgroundColor: o.match >= 90 ? '#10b981' : '#6366f1' }} />
                  </div>
                  <button className="px-4 py-2 rounded-lg text-sm font-medium transition-all text-white"
                    style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
                    Postuler
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <p className="text-4xl mb-3">🔍</p>
            <p>Aucune opportunité trouvée</p>
          </div>
        )}
      </div>
    </AppShell>
  );
}
