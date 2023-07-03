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
