interface BusTicketData {
  checkpoints: string[];
  time: string;
  price: number;
  seatsLeft: number;
}
const TicketData: BusTicketData = {
  checkpoints: ['Nescafe', 'Railway Station', 'Reliance Fresh'],
  time: '3:30 PM',
  price: 20,
  seatsLeft: 45,
};
export {TicketData};
export type {BusTicketData};
