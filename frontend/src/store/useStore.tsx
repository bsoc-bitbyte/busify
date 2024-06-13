import {create} from 'zustand';

const useStore = create(set => ({
  active: 0,
  setActive: value => set({active: value}),
}));

export default useStore;
