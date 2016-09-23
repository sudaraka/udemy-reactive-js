import Rx from 'rxjs/Rx'

import { createSubscriber } from '../utils'

Rx.Observable.range(1, 10)
  .do(a => console.log('From do', a))
  .map(a => a * a)
  .subscribe(createSubscriber('do'))

Rx.Observable.range(1, 10)
  .finally(() => console.log('from finally'))
  .map(a => a * 2)
  .subscribe(createSubscriber('finally'))

Rx.Observable.range(1, 10)
  .filter(a => 2 > a || 4 < a)
  .subscribe(createSubscriber('filter'))

Rx.Observable.interval(1000)
  .startWith(-1)
  .subscribe(createSubscriber('interval'))
