import Rx from 'rxjs/Rx'

import { createSubscriber } from '../utils'

const
//   arrZip = (arr1, arr2, f) => {
//     const
//       count = Math.min(arr1.length, arr2.length),
//       result = []
//
//     for(let i = 0; i < count; i += 1) {
//       result.push(f(arr1[i], arr2[i]))
//     }
//
//     return result
//   },
//
//   arr1 = [ 32, 2, 52, 43, 54 ],
//   arr2 = [ 1, 0, 10, 4, 1, 4, 1, 6, 2, 4 ],

  currentUser$ = new Rx.BehaviorSubject({ 'isLoggedIn': false })

// console.log(arrZip(arr1, arr2, (l, r) => l * r))

// Rx.Observable.range(1, 10)
//   .zip(Rx.Observable.interval(500), (l, r) => `Item: ${l} at ${r * 500}`)
//   .subscribe(createSubscriber('zip'))

// Rx.Observable.interval(1000)
//   .withLatestFrom(Rx.Observable.interval(500))
//   .subscribe(createSubscriber('withLatestFrom'))

// Rx.Observable.interval(1000)
//   .combineLatest(Rx.Observable.interval(500))
//   .take(5)
//   .subscribe(createSubscriber('combineLatest'))

Rx.Observable.interval(1000)
  // .withLatestFrom(currentUser$)
  .combineLatest(currentUser$)
  .filter(([ _, user ]) => user.isLoggedIn)
  .subscribe(createSubscriber('withLatestFrom'))

setTimeout(() => {
  currentUser$.next({ 'isLoggedIn': true })
}, 2500)
