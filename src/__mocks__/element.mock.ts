import { Types } from 'mongoose';

export const mockElement = {
  id: new Types.ObjectId('634dcc03c63d72fe8aa81c98'),
  name: 'Fire',
};

export const elementArray = [
  mockElement,
  {
    id: new Types.ObjectId('634dcc03c63d72fe8aa81c99'),
    name: 'Battle',
  },
];
