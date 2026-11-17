// OLOD Platform Types

export type UserRole = 'dreamer' | 'maker' | 'lover' | 'funder' | 'admin';

export type DreamNation =
  | 'tech'
  | 'art'
  | 'science'
  | 'social'
  | 'education'
  | 'environment'
  | 'health'
  | 'finance'
  | 'culture';

export type ProjectStage =
  | 'idea'
  | 'prototype'
  | 'mvp'
  | 'growth'
  | 'impact';

export interface DreamGenome {
  domain: string;
  impact: number;       // 1–10
  nature: string;
  stage: ProjectStage;
  resources: string[];
  scale: string;
  values: string[];
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  role: UserRole;
  nation: DreamNation;
  oipPoints: number;
  trustScore: number;
  genome?: DreamGenome;
  bio?: string;
  skills?: string[];
  location?: string;
  dreamPages?: DreamPage[];
}

export interface DreamPage {
  id: string;
  title: string;
  tagline: string;
  description: string;
  author: User;
  nation: DreamNation;
  stage: ProjectStage;
  tags: string[];
  healthScore: number;
  oipGenerated: number;
  connections: number;
  coverColor: string;
  createdAt: string;
  updatedAt: string;
  media?: string[];
  genome?: DreamGenome;
}

export interface Match {
  id: string;
  user: User;
  score: number;
  compatibility: number;
  complementarity: number;
  alignment: number;
  explanation: string;
  tags: string[];
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  dreamer: User;
  skills: string[];
  duration: string;
  compensation?: string;
  applicants: number;
  status: 'open' | 'closed' | 'completed';
  nation: DreamNation;
  oipReward: number;
  postedAt: string;
}

export interface OIPTransaction {
  id: string;
  type: 'earned' | 'given' | 'bonus';
  amount: number;
  reason: string;
  from?: User;
  to?: User;
  timestamp: string;
}

export interface AgentStatus {
  name: string;
  status: 'running' | 'idle' | 'completed' | 'error';
  lastRun: string;
  tasksCompleted: number;
  icon: string;
  description: string;
}

export interface DreamNationInfo {
  id: DreamNation;
  label: string;
  emoji: string;
  color: string;
  borderColor: string;
  bgColor: string;
  members: number;
  projects: number;
  description: string;
}

export interface StatsCard {
  label: string;
  value: string | number;
  change: string;
  positive: boolean;
  icon: string;
}
