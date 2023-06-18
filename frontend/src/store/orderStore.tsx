import {create} from 'zustand';

interface OrderStore {
  startingPoint: string;
  endingPoint: string;
  date: string;
  time: string;
  ticketQuantity: number;
  passengerDetail: PassengerDetail[];
  addPassenger: (newRoll: string) => void;
  removePassenger: (rollNumber: string) => void;
}

interface PassengerDetail {
  rollNumber: string;
}

export const useOrderStore = create<OrderStore>(set => ({
  startingPoint: '',
  endingPoint: '',
  date: '',
  time: '',
  ticketQuantity: 0,
  passengerDetail: [],
  addPassenger: newRoll =>
    set(state => ({
      ...state,
      passengerDetail: [...state.passengerDetail, {rollNumber: newRoll}],
    })),
  removePassenger: rollNumber =>
    set(state => ({
      ...state,
      passengerDetail: state.passengerDetail.filter(
        passenger => passenger.rollNumber !== rollNumber
      ),
    })),
}));
