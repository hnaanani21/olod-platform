'use client';

import { mockAgents } from '@/lib/data';
import type { AgentStatus } from '@/types';

function StatusDot({ status }: { status: AgentStatus['status'] }) {
  if (status === 'running') {
    return (
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
      </span>
    );
  }
  if (status === 'completed') {
    return <span className="w-2.5 h-2.5 rounded-full bg-blue-400 flex-shrink-0" />;
  }
  if (status === 'idle') {
    return <span className="w-2.5 h-2.5 rounded-full bg-slate-500 flex-shrink-0" />;
  }
  return <span className="w-2.5 h-2.5 rounded-full bg-red-400 flex-shrink-0" />;
}

function StatusLabel({ status }: { status: AgentStatus['status'] }) {
  const labels = { running: 'En cours', completed: 'Terminé', idle: 'En attente', error: 'Erreur' };
  const colors = {
    running: 'text-emerald-400',
    completed: 'text-blue-400',
    idle: 'text-slate-500',
    error: 'text-red-400',
  };
  return <span className={`text-xs ${colors[status]}`}>{labels[status]}</span>;
}

export default function AgentStatusPanel() {
  return (
    <div className="glass-card p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-sm flex items-center gap-2">
          <span>🤖</span> Agents IA OLOD
        </h3>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-xs text-emerald-400">Système actif</span>
        </div>
      </div>

      <div className="space-y-3">
        {mockAgents.map((agent) => (
          <div key={agent.name} className="flex items-center gap-3 p-3 rounded-lg bg-white/3 hover:bg-white/5 transition-colors">
            <span className="text-xl w-8 text-center flex-shrink-0">{agent.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-white text-xs font-semibold truncate">{agent.name}</span>
                <StatusDot status={agent.status} />
              </div>
              <div className="text-slate-500 text-xs truncate">{agent.description}</div>
            </div>
            <div className="text-right flex-shrink-0">
              <StatusLabel status={agent.status} />
              <div className="text-slate-600 text-xs mt-0.5">{agent.lastRun}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-slate-500 text-xs">Tâches totales complétées</span>
        <span className="text-indigo-400 font-bold text-sm">
          {mockAgents.reduce((sum, a) => sum + a.tasksCompleted, 0).toLocaleString()}
        </span>
      </div>
    </div>
  );
}
