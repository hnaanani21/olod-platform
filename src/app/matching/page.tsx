'use client';

import { AppShell } from '@/components/AppShell';
import MatchCard from '@/components/MatchCard';
import { mockMatches } from '@/lib/data';

export default function MatchingPage() {
  return (
    <AppShell topBarTitle="Dream Matching Engine™" topBarSubtitle="ODME™ V1 — Score pondéré explicable">
      <div className="max-w-6xl mx-auto p-6">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold text-indigo-300 border border-indigo-500/30" style={{ background: 'rgba(99,102,241,0.1)' }}>ODME™ V1</span>
            <span className="text-slate-600 text-xs">Score pondéré explicable</span>
          </div>
          <h1 className="text-2xl font-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Dream Matching Engine™
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Suggestions personnalisées par l&apos;IA — recalculées toutes les 24h par le Match Curator Agent™
          </p>
        </div>

        {/* Formula */}
        <div className="p-4 mb-8 rounded-xl border" style={{ background: 'rgba(99,102,241,0.06)', borderColor: 'rgba(99,102,241,0.15)' }}>
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
        <div className="flex items-center gap-3 p-4 rounded-xl mb-8" style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)' }}>
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <p className="text-emerald-300 text-sm">
            <strong>Match Curator Agent™</strong> — Analyse en cours pour votre projet GreenIAfrica.
            Dernière mise à jour : aujourd&apos;hui à 06:00
          </p>
        </div>

        {/* Matches grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {mockMatches.map((match, i) => (
            <MatchCard key={match.id} match={match} rank={i + 1} />
          ))}
          {[1, 2, 3].map((i) => (
            <div key={`ph-${i}`} className="p-5 flex flex-col items-center justify-center min-h-[280px] rounded-2xl border border-dashed" style={{ background: 'linear-gradient(145deg, #0e1628, #0a111e)', borderColor: 'rgba(255,255,255,0.08)' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <span className="text-2xl">🔍</span>
              </div>
              <p className="text-slate-500 text-sm text-center">Agent en cours d&apos;analyse…</p>
            </div>
          ))}
        </div>

        {/* ODME Roadmap */}
        <div className="p-6 rounded-2xl" style={{ background: 'linear-gradient(145deg, #0e1628, #0a111e)', border: '1px solid rgba(99,102,241,0.12)' }}>
          <h2 className="text-white font-semibold mb-6 flex items-center gap-2">
            <span>🚀</span> Feuille de route ODME™
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { version: 'V1 — Actuel', color: '#6366f1', status: 'active', features: ['Score arithmétique pondéré','100% explicable','Poids configurables back-office','Templates NLG','Taux cible : >30%'] },
              { version: 'V2 — Embeddings', color: '#8b5cf6', status: 'planned', features: ['Similarité cosinus 1536-dim','Hybrid search dense+sparse','Re-ranking cross-encoder','LLM Explainer contextuel','Taux cible : >50%'] },
              { version: 'V3 — Agents', color: '#a78bfa', status: 'future', features: ['Match Curator Agent LangGraph','Analyse contextuelle complète','Diversité epsilon-greedy','RLHF sur interactions','Taux cible : >65%'] },
            ].map((v) => (
              <div key={v.version} className="rounded-xl p-4 border" style={{ borderColor: `${v.color}30`, background: `${v.color}08` }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-sm font-bold" style={{ color: v.color }}>{v.version}</div>
                  {v.status === 'active' && <span className="px-2 py-0.5 rounded-full text-xs bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">En production</span>}
                  {v.status === 'planned' && <span className="px-2 py-0.5 rounded-full text-xs bg-amber-500/15 text-amber-400 border border-amber-500/20">Planifié</span>}
                  {v.status === 'future' && <span className="px-2 py-0.5 rounded-full text-xs bg-slate-500/15 text-slate-400 border border-slate-500/20">Futur</span>}
                </div>
                <ul className="space-y-1.5">
                  {v.features.map((f) => (
                    <li key={f} className="text-xs text-slate-300 flex items-start gap-1.5">
                      <span style={{ color: v.color }}>•</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
