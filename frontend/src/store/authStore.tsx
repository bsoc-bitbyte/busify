import {create} from 'zustand';

interface AuthStore {
  isAuth: boolean;
  user: User | null;
  setIsAuth: (isAuth: boolean) => void;
  setUser: (user: User | null) => void;
}

interface User {
  id: number;
  email: string;
  name: string;
  picture: string;
}

export const useAuthStore = create<AuthStore>(set => ({
  isAuth: false,
  user: null,
  setIsAuth: isAuth => set({isAuth}),
  setUser: user => set({user}),
}));
