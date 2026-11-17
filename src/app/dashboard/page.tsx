'use client';
import Navigation from '@/components/Navigation';
import DreamPageCard from '@/components/DreamPageCard';
import AgentStatusPanel from '@/components/AgentStatusPanel';
import OIPLedger from '@/components/OIPLedger';
import GenomeRadar from '@/components/GenomeRadar';
import { mockCurrentUser, mockDreamPages, platformStats } from '@/lib/data';
import { getHealthColor, getStageLabel } from '@/lib/utils';

export default function DashboardPage() {
  const user = mockCurrentUser;
  const myPages = mockDreamPages.filter((p) => p.author.id === user.id);

  return (
    <>
      <Navigation />
      <main className="pt-20 pb-12 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Dashboard Dreamer
              </h1>
              <p className="text-slate-400 text-sm mt-1">
                Bonjour {user.name} 👋 — votre écosystème OLOD en temps réel
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="glass-card px-4 py-2.5 flex items-center gap-2">
                <span className="text-amber-400 text-sm">💫</span>
                <div>
                  <div className="text-amber-300 font-black text-lg leading-none">{user.oipPoints.toLocaleString()}</div>
                  <div className="text-amber-400/60 text-xs">OIP Points</div>
                </div>
              </div>
              <div className="glass-card px-4 py-2.5 flex items-center gap-2">
                <span className="text-emerald-400 text-sm">⭐</span>
                <div>
                  <div className="text-emerald-300 font-black text-lg leading-none">{user.trustScore}%</div>
                  <div className="text-emerald-400/60 text-xs">Trust Score</div>
                </div>
              </div>
            </div>
          </div>

          {/* Platform stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {platformStats.map((stat) => (
              <div key={stat.label} className="glass-card p-3 text-center">
                <div className="text-xl mb-1">{stat.icon}</div>
                <div className="text-white font-black text-base">{stat.value}</div>
                <div className="text-slate-500 text-xs">{stat.label}</div>
                <div className="text-emerald-400 text-xs font-semibold">{stat.change}</div>
              </div>
            ))}
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Left column: Genome + OIP */}
            <div className="space-y-6">

              {/* Genome card */}
              {user.genome && (
                <div className="glass-card p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold text-sm">Dream Genome™</h3>
                    <span className="dream-badge">7 dimensions</span>
                  </div>

                  <div className="flex justify-center mb-4">
                    <GenomeRadar genome={user.genome} size={180} />
                  </div>

                  <div className="space-y-2">
                    {[
                      { label: 'Domaine', value: user.genome.domain },
                      { label: 'Stade', value: getStageLabel(user.genome.stage) },
                      { label: 'Échelle', value: user.genome.scale },
                      { label: 'Impact', value: `${user.genome.impact}/10` },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex items-center justify-between py-1.5 border-b border-white/4 last:border-0">
                        <span className="text-slate-500 text-xs">{label}</span>
                        <span className="text-slate-200 text-xs font-medium">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {user.genome.values.map((v) => (
                      <span key={v} className="dream-badge">{v}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* OIP Ledger */}
              <OIPLedger limit={5} />
            </div>

            {/* Center: Dream Pages */}
            <div className="lg:col-span-2 space-y-6">

              {/* Quick actions */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Nouvelle Dream Page', icon: '📄', href: '/dream-graph', color: '#6366f1' },
                  { label: 'Voir mes Matches', icon: '✨', href: '/matching', color: '#8b5cf6' },
                  { label: 'Créer une Mission', icon: '🎯', href: '/missions', color: '#10b981' },
                  { label: 'Dream Coach™', icon: '🤖', href: '/dashboard', color: '#f59e0b' },
                ].map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    className="glass-card glass-card-hover p-4 text-center cursor-pointer"
                    style={{ borderColor: `${action.color}30` }}
                  >
                    <div className="text-2xl mb-2">{action.icon}</div>
                    <div className="text-xs text-slate-300 leading-tight">{action.label}</div>
                  </a>
                ))}
              </div>

              {/* My Dream Pages */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-white font-semibold flex items-center gap-2">
                    <span>📄</span> Mes Dream Pages
                  </h2>
                  <a href="/dream-graph" className="text-indigo-400 text-sm hover:text-indigo-300">
                    Voir tout →
                  </a>
                </div>
                <div className="space-y-4">
                  {myPages.map((page) => (
                    <DreamPageCard key={page.id} page={page} />
                  ))}
                </div>
              </div>

              {/* Health Check summary */}
              <div className="glass-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                    <span>💊</span> Project Health Check™
                  </h3>
                  <span className="text-xs text-slate-500">Mis à jour il y a 1h</span>
                </div>
                {myPages.map((page) => (
                  <div key={page.id} className="mb-3 last:mb-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-slate-300 text-xs font-medium">{page.title}</span>
                      <span className="font-bold text-sm" style={{ color: getHealthColor(page.healthScore) }}>
                        {page.healthScore}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${page.healthScore}%`, background: getHealthColor(page.healthScore) }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Agent status */}
              <AgentStatusPanel />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
