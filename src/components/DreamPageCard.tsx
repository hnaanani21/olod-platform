'use client';

import Link from 'next/link';
import type { DreamPage } from '@/types';
import { dreamNations } from '@/lib/data';
import { getStageLabel, getStageColor, getHealthColor, timeAgo, formatNumber } from '@/lib/utils';

interface DreamPageCardProps {
  page: DreamPage;
  compact?: boolean;
}

export default function DreamPageCard({ page, compact = false }: DreamPageCardProps) {
  const nation = dreamNations.find((n) => n.id === page.nation);
  const healthColor = getHealthColor(page.healthScore);
  const stageLabel = getStageLabel(page.stage);
  const stageColor = getStageColor(page.stage);

  return (
    <Link href={`/dream/${page.id}`}>
      <div className="glass-card glass-card-hover animated-border p-5 h-full flex flex-col cursor-pointer">
        {/* Top bar */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">{nation?.emoji}</span>
            <span className="text-xs" style={{ color: nation?.color }}>{nation?.label}</span>
          </div>
          <div
            className="dream-badge"
            style={{ color: stageColor, borderColor: `${stageColor}40`, background: `${stageColor}15` }}
          >
            {stageLabel}
          </div>
        </div>

        {/* Title */}
        <div
          className="w-full h-1 rounded-full mb-3 opacity-60"
          style={{ background: `linear-gradient(90deg, ${page.coverColor}, ${page.coverColor}40)` }}
        />
        <h3 className="text-white font-bold text-lg leading-tight mb-1">{page.title}</h3>
        <p className="text-indigo-300 text-sm font-medium mb-2">{page.tagline}</p>

        {!compact && (
          <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
            {page.description.length > 100 ? page.description.substring(0, 100) + '…' : page.description}
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {page.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-full bg-white/5 text-slate-400 text-xs border border-white/8">
              {tag}
            </span>
          ))}
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <div className="flex items-center gap-4">
            {/* Health score */}
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{ background: healthColor }} />
              <span className="text-xs" style={{ color: healthColor }}>{page.healthScore}%</span>
            </div>
            {/* Connections */}
            <div className="flex items-center gap-1 text-slate-500 text-xs">
              <span>🔗</span>
              <span>{page.connections}</span>
            </div>
            {/* OIP */}
            <div className="flex items-center gap-1 text-xs text-amber-400">
              <span>💫</span>
              <span>{formatNumber(page.oipGenerated)}</span>
            </div>
          </div>
          {/* Author */}
          <div className="flex items-center gap-1.5">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ background: `${page.coverColor}80` }}
            >
              {page.author.avatar}
            </div>
            <span className="text-slate-500 text-xs">{timeAgo(page.updatedAt)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
