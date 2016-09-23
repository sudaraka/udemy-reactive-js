import Rx from 'rxjs/Rx'

import { createSubscriber } from '../utils'

// Rx.Observable.range(1, 110)
//   .bufferCount(25)
//   .subscribe(createSubscriber('items'))

// Rx.Observable.interval(500)
//   .bufferTime(2000)
//   .subscribe(createSubscriber('bufferTime'))

// Rx.Observable.interval(500)
//   .buffer(Rx.Observable.interval(2000))
//   .subscribe(createSubscriber('buffer'))

// const
//   stopSubject$ = new Rx.Subject()
//
// Rx.Observable.interval(500)
//   .buffer(stopSubject$)
//   .subscribe(createSubscriber('buffer'))
//
// setInterval(() => {
//   stopSubject$.next()
// }, 3000)

Rx.Observable.range(1, 10)
  .merge(Rx.Observable.never())
  .toArray()
  .subscribe(createSubscriber('range'))
