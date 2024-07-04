import {create} from 'zustand';

interface AuthStore {
  isAuth: boolean;
  user: User | null;
  isloading: boolean;
  setIsAuth: (isAuth: boolean) => void;
  setUser: (user: User | null) => void;
  setIsLoading: (isloading: boolean) => void;
}

interface User {
  id: number;
  email: string;
  name: string;
  picture: string;
  role: string;
}

export const useAuthStore = create<AuthStore>(set => ({
  isAuth: false,
  user: null,
  isloading: true,
  setIsAuth: isAuth => set({isAuth}),
  setUser: user => set({user}),
  setIsLoading: isloading => set({isloading}),
}));
