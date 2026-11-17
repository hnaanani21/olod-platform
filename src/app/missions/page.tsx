import Navigation from '@/components/Navigation';
import { mockMissions, dreamNations } from '@/lib/data';
import { getNationColor, getStageColor, formatNumber } from '@/lib/utils';

export default function MissionsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 pb-12 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="dream-badge">Mission Market™</span>
              <span className="text-slate-600 text-xs">Skill Match Agent activé</span>
            </div>
            <h1 className="text-2xl font-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Missions & Collaborations
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Trouvez des missions alignées avec votre Dream Genome™
            </p>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Missions actives', value: '1 247', icon: '🎯' },
              { label: 'Rémunérées', value: '389', icon: '💰' },
              { label: 'OIP Only', value: '858', icon: '⭐' },
              { label: 'Votre match IA', value: '12 suggerées', icon: '🤖' },
            ].map((s) => (
              <div key={s.label} className="glass-card p-4 text-center">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-white font-bold text-lg">{s.value}</div>
                <div className="text-slate-500 text-xs">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-slate-500 text-xs">Nation :</span>
              {dreamNations.slice(0, 5).map((n) => (
                <button
                  key={n.id}
                  className="px-2.5 py-1 rounded-lg text-xs border transition-all hover:scale-105"
                  style={{ borderColor: `${n.color}30`, color: n.color, background: `${n.color}10` }}
                >
                  {n.emoji}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-500 text-xs">Type :</span>
              {['Toutes', 'Rémunérées', 'OIP', 'Bénévolat'].map((t) => (
                <button key={t} className="px-2.5 py-1 rounded-lg text-xs border border-white/8 text-slate-400 hover:text-white hover:border-white/20 transition-all">
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* AI Agent notice */}
          <div className="glass-card p-4 mb-6 border border-indigo-500/15 flex items-start gap-3">
            <div className="text-2xl">🤖</div>
            <div>
              <p className="text-indigo-300 font-semibold text-sm">Skill Match Agent™ — Analyse en cours</p>
              <p className="text-slate-400 text-xs mt-0.5">
                Matching votre Dream Genome (Tech Nation, ML/IA, stade MVP) avec {formatNumber(1247)} missions disponibles…
                <span className="text-indigo-400 ml-1">12 matches parfaits identifiés ✨</span>
              </p>
            </div>
          </div>

          {/* Mission list */}
          <div className="space-y-4">
            {mockMissions.map((mission) => {
              const nation = dreamNations.find(n => n.id === mission.nation);
              return (
                <div key={mission.id} className="glass-card glass-card-hover p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full border"
                          style={{
                            color: nation?.color,
                            borderColor: `${nation?.color}40`,
                            background: `${nation?.color}10`,
                          }}
                        >
                          {nation?.emoji} {nation?.label}
                        </span>
                        {mission.compensation ? (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            💰 Rémunérée
                          </span>
                        ) : (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            ⭐ {mission.oipReward} OIP
                          </span>
                        )}
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          mission.status === 'open'
                            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                            : 'bg-slate-500/10 text-slate-400 border border-slate-500/20'
                        }`}>
                          {mission.status === 'open' ? '🟢 Ouverte' : '⏳ En cours'}
                        </span>
                      </div>

                      <h3 className="text-white font-bold text-base mb-1">{mission.title}</h3>
                      <p className="text-slate-400 text-sm mb-3">{mission.description}</p>

                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {mission.skills.map((skill) => (
                          <span key={skill} className="text-xs px-2 py-0.5 bg-indigo-500/10 text-indigo-300 rounded-md border border-indigo-500/15">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span>⏱ {mission.duration}</span>
                        <span>👥 {mission.applicants} candidatures</span>
                        {mission.compensation && (
                          <span className="text-emerald-400 font-semibold">{mission.compensation}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 shrink-0">
                      <button className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors">
                        Postuler
                      </button>
                      <button className="px-4 py-2 rounded-lg border border-white/10 text-slate-400 hover:text-white text-xs transition-colors">
                        Détails
                      </button>
                    </div>
                  </div>

                  {/* Dreamer info */}
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs">
                      {mission.dreamer.avatar}
                    </div>
                    <span className="text-slate-500 text-xs">
                      Posté par <span className="text-slate-300">{mission.dreamer.name}</span>
                    </span>
                    <span className="text-slate-600 text-xs ml-auto">
                      {new Date(mission.postedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load more */}
          <div className="text-center mt-8">
            <button className="px-8 py-3 glass-card rounded-xl text-indigo-300 hover:text-white hover:bg-indigo-500/10 transition-all border border-indigo-500/20 text-sm font-semibold">
              Charger plus de missions (1 243 restantes)
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
