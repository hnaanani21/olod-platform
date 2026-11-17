import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { DreamNation, ProjectStage } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getNationColor(nation: DreamNation): string {
  const colors: Record<DreamNation, string> = {
    tech: '#06b6d4',
    art: '#ec4899',
    science: '#10b981',
    social: '#f59e0b',
    education: '#8b5cf6',
    environment: '#22c55e',
    health: '#ef4444',
    finance: '#3b82f6',
    culture: '#f97316',
  };
  return colors[nation] || '#6366f1';
}

export function getStageLabel(stage: ProjectStage): string {
  const labels: Record<ProjectStage, string> = {
    idea: 'Idée',
    prototype: 'Prototype',
    mvp: 'MVP',
    growth: 'Croissance',
    impact: 'Impact prouvé',
  };
  return labels[stage] || stage;
}

export function getStageColor(stage: ProjectStage): string {
  const colors: Record<ProjectStage, string> = {
    idea: '#94a3b8',
    prototype: '#f59e0b',
    mvp: '#6366f1',
    growth: '#10b981',
    impact: '#fbbf24',
  };
  return colors[stage] || '#6366f1';
}

export function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

export function getRoleLabel(role: string): string {
  const labels: Record<string, string> = {
    dreamer: 'Dreamer',
    maker: 'Dream Maker',
    lover: 'Dream Lover',
    funder: 'Dream Funder',
    admin: 'Administrateur',
  };
  return labels[role] || role;
}

export function getRoleColor(role: string): string {
  const colors: Record<string, string> = {
    dreamer: '#6366f1',
    maker: '#10b981',
    lover: '#ec4899',
    funder: '#f59e0b',
    admin: '#ef4444',
  };
  return colors[role] || '#6366f1';
}

export function getHealthColor(score: number): string {
  if (score >= 80) return '#22c55e';
  if (score >= 60) return '#f59e0b';
  if (score >= 40) return '#f97316';
  return '#ef4444';
}

export function getScoreGradient(score: number): string {
  if (score >= 90) return 'from-emerald-400 to-green-500';
  if (score >= 75) return 'from-blue-400 to-indigo-500';
  if (score >= 60) return 'from-amber-400 to-orange-500';
  return 'from-red-400 to-rose-500';
}

export function timeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return 'Aujourd\'hui';
  if (days === 1) return 'Hier';
  if (days < 7) return `Il y a ${days}j`;
  if (days < 30) return `Il y a ${Math.floor(days / 7)}sem`;
  if (days < 365) return `Il y a ${Math.floor(days / 30)}mois`;
  return `Il y a ${Math.floor(days / 365)}an`;
}
