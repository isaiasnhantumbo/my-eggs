import Realm from 'realm';

import {EggsSchema} from '../schema/EggsSchema';

export default function getRealm() {
  return Realm.open({
    path: 'myeggs',
    schema: [EggsSchema],
  });
}
