import Rx from 'rxjs/Rx'

import { createSubscriber } from '../utils'

// Rx.Observable.interval(500)
//   .take(5)
//   .subscribe(createSubscriber('interval'))

// Rx.Observable.timer(1000, 500)
//   .take(3)
//   .subscribe(createSubscriber('timer'))

Rx.Observable.of('Hello!', 42, 'wow')
  .subscribe(createSubscriber('of'))

Rx.Observable.of([ 'Hello!', 42, 'wow' ])
  .subscribe(createSubscriber('of Array'))

Rx.Observable.from('yo')
  .subscribe(createSubscriber('from'))

Rx.Observable.from([ 'Hello!', 42, new Error('hmm'), 'wow' ])
  .subscribe(createSubscriber('from Array'))

// function * generate() {
//   yield 1
//   yield 5
//   yield 'HEY!!'
// }
//
// Rx.Observable.from(generate())
//   .subscribe(createSubscriber('from generator'))

Rx.Observable.throw(123)
  .subscribe(createSubscriber('throw'))

Rx.Observable.throw(new Error('Argh!'))
  .subscribe(createSubscriber('throw Error'))

Rx.Observable.empty()
  .subscribe(createSubscriber('empty'))

let sideEffect = 0
const defer$ = Rx.Observable.defer(() => {
  sideEffect += 1

  return Rx.Observable.of(sideEffect)
})

defer$.subscribe(createSubscriber('defer$.one'))
defer$.subscribe(createSubscriber('defer$.two'))
defer$.subscribe(createSubscriber('defer$.three'))

Rx.Observable.never()
  .subscribe(createSubscriber('never'))

Rx.Observable.range(10, 30)
  .subscribe(createSubscriber('range'))
