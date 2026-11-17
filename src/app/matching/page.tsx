import Navigation from '@/components/Navigation';
import MatchCard from '@/components/MatchCard';
import { mockMatches, mockCurrentUser } from '@/lib/data';

export default function MatchingPage() {
  const user = mockCurrentUser;

  return (
    <>
      <Navigation />
      <main className="pt-20 pb-12 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="dream-badge">ODME™ V1</span>
              <span className="text-slate-600 text-xs">Score pondéré explicable</span>
            </div>
            <h1 className="text-2xl font-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Dream Matching Engine™
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Suggestions personnalisées par l&apos;IA — recalculées toutes les 24h par le Match Curator Agent™
            </p>
          </div>

          {/* Matching score formula */}
          <div className="glass-card p-4 mb-8 border border-indigo-500/15">
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">🧮</span>
              <div>
                <p className="text-indigo-300 text-xs font-semibold mb-1">Formule ODME™ V1</p>
                <code className="text-xs text-slate-300 font-mono">
                  Score(A,B) = 100 × [0,4 × Compatibilité(Domaine+Impact) + 0,4 × Complémentarité(Ressources) + 0,2 × Alignement(Valeurs)]
                </code>
                <p className="text-slate-500 text-xs mt-1">
                  → V2 : similarité cosinus sur embeddings 1536-dim (OpenAI text-embedding-3-large)
                </p>
              </div>
            </div>
          </div>

          {/* Agent notice */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/8 border border-emerald-500/15 mb-8">
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <p className="text-emerald-300 text-sm">
              <strong>Match Curator Agent™</strong> — Analyse en cours pour votre projet GreenIAfrica.
              Dernière mise à jour des suggestions : aujourd&apos;hui à 06:00
            </p>
          </div>

          {/* Matches grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {mockMatches.map((match, i) => (
              <MatchCard key={match.id} match={match} rank={i + 1} />
            ))}

            {/* Placeholder cards */}
            {[1, 2, 3].map((i) => (
              <div key={`placeholder-${i}`} className="glass-card p-5 flex flex-col items-center justify-center min-h-[280px] border-dashed border-white/10">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3">
                  <span className="text-2xl">🔍</span>
                </div>
                <p className="text-slate-500 text-sm text-center">
                  Agent en cours d&apos;analyse…
                </p>
                <div className="mt-3 w-20 h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500/40 rounded-full shimmer" style={{ width: '60%' }} />
                </div>
              </div>
            ))}
          </div>

          {/* ODME Roadmap */}
          <div className="glass-card p-6">
            <h2 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span>🚀</span> Feuille de route ODME™
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  version: 'V1 — Actuel',
                  color: '#6366f1',
                  status: 'active',
                  features: [
                    'Score arithmétique pondéré',
                    '100% explicable',
                    'Poids configurables back-office',
                    'Templates NLG',
                    'Taux d\'acceptation cible : >30%',
                  ],
                },
                {
                  version: 'V2 — Embeddings',
                  color: '#8b5cf6',
                  status: 'planned',
                  features: [
                    'Similarité cosinus 1536-dim',
                    'Hybrid search dense+sparse',
                    'Re-ranking cross-encoder',
                    'LLM Explainer contextuel',
                    'Taux d\'acceptation cible : >50%',
                  ],
                },
                {
                  version: 'V3 — Agents',
                  color: '#a78bfa',
                  status: 'future',
                  features: [
                    'Match Curator Agent LangGraph',
                    'Analyse contextuelle complète',
                    'Diversité epsilon-greedy',
                    'RLHF sur interactions',
                    'Taux d\'acceptation cible : >65%',
                  ],
                },
              ].map((v) => (
                <div
                  key={v.version}
                  className="rounded-xl p-4 border"
                  style={{
                    borderColor: `${v.color}30`,
                    background: `${v.color}08`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-sm font-bold" style={{ color: v.color }}>{v.version}</div>
                    {v.status === 'active' && (
                      <span className="px-2 py-0.5 rounded-full text-xs bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">En production</span>
                    )}
                    {v.status === 'planned' && (
                      <span className="px-2 py-0.5 rounded-full text-xs bg-amber-500/15 text-amber-400 border border-amber-500/20">Planifié</span>
                    )}
                    {v.status === 'future' && (
                      <span className="px-2 py-0.5 rounded-full text-xs bg-slate-500/15 text-slate-400 border border-slate-500/20">Futur</span>
                    )}
                  </div>
                  <ul className="space-y-1.5">
                    {v.features.map((f) => (
                      <li key={f} className="text-xs text-slate-300 flex items-start gap-1.5">
                        <span className="mt-0.5" style={{ color: v.color }}>•</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
