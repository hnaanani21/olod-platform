import Navigation from '@/components/Navigation';
import OIPLedger from '@/components/OIPLedger';
import { mockCurrentUser, mockOIPTransactions } from '@/lib/data';
import { formatNumber } from '@/lib/utils';

export default function OIPPage() {
  const totalEarned = mockOIPTransactions.filter(t => t.type === 'earned' || t.type === 'bonus').reduce((s, t) => s + t.amount, 0);
  const totalGiven = mockOIPTransactions.filter(t => t.type === 'given').reduce((s, t) => s + t.amount, 0);

  return (
    <>
      <Navigation />
      <main className="pt-20 pb-12 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <span className="dream-badge mb-2 inline-block">OIP Points™</span>
            <h1 className="text-2xl font-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              OLOD Impact Points
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Ledger append-only — traçabilité totale de votre impact
            </p>
          </div>

          {/* Balance card */}
          <div className="glass-card p-8 mb-8 relative overflow-hidden border border-amber-500/15">
            <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-amber-500/5 blur-2xl" />
            <div className="relative">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-slate-400 text-sm mb-1">Solde actuel</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black gradient-text-gold">{formatNumber(mockCurrentUser.oipPoints)}</span>
                    <span className="text-amber-400 text-xl font-bold">OIP</span>
                  </div>
                  <p className="text-slate-500 text-xs mt-2">
                    Rang : <span className="text-amber-400 font-semibold">Dream Builder ✨</span>
                    <span className="ml-2 text-slate-600">Top 8% de la plateforme</span>
                  </p>
                </div>
                <div className="text-right">
                  <div className="w-20 h-20 rounded-full border-4 border-amber-500/30 flex items-center justify-center bg-amber-500/5">
                    <span className="text-3xl">⭐</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/5">
                <div>
                  <p className="text-slate-500 text-xs mb-1">Total gagné</p>
                  <p className="text-emerald-400 font-bold">{formatNumber(totalEarned)} OIP</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-1">Donné à d'autres</p>
                  <p className="text-indigo-400 font-bold">{formatNumber(totalGiven)} OIP</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-1">Trust Score</p>
                  <p className="text-purple-400 font-bold">{mockCurrentUser.trustScore}/100</p>
                </div>
              </div>
            </div>
          </div>

          {/* How to earn */}
          <div className="mb-8">
            <h2 className="text-white font-bold mb-4">Comment gagner des OIP ? 🚀</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '📄', action: 'Publier une Dream Page', oip: '+100', desc: 'Pour chaque Dream Page publiée' },
                { icon: '🤝', action: 'Réaliser une Mission', oip: '+150', desc: 'Mission complétée avec succès' },
                { icon: '⭐', action: 'Évaluation 5 étoiles', oip: '+50', desc: 'Pour chaque évaluation reçue' },
                { icon: '🔗', action: 'QR Code Connect™', oip: '+25', desc: 'Connexion tracée via QR Code' },
                { icon: '🎯', action: 'Mentor une Dream Page', oip: '+200', desc: 'Contribution à un projet' },
                { icon: '🏆', action: 'Dream Nation Champion', oip: '+500', desc: 'Élu ambassadeur de nation' },
              ].map((item) => (
                <div key={item.action} className="glass-card p-4 border border-white/5">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-white text-sm font-semibold">{item.action}</p>
                        <span className="text-emerald-400 font-bold text-sm">{item.oip}</span>
                      </div>
                      <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ledger */}
          <div>
            <h2 className="text-white font-bold mb-4">Historique complet</h2>
            <OIPLedger />
          </div>

          {/* V2 teaser — Badges & NFT */}
          <div className="mt-8 glass-card p-6 border border-purple-500/15">
            <span className="dream-badge mb-3 inline-block">Bientôt — V2</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-bold mb-2">🏅 Badges & NFT Soul-Bound</h3>
                <p className="text-slate-400 text-sm">
                  Vos OIP se convertiront en badges vérifiables on-chain.
                  Chaque milestone devient un NFT Soul-Bound non-transférable, preuves permanentes de votre impact.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">💱 OIP Marketplace</h3>
                <p className="text-slate-400 text-sm">
                  Échangez vos OIP contre des services premium, accédez aux Dream Nations privées,
                  ou co-financez des projets à impact dans le marketplace communautaire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
