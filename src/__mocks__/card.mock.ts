import { Types } from 'mongoose';

export const mockCard = {
  id: new Types.ObjectId('634dcc03c63d72fe8aa81c98'),
  name: 'You',
  number: 0,
  exchangeable: false,
};

export const cardArray = [
  mockCard,
  {
    id: new Types.ObjectId('634dcc03c63d72fe8aa81c99'),
    name: 'Phoenixmon',
    number: 1,
    point: 100,
    price: 2500,
    exchangeable: true,
  },
];
