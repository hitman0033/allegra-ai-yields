export interface Milestone {
  year: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
}
