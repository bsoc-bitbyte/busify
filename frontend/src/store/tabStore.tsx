import {create} from 'zustand';

interface StoreState {
  activeTab: number;
  setActiveTab: (value: number) => void;
}
const useStore = create<StoreState>(set => ({
  activeTab: 0,
  setActiveTab: (value: number) => set({activeTab: value}),
}));

export default useStore;
