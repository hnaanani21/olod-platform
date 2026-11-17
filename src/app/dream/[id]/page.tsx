import Navigation from '@/components/Navigation';
import GenomeRadar from '@/components/GenomeRadar';
import { mockDreamPages, mockCurrentUser, dreamNations } from '@/lib/data';
import { getStageLabel, getStageColor, getHealthColor, formatNumber } from '@/lib/utils';

export default function DreamDetailPage({ params }: { params: { id: string } }) {
  // Find page or use first as fallback
  const page = mockDreamPages.find(p => p.id === params.id) ?? mockDreamPages[0];
  const nation = dreamNations.find(n => n.id === page.nation);

  return (
    <>
      <Navigation />
      <main className="pt-20 pb-12 px-4 min-h-screen">
        <div className="max-w-5xl mx-auto">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <a href="/dream-graph" className="hover:text-slate-300 transition-colors">Dream Graph</a>
            <span>/</span>
            <span className="text-slate-400">{page.title}</span>
          </div>

          {/* Cover bar */}
          <div
            className="h-2 rounded-full mb-6 opacity-70"
            style={{ background: `linear-gradient(90deg, ${page.coverColor}, ${page.coverColor}80)` }}
          />

          {/* Page header */}
          <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {/* Nation badge */}
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full border"
                  style={{ color: nation?.color, borderColor: `${nation?.color}40`, background: `${nation?.color}10` }}
                >
                  {nation?.emoji} {nation?.label}
                </span>
                {/* Stage badge */}
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getStageColor(page.stage)}`}>
                  {getStageLabel(page.stage)}
                </span>
                {/* Health */}
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                  page.healthScore >= 80
                    ? 'bg-green-500/10 text-green-400 border-green-500/20'
                    : page.healthScore >= 60
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                      : 'bg-red-500/10 text-red-400 border-red-500/20'
                }`}>
                  🏥 Health {page.healthScore}/100
                </span>
              </div>

              <h1 className="text-3xl font-black text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {page.title}
              </h1>
              <p className="text-slate-300 text-lg mb-3">{page.tagline}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{page.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {page.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 bg-indigo-500/10 text-indigo-300 rounded-md border border-indigo-500/15">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats column */}
            <div className="md:w-56 space-y-3">
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-black gradient-text">{formatNumber(page.oipGenerated)}</div>
                <div className="text-slate-500 text-xs">OIP générés</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-black text-indigo-300">{page.connections}</div>
                <div className="text-slate-500 text-xs">connexions</div>
              </div>
              <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors">
                Se connecter
              </button>
              <button className="w-full py-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white text-sm transition-colors">
                Proposer une mission
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left column */}
            <div className="space-y-5">

              {/* Author */}
              <div className="glass-card p-5">
                <h3 className="text-white font-semibold text-sm mb-4">👤 Dreamer</h3>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-xl">
                    {page.author.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{page.author.name}</p>
                    <p className="text-slate-400 text-xs">{page.author.oipPoints} OIP • Trust {page.author.trustScore}</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-white/5">
                  <p className="text-slate-500 text-xs">
                    Nation : <span className="text-slate-300">{nation?.label}</span>
                  </p>
                </div>
              </div>

              {/* Dream Genome */}
              {page.genome && (
                <div className="glass-card p-5">
                  <h3 className="text-white font-semibold text-sm mb-4">🧬 Dream Genome™</h3>
                  <GenomeRadar genome={page.genome} />
                </div>
              )}
            </div>

            {/* Right column — 2/3 width */}
            <div className="lg:col-span-2 space-y-5">

              {/* AI Summary */}
              <div className="glass-card p-5 border border-indigo-500/15">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🤖</span>
                  <h3 className="text-indigo-300 font-semibold text-sm">Dream Summarizer™ — Résumé IA</h3>
                  <span className="dream-badge ml-auto">GPT-4o</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  <strong className="text-white">{page.title}</strong> est un projet {getStageLabel(page.stage).toLowerCase()} dans la nation {nation?.label}.
                  Avec un Health Score de <strong className="text-white">{page.healthScore}/100</strong> et {page.connections} connexions établies,
                  ce projet démontre une forte traction dans l'écosystème OLOD.
                  Le Dream Genome™ indique un potentiel élevé d'alignement avec des makers ayant des compétences
                  complémentaires en <strong className="text-white">{page.tags.slice(0, 2).join(' et ')}</strong>.
                </p>
              </div>

              {/* Dream Coach recommendation */}
              <div className="glass-card p-5 border border-purple-500/15">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🎯</span>
                  <h3 className="text-purple-300 font-semibold text-sm">Dream Coach™ — Recommandations</h3>
                </div>
                <div className="space-y-2.5">
                  {[
                    { icon: '📈', text: 'Augmentez votre Trust Score en sollicitant des évaluations de vos connexions actuelles' },
                    { icon: '🤝', text: 'Publiez 2 missions ciblées pour accélérer votre passage au stade suivant' },
                    { icon: '🌍', text: 'Rejoignez des Dream Makers de la nation Science pour un impact interdisciplinaire' },
                  ].map((rec, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <span className="shrink-0">{rec.icon}</span>
                      <span className="text-slate-300">{rec.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline (mock) */}
              <div className="glass-card p-5">
                <h3 className="text-white font-semibold text-sm mb-4">📅 Timeline du projet</h3>
                <div className="space-y-3">
                  {[
                    { date: new Date(page.createdAt).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' }), event: 'Dream Page publiée', type: 'created' },
                    { date: 'Il y a 1 mois', event: 'Première connexion établie', type: 'connection' },
                    { date: 'Il y a 3 sem.', event: 'Health Check™ — Score 85/100', type: 'health' },
                    { date: new Date(page.updatedAt).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' }), event: 'Dernière mise à jour', type: 'update' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <span className="text-slate-600 text-xs w-20 shrink-0">{item.date}</span>
                      <div className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                      <span className="text-slate-300">{item.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

// Generate static params for mock pages
export function generateStaticParams() {
  return [
    { id: 'dp-001' },
    { id: 'dp-002' },
    { id: 'dp-003' },
    { id: 'dp-004' },
    { id: 'dp-005' },
    { id: 'dp-006' },
  ];
}
