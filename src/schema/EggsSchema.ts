/* eslint-disable import/prefer-default-export */
export const EggsSchema = {
  name: 'Eggs',
  properties: {
    _id: 'uuid',
    number_of_eggs: 'string',
    owner_id: 'string?',
    status: 'string?',
    date: 'date',
  },
  primaryKey: '_id',
};
