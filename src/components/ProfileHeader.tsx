'use client';

import { useState } from 'react';

export default function ProfileHeader() {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="relative">
      {/* Hero banner */}
      <div className="h-40 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40"
          style={{ background: 'radial-gradient(ellipse at 30% 50%, #1e3a5f 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, #4c1d95 0%, transparent 60%)' }} />
        <div className="absolute inset-0 flex items-center justify-end pr-8">
          <div className="text-right">
            <div className="text-white/20 text-6xl font-black tracking-widest select-none">DREAM</div>
          </div>
        </div>
      </div>

      {/* Profile row */}
      <div className="bg-[#0d1225] border-b border-white/10 px-6 pb-4">
        <div className="flex items-end gap-5 -mt-12">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 rounded-full border-4 border-[#0d1225] bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden flex items-center justify-center">
              <img
                src="/hassan-avatar.jpg"
                alt="Dr Hassan NAANANI"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="absolute text-2xl font-bold text-white">HN</span>
            </div>
            <div className="absolute bottom-1 right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 pt-14">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold text-white">Dr Hassan NAANANI</h1>
                  <span className="text-blue-400">✓</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60 mt-0.5">
                  <span className="bg-purple-600/30 border border-purple-500/40 text-purple-300 px-2 py-0.5 rounded-full text-xs font-medium">Innovateur</span>
                  <span>•</span>
                  <span>Niveau 7</span>
                  <span>•</span>
                  <span>🇲🇦 Maroc</span>
                  <span>•</span>
                  <span>Benguerir, UM6P</span>
                </div>
                <p className="text-sm text-white/70 italic mt-1">
                  &ldquo;La technologie au service de l&apos;humain — construire un avenir durable par l&apos;IA et l&apos;innovation.&rdquo;
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['IA & Digital Twins', 'Hydrogène Vert', 'EdTech', 'Innovation', 'Énergie Durable', '+3'].map((tag) => (
                    <span key={tag} className="bg-white/10 hover:bg-white/15 border border-white/10 text-white/70 text-xs px-2 py-0.5 rounded-full cursor-pointer transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dream Genome */}
              <div className="flex items-center gap-6 mt-2">
                <div className="flex items-center gap-3">
                  <div className="relative w-16 h-16">
                    <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2.5" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#8b5cf6" strokeWidth="2.5"
                        strokeDasharray="85 100" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-white">85%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Dream Genome™</p>
                    <p className="text-xs text-white/50">Affinités • 4 Nations</p>
                  </div>
                </div>

                {/* Nations */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs text-white/50">Mes Nations</p>
                    <button className="text-purple-400 text-xs hover:text-purple-300">Voir tout →</button>
                  </div>
                  <div className="flex gap-2">
                    {[
                      { icon: '🌱', label: 'Bâtisseurs', main: true },
                      { icon: '🔭', label: 'Explorateurs', main: false },
                      { icon: '🚀', label: 'Innovateurs', main: false },
                    ].map((n) => (
                      <div key={n.label} className="flex flex-col items-center gap-1">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${n.main ? 'bg-green-500/20 border border-green-500/40' : 'bg-white/10 border border-white/10'}`}>
                          {n.icon}
                        </div>
                        <span className="text-xs text-white/50">{n.label}</span>
                        {n.main && <span className="text-xs text-green-400">(principale)</span>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* QR Code */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center min-w-[140px]">
                  <p className="text-xs font-semibold text-white mb-1">Mon QR Code Connect™</p>
                  <p className="text-xs text-white/40 mb-2">Scannez et connectez-vous</p>
                  <div className="w-16 h-16 mx-auto bg-white rounded-lg p-1 flex items-center justify-center">
                    <div className="w-full h-full grid grid-cols-5 gap-px">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} className={`${[0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24,7,12,17].includes(i) ? 'bg-black' : 'bg-white'} rounded-sm`} />
                      ))}
                    </div>
                  </div>
                  <button className="mt-2 text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 mx-auto">
                    <span>Partager mon QR Code</span> <span>⬆</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
