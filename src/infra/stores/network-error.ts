import { create } from 'zustand';
import createSelectors from './createSelectors';

export enum IntegrationErrorsEnum {
  EXPIRED_TOKEN = 'EXPIRED TOKEN',
  NETWORK_ERROR = 'Network Error',
}

type UserStore = {
  error: IntegrationErrorsEnum | null;
  setError: (error: IntegrationErrorsEnum) => void;
  clear: () => void;
};

const store = create<UserStore>((set) => ({
  error: null,
  setError: (error) => set({ error }),
  clear: () => set({ error: null }),
}));

export const networkErrorStore = createSelectors(store);
