'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const STEPS = ['welcome', 'auth', 'basic', 'activity', 'genome-test', 'result', 'activate'];

const INTEREST_TAGS = [
  'Création & Culture', 'Entrepreneuriat & Innovation', 'Science & Technologies',
  'Écologie & Impact social', 'Agriculture & Food', 'Bien-être & Santé',
  'Exploration & Voyage', 'Finance & Investissement', 'Éducation & Formation',
  'Communautés & Événements', 'Villes & Habitat', 'Communication & Influence',
];

const SKILLS = [
  'Marketing', 'Communication', 'Finance', 'Droit', 'Technologie',
  'Design', 'Coaching', 'Management', 'Recherche', 'Production artistique',
];

const VALUES = [
  'Innovation', 'Durabilité', 'Créativité', 'Solidarité',
  'Exploration', 'Liberté', 'Connaissance',
];

const ARCHETYPES: Record<string, { title: string; desc: string; nations: string[]; icon: string }> = {
  Maker: { title: 'Le Bâtisseur', desc: 'Vous transformez les idées en réalités concrètes. Votre superpouvoir : l\'exécution.', nations: ['Innovation', 'Technologies'], icon: '🔨' },
  Dreamer: { title: 'Le Visionnaire', desc: 'Vous voyez le monde tel qu\'il pourrait être. Votre superpouvoir : l\'inspiration.', nations: ['Création', 'Impact Social'], icon: '🌟' },
  Funder: { title: 'Le Catalyseur', desc: 'Vous amplifiez les projets à fort impact. Votre superpouvoir : la mise en relation stratégique.', nations: ['Finance', 'Entrepreneuriat'], icon: '💎' },
  Connector: { title: 'Le Connecteur', desc: 'Vous créez des ponts entre les personnes. Votre superpouvoir : le réseau humain.', nations: ['Communautés', 'Innovation'], icon: '🕸️' },
  Lover: { title: 'Le Soutien', desc: 'Vous nourrissez les projets de votre énergie. Votre superpouvoir : l\'engagement communautaire.', nations: ['Bien-être', 'Culture'], icon: '❤️' },
};

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    name: '', country: 'Maroc', city: '', bio: '',
    hasActivity: '', activityDesc: '', activityType: '',
    q1: '', q2: '', q3: [] as string[], q5: [] as string[],
    q6: [] as string[], q7: '', q8: '',
    archetype: '',
  });

  const next = () => setStep(s => Math.min(s + 1, STEPS.length - 1));
  const prev = () => setStep(s => Math.max(s - 1, 0));

  const computeArchetype = () => {
    const scores: Record<string, number> = { Maker: 0, Dreamer: 0, Funder: 0, Connector: 0, Lover: 0 };
    if (data.q1 === 'créer') scores.Dreamer += 3;
    if (data.q1 === 'compétences') scores.Maker += 3;
    if (data.q1 === 'financer') scores.Funder += 3;
    if (data.q1 === 'connecter') scores.Connector += 3;
    if (data.q1 === 'soutenir') scores.Lover += 3;
    if (data.q5.length > 2) scores.Maker += 2;
    if (data.q7 === 'créer') scores.Dreamer += 2;
    if (data.q7 === 'investir') scores.Funder += 2;
    if (data.q7 === 'rejoindre') scores.Maker += 2;
    if (data.q7 === 'conseiller') scores.Connector += 2;
    const top = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    setData(d => ({ ...d, archetype: top }));
    next();
  };

  const currentStep = STEPS[step];

  return (
    <div className="min-h-screen bg-[#060918] flex items-center justify-center p-4">
      {/* Stars background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 80 }).map((_, i) => (
          <div key={i} className="absolute rounded-full bg-white/20"
            style={{ width: Math.random() * 2 + 1, height: Math.random() * 2 + 1, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, opacity: Math.random() * 0.5 + 0.1 }} />
        ))}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.15) 0%, transparent 50%)' }} />
      </div>

      <div className="relative w-full max-w-2xl">
        {/* Progress bar */}
        {step > 0 && step < STEPS.length - 1 && (
          <div className="mb-6">
            <div className="flex justify-between text-xs text-white/40 mb-2">
              <span>Étape {step} / {STEPS.length - 2}</span>
              <span>{Math.round((step / (STEPS.length - 2)) * 100)}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full transition-all duration-500"
                style={{ width: `${(step / (STEPS.length - 2)) * 100}%` }} />
            </div>
          </div>
        )}

        {/* STEP 0 — Welcome */}
        {currentStep === 'welcome' && (
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-4xl font-black text-white">O</span>
            </div>
            <h1 className="text-4xl font-black text-white mb-2">Welcome to OLOD</h1>
            <p className="text-xl text-white/60 mb-2">One Life One Dream</p>
            <p className="text-white/40 mb-10 max-w-md mx-auto">Le premier réseau social collaboratif qui transforme vos rêves en réalisations concrètes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={next}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-bold text-white text-lg transition-all shadow-lg shadow-purple-500/20">
                🚀 Join the Community
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl font-medium text-white/70 transition-all">
                ✨ Discover Dreams
              </button>
            </div>
          </div>
        )}

        {/* STEP 1 — Auth */}
        {currentStep === 'auth' && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">Créez votre compte</h2>
            <p className="text-white/50 text-center mb-8">Rejoignez la communauté en un clic</p>
            <div className="space-y-3 mb-6">
              {[
                { icon: '🔵', label: 'Continuer avec Google', color: 'hover:bg-blue-500/10 border-blue-500/30' },
                { icon: '⬛', label: 'Continuer avec Apple', color: 'hover:bg-white/10 border-white/20' },
                { icon: '🔷', label: 'Continuer avec LinkedIn', color: 'hover:bg-blue-700/10 border-blue-700/30' },
              ].map(opt => (
                <button key={opt.label} onClick={next}
                  className={`w-full flex items-center gap-3 p-4 bg-white/5 border ${opt.color} rounded-xl text-white font-medium transition-all`}>
                  <span className="text-xl">{opt.icon}</span> {opt.label}
                </button>
              ))}
            </div>
            <div className="relative flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-white/30 text-sm">ou</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <input type="email" placeholder="votre@email.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 mb-3" />
            <button onClick={next}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 rounded-xl font-bold text-white transition-all">
              Continuer avec l&apos;email →
            </button>
          </div>
        )}

        {/* STEP 2 — Basic info */}
        {currentStep === 'basic' && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-2">Votre profil de base</h2>
            <p className="text-white/50 mb-6">2 minutes suffisent pour démarrer</p>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-white/60 mb-1 block">Nom ou pseudo *</label>
                <input value={data.name} onChange={e => setData(d => ({ ...d, name: e.target.value }))}
                  placeholder="Dr Hassan NAANANI" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-white/60 mb-1 block">Pays *</label>
                  <select value={data.country} onChange={e => setData(d => ({ ...d, country: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500">
                    {['Maroc', 'France', 'Sénégal', 'Côte d\'Ivoire', 'Tunisie', 'Algérie', 'Canada', 'Autre'].map(c => (
                      <option key={c} value={c} className="bg-[#0d1225]">{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm text-white/60 mb-1 block">Ville</label>
                  <input value={data.city} onChange={e => setData(d => ({ ...d, city: e.target.value }))}
                    placeholder="Benguerir" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-500" />
                </div>
              </div>
              <div>
                <label className="text-sm text-white/60 mb-1 block">Bio courte</label>
                <textarea value={data.bio} onChange={e => setData(d => ({ ...d, bio: e.target.value }))} rows={3}
                  placeholder="CTO, chercheur en IA et Digital Twins, passionné par l'innovation durable..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 resize-none" />
                <p className="text-xs text-white/30 mt-1">{data.bio.length}/200 caractères</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 text-xs text-blue-300">
                💡 Les profils avec photo reçoivent 3x plus de connexions
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="rgpd" className="mt-1" required />
                <label htmlFor="rgpd" className="text-xs text-white/50">
                  J&apos;accepte les <span className="text-purple-400 cursor-pointer">CGU</span> et la <span className="text-purple-400 cursor-pointer">politique de confidentialité</span> d&apos;OLOD *
                </label>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={prev} className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white/60 hover:bg-white/10 transition-all">← Retour</button>
              <button onClick={next} disabled={!data.name}
                className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 disabled:opacity-40 rounded-xl font-bold text-white transition-all">
                Continuer →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 — Activity detection */}
        {currentStep === 'activity' && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-2">Avez-vous déjà une activité ?</h2>
            <p className="text-white/50 mb-6">Cela nous permet de mieux vous orienter dès le départ</p>
            <div className="space-y-3 mb-6">
              {[
                { val: 'oui', label: '✅ Oui, j\'ai une activité, un projet ou un service', desc: 'Je veux le faire connaître sur OLOD' },
                { val: 'non', label: '💭 Non, je suis en phase d\'exploration', desc: 'J\'ai des idées mais rien de concret encore' },
                { val: 'bientot', label: '🌱 Pas encore, mais bientôt', desc: 'Je prépare mon projet' },
              ].map(opt => (
                <button key={opt.val} onClick={() => setData(d => ({ ...d, hasActivity: opt.val }))}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${data.hasActivity === opt.val ? 'bg-purple-500/20 border-purple-500/50' : 'bg-white/5 border-white/10 hover:border-white/20'}`}>
                  <div className="font-medium text-white">{opt.label}</div>
                  <div className="text-sm text-white/50 mt-0.5">{opt.desc}</div>
                </button>
              ))}
            </div>
            {data.hasActivity === 'oui' && (
              <div className="space-y-3 mb-6 animate-in fade-in">
                <input value={data.activityDesc} onChange={e => setData(d => ({ ...d, activityDesc: e.target.value }))}
                  placeholder="ex: Plateforme IA pour la réalisation des rêves"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-500" />
                <div className="grid grid-cols-2 gap-2">
                  {['Service individuel', 'Startup', 'Petite entreprise', 'Association', 'Autre'].map(t => (
                    <button key={t} onClick={() => setData(d => ({ ...d, activityType: t }))}
                      className={`p-2 rounded-lg text-sm border transition-all ${data.activityType === t ? 'bg-blue-500/20 border-blue-500/40 text-blue-300' : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="flex gap-3">
              <button onClick={prev} className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white/60 hover:bg-white/10 transition-all">← Retour</button>
              <button onClick={next} disabled={!data.hasActivity}
                className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 disabled:opacity-40 rounded-xl font-bold text-white transition-all">
                Continuer →
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 — Dream Genome Test */}
        {currentStep === 'genome-test' && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-center mb-6">
              <span className="text-3xl">🧬</span>
              <h2 className="text-2xl font-bold text-white mt-2">Dream Genome Test™</h2>
              <p className="text-white/50">Découvrez votre ADN de rêveur en 60 secondes</p>
            </div>

            <div className="space-y-6">
              {/* Q1 */}
              <div>
                <p className="text-sm font-semibold text-white/80 mb-3">1. Ce qui vous inspire le plus ?</p>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    { v: 'créer', l: '🌟 Créer des projets et visions' },
                    { v: 'compétences', l: '🔨 Contribuer avec mes compétences' },
                    { v: 'soutenir', l: '❤️ Soutenir les projets des autres' },
                    { v: 'financer', l: '💰 Financer des projets à impact' },
                    { v: 'connecter', l: '🕸️ Connecter les bonnes personnes' },
                  ].map(opt => (
                    <button key={opt.v} onClick={() => setData(d => ({ ...d, q1: opt.v }))}
                      className={`p-3 rounded-lg text-sm text-left border transition-all ${data.q1 === opt.v ? 'bg-purple-500/20 border-purple-500/50 text-white' : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'}`}>
                      {opt.l}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q3 — Domaines */}
              <div>
                <p className="text-sm font-semibold text-white/80 mb-3">2. Vos domaines d&apos;intérêt (max 8)</p>
                <div className="flex flex-wrap gap-2">
                  {INTEREST_TAGS.map(tag => (
                    <button key={tag} onClick={() => setData(d => ({
                      ...d, q3: d.q3.includes(tag) ? d.q3.filter(t => t !== tag) : d.q3.length < 8 ? [...d.q3, tag] : d.q3
                    }))}
                      className={`px-3 py-1.5 rounded-full text-xs border transition-all ${data.q3.includes(tag) ? 'bg-blue-500/20 border-blue-500/50 text-blue-300' : 'bg-white/5 border-white/10 text-white/50 hover:border-white/20'}`}>
                      {tag}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-white/30 mt-1">{data.q3.length}/8 sélectionnés</p>
              </div>

              {/* Q6 — Valeurs */}
              <div>
                <p className="text-sm font-semibold text-white/80 mb-3">3. Vos 3 valeurs fondamentales</p>
                <div className="flex flex-wrap gap-2">
                  {VALUES.map(val => (
                    <button key={val} onClick={() => setData(d => ({
                      ...d, q6: d.q6.includes(val) ? d.q6.filter(v => v !== val) : d.q6.length < 3 ? [...d.q6, val] : d.q6
                    }))}
                      className={`px-4 py-2 rounded-full text-sm border transition-all ${data.q6.includes(val) ? 'bg-green-500/20 border-green-500/50 text-green-300' : 'bg-white/5 border-white/10 text-white/50 hover:border-white/20'}`}>
                      {val}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-white/30 mt-1">{data.q6.length}/3 sélectionnés</p>
              </div>

              {/* Q7 — Mode contribution */}
              <div>
                <p className="text-sm font-semibold text-white/80 mb-3">4. Comment souhaitez-vous contribuer ?</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { v: 'créer', l: '🌱 Créer un projet' },
                    { v: 'rejoindre', l: '🤝 Rejoindre une équipe' },
                    { v: 'conseiller', l: '🎓 Conseiller et mentorer' },
                    { v: 'investir', l: '💎 Investir dans des projets' },
                    { v: 'soutenir', l: '❤️ Soutenir la communauté' },
                  ].map(opt => (
                    <button key={opt.v} onClick={() => setData(d => ({ ...d, q7: opt.v }))}
                      className={`p-3 rounded-lg text-sm text-left border transition-all ${data.q7 === opt.v ? 'bg-purple-500/20 border-purple-500/50 text-white' : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'}`}>
                      {opt.l}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q8 — Échelle */}
              <div>
                <p className="text-sm font-semibold text-white/80 mb-3">5. Échelle de votre projet idéal ?</p>
                <div className="grid grid-cols-4 gap-2">
                  {['Local', 'National', 'International', 'Global'].map(s => (
                    <button key={s} onClick={() => setData(d => ({ ...d, q8: s }))}
                      className={`p-3 rounded-lg text-sm text-center border transition-all ${data.q8 === s ? 'bg-orange-500/20 border-orange-500/50 text-orange-300' : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={prev} className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white/60 hover:bg-white/10 transition-all">← Retour</button>
              <button onClick={computeArchetype}
                disabled={!data.q1 || data.q3.length < 2 || data.q6.length < 3 || !data.q7 || !data.q8}
                className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 disabled:opacity-40 rounded-xl font-bold text-white transition-all">
                🧬 Révéler mon Dream Genome →
              </button>
            </div>
          </div>
        )}

        {/* STEP 5 — Result */}
        {currentStep === 'result' && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm text-center">
            <div className="text-6xl mb-4">{ARCHETYPES[data.archetype]?.icon || '🌟'}</div>
            <div className="inline-block bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-4 py-1 text-sm text-purple-300 mb-3">
              Votre archétype OLOD
            </div>
            <h2 className="text-3xl font-black text-white mb-2">
              {ARCHETYPES[data.archetype]?.title || 'Le Visionnaire'}
            </h2>
            <p className="text-white/60 mb-6">{ARCHETYPES[data.archetype]?.desc}</p>

            {/* Dream Genome visual */}
            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-purple-500/20 rounded-xl p-4 mb-6">
              <p className="text-xs font-semibold text-white/50 mb-3">🧬 VOTRE DREAM GENOME™</p>
              <div className="grid grid-cols-2 gap-3 text-left">
                <div>
                  <p className="text-xs text-white/40">Profil dominant</p>
                  <p className="text-sm font-semibold text-white">{data.archetype}</p>
                </div>
                <div>
                  <p className="text-xs text-white/40">Échelle</p>
                  <p className="text-sm font-semibold text-white">{data.q8}</p>
                </div>
                <div>
                  <p className="text-xs text-white/40">Valeurs</p>
                  <p className="text-sm font-semibold text-white">{data.q6.join(', ')}</p>
                </div>
                <div>
                  <p className="text-xs text-white/40">Compatibilité genome</p>
                  <p className="text-sm font-semibold text-green-400">85%</p>
                </div>
              </div>
            </div>

            {/* Dream Nations */}
            <div className="mb-6">
              <p className="text-xs text-white/50 mb-3">Vos Dream Nations recommandées</p>
              <div className="flex justify-center gap-3">
                {(ARCHETYPES[data.archetype]?.nations || ['Innovation', 'Impact Social']).map((n, i) => (
                  <div key={n} className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl border ${i === 0 ? 'bg-green-500/10 border-green-500/30' : 'bg-white/5 border-white/10'}`}>
                    <span className="text-xl">{i === 0 ? '🌟' : '🔭'}</span>
                    <span className="text-sm text-white">{n}</span>
                    {i === 0 && <span className="text-xs text-green-400">(principale)</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-white/60 text-sm transition-all">
                📤 Partager mon profil
              </button>
              <button onClick={next}
                className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 rounded-xl font-bold text-white transition-all">
                Activer mon profil →
              </button>
            </div>
          </div>
        )}

        {/* STEP 6 — Activate */}
        {currentStep === 'activate' && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Welcome, {data.name || 'Dr Hassan NAANANI'} !
            </h2>
            <p className="text-white/50 mb-2">
              {data.hasActivity === 'oui'
                ? `Votre activité "${data.activityDesc}" est prête à être connectée à la communauté OLOD.`
                : 'Citizen of OLOD — votre aventure commence maintenant !'}
            </p>

            {/* QR Code */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 inline-block mx-auto">
              <p className="text-xs text-white/50 mb-2">🎁 Votre QR Code Connect™ est actif</p>
              <div className="w-24 h-24 mx-auto bg-white rounded-lg p-2">
                <div className="w-full h-full grid grid-cols-7 gap-px">
                  {Array.from({ length: 49 }).map((_, i) => (
                    <div key={i} className={`${[0,1,2,3,4,5,6,7,13,14,20,21,27,28,34,35,41,42,43,44,45,46,47,48,10,24,38].includes(i) ? 'bg-black' : 'bg-white'} rounded-sm`} />
                  ))}
                </div>
              </div>
              <p className="text-xs text-purple-400 mt-2 cursor-pointer hover:text-purple-300">Télécharger mon QR Code ⬆</p>
            </div>

            {/* First actions */}
            <div className="text-left mb-6">
              <p className="text-xs text-white/50 mb-3 text-center">🚀 Vos premières actions recommandées</p>
              <div className="space-y-2">
                {[
                  { icon: '❤️', text: 'Soutenir 3 projets de votre Dream Nation', xp: '+30 OIP' },
                  { icon: '🤝', text: 'Rejoindre votre première communauté', xp: '+50 OIP' },
                  { icon: '📋', text: 'Créer votre premier projet', xp: '+100 OIP' },
                ].map(a => (
                  <div key={a.text} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <span>{a.icon}</span>
                    <span className="flex-1 text-sm text-white/70">{a.text}</span>
                    <span className="text-xs text-green-400 font-semibold">{a.xp}</span>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={() => router.push('/dashboard')}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 rounded-xl font-bold text-white text-lg transition-all shadow-lg shadow-purple-500/20">
              🌟 Accéder à mon tableau de bord →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
