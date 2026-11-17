'use client';

import type { Match } from '@/types';
import { getRoleLabel, getRoleColor, getNationColor } from '@/lib/utils';
import { dreamNations } from '@/lib/data';

interface MatchCardProps {
  match: Match;
  rank: number;
}

export default function MatchCard({ match, rank }: MatchCardProps) {
  const { user } = match;
  const nationInfo = dreamNations.find((n) => n.id === user.nation);
  const roleColor = getRoleColor(user.role);

  // SVG ring for score
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (match.score / 100) * circumference;

  return (
    <div className="glass-card glass-card-hover animated-border p-5">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Rank */}
          <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs text-indigo-400 font-bold">
            {rank}
          </div>
          {/* Avatar */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
            style={{ background: `linear-gradient(135deg, ${roleColor}, ${roleColor}80)` }}
          >
            {user.avatar}
          </div>
          <div>
            <div className="text-white font-semibold text-sm">{user.name}</div>
            <div className="text-xs" style={{ color: roleColor }}>{getRoleLabel(user.role)}</div>
          </div>
        </div>

        {/* Score ring */}
        <div className="relative w-12 h-12 flex-shrink-0">
          <svg viewBox="0 0 50 50" className="w-full h-full -rotate-90">
            <circle cx="25" cy="25" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
            <circle
              cx="25" cy="25" r={radius}
              fill="none"
              stroke={match.score >= 90 ? '#22c55e' : match.score >= 75 ? '#6366f1' : '#f59e0b'}
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-white">{match.score}</span>
          </div>
        </div>
      </div>

      {/* Score breakdown */}
      <div className="space-y-2 mb-4">
        {[
          { label: 'Compatibilité', value: match.compatibility, color: '#6366f1' },
          { label: 'Complémentarité', value: match.complementarity, color: '#8b5cf6' },
          { label: 'Alignement valeurs', value: match.alignment, color: '#a78bfa' },
        ].map(({ label, value, color }) => (
          <div key={label} className="flex items-center gap-2">
            <span className="text-xs text-slate-500 w-32 flex-shrink-0">{label}</span>
            <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${value}%`, background: color }}
              />
            </div>
            <span className="text-xs font-semibold w-8 text-right" style={{ color }}>{value}%</span>
          </div>
        ))}
      </div>

      {/* AI Explanation */}
      <div className="bg-indigo-500/8 border border-indigo-500/15 rounded-lg p-3 mb-4">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="text-xs">🤖</span>
          <span className="text-xs text-indigo-400 font-medium">IA Explainer</span>
        </div>
        <p className="text-slate-300 text-xs leading-relaxed">{match.explanation}</p>
      </div>

      {/* Tags & nation */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        <span
          className="px-2 py-0.5 rounded-full text-xs"
          style={{ background: `${getNationColor(user.nation)}20`, color: getNationColor(user.nation), border: `1px solid ${getNationColor(user.nation)}40` }}
        >
          {nationInfo?.emoji} {nationInfo?.label}
        </span>
        {match.tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 rounded-full bg-white/5 text-slate-400 text-xs border border-white/8">
            {tag}
          </span>
        ))}
      </div>

      {/* Trust + OIP */}
      <div className="flex items-center justify-between pt-3 border-t border-white/5">
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-slate-500">Trust Score</span>
          <span className="text-xs font-semibold text-emerald-400">⭐ {user.trustScore}%</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-amber-400">
          <span>💫</span>
          <span className="font-semibold">{user.oipPoints.toLocaleString()}</span>
          <span className="text-amber-400/60">OIP</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-3">
        <button className="flex-1 py-2 rounded-lg bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-300 text-xs font-semibold transition-colors border border-indigo-500/20">
          ✉️ Contacter
        </button>
        <button className="py-2 px-3 rounded-lg bg-white/5 hover:bg-white/8 text-slate-400 text-xs transition-colors border border-white/8">
          🚫 Ignorer
        </button>
      </div>
    </div>
  );
}
