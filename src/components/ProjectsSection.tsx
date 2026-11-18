'use client';

import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'OLOD Platform',
    tags: ['EdTech', 'IA', 'Innovation'],
    status: 'En cours',
    statusColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    progress: 72,
    progressColor: 'bg-green-500',
    description: 'Plateforme sociale de réalisation des rêves combinant IA, jumeaux numériques et communautés mondiales pour connecter les dreamers.',
    collaborators: 5,
    experts: 3,
    connections: 12,
    image: null,
  },
  {
    id: 2,
    title: 'Digital Twin H₂ Storage',
    tags: ['Énergie', 'Digital Twin', 'UM6P'],
    status: 'En cours',
    statusColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    progress: 55,
    progressColor: 'bg-blue-500',
    description: 'Jumeau numérique 3D du système de stockage thermochimique d\'hydrogène à base de phosphogypse du laboratoire LIMSET.',
    collaborators: 3,
    experts: 2,
    connections: 8,
    image: null,
  },
  {
    id: 3,
    title: 'COOPMARKET AI',
    tags: ['E-commerce', 'IA', 'Maroc'],
    status: 'Phase d\'idée',
    statusColor: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    progress: 28,
    progressColor: 'bg-orange-500',
    description: 'Marketplace virtuelle alimentée par l\'IA pour les coopératives et associations d\'artisans marocains.',
    collaborators: 2,
    experts: 1,
    connections: 5,
    image: null,
  },
];

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-white">Mes projets</h3>
        <button className="text-purple-400 text-sm hover:text-purple-300">Voir tous mes projets →</button>
      </div>
      <div className="space-y-3">
        {projects.map((p) => (
          <div key={p.id} className="border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-colors">
            <div className="flex gap-3 p-3">
              {/* Image placeholder */}
              <div className="w-24 h-20 rounded-lg bg-gradient-to-br from-blue-800 to-purple-900 flex-shrink-0 flex items-center justify-center text-2xl">
                {p.id === 1 ? '🌐' : p.id === 2 ? '⚗️' : '🛒'}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-semibold text-white text-sm">{p.title}</h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {p.tags.map((tag) => (
                        <span key={tag} className="text-xs text-white/50">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full border flex-shrink-0 ${p.statusColor}`}>
                    {p.status}
                  </span>
                </div>
                {/* Progress */}
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div className={`${p.progressColor} h-1.5 rounded-full transition-all`} style={{ width: `${p.progress}%` }} />
                    </div>
                    <span className="text-xs text-white/50 ml-2 flex-shrink-0">{p.progress}%</span>
                  </div>
                </div>
                <p className="text-xs text-white/60 mt-1 line-clamp-2">{p.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-3 text-xs text-white/40">
                    <span>👥 {p.collaborators} collaborateurs</span>
                    <span>🎓 {p.experts} experts</span>
                    <span>🔗 {p.connections} connexions</span>
                  </div>
                  <button className="text-xs bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-lg transition-colors">
                    Voir le projet →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
