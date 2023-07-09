import {Schema} from 'redis-om';

export const orderSchema = new Schema(
  'order',
  {
    id: {
      type: 'string',
      indexed: true,
    },
    userId: {
      type: 'string',
      indexed: true,
    },
    status: {
      type: 'string',
    },
  },
  {
    dataStructure: 'JSON',
  }
);

export const ticketInventorySchema = new Schema(
  'ticketInventory',
  {
    scheduleId: {
      type: 'string',
      indexed: true,
    },
    seatsLeft: {
      type: 'number',
    },
  },
  {
    dataStructure: 'JSON',
  }
);
