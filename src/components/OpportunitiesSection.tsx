'use client';

const opportunities = [
  {
    type: 'Mise en relation',
    desc: 'Expert en Digital Twins industriels',
    match: 97,
    color: 'bg-green-500',
    avatar: '🔬',
  },
  {
    type: 'Partenaire',
    desc: 'Startup EnerTech Casablanca',
    match: 93,
    color: 'bg-green-500',
    avatar: '⚡',
  },
  {
    type: 'Apport de compétences',
    desc: 'Data Engineer / MLOps',
    match: 88,
    color: 'bg-yellow-500',
    avatar: '💻',
  },
  {
    type: 'Accès réseau',
    desc: 'Investisseur à impact — Green H₂',
    match: 82,
    color: 'bg-yellow-500',
    avatar: '💰',
  },
];

export default function OpportunitiesSection() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-white">Opportunités pour vous</h3>
        <button className="text-purple-400 text-sm hover:text-purple-300">Voir tout →</button>
      </div>
      <div className="space-y-2">
        {opportunities.map((op, i) => (
          <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-lg flex-shrink-0">
              {op.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-white/80">
                <span className="font-medium">{op.type}</span>
                <span className="text-white/50"> - {op.desc}</span>
              </p>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="flex-1 bg-white/10 rounded-full h-1">
                  <div className={`${op.color} h-1 rounded-full`} style={{ width: `${op.match}%` }} />
                </div>
                <span className="text-xs font-semibold text-white/70">{op.match}%</span>
                <span className="text-xs text-white/40">de compatibilité</span>
              </div>
            </div>
            <button className="text-xs bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 text-blue-300 px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all flex-shrink-0">
              Voir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
