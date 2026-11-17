import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { platformStats, dreamNations } from '@/lib/data';
import { formatNumber } from '@/lib/utils';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          {/* Decorative orbs */}
          <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-indigo-600/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
              </span>
              Plateforme IA — V1 en cours de développement
            </div>

            {/* Main heading */}
            <h1 className="font-black text-5xl sm:text-7xl text-white leading-none tracking-tight mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="gradient-text">One Life</span>
              <br />
              <span className="text-white">One Dream</span>
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-3 leading-relaxed">
              Le premier réseau social collaboratif mondial augmenté par l&apos;IA, dédié à la{' '}
              <span className="text-indigo-300 font-medium">transformation des rêves en réalisations concrètes</span>.
            </p>
            <p className="text-slate-500 text-sm mb-10">
              LLMs · Agents IA autonomes · Matching sémantique RAG · Multi-agents orchestrés
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="px-8 py-3.5 rounded-xl font-semibold text-white transition-all shadow-lg hover:shadow-indigo-500/30 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
              >
                Accéder au Dashboard →
              </Link>
              <Link
                href="/dream-graph"
                className="px-8 py-3.5 rounded-xl font-semibold text-slate-200 hover:text-white border border-white/10 hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all"
              >
                Explorer le Dream Graph
              </Link>
            </div>

            {/* Flow diagram */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-2 text-sm">
              {['Publier', '→', 'Être compris par l\'IA', '→', 'Être mis en relation', '→', 'Collaborer', '→', 'Mesurer l\'impact'].map((step, i) => (
                step === '→' ? (
                  <span key={i} className="text-indigo-500 font-bold text-xl hidden sm:block">→</span>
                ) : (
                  <span key={i} className="px-3 py-1.5 rounded-lg glass-card text-indigo-200 font-medium">
                    {step}
                  </span>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {platformStats.map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-white font-black text-xl">{stat.value}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{stat.label}</div>
                  <div className={`text-xs font-semibold mt-1 ${stat.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Features */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="dream-badge mb-3 inline-block">Architecture IA</span>
              <h2 className="text-3xl font-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Intelligence Artificielle Native
              </h2>
              <p className="text-slate-400 mt-2">Chaque couche de la plateforme est augmentée par des agents IA spécialisés</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: '🧠',
                  title: 'LLM Gateway',
                  desc: 'GPT-4o / Claude / Mistral fine-tuné — routage dynamique, cache sémantique, économie 40-60% des coûts',
                  color: '#6366f1',
                },
                {
                  icon: '🤖',
                  title: 'Agents Autonomes',
                  desc: 'Dream Coach™, Match Curator™, Health Check™ — 9 agents LangGraph orchestrés en temps réel',
                  color: '#8b5cf6',
                },
                {
                  icon: '🔍',
                  title: 'RAG Pipeline',
                  desc: 'LlamaIndex + pgvector — recherche sémantique sur toutes les Dream Pages, profils et compétences',
                  color: '#06b6d4',
                },
                {
                  icon: '📐',
                  title: 'ODME™ Matching',
                  desc: 'Score pondéré V1 → embeddings 1536-dim V2 → agents multi-signaux V3 — taux d\'acceptation >37%',
                  color: '#10b981',
                },
                {
                  icon: '💎',
                  title: 'Dream Genome™',
                  desc: '7 dimensions vectorisées — LLM Extractor V1.5 auto-remplit depuis une description libre en 90s',
                  color: '#f59e0b',
                },
                {
                  icon: '📊',
                  title: 'Observabilité IA',
                  desc: 'LangSmith + OpenTelemetry + Grafana — traces LLM, détection de drift, alertes qualité matching',
                  color: '#ec4899',
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="glass-card glass-card-hover p-5 border-t-2"
                  style={{ borderTopColor: f.color }}
                >
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dream Nations preview */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="dream-badge mb-3 inline-block">Communautés</span>
              <h2 className="text-3xl font-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                9 Dream Nations
              </h2>
              <p className="text-slate-400 mt-2">Des communautés identitaires pour chaque type de rêve</p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2">
              {dreamNations.map((nation) => (
                <Link href="/nations" key={nation.id}>
                  <div className="glass-card glass-card-hover p-3 text-center cursor-pointer" style={{ borderColor: `${nation.color}30` }}>
                    <div className="text-2xl mb-1">{nation.emoji}</div>
                    <div className="text-xs text-slate-400 leading-tight hidden sm:block">{nation.label.split(' ')[0]}</div>
                    <div className="text-xs font-semibold mt-1" style={{ color: nation.color }}>
                      {formatNumber(nation.members)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Profiles section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="dream-badge mb-3 inline-block">Écosystème</span>
              <h2 className="text-3xl font-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                5 Profils, 1 Écosystème
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { role: 'Dreamer', emoji: '🌟', color: '#6366f1', desc: 'Porteur de projet avec Dream Coach™ IA', agent: 'Dream Coach™ Agent' },
                { role: 'Dream Maker', emoji: '🛠️', color: '#10b981', desc: 'Expert & mentor — missions & compétences', agent: 'Skill Match Agent' },
                { role: 'Dream Lover', emoji: '❤️', color: '#ec4899', desc: 'Ambassadeur — recommandations & soutien', agent: 'Curation Agent™' },
                { role: 'Dream Funder', emoji: '💰', color: '#f59e0b', desc: 'Investisseur — due diligence IA assistée', agent: 'Due Diligence Agent™' },
                { role: 'Admin', emoji: '🛡️', color: '#ef4444', desc: 'Modération IA, paramétrage, monitoring', agent: 'Trust Auditor Agent' },
              ].map((p) => (
                <div
                  key={p.role}
                  className="glass-card glass-card-hover p-4 text-center border-b-2"
                  style={{ borderBottomColor: p.color }}
                >
                  <div className="text-3xl mb-2">{p.emoji}</div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: p.color }}>{p.role}</h3>
                  <p className="text-slate-400 text-xs leading-snug mb-2">{p.desc}</p>
                  <div className="dream-badge text-center">{p.agent}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass-card p-10 neon-glow">
              <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Prêt à vivre votre rêve ?
              </h2>
              <p className="text-slate-300 mb-8">
                Rejoignez 48 000+ Dreamers qui transforment leurs rêves en réalité grâce à l&apos;IA collaborative.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/dashboard"
                  className="px-8 py-3 rounded-xl font-semibold text-white hover:scale-105 transition-all shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                >
                  Commencer — c&apos;est gratuit
                </Link>
                <Link
                  href="/matching"
                  className="px-8 py-3 rounded-xl font-semibold text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/10 transition-all"
                >
                  Explorer le Matching IA
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-8 px-4">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-black text-xs">OL</span>
              </div>
              <div>
                <span className="text-white font-bold text-sm">OLOD</span>
                <span className="text-slate-500 text-xs ml-2">— One Life One Dream</span>
              </div>
            </div>
            <p className="text-slate-600 text-xs">
              Développé par <span className="text-indigo-400">DIGITHS</span> · Proposition technique — Version de cadrage · 2026
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
