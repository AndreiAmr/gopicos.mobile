import { IUser } from 'src/types/user';
import { create } from 'zustand';
import createSelectors from './createSelectors';

type UserStore = {
  user: IUser | null;
  setUser: (user: IUser) => void;
  clear: () => void;
};

const store = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clear: () => set({ user: null }),
}));

export const userStore = createSelectors(store);
