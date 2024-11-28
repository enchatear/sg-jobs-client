export type FakeJob = {
  id: number;
  type: 'part' | 'full';
  name: string;
  location: string;
  schedule: string;
  payment: string;
  isNew: boolean;
};
