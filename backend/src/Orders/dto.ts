export type orderDto = {
  id: string;
  amount: number;
  scheduleId: string;
  userId: string;
  status: string;
  receipt: string;
  noOfTickets: number;
  passengerDetails: Array<{
    email: string;
  }>;
};
