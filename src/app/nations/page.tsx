import Navigation from '@/components/Navigation';
import { dreamNations } from '@/lib/data';
import { formatNumber } from '@/lib/utils';

export default function NationsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 pb-12 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <span className="dream-badge mb-3 inline-block">9 Dream Nations</span>
            <h1 className="text-3xl font-black text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Les Nations du Rêve 🌍
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto">
              Chaque Dream Page appartient à une Nation — des communautés thématiques qui connectent
              les rêveurs, les makers, les funders autour d'un impact commun.
            </p>
          </div>

          {/* Nations grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {dreamNations.map((nation) => (
              <div
                key={nation.id}
                className="glass-card glass-card-hover p-6 relative overflow-hidden group cursor-pointer"
                style={{ borderColor: `${nation.color}25` }}
              >
                {/* Background glow */}
                <div
                  className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ background: nation.color }}
                />

                <div className="relative">
                  {/* Nation header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-4xl">{nation.emoji}</span>
                      <h3
                        className="text-xl font-black mt-2"
                        style={{ color: nation.color }}
                      >
                        {nation.label}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold text-lg">{formatNumber(nation.members)}</div>
                      <div className="text-slate-500 text-xs">membres</div>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm mb-5">{nation.description}</p>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    <div className="text-center p-2 rounded-lg" style={{ background: `${nation.color}10` }}>
                      <div className="text-white font-semibold text-sm">{Math.floor(nation.members * 0.08)}</div>
                      <div className="text-slate-500 text-xs">projets</div>
                    </div>
                    <div className="text-center p-2 rounded-lg" style={{ background: `${nation.color}10` }}>
                      <div className="text-white font-semibold text-sm">{Math.floor(nation.members * 0.03)}</div>
                      <div className="text-slate-500 text-xs">missions</div>
                    </div>
                    <div className="text-center p-2 rounded-lg" style={{ background: `${nation.color}10` }}>
                      <div className="text-white font-semibold text-sm">{Math.floor(nation.members * 1.4 / 1000)}k</div>
                      <div className="text-slate-500 text-xs">OIP générés</div>
                    </div>
                  </div>

                  {/* Join button */}
                  <button
                    className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all border"
                    style={{
                      borderColor: `${nation.color}40`,
                      color: nation.color,
                      background: `${nation.color}10`,
                    }}
                  >
                    Explorer la Nation
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Global impact stats */}
          <div className="glass-card p-8 text-center border border-white/8">
            <h2 className="text-white font-black text-xl mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Impact Global OLOD ✨
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Dreamers actifs', value: '15 678', icon: '🌟' },
                { label: 'Dream Pages publiées', value: '15 678', icon: '📄' },
                { label: 'Collaborations créées', value: '8 942', icon: '🤝' },
                { label: 'OIP Points distribués', value: '2.4M', icon: '⭐' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-black gradient-text">{stat.value}</div>
                  <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* V2 teaser */}
          <div className="mt-8 glass-card p-6 border border-purple-500/15 text-center">
            <span className="dream-badge mb-2 inline-block">Bientôt — V2</span>
            <h3 className="text-white font-bold mb-2">Nation Governance & DAO 🏛️</h3>
            <p className="text-slate-400 text-sm max-w-lg mx-auto">
              Chaque Nation élira ses Ambassadeurs, votera sur les projets prioritaires
              et gérera son Treasury OIP via un système de gouvernance décentralisé.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
